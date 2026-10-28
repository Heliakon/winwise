# Changelog

## Unreleased

### Updated

- **How to back up your OS** now covers Windows 11 only and starts with two entry points: **Back up my files** and **Recover Windows**.
- A new table, **Which options keep your personal files?**, shows what each option does to personal files and to apps and settings, and whether Windows must start.
- **Fix problems using Windows Update** and **Reset this PC** have their own sections instead of sitting in a collapsed list. Reset this PC explains both entry paths, Keep my files versus Remove everything, and that Cloud download is not a cloud backup.
- A new **Windows 11 installation USB** section replaces the Recovery Drive as the main external recovery option. It covers making the USB (8 GB or larger, erased, x64 media) and its three uses: Repair my PC, reinstalling from inside Windows with Keep personal files and apps, and a clean install, with the removal warning beside the clean install.
- The Recovery Drive is now a short optional note. The BitLocker recovery key is a short note that also mentions Device Encryption on Windows 11 Home.
- System Restore and Point-in-time restore now include their Windows RE restore steps. System images are shorter, with the Backup and Restore (Windows 7) steps moved into a collapsed legacy section that notes deprecated is not the same as removed.
- The OneDrive warning is more precise and mentions OneDrive's Recycle bin and Version history.
- The standalone `index.html` has been rebuilt.

The new sections were written from Microsoft's support documentation but were not re-fetched or tested on a Windows PC for this change. The Windows RE path for Reset this PC (**Troubleshoot → Reset this PC**) should be confirmed on a Windows 11 PC or VM before release.

## v1.5 — October 27, 2026

### Updated

- **How to back up your OS** is now an overview of Windows 11 backup and recovery options. It covers File History, Windows Backup and OneDrive, System Restore, Point-in-time restore, a Recovery Drive with the BitLocker recovery key, and full system images, followed by steps for Windows Recovery Environment.
- Each option shows what it protects, where the copy is stored, what happens to personal files, what it needs, and when it is useful. Warnings sit next to the steps they apply to.
- Point-in-time restore is described as available on supported Windows 11, version 24H2 and later devices, not only 26H2. The 200 GB default-on condition refers to the size of the Windows volume, not its free space.
- The page no longer compares the Winwise JSON backup with a restore point, and it no longer uses script-specific wording. The script builder still explains its own backup and undo features.
- The Volume Shadow Copy (`VSS`) entry explains that VSS coordinates the snapshots used by System Restore and Point-in-time restore, and that not every file backup or cloud sync depends on it. The recommendation to keep it available is unchanged. A new Microsoft source covers both features' use of VSS.
- The visible version is **v1.5**, and the displayed update date is **October 27, 2026**. Generated scripts carry the v1.5 label; their behavior is unchanged.
- The standalone `index.html` has been rebuilt with all changes.

The directory still has **157 entries**, and the builder still offers **28 services** in **12 feature groups**. Apart from `VSS`, service entries were not re-reviewed for this release.

The backup guide was checked against Microsoft documentation on October 27, 2026. Microsoft's sources currently differ on the Point-in-time restore default for organization-managed 26H2 devices, so the guide makes no claim about it. The recovery steps were not tested on a Windows PC.

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
