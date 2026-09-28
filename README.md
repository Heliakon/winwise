# Winwise

A guide to Windows 11 services: what each one does, what you gain or lose by turning it off, and a builder that creates a reversible PowerShell script for the services you choose.

## Use it

- **Online:** https://heliakon.github.io/winwise/
- **Offline:** [download winwise.html](https://github.com/heliakon/winwise/releases/latest/download/winwise.html) and open it in your browser. It's one self-contained file, so there's nothing to install and no internet connection needed.

Every release also has a `winwise.html.sha256` file. To check your download, run this in PowerShell and compare the result with it:

```
Get-FileHash .\winwise.html -Algorithm SHA256
```

## What's inside

- **70 Windows 11 services** explained in plain language, with privacy and performance tradeoffs, search, filters and sorting.
- **Script builder:** pick the features you don't use and Winwise selects the related services for your script.
- **Safety built in:** every script supports a `-WhatIf` dry run, saves the original settings to a JSON backup before changing anything, and restores them with `-RestoreFrom`. Services that can break boot or sign-in are excluded.
- **Backup guide** for creating a System Restore point first, plus a short list of useful Windows tools.
- Dark and light themes. No tracking and no cookies: theme and motion preferences stay in your own browser.

## Using a generated script

1. Create a System Restore point named "Before Winwise".
2. Open PowerShell as Administrator in the folder with the script.
3. Preview: `.\Winwise-Services.ps1 -WhatIf`
4. Apply: `.\Winwise-Services.ps1`
5. Undo: `.\Winwise-Services.ps1 -RestoreFrom '.\Winwise-backup-....json'`, using the backup path printed after applying.

The script only changes service startup settings and running state. It downloads nothing, creates no scheduled tasks and leaves security services alone. Read it before you run it: it comes with no warranty (see the license).

## Project structure

| Path | What it is |
| --- | --- |
| `index.html` | The whole site in one file, built from `src/`. Don't edit it by hand. |
| `src/` | The source files listed below |
| `tools/build.mjs` | Combines `src/` into `index.html`. Node.js only, no dependencies. |
| `.github/workflows/` | Checks that `index.html` matches `src/`, and attaches `winwise.html` to each release |

| File in `src/` | What it does |
| --- | --- |
| `index.html` | Page structure and all sections |
| `services.js` | Service data: descriptions, tradeoffs, risks and Microsoft sources |
| `script-builder.js` | Builds the script from the selected services |
| `script-template.ps1` | The PowerShell template the builder fills in |
| `app.js` | Directory, filters, details dialog and builder interface |
| `intro.js`, `intro.css` | Opening animation |
| `appearance-init.js`, `appearance.js` | Theme and motion settings |
| `theme.css`, `styles.css` | Colours and layout |

## Making changes

1. Edit the files in `src/`.
2. Run `node tools/build.mjs` (Node.js 18 or later).
3. Open `index.html` in your browser to check the change.
4. Commit `src/` and `index.html` together.

GitHub Actions rebuilds `index.html` on every push and pull request and fails if it doesn't match `src/`. While you edit, you can also serve `src/` with any local web server, for example `python3 -m http.server 8000 --directory src`, to see changes without rebuilding.

Corrections and new services are welcome. Open an issue or a pull request, and link a Microsoft source for any change to what a service does. To report a security problem, see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Damian Machelski
