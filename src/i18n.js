'use strict';
// Language order: a saved manual choice, then the browser's preference list, then English.
// Only a manual choice is saved, so a later change of browser language is still detected.
const SUPPORTED_LANGUAGES = new Set(['en', 'pl', 'sv']);
const DEFAULT_LANGUAGE = 'en';
const LANGUAGE_STORAGE_KEY = 'winwise.language';

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;
  const preferences = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const locale of preferences) {
    if (typeof locale !== 'string') continue;
    const language = locale.trim().toLowerCase().split(/[-_]/)[0];
    if (SUPPORTED_LANGUAGES.has(language)) return language;
  }
  return DEFAULT_LANGUAGE;
}

function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.has(saved)) return saved;
  } catch { /* Without storage, the browser's preferences decide. */ }
  return detectBrowserLanguage();
}

function rememberLanguage(language) {
  if (!SUPPORTED_LANGUAGES.has(language)) return;
  try { window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch { /* Switching still works until the page is reloaded. */ }
}

// English interface text. Values may contain trusted HTML; {name} marks a value filled in by the code.
// An object value holds plural forms, chosen with Intl.PluralRules.
const UI_EN = {
  'meta.description': 'Explore Windows 11 services and useful tools, understand privacy and performance tradeoffs, and build a PowerShell script with backup and restore instructions.',
  'title.directory': 'Winwise — Windows 11 service guide',
  'title.builder': 'PowerShell script builder — Winwise',
  'title.tools': 'Useful Windows 11 tools — Winwise',
  'title.backup': 'Windows 11 backup options — Winwise',
  'title.repair': 'Windows 11 repair options — Winwise',
  'skip.directory': 'Skip to services',
  'skip.builder': 'Skip to script builder',
  'skip.tools': 'Skip to useful tools',
  'skip.backup': 'Skip to backup options',
  'skip.repair': 'Skip to repair options',
  'category.all.name': 'All services',
  'category.all.description': 'The useful candidates, the tradeoffs, and the essentials to leave alone.',
  'category.privacy.name': 'Privacy & telemetry',
  'category.privacy.description': 'Control data collection and connected features through settings first.',
  'category.performance.name': 'Performance',
  'category.performance.description': 'Review indexing, caching, downloads, and game recording.',
  'category.optional.name': 'Optional features',
  'category.optional.description': 'Disable a feature only when you understand it and do not use it.',
  'category.essential.name': 'Essentials',
  'category.essential.description': 'Preserve security, updates, connectivity, and the core Windows experience.',
  'status.conditional': 'Can disable if unused',
  'status.settings': 'Use Windows Settings',
  'status.keep': 'Keep enabled',
  'risk.badge': 'Can break boot or sign-in',
  'risk.defaultCondition': 'A critical Windows dependency',
  'risk.excluded': 'Excluded from the script builder.',
  'settings.heading': 'Change the feature in Windows Settings',
  'settings.open': 'Open Windows Settings',
  'settings.note': 'Open this link on your Windows PC. If the browser does not open Settings, follow the path above; labels vary by Windows build.',
  'settings.builderNote': 'A service-level change is also available as an explicit opt-in in the builder. Review its wider effects first.',
  'directory.resultCount': 'Showing <b>{shown}</b> of {total} services',
  'row.risk': 'Can break boot or sign-in.',
  'row.viewDetails': 'View details',
  'dialog.serviceDetails': 'SERVICE DETAILS',
  'details.copyName': 'Copy service name',
  'details.checkBuild': 'Check your Windows build',
  'details.when': 'When to consider a change',
  'details.changes': 'What changes',
  'details.recommendation': 'Our recommendation',
  'details.perUserHeading': 'This is a per-user service',
  'details.perUserText': 'Windows adds a session suffix to this service name. These services are not included in generated scripts; use the feature settings instead.',
  'details.configHeading': 'Check your PC’s current configuration',
  'details.configText': 'Startup defaults vary by build and installed features. “Manual” may mean Windows starts it on demand. Check its Dependencies tab before changing anything.',
  'details.selectedOpenBuilder': 'Selected — open builder',
  'details.addToScript': 'Add to my script',
  'details.reference': 'Microsoft reference',
  'details.howToChange': 'How to change &amp; restore',
  'copy.command': 'Copy command',
  'copy.script': 'Copy script',
  'copy.done': 'Copied',
  'restorePoint.prefix': 'Create a restore point first →',
  'restorePoint.link': 'How to create a restore point',
  'guide.eyebrow': 'CHANGE GUIDE',
  'guide.title': 'Make a change you can undo.',
  'guide.lead': 'Use the Script builder to choose services and download a PowerShell script that applies your changes automatically when you run it. The script saves the original settings and includes a restore option.',
  'guide.openBuilder': 'Open the script builder',
  'guide.runUndo': 'How to run &amp; undo',
  'guide.manualHeading': 'Prefer to make changes manually?',
  'guide.step1.title': 'Record your starting point',
  'guide.step1.text': 'Press Win + R, enter <code>services.msc</code>, and open the service. Record its startup type, delayed-start setting, and running state. Check the Dependencies tab. Back up important files before troubleshooting.',
  'guide.step2.title': 'Prefer the feature’s own setting',
  'guide.step2.text': 'Use Windows Settings for diagnostic data, location, indexing scope, and game captures. A stopped service may already be using no meaningful resources.',
  'guide.step3.title': 'Disable an unused optional service',
  'guide.step3.text': 'Choose Disabled and stop the service. Keep essential services at their existing defaults.',
  'guide.step4.title': 'Use your PC normally',
  'guide.step4.text': 'See whether your usual apps and devices work as expected. If a feature you need stops working, restore the startup type you recorded, start the service if it was running, and restart Windows if needed.',
  'guide.automatic.title': 'Automatic',
  'guide.automatic.text': 'Starts with Windows, sometimes after a delay.',
  'guide.manual.title': 'Manual',
  'guide.manual.text': 'Can start when Windows or an app needs it.',
  'guide.disabled.title': 'Disabled',
  'guide.disabled.text': 'Cannot start until the setting is changed.',
  'guide.managedHeading': 'On a managed work PC',
  'guide.managedText': 'Follow your organization’s device policy. The generator is intended for changes you are authorized to make.',
  'sources.eyebrow': 'SCOPE & SOURCES',
  'sources.title': 'The scope behind the advice.',
  'sources.lead': '{count} reviewed service entries, including common disable candidates and essential services. This is a curated guide, not an exhaustive inventory of every Windows installation.',
  'inventory.eyebrow': 'LOCAL SERVICE INVENTORY',
  'inventory.title': 'See what’s on your PC.',
  'inventory.lead': 'Open Windows PowerShell and run this read-only command to list your installed services and current startup modes.',
  'inventory.matchHeading': 'Match the service name',
  'inventory.matchText': 'Use the Name column to search this directory. Per-user instances add a suffix. Services not covered here should remain at their existing defaults until you identify their role and dependencies.',
  'inventory.note': 'This command displays information locally. It changes no settings and uploads nothing.',
  'run.eyebrow': 'POWERSHELL INSTRUCTIONS',
  'run.title': 'Run, review, and undo.',
  'run.lead': 'The download is a readable script for Windows PowerShell 5.1 or later. Inspect it and start with a dry run on your PC.',
  'run.step1.title': 'Save and inspect the script',
  'run.step1.text': 'Download <code>Winwise-Services.ps1</code>. Open it in a text editor and review <code>$SelectedServices</code>. Keep the file in a folder you can find again.',
  'run.step2.title': 'Open PowerShell as administrator',
  'run.step2.text': 'In File Explorer, open the folder containing the downloaded script and copy its full path from the address bar. Search for Windows PowerShell, right-click, and select Run as administrator. Replace the example folder below with the path you copied:',
  'run.step2.note': 'Use the actual folder, including a redirected or custom Downloads location. With Administrator protection enabled, an elevated window can use a separate profile, so <code>$env:USERPROFILE</code> may not point to your downloads.',
  'run.step3.title': 'Allow the reviewed file in this session',
  'run.step3.text': 'If Windows blocks the downloaded file, unblock this file after reviewing it. RemoteSigned below applies only to the current PowerShell process. It cannot override organization policy.',
  'run.step3.note': 'If the <strong>Execution Policy Change</strong> confirmation appears, type <kbd>Y</kbd> and press <kbd>Enter</kbd>. This allows the policy change for the current PowerShell session, until you close this window. You can preview, apply, and undo in the same session; a new window may need these commands again.',
  'run.step4.title': 'Preview before applying',
  'run.step4.text': 'The preview reports intended changes without stopping services or writing a backup. Missing, disabled, or blocked services may be skipped.',
  'run.step5.title': 'Apply, then test',
  'run.step5.text': 'Run locally at the PC, especially for Remote Desktop selections. The script writes a new backup beside itself before any changes. Read warnings and keep the printed backup path. Restart and test your normal apps.',
  'run.step6.title': 'Restore your previous settings',
  'run.step6.text': 'Use the same script and the exact backup filename printed by your run. Replace the example below. Startup settings are restored first; the script then attempts the previous running or stopped state. Read warnings and restart if needed.',
  'run.backupHeading': 'Keep the first backup',
  'run.backupText': 'Each apply run writes a separate backup. A later backup can contain settings already changed by an earlier run. The JSON is a service-settings snapshot, not a full system backup. Do not edit it or use a file from another PC.',
  'run.docs': 'PowerShell service documentation',
  'feature.eyebrow': 'SERVICES IN THIS CHOICE',
  'feature.lead': {one: 'This choice includes {n} service. Open any service to review what it does and what you may lose.', other: 'This choice includes {n} services. Open any service to review what it does and what you may lose.'},
  'builder.settingsFirst': 'Recommended first: Windows Settings',
  'builder.sysmain.title': 'Try disabling SysMain',
  'builder.sysmain.text': 'For troubleshooting persistent SysMain activity. App launches may become slower.',
  'builder.wsearch.title': 'Disable Windows Search and Work Folders',
  'builder.wsearch.text': 'I accept slower or incomplete indexed file and classic Outlook searches. Work Folders is also selected and its organizational file sync stops; choose this only if you do not use it.',
  'builder.diagtrack.title': 'Disable DiagTrack instead',
  'builder.diagtrack.text': 'I accept disabling this diagnostic component. Error reporting and apps have separate controls.',
  'builder.readMore': 'Read more',
  'builder.alsoSelects': 'Also selects {names}; its organizational file sync stops.',
  'builder.disableInstead': 'Disable service instead: ',
  'builder.settingsGroup': 'Services with recommended Windows Settings',
  'builder.label': 'YOUR PC. YOUR CHOICES.',
  'builder.title': 'Build your PowerShell script<span>.</span>',
  'builder.lead': 'Choose a configuration with simple clicks, review every service, then download a reversible PowerShell script.',
  'builder.back': '← Back to directory',
  'builder.presetTitle': 'A conservative starting point',
  'builder.presetText': 'Remote registry, fax, and retail demo. Review these assumptions first; they may already be off.',
  'builder.usePreset': 'Use preset',
  'builder.step1.title': 'What don’t you use?',
  'builder.step1.text': 'Click the options that match this PC. Winwise selects the related services for your script.',
  'builder.serviceCount': {one: '{n} service', other: '{n} services'},
  'builder.serviceCountView': {one: '{n} service · View', other: '{n} services · View'},
  'builder.serviceCountLabel': {one: 'View the {n} service included in {title}', other: 'View the {n} services included in {title}'},
  'builder.step2.title': 'Consider the tradeoffs',
  'builder.step2.text': 'Try the recommended Settings route first. Disabling a service is an explicit opt-in, outside the conservative preset.',
  'builder.pickerSummary': 'Choose individual services',
  'builder.pickerCount': '{n} available',
  'builder.pickerText': 'Fine-tune the selection. Click Read more to see the same tradeoffs and recommendation shown in the service directory.',
  'builder.boundary': 'Services marked “Can break boot or sign-in” are not included in this script builder. Security, updates, other core Windows services, and per-user service templates are also excluded.',
  'builder.summaryTitle': '03 · REVIEW &amp; DOWNLOAD',
  'builder.selection': 'Your selection',
  'builder.clear': 'Clear',
  'builder.dryRun': 'Dry run with <code>-WhatIf</code>',
  'builder.savedFirst': 'Original settings saved first',
  'builder.restore': 'Restore from your backup',
  'builder.download': 'Download PowerShell',
  'builder.preview': 'Preview the script',
  'builder.runUndo': 'How to run &amp; undo',
  'builder.expectation': 'The script skips missing or already-disabled services and avoids force-stopping dependent services.',
  'builder.featuresIntro': 'Every generated script has these safety features built in:',
  'builder.includedWithKeep': 'Included with {names}. Remove that selection first to keep this service.',
  'builder.includedWith': 'Included with {names}',
  'builder.selectedCount': {one: '<strong>{n}</strong> service selected', other: '<strong>{n}</strong> services selected'},
  'builder.removeFirst': 'Remove {parents} first to keep {name}',
  'builder.remove': 'Remove {name}',
  'builder.empty': 'Start with the features you don’t use, or choose the conservative preset.',
  'builder.templateError': 'The script could not be loaded. Reload the page to try again.',
  'builder.templateLoading': 'Loading PowerShell template…',
  'builder.templateReady': 'Windows PowerShell 5.1+ · .ps1 file',
  'preview.eyebrow': 'SCRIPT PREVIEW',
  'preview.title': 'Your PowerShell script.',
  'preview.lead': {one: '{n} selected service. Review the names and behavior before running. Nothing runs from this website.', other: '{n} selected services. Review the names and behavior before running. Nothing runs from this website.'},
  'preview.download': 'Download .ps1',
  'preview.runUndo': 'Run &amp; undo instructions',
  'toast.downloaded': 'Script downloaded. Review the run and undo instructions.',
  'toast.copied': 'Copied to clipboard.',
  'toast.copyUnavailable': 'Copy is unavailable here. Select the text and copy it manually.',
  'toast.preset': 'Preset selected: remote registry, fax, and retail demo.',
  'toast.scriptError': 'The script could not be created. Reload the page and try again.',
  'theme.switchToLight': 'Switch to light mode',
  'theme.switchToDark': 'Switch to dark mode',
  'theme.light': 'Light mode',
  'theme.dark': 'Dark mode',
  'motion.pause': 'Pause background animation',
  'motion.resume': 'Resume background animation',
  'motion.reduced': 'Background paused by your reduced-motion preference',
  'language.label': 'Language',
  'count.total': {one: 'service explained', other: 'services explained'},
  'count.launch': {one: 'service, explained', other: 'services, explained'}
};

const LOCALES = {en: {ui: UI_EN}, pl: LOCALE_PL, sv: LOCALE_SV};
let currentLanguage = DEFAULT_LANGUAGE;

function t(key, vars = {}) {
  const value = LOCALES[currentLanguage].ui?.[key] ?? UI_EN[key] ?? key;
  return fill(typeof value === 'string' ? value : value.other, vars);
}

function tn(key, n, vars = {}) {
  const forms = LOCALES[currentLanguage].ui?.[key] ?? UI_EN[key];
  const form = forms[new Intl.PluralRules(currentLanguage).select(n)] ?? forms.other;
  return fill(form, {...vars, n});
}

function fill(text, vars) {
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match));
}

