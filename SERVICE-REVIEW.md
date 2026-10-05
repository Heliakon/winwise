# Service review — October 4, 2026; updated October 5

The 70 existing entries were reviewed for service identity, purpose, consequences of disabling, recommended controls, and script eligibility. With the Work Folders follow-up, the directory now contains **146 entries**, including **76 additions**. This is a documentation and application review; it is not a new Windows execution test or a claim that every service is installed on every PC.

## Coverage added

| Area | Coverage |
| --- | --- |
| Sign-in and input | Current Text Input Management Service; Windows Hello, biometrics, Microsoft accounts, account tokens, and local sessions |
| Apps and servicing | Store licensing and installation, Windows Installer, activation, elevation, app state, update orchestration and servicing |
| Security and diagnostics | Security status services, diagnostic hosts, smart cards, credential warnings, and EFS |
| Networking and hardware | Network profiles, SMB client/server roles, VPN authentication, time, power, device installation, camera permissions, and hotspot controls |
| Backup | File History, software shadow copies, legacy Backup and Restore, and its block-level engine |
| Optional features | Printer notifications, four Xbox services, the two scanner/image-acquisition services, and Work Folders, with feature-specific consequences |
| Per-user services | All 24 names in Microsoft's current per-user service table, including 13 previously missing entries |

Some older features still occur on upgraded installations. Fax, legacy printing, and older input-service names retain availability notes. Retired AllJoyn and Maps-related components were checked against Microsoft's removal/deprecation lists rather than presented as universal current Windows 11 disable candidates. OEM, third-party, and separately installed application services remain outside the guide's promised coverage. The local inventory command shows what is actually installed.

## Corrections and behavior

- `TextInputManagementService` has its own entry. `TabletInputService` describes the older component instead of presenting both identifiers as one service.
- Defender guidance accounts for Windows-managed behavior when another antivirus product is installed.
- The WMI entry distinguishes the service from the retired WMIC command-line utility.
- New network entries distinguish Windows 11 connectivity detection in Network List Manager from older NLA arrangements.
- `PrintDeviceConfigurationService` explicitly notes that its reference covers the printing stack; its local description and dependencies need to be checked on the installed build.
- Per-user instance names copied from Windows, such as `CloudBackupRestoreSvc_4f9ac`, now find their base entry in search.
- The displayed update date is October 5, 2026, and all displayed counts reflect the current directory.

## Script boundary

The builder has **28 opt-in service choices** across **12 feature groups**, including the Work Folders follow-up below. `PrintNotify` joins the no-printing group. Four Xbox services have a separate explicit choice whose description covers accessories, sign-in, cloud saves, and networking, including games bought from other stores.

