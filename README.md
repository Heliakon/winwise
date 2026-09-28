# Winwise

A guide to Windows 11 services: what each one does, what you gain or lose by turning it off, and a builder that creates a reversible PowerShell script for the services you choose.

**Live site:** https://heliakon.github.io/winwise/

## What's inside

- **70 Windows 11 services** explained in plain language, with privacy and performance tradeoffs, search, filters and sorting.
- **Script builder:** pick the features you don't use and Winwise selects the related services for your script.
- **Safety built in:** every script supports a `-WhatIf` dry run, saves the original settings to a JSON backup before changing anything, and restores them with `-RestoreFrom`. Services that can break boot or sign-in are excluded.
- **Backup guide** for creating a System Restore point first, plus a short list of useful Windows tools.
- Dark and light themes. No build step, no tracking and no cookies: theme and motion preferences stay in your own browser.

## Using a generated script

1. Create a System Restore point named "Before Winwise".
2. Open PowerShell as Administrator in the folder with the script.
3. Preview: `.\Winwise-Services.ps1 -WhatIf`
4. Apply: `.\Winwise-Services.ps1`
5. Undo: `.\Winwise-Services.ps1 -RestoreFrom '.\Winwise-backup-....json'`, using the backup path printed after applying.

The script only changes service startup settings and running state. It downloads nothing, creates no scheduled tasks and leaves security services alone. Read it before you run it: it comes with no warranty (see the license).

## Run it locally

Winwise is plain HTML, CSS and JavaScript. Serve the folder with any static web server, for example:

```
python3 -m http.server 8000
```

On Windows use `py -m http.server 8000`. Then open http://localhost:8000.

Opening `index.html` straight from disk shows the guide, but the script builder needs a server because it loads `script-template.ps1` over HTTP.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure and all sections |
| `services.js` | Service data: descriptions, tradeoffs, risks and Microsoft sources |
| `script-builder.js` | Builds the script from the selected services |
| `script-template.ps1` | The PowerShell template the builder fills in |
| `app.js` | Directory, filters, details dialog and builder interface |
| `intro.js`, `intro.css` | Opening animation |
| `appearance-init.js`, `appearance.js` | Theme and motion settings |
| `theme.css`, `styles.css` | Colours and layout |

## Contributing

Corrections and new services are welcome. Open an issue or a pull request, and link a Microsoft source for any change to what a service does. To report a security problem, see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Damian Machelski