// Service data is translated in place; English values are kept for switching back.
const DATA_EN = {
  services: Object.fromEntries(SERVICES.map(s => [s.id, {summary: s.summary, tradeoff: s.tradeoff, advice: s.advice, description: s.description, availability: s.availability, recommendation: s.recommendation, risk: s.bootRisk && {reason: s.bootRisk.reason, condition: s.bootRisk.condition}}])),
  sources: Object.fromEntries(Object.entries(SOURCES).map(([key, s]) => [key, {title: s.title, note: s.note}])),
  settings: Object.fromEntries(Object.entries(SERVICE_SETTINGS).map(([id, s]) => [id, {path: s.path, action: s.action}])),
  features: Object.fromEntries(FEATURE_GROUPS.map(g => [g.id, {title: g.title, description: g.description}]))
};

function localizeData(language) {
  const data = LOCALES[language].data || {};
  for (const s of SERVICES) {
    const en = DATA_EN.services[s.id], tr = data.services?.[s.id] || {};
    for (const field of ['summary', 'tradeoff', 'advice', 'description', 'availability', 'recommendation']) if (en[field] !== undefined) s[field] = tr[field] ?? en[field];
    if (en.risk) {
      s.bootRisk.reason = tr.bootRisk?.reason ?? en.risk.reason;
      if (en.risk.condition !== undefined) s.bootRisk.condition = tr.bootRisk?.condition ?? en.risk.condition;
    }
  }
  for (const [key, s] of Object.entries(SOURCES)) Object.assign(s, DATA_EN.sources[key], data.sources?.[key]);
  for (const [id, s] of Object.entries(SERVICE_SETTINGS)) Object.assign(s, DATA_EN.settings[id], data.settings?.[id]);
  for (const g of FEATURE_GROUPS) Object.assign(g, DATA_EN.features[g.id], data.features?.[g.id]);
}

