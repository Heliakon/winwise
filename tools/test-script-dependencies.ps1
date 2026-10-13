# Exercises the template's actual ordering and apply/preview code with mock services.
# No Windows services, registry values, or backup files are changed by these tests.
# Compatible with Windows PowerShell 5.1 and PowerShell 7; no test modules required.
[CmdletBinding()]
param([string]$TemplatePath = (Join-Path $PSScriptRoot '../src/script-template.ps1'))

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$template = Get-Content -LiteralPath $TemplatePath -Raw
$tokens = $null
$parseErrors = $null
[void][System.Management.Automation.Language.Parser]::ParseInput($template, [ref]$tokens, [ref]$parseErrors)
if ($parseErrors.Count) { throw ($parseErrors | Out-String) }

# Keep the production elevation requirement and backup code intact. Extract only
# the two sections under test into a function with its own mock command scope.
$orderStart = $template.IndexOf('# Stop selected dependent services before their parent.')
$orderEnd = $template.IndexOf('$backupPath = $null', $orderStart)
$applyStart = $template.IndexOf('$changed = 0', $orderEnd)
if ($orderStart -lt 0 -or $orderEnd -lt 0 -or $applyStart -lt 0) { throw 'Template test sections were not found.' }
$orderCode = $template.Substring($orderStart, $orderEnd - $orderStart)
$applyCode = $template.Substring($applyStart)
$runner = [scriptblock]::Create(@'
[CmdletBinding(SupportsShouldProcess = $true)]
param([hashtable]$Graph, [string[]]$SelectedServices, [hashtable]$snapshots)
$operations = New-Object System.Collections.Generic.List[string]
$backupPath = 'mock-backup-not-written.json'
function Get-Service {
    [CmdletBinding()]
    param([string]$Name)
    if (-not $Graph.ContainsKey($Name)) { throw "Unknown mock service: $Name" }
    return $Graph[$Name]
}
function Stop-Service {
    [CmdletBinding()]
    param([string]$Name)
    $operations.Add("stop:$Name")
    $Graph[$Name].Status = 'Stopped'
}
function Set-Service {
    [CmdletBinding()]
    param([string]$Name, [string]$StartupType)
    $operations.Add("set:$Name")
    $Graph[$Name].StartType = $StartupType
}
function Restore-Startup { throw 'Unexpected restore in dependency-only test.' }
function Restore-RunState { throw 'Unexpected restore in dependency-only test.' }
'@ + "`n" + $orderCode + "`n" + $applyCode + @'

[pscustomobject]@{
    Ordered = @($ordered)
    Previewed = @($previewDisabled.Keys)
    Skipped = $skipped
    Changed = $changed
    Operations = @($operations)
}
'@)

function Invoke-Scenario {
    param([hashtable]$Edges, [string[]]$Selected, [hashtable]$Overrides = @{}, [switch]$Apply)
    $graph = @{}
    foreach ($name in $Edges.Keys) {
        $svc = [pscustomobject]@{Name=$name; StartType='Manual'; Status='Running'; DependentServices=@()}
        $svc | Add-Member -MemberType ScriptMethod -Name WaitForStatus -Value {
            param($Status, $Timeout)
            if ($this.Status -ne $Status) { throw 'Mock service did not reach the requested state.' }
        }
        if ($Overrides.ContainsKey($name)) {
            foreach ($key in $Overrides[$name].Keys) { $svc.$key = $Overrides[$name][$key] }
        }
        $graph[$name] = $svc
    }
    foreach ($name in $Edges.Keys) {
        $graph[$name].DependentServices = @($Edges[$name] | ForEach-Object { $graph[$_] })
    }
    $snapshots = @{}
    foreach ($name in $Selected) {
        # Match eligibility at the boundary of the sections under test.
        if ($graph[$name].StartType -ne 'Disabled' -and @('Running','Stopped') -contains $graph[$name].Status) {
            $snapshots[$name] = [pscustomobject]@{Name=$name; State=$graph[$name].Status; Start=3}
        }
    }
    return (& $runner -Graph $graph -SelectedServices $Selected -snapshots $snapshots -WhatIf:(-not $Apply) -Confirm:$false 3>$null 6>$null)
}
function Assert-Equal($Actual, $Expected, [string]$Because) {
    if (($Actual -join ',') -cne ($Expected -join ',')) {
        throw "$Because. Expected [$($Expected -join ',')]; got [$($Actual -join ',')]."
    }
}
function Assert-Preview($Result, [string[]]$Expected, [int]$Skipped, [string]$Label) {
    Assert-Equal @($Result.Previewed | Sort-Object) @($Expected | Sort-Object) "$Label preview"
    Assert-Equal $Result.Skipped $Skipped "$Label skips"
    Assert-Equal $Result.Changed 0 "$Label changes"
    Assert-Equal $Result.Operations @() "$Label must not call service mutation commands"
}

$chain = @{WSearch=@('workfolderssvc'); workfolderssvc=@()}
$result = Invoke-Scenario $chain @('WSearch','workfolderssvc')
Assert-Equal $result.Ordered @('workfolderssvc','WSearch') 'Dependents must be ordered first'
Assert-Preview $result @('workfolderssvc','WSearch') 0 'Clear selected pair'

$blocked = @{WSearch=@('workfolderssvc'); workfolderssvc=@('External'); External=@()}
$result = Invoke-Scenario $blocked @('WSearch','workfolderssvc')
Assert-Preview $result @() 2 'Selected dependent blocked by an unselected service'

$deep = @{Parent=@('Middle'); Middle=@('Leaf'); Leaf=@('External'); External=@()}
$result = Invoke-Scenario $deep @('Parent','Leaf','Middle')
Assert-Preview $result @() 3 'Blocked state must propagate through every selected level'

$branch = @{Parent=@('Blocked','Clear'); Blocked=@('External'); Clear=@(); External=@()}
$result = Invoke-Scenario $branch @('Parent','Blocked','Clear')
Assert-Preview $result @('Clear') 2 'A clear sibling must not hide a blocked branch'

foreach ($state in @('Running','Stopped')) {
    $result = Invoke-Scenario $chain @('WSearch') @{workfolderssvc=@{StartType='Manual';Status=$state}}
    Assert-Preview $result @() 1 "Unselected enabled dependent ($state)"
}
foreach ($selected in @(@('WSearch'), @('WSearch','workfolderssvc'))) {
    $result = Invoke-Scenario $chain $selected @{workfolderssvc=@{StartType='Disabled';Status='Running'}}
    Assert-Preview $result @() 1 'Disabled but running dependent'
}
$result = Invoke-Scenario $chain @('WSearch') @{workfolderssvc=@{StartType='Disabled';Status='Stopped'}}
Assert-Preview $result @('WSearch') 0 'Disabled and stopped dependent'

$result = Invoke-Scenario $chain @('WSearch','workfolderssvc') @{workfolderssvc=@{Status='StopPending'}}
Assert-Preview $result @() 1 'Selected dependent excluded because it is transitioning'

$result = Invoke-Scenario $chain @('WSearch','workfolderssvc') -Apply
Assert-Equal $result.Operations @('stop:workfolderssvc','set:workfolderssvc','stop:WSearch','set:WSearch') 'Apply must use live states in dependent-first order'
Assert-Equal $result.Changed 2 'Clear apply pair'
Assert-Equal $result.Skipped 0 'Clear apply skips'

$result = Invoke-Scenario $blocked @('WSearch','workfolderssvc') -Apply
Assert-Equal $result.Operations @() 'Blocked apply must not mutate services'
Assert-Equal $result.Skipped 2 'Blocked apply pair'

Write-Output "PASS: 12 dependency scenarios using the template's production code (PowerShell $($PSVersionTable.PSVersion))."
