# Changelog

## v1.4 — October 10, 2026

### Added

- Eleven directory entries, bringing the total to **157**: System Monitor (`Sysmon`), Windows MIDI Service (`MidiSrv`), App Readiness, Application Identity, Background Tasks Infrastructure Service, CoreMessaging, System Events Broker, Time Broker, CNG Key Isolation, Network Connection Broker, and Windows Event Collector.
- Guidance for built-in Sysmon and Windows MIDI Services, including their availability and the consequences of interrupting their work. These features arrived through 2026 updates and are not exclusive to 26H2.
- A documented connection between `CDPUserSvc` and Network Connection Broker (`NcbService`).
- Regression checks for service data, script selections, and dependency handling. GitHub Actions runs the dependency checks with mock services under PowerShell 7 and Windows PowerShell 5.1.

### Fixed

- The `-WhatIf` preview now propagates blocked dependencies through the selected service chain. Selecting a dependent no longer makes its parent appear eligible when another service blocks that dependent. The actual apply pass continues to inspect live service state.
- The run instructions now use a full folder path copied from File Explorer. They no longer assume that an elevated PowerShell window's `$env:USERPROFILE` points to the user's Downloads folder, which can be incorrect with Administrator protection.

### Updated

- Windows Search guidance now includes reviewing automatic indexing of frequently used folders, where that control is available.
- The visible version is **v1.4**, and the displayed update date is **October 10, 2026**.
- The standalone `index.html` has been rebuilt with all changes.

The builder still offers **28 services** in **12 feature groups**. The new directory entries are excluded from generated scripts. Windows Search still includes Work Folders, and the three-service conservative preset is unchanged.

Validation covers the data, generated scripts, dependency logic with mocked services, and the browser interface. This release does not claim a complete Windows 11 26H2 service inventory or execution testing against live Windows services. See [SERVICE-REVIEW.md](SERVICE-REVIEW.md) for details.
