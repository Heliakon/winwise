#Requires -Version 5.1
#Requires -RunAsAdministrator
<#
Winwise - selected Windows 11 services
Review the selected names and tradeoffs before running on your own PC.
Selecting Windows Search in the builder also selects Work Folders; its file sync stops.
Preview: .\Winwise-Services.ps1 -WhatIf
Apply:   .\Winwise-Services.ps1
Undo:    .\Winwise-Services.ps1 -RestoreFrom '.\Winwise-backup-....json'
Use the exact backup path printed after applying. Keep this script and backup.
No downloads, scheduled tasks, telemetry uploads, or security-service changes.
Only service startup settings and running/stopped state are changed.
Create a Windows System Restore point named "Before Winwise" before applying.
The JSON backup covers selected services only; it is not a full system backup.
Services flagged "Can break boot or sign-in" are excluded from this allowlist.
Restart and test your normal workload afterward.
#>
[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Medium')]
param([string]$RestoreFrom)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
if ([string]::IsNullOrWhiteSpace($PSScriptRoot)) { throw 'Save and run this as a .ps1 file (for example: .\Winwise-Services.ps1).' }
$SelectedServices = @(__SERVICE_NAMES__)
$AllowedServices = @('DiagTrack','RemoteRegistry','SysMain','WSearch','workfolderssvc','Spooler','PrintDeviceConfigurationService','Fax','wisvc','TermService','bthserv','BTAGService','BthAvctpSvc','RetailDemo','UmRdpService','SessionEnv','SSDPSRV','upnphost','fdPHost','FDResPub','WMPNetworkSvc','PrintNotify','XboxGipSvc','XblAuthManager','XblGameSave','XboxNetApiSvc','WiaRpc','stisvc')
$MachineId = (Get-ItemProperty -LiteralPath 'HKLM:\SOFTWARE\Microsoft\Cryptography' -Name MachineGuid).MachineGuid

function Get-ServiceKey([string]$Name) {
    if ($AllowedServices -notcontains $Name) { throw "Service is outside this script's allowlist: $Name" }
    return "HKLM:\SYSTEM\CurrentControlSet\Services\$Name"
}

function Restore-Startup($Record) {
    $key = Get-ServiceKey $Record.Name
    switch ([int]$Record.Start) {
        2 {
            $mode = 'auto'
            if ($Record.DelayedPresent -and [int]$Record.DelayedValue -eq 1) { $mode = 'delayed-auto' }
            $output = & "$env:SystemRoot\System32\sc.exe" config $Record.Name start= $mode 2>&1
            if ($LASTEXITCODE -ne 0) { throw "Could not restore startup: $output" }
        }
        3 { Set-Service -Name $Record.Name -StartupType Manual -ErrorAction Stop }
        4 { Set-Service -Name $Record.Name -StartupType Disabled -ErrorAction Stop }
        default { throw 'Invalid saved startup type.' }
    }
    if ($Record.DelayedPresent) {
        New-ItemProperty -LiteralPath $key -Name DelayedAutoStart -Value ([int]$Record.DelayedValue) -PropertyType DWord -Force -ErrorAction Stop | Out-Null
    } else {
        $current = Get-ItemProperty -LiteralPath $key -ErrorAction Stop
        if ($null -ne $current.PSObject.Properties['DelayedAutoStart']) {
            Remove-ItemProperty -LiteralPath $key -Name DelayedAutoStart -ErrorAction Stop
        }
    }
}

function Restore-RunState($Record) {
    $svc = Get-Service -Name $Record.Name -ErrorAction Stop
    if ($Record.State -eq 'Running' -and $svc.Status -eq 'Stopped') {
        # An originally disabled-but-running service is not included in apply backups.
        Start-Service -Name $Record.Name -ErrorAction Stop
        (Get-Service -Name $Record.Name).WaitForStatus('Running', [TimeSpan]::FromSeconds(20))
    } elseif ($Record.State -eq 'Stopped' -and $svc.Status -eq 'Running') {
        # Without -Force, Stop-Service refuses to stop running dependents.
        Stop-Service -Name $Record.Name -ErrorAction Stop
        $svc.WaitForStatus('Stopped', [TimeSpan]::FromSeconds(20))
    }
}

if ($RestoreFrom) {
    $backup = Get-Content -LiteralPath $RestoreFrom -Raw -ErrorAction Stop | ConvertFrom-Json -ErrorAction Stop
    if ($backup.Format -ne 'Winwise-ServiceBackup' -or $backup.Schema -ne 1) { throw 'Unrecognized backup format.' }
    if ($backup.MachineId -ne $MachineId) { throw 'This backup belongs to another Windows installation.' }
    $records = @($backup.Services)
    if ($records.Count -eq 0) { throw 'The backup has no service records.' }
    $unique = @{}
    # Validate the entire file before changing any service.
    foreach ($record in $records) {
        if ($AllowedServices -notcontains $record.Name) { throw "Backup contains a service outside the allowlist: $($record.Name)" }
        if ($unique.ContainsKey([string]$record.Name)) { throw 'Backup contains duplicate services.' }
        $unique[[string]$record.Name] = $true
        if (@(2,3) -notcontains [int]$record.Start) { throw 'Invalid original startup value.' }
        if (@('Running','Stopped') -notcontains [string]$record.State) { throw 'Invalid original running state.' }
        if ($record.DelayedPresent -isnot [bool] -or @(0,1) -notcontains [int]$record.DelayedValue) { throw 'Invalid delayed-start value.' }
    }
    $ready = New-Object System.Collections.Generic.List[object]
    $restoreFailures = 0
    # Restore all startup configurations before attempting to restart dependencies.
    foreach ($record in $records) {
        if ($PSCmdlet.ShouldProcess($record.Name, 'Restore startup configuration and previous running state')) {
            try {
                Restore-Startup $record
                $ready.Add($record)
            } catch {
                $restoreFailures++
                Write-Warning ("Could not restore {0}: {1}" -f $record.Name, $_.Exception.Message)
            }
        }
    }
    foreach ($record in $ready) {
        try {
            Restore-RunState $record
            Write-Host ("Restored {0}" -f $record.Name) -ForegroundColor Green
        } catch {
            $restoreFailures++
            Write-Warning ("Startup restored for {0}; running state needs attention: {1}" -f $record.Name, $_.Exception.Message)
        }
    }
    if (-not $WhatIfPreference) {
        Write-Host 'Restore pass complete. Read any warnings, restart Windows, and test affected features.'
        if ($restoreFailures -gt 0) { throw "$restoreFailures restore operation(s) need attention. Keep the backup and retry after resolving the reported issue." }
    }
    return
}

if ($SelectedServices.Count -eq 0) { throw 'No services were selected. Generate a script with at least one selection.' }
foreach ($name in $SelectedServices) {
    if ($AllowedServices -notcontains $name) { throw "Unsupported service selection: $name" }
}

# Avoid cutting off an interactive remote session, including RDP via session name.
if ($SelectedServices -contains 'TermService' -or $SelectedServices -contains 'UmRdpService' -or $SelectedServices -contains 'SessionEnv') {
    $sender = Get-Variable -Name PSSenderInfo -ErrorAction SilentlyContinue
    if (($env:SESSIONNAME -like 'RDP-*') -or ($null -ne $sender -and $null -ne $sender.Value)) {
        throw 'Run this selection locally at the PC, not through a remote session.'
    }
}

$snapshots = @{}
foreach ($name in $SelectedServices) {
    try {
        $found = @(Get-Service -Name $name -ErrorAction SilentlyContinue)
        if ($found.Count -eq 0) { Write-Host "Not installed; skipped: $name"; continue }
        $svc = $found[0]
        $reg = Get-ItemProperty -LiteralPath (Get-ServiceKey $name) -ErrorAction Stop
        if ([int]$reg.Start -eq 4) { Write-Host "Already disabled; unchanged: $name"; continue }
        if (@(2,3) -notcontains [int]$reg.Start) { Write-Warning "Unsupported startup type; skipped: $name"; continue }
        if (@('Running','Stopped') -notcontains [string]$svc.Status) { Write-Warning "Service is transitioning; skipped: $name"; continue }
        $delayPresent = $null -ne $reg.PSObject.Properties['DelayedAutoStart']
        $delayValue = 0
        if ($delayPresent) { $delayValue = [int]$reg.DelayedAutoStart }
        if (@(0,1) -notcontains $delayValue) { Write-Warning "Unrecognized delayed-start setting; skipped: $name"; continue }
        $snapshots[$name] = [pscustomobject]@{
            Name = $name
            Start = [int]$reg.Start
            DelayedPresent = $delayPresent
            DelayedValue = $delayValue
            State = [string]$svc.Status
        }
    } catch {
        Write-Warning ("Could not inspect {0}; skipped: {1}" -f $name, $_.Exception.Message)
    }
}
if ($snapshots.Count -eq 0) { Write-Host 'No eligible services need a change. No new backup was created.'; return }

# Stop selected dependent services before their parent. Never force-stop dependents.
$ordered = New-Object System.Collections.Generic.List[string]
$visited = @{}
function Add-DisableOrder([string]$Name) {
    if ($visited.ContainsKey($Name)) { return }
    $visited[$Name] = $true
    $svc = Get-Service -Name $Name -ErrorAction Stop
    foreach ($dependent in $svc.DependentServices) {
        if ($snapshots.ContainsKey($dependent.Name)) { Add-DisableOrder $dependent.Name }
    }
    $ordered.Add($Name)
}
foreach ($name in $SelectedServices) {
    if ($snapshots.ContainsKey($name)) { Add-DisableOrder $name }
}

$backupPath = $null
if (-not $WhatIfPreference) {
    $suffix = [guid]::NewGuid().ToString('N').Substring(0,8)
    $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $backupPath = Join-Path $PSScriptRoot "Winwise-backup-$stamp-$suffix.json"
    $backup = [ordered]@{
        Format = 'Winwise-ServiceBackup'
        Schema = 1
        MachineId = $MachineId
        ComputerName = $env:COMPUTERNAME
        CreatedAt = (Get-Date).ToString('o')
        Services = @($ordered | ForEach-Object { $snapshots[$_] })
    }
    # This must succeed before any service changes. Each run creates a new file.
    $backup | ConvertTo-Json -Depth 5 | Out-File -LiteralPath $backupPath -Encoding utf8 -NoClobber -ErrorAction Stop
    Write-Host "Original settings saved: $backupPath" -ForegroundColor Cyan
}

$changed = 0
$skipped = 0
$failed = 0
foreach ($name in $ordered) {
    $approved = $false
    try {
        $svc = Get-Service -Name $name -ErrorAction Stop
        $blockers = @($svc.DependentServices | Where-Object {
            # Disabled services can still be running until stopped or restarted.
            ($_.StartType -ne 'Disabled' -or $_.Status -ne 'Stopped') -and -not ($WhatIfPreference -and $snapshots.ContainsKey($_.Name))
        })
        if ($blockers.Count -gt 0) {
            $skipped++
            Write-Warning ("Skipped {0}: enabled or active dependent services: {1}" -f $name, (($blockers | ForEach-Object { $_.Name }) -join ', '))
            continue
        }
        if ($PSCmdlet.ShouldProcess($name, 'Stop service and set startup type to Disabled')) {
            $approved = $true
            if ($svc.Status -ne 'Stopped') {
                # Keep this dependency check at the stop itself, even after preflight.
                Stop-Service -Name $name -ErrorAction Stop
                $svc.WaitForStatus('Stopped', [TimeSpan]::FromSeconds(20))
            }
            Set-Service -Name $name -StartupType Disabled -ErrorAction Stop
            $changed++
            Write-Host "Disabled: $name" -ForegroundColor Green
        }
    } catch {
        $failed++
        Write-Warning ("Failed {0}: {1}" -f $name, $_.Exception.Message)
        if ($approved) {
            try {
                Restore-Startup $snapshots[$name]
                Restore-RunState $snapshots[$name]
                Write-Host "Original settings restored for failed change: $name"
            } catch {
                Write-Warning ("Automatic undo failed for {0}. Use the saved backup: {1}" -f $name, $_.Exception.Message)
            }
        }
    }
}

if ($WhatIfPreference) {
    Write-Host 'Preview only: no settings changed and no backup written. Dependency results can change before the real run.'
} else {
    Write-Host "Completed: $changed changed; $skipped skipped; $failed failed. Read warnings above."
    Write-Host 'Undo with this script and the exact backup file:'
    Write-Host ('& "{0}" -RestoreFrom "{1}"' -f $PSCommandPath, $backupPath) -ForegroundColor Cyan
    Write-Host 'Keep your first backup. Later runs can reflect settings already changed by an earlier run.'
    Write-Host 'Restart Windows and compare the same workload. Updates or device policies may reset services.'
}
if ($failed -gt 0) { throw "$failed service change(s) failed. Review warnings and the backup path above." }