The separate scanner choice selects `WiaRpc` and `stisvc` only when scanning and camera-import workflows are unused. Printing alone does not select them. Their roles are documented in [Microsoft’s WIA architecture overview](https://learn.microsoft.com/en-us/windows-hardware/drivers/image/wia-architecture-overview) and the system-service reference.

The conservative preset remains `RemoteRegistry`, `Fax`, and `RetailDemo`. Per-user services, services marked Keep, essential services, and entries with boot/sign-in risks cannot be selected. Settings recommendations still appear before the DiagTrack and Windows Search disable checkboxes. The PowerShell allowlist matches the eligible directory IDs.

Existing script behavior is retained: `Stop-Service` without `-Force`, dependency checks, backup before changes, restore support, and the clear message when the script is pasted instead of run from a file.

## References and interpretation

Entry-specific links are in `src/services.js` and each service's details. Principal references for this review:

- [Microsoft system-service reference](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/optimize/services)
- [Per-user services in Windows](https://learn.microsoft.com/en-us/windows/application-management/per-user-services-in-windows)
- [Text input and IME troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/windows-client/shell-experience/troubleshoot-ime-common-issues)
- [Windows Hello authentication](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/how-it-works)
- [Windows Security service roles](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/windows-defender-security-center)
- [Defender compatibility](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-compatibility)
- [Windows Update workflow](https://learn.microsoft.com/en-us/windows/deployment/update/how-windows-update-works)
- [Network connectivity detection](https://learn.microsoft.com/en-us/windows-server/networking/ncsi/ncsi-overview)
- [Windows Settings links](https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-settings)
- [Removed features](https://learn.microsoft.com/en-us/windows/whats-new/removed-features) and [deprecated features](https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features)

Microsoft's IoT and Server documents inform service roles; their disable recommendations and startup defaults are not copied into a general-purpose desktop preset. Conditional recommendations and risk assessments are Winwise's editorial judgments. Display names, settings pages, and component availability can vary by build and edition.

## Validation

Passed: unique service IDs and valid source references; coverage of all 24 per-user names; exclusion of protected services from script generation; agreement between the eligible choices and the PowerShell allowlist (28 after the follow-up); and all Settings-labelled entries having a Settings route.

The October 4 browser checks passed in dark and light mode for all 145 rows, category counts, detail dialogs, suffixed-name search, Settings links, and matching category-icon colors. An eight-service printing/Xbox selection was previewed and downloaded, and the three-service conservative preset was checked separately. DiagTrack and Windows Search display their recommended Settings route before the checkbox.

The START count and builder fit at 2560, 1366, and 390 pixels wide after layout settles. Desktop screenshots were reviewed and no JavaScript page errors occurred. The standalone build matches its sources. Windows service changes were not executed during this review.


## Builder follow-up

All directory entries marked conditional were already offered in the builder. The review added the scanner pair as an independent optional feature, rather than treating it as part of printing. The input, device-pairing, Hyper-V integration, backup, and authentication entries retain their existing Keep recommendations; per-user services remain outside the generated script.

The individual picker now places the two Settings-backed choices together, followed by a separate compact service grid. Tall Settings descriptions no longer stretch the rows containing unrelated services. A final unpaired row uses the available width. The recommendation still appears before each DiagTrack or Windows Search checkbox.

Follow-up checks passed in both themes at 2560, 1920, 1366, 1024, and 390 pixels wide, with no horizontal overflow or empty grid rows. Scanner selections stay separate from printing and synchronize between feature cards and individual checkboxes. The two-service scanner script was previewed and downloaded successfully; the conservative preset is unchanged.

## Search follow-up

Search now removes a trailing hexadecimal per-user suffix from either a service ID or a display name. This fixes display names copied from Services, such as `Clipboard User Service_4f9ac`. The Game DVR entry also accepts `GameDVR`, including the complete `GameDVR and Broadcast User Service_4f9ac` display name.

All 145 directory IDs present at that review were checked: none contains an underscore. Unsuffixed IDs and display names passed 290 checks; the 24 per-user entries passed 432 additional checks using suffixed IDs and display names with varied case and whitespace. The normalization applies only to search queries, and that change did not alter the script allowlist.

## Work Folders and instructions follow-up — October 5, 2026

Added `workfolderssvc` (Work Folders) to the directory and builder. It synchronizes files with an organization's Work Folders server and is separate from OneDrive. Its disable option is conditional on not using that feature. The entry points to Control Panel → System and Security → Work Folders and [Microsoft's Work Folders overview](https://learn.microsoft.com/en-us/windows-server/storage/work-folders/work-folders-overview), which applies to Windows 11. The Windows 10 defaults in the supplied third-party article and the specialized defaults in Microsoft's IoT table are not presented as universal Windows 11 defaults.

The reported `WSearch` warning identified Work Folders as an enabled or active dependent on the user's PC. Selecting Windows Search now visibly includes Work Folders, with the file-sync consequence stated before selection. Removing Windows Search also removes an automatically included Work Folders choice; a separately selected Work Folders choice is retained. Work Folders can also be selected on its own.

The generated selection lists Work Folders before Windows Search. The existing PowerShell code additionally determines the disable order from the PC's live dependent-service relationships. Both selected services are included in the pre-change backup when installed and eligible for changes. Missing and already-disabled services are still skipped. Other enabled or active dependents still block a change, including an already-disabled service that remains running; no force-stop or automatic disabling of unknown dependents was introduced. Restore behavior is unchanged.

The run instructions explain that, if **Execution Policy Change** appears, the user can type **Y** and press **Enter**. `-Scope Process` applies until that PowerShell session closes, rather than to a single script invocation; it does not override organization policy. See [Microsoft's execution-policy documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies). The **How to run & undo** button is purple with larger text, and the change guide now links to these instructions beside **Open the script builder**.

Validation passed for all 146 unique entries, all 28 eligible script choices, the matching PowerShell allowlist, and rejection of all 118 excluded entries. Browser checks covered automatic and explicit Work Folders selections, removal and clear behavior, the unchanged preset, service-detail routes, a two-service preview and downloaded script, recommended Settings paths before checkboxes, and the new instruction link and styling in both themes. The 390-pixel layout had no horizontal overflow and no JavaScript page errors occurred. Existing Clipboard and GameDVR suffixed-name searches still passed. The standalone build matches its sources. Windows service changes were not executed during this follow-up.