// Static page text: data-i18n elements and attributes, plus the three long page views.
// English is read from the page once, so the HTML stays the English source.
const STATIC_EN = new Map();
const ATTRS_EN = new Map();
const PAGE_IDS = ['tools', 'backup', 'repair'];

function localizeStatic(language) {
  const locale = LOCALES[language];
  for (const el of document.querySelectorAll('[data-i18n]')) {
    if (!STATIC_EN.has(el)) STATIC_EN.set(el, el.innerHTML);
    el.innerHTML = locale.static?.[el.dataset.i18n] ?? STATIC_EN.get(el);
  }
  for (const el of document.querySelectorAll('[data-i18n-attr]')) {
    if (!ATTRS_EN.has(el)) ATTRS_EN.set(el, {});
    const original = ATTRS_EN.get(el);
    for (const pair of el.dataset.i18nAttr.split(';')) {
      const [attr, key] = pair.split(':');
      if (!(attr in original)) original[attr] = el.getAttribute(attr);
      el.setAttribute(attr, locale.static?.[key] ?? original[attr]);
    }
  }
  for (const id of PAGE_IDS) {
    const section = document.getElementById(id);
    if (!STATIC_EN.has(section)) STATIC_EN.set(section, section.innerHTML);
    section.innerHTML = locale.pages?.[id] ?? STATIC_EN.get(section);
  }
  // Dates follow the datetime attribute, so a release only changes one value.
  const dateFormat = new Intl.DateTimeFormat(language === 'en' ? 'en-US' : language, {dateStyle: 'long', timeZone: 'UTC'});
  for (const el of document.querySelectorAll('time[data-i18n-date]')) el.textContent = dateFormat.format(new Date(el.dateTime));
}

function applyLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.has(language) ? language : DEFAULT_LANGUAGE;
  document.documentElement.lang = currentLanguage;
  document.querySelector('meta[name="description"]').content = t('meta.description');
  localizeData(currentLanguage);
  localizeStatic(currentLanguage);
  for (const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
  return currentLanguage;
}
