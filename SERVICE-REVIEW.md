# Service review — October 4, 2026

The 70 existing entries were reviewed for service identity, purpose, consequences of disabling, recommended controls, and script eligibility. The directory now contains **145 entries**, including **75 additions**. This is a documentation and application review; it is not a new Windows execution test or a claim that every service is installed on every PC.

## Coverage added

| Area | Coverage |
| --- | --- |
| Sign-in and input | Current Text Input Management Service; Windows Hello, biometrics, Microsoft accounts, account tokens, and local sessions |
| Apps and servicing | Store licensing and installation, Windows Installer, activation, elevation, app state, update orchestration and servicing |
| Security and diagnostics | Security status services, diagnostic hosts, smart cards, credential warnings, and EFS |
| Networking and hardware | Network profiles, SMB client/server roles, VPN authentication, time, power, device installation, camera permissions, and hotspot controls |
| Backup | File History, software shadow copies, legacy Backup and Restore, and its block-level engine |
| Optional features | Printer notifications, four Xbox services, and the two scanner/image-acquisition services, with feature-specific consequences |
| Per-user services | All 24 names in Microsoft's current per-user service table, including 13 previously missing entries |

Some older features still occur on upgraded installations. Fax, legacy printing, and older input-service names retain availability notes. Retired AllJoyn and Maps-related components were checked against Microsoft's removal/deprecation lists rather than presented as universal current Windows 11 disable candidates. OEM, third-party, and separately installed application services remain outside the guide's promised coverage. The local inventory command shows what is actually installed.

## Corrections and behavior

- `TextInputManagementService` has its own entry. `TabletInputService` describes the older component instead of presenting both identifiers as one service.
- Defender guidance accounts for Windows-managed behavior when another antivirus product is installed.
- The WMI entry distinguishes the service from the retired WMIC command-line utility.
- New network entries distinguish Windows 11 connectivity detection in Network List Manager from older NLA arrangements.
- `PrintDeviceConfigurationService` explicitly notes that its reference covers the printing stack; its local description and dependencies need to be checked on the installed build.
- Per-user instance names copied from Windows, such as `CloudBackupRestoreSvc_4f9ac`, now find their base entry in search.
- The date is October 4, 2026, and all displayed counts reflect the current directory.

## Script boundary

The builder has **27 opt-in service choices** across **11 feature groups**. `PrintNotify` joins the no-printing group. Four Xbox services have a separate explicit choice whose description covers accessories, sign-in, cloud saves, and networking, including games bought from other stores.

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

Passed: unique service IDs and valid source references; coverage of all 24 per-user names; exclusion of protected services from script generation; agreement between the 27 eligible choices and the PowerShell allowlist; and all Settings-labelled entries having a Settings route.

Browser checks passed in dark and light mode for all 145 rows, category counts, detail dialogs, suffixed-name search, Settings links, and matching category-icon colors. An eight-service printing/Xbox selection was previewed and downloaded, and the three-service conservative preset was checked separately. DiagTrack and Windows Search display their recommended Settings route before the checkbox.

The START count and builder fit at 2560, 1366, and 390 pixels wide after layout settles. Desktop screenshots were reviewed and no JavaScript page errors occurred. The standalone build matches its sources. Windows service changes were not executed during this review.


## Builder follow-up

All directory entries marked conditional were already offered in the builder. The review added the scanner pair as an independent optional feature, rather than treating it as part of printing. The input, device-pairing, Hyper-V integration, backup, and authentication entries retain their existing Keep recommendations; per-user services remain outside the generated script.

The individual picker now places the two Settings-backed choices together, followed by a separate compact service grid. Tall Settings descriptions no longer stretch the rows containing unrelated services. A final unpaired row uses the available width. The recommendation still appears before each DiagTrack or Windows Search checkbox.

Follow-up checks passed in both themes at 2560, 1920, 1366, 1024, and 390 pixels wide, with no horizontal overflow or empty grid rows. Scanner selections stay separate from printing and synchronize between feature cards and individual checkboxes. The two-service scanner script was previewed and downloaded successfully; the conservative preset is unchanged.
