#!/usr/bin/env node
// Translation regressions: language detection and storage, plural forms, complete dictionaries,
// and translated markup that keeps every tag, link and attribute of the English page.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const html = read('src/index.html');
const context = vm.createContext({Intl});
vm.runInContext([read('src/services.js'), read('src/script-builder.js'), read('src/i18n-pl.js'), read('src/i18n-sv.js'), read('src/i18n.js')].join('\n'), context);
const run = code => vm.runInContext(code, context);

// Detection: first supported language from the browser list, regional variants reduced, English otherwise.
const detect = (languages, language) => { context.navigator = {languages, language}; return run('detectBrowserLanguage()'); };
assert.equal(detect(['sv-SE', 'pl-PL']), 'sv');
assert.equal(detect(['de-DE', 'pl']), 'pl');
assert.equal(detect(['en-GB', 'pl-PL']), 'en');
assert.equal(detect(['fr-FR', 'de-DE']), 'en');
assert.equal(detect([], 'pl_PL'), 'pl');
assert.equal(detect([' SV-se ']), 'sv');
assert.equal(detect([42, 'sv']), 'sv');
assert.equal(detect(undefined, undefined), 'en');

// A saved manual choice wins; invalid or unreadable storage falls back to the browser list.
const storage = values => ({getItem: key => values[key] ?? null, setItem: (key, value) => { values[key] = value; }});
context.navigator = {languages: ['sv-SE']};
context.window = {localStorage: storage({'winwise.language': 'pl'})};
assert.equal(run('getInitialLanguage()'), 'pl');
context.window = {localStorage: storage({'winwise.language': 'de'})};
assert.equal(run('getInitialLanguage()'), 'sv');
context.window = {localStorage: {getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }}};
assert.equal(run('getInitialLanguage()'), 'sv');
assert.doesNotThrow(() => run("rememberLanguage('pl')"));
const saved = {};
context.window = {localStorage: storage(saved)};
run("rememberLanguage('xx'); rememberLanguage('pl')");
assert.deepEqual(saved, {'winwise.language': 'pl'});

// Plural forms follow each language's rules.
assert.equal(run("currentLanguage='pl'; tn('builder.serviceCount', 1)"), '1 usługa');
assert.equal(run("tn('builder.serviceCount', 3)"), '3 usługi');
assert.equal(run("tn('builder.serviceCount', 5)"), '5 usług');
assert.equal(run("tn('builder.serviceCount', 22)"), '22 usługi');
assert.equal(run("currentLanguage='sv'; tn('builder.serviceCount', 1)"), '1 tjänst');
assert.equal(run("tn('builder.serviceCount', 2)"), '2 tjänster');
assert.equal(run("currentLanguage='en'; tn('builder.serviceCount', 2)"), '2 services');

// Markup checks. Text and the listed attributes may change; every tag and other attribute must stay.
const TRANSLATABLE_ATTRS = new Set(['aria-label', 'title', 'alt', 'placeholder', 'data-label']);
function skeleton(text) {
  const out = [];
  for (const m of text.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[^\s=>]+(?:="[^"]*")?)*)\s*\/?>/g)) {
    if (m[1]) { out.push(`/${m[2].toLowerCase()}`); continue; }
    const attrs = [...m[3].matchAll(/([^\s=>]+)(?:="([^"]*)")?/g)].map(a => (TRANSLATABLE_ATTRS.has(a[1]) ? `${a[1]}=*` : `${a[1]}=${a[2] ?? ''}`));
    out.push(`${m[2].toLowerCase()}[${attrs.sort().join(' ')}]`);
  }
  return out.join('|');
}
const placeholders = text => [...text.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join(',');
const PLURAL_FORMS = new Set(['zero', 'one', 'two', 'few', 'many', 'other']);
function compare(en, tr, path) {
  if (typeof en === 'string') {
    assert.equal(typeof tr, 'string', `${path}: missing translation`);
    assert(tr.trim(), `${path}: empty translation`);
    assert.equal(placeholders(tr), placeholders(en), `${path}: placeholders differ`);
    assert.equal(skeleton(tr), skeleton(en), `${path}: markup differs from English`);
    return;
  }
  if (Object.keys(en).every(key => PLURAL_FORMS.has(key))) {
    assert(tr?.other, `${path}: plural forms need "other"`);
    for (const [form, text] of Object.entries(tr)) { assert(PLURAL_FORMS.has(form), `${path}.${form}: unknown plural form`); compare(en.other, text, `${path}.${form}`); }
    return;
  }
  assert(tr && typeof tr === 'object', `${path}: missing`);
  for (const key of Object.keys(en)) if (en[key] !== undefined) compare(en[key], tr[key], `${path}.${key}`);
  for (const key of Object.keys(tr)) assert(key in en, `${path}.${key}: not in English`);
}

// English static text is read from the page, as i18n.js does in the browser.
function innerHTMLAt(start, tag) {
  let depth = 1, pos = start;
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g');
  for (;;) { re.lastIndex = pos; const m = re.exec(html); depth += m[1] ? -1 : 1; pos = m.index + m[0].length; if (!depth) return html.slice(start, m.index); }
}
const staticEn = {};
for (const m of html.matchAll(/<([a-z0-9]+)[^>]*\sdata-i18n="([^"]+)"[^>]*>/g)) staticEn[m[2]] = innerHTMLAt(m.index + m[0].length, m[1]);
for (const m of html.matchAll(/<[a-z0-9]+[^>]*data-i18n-attr="([^"]+)"[^>]*>/g)) for (const pair of m[1].split(';')) { const [attr, key] = pair.split(':'); staticEn[key] = m[0].match(new RegExp(`\\s${attr}="([^"]*)"`))[1]; }
const pageEn = id => { const m = html.match(new RegExp(`<section id="${id}"[^>]*>`)); return innerHTMLAt(m.index + m[0].length, 'section'); };
const dataEn = run(`({services: Object.fromEntries(Object.entries(DATA_EN.services).map(([id, s]) => [id, {summary: s.summary, tradeoff: s.tradeoff, advice: s.advice, description: s.description, availability: s.availability, recommendation: s.recommendation, bootRisk: s.risk && {reason: s.risk.reason, condition: s.risk.condition}}])), sources: DATA_EN.sources, settings: DATA_EN.settings, features: DATA_EN.features})`);

for (const lang of ['pl', 'sv']) {
  const locale = run(`LOCALES.${lang}`);
  compare(run('UI_EN'), locale.ui, `${lang}.ui`);
  compare(staticEn, locale.static, `${lang}.static`);
  for (const id of run('PAGE_IDS')) compare(pageEn(id), locale.pages[id], `${lang}.pages.${id}`);
  compare(JSON.parse(JSON.stringify(dataEn)), locale.data, `${lang}.data`);
}

// Service data switches language in place and returns to English.
run("localizeData('pl')");
assert.equal(run("SERVICES.find(s => s.id === 'DiagTrack').summary"), run('LOCALES.pl.data.services.DiagTrack.summary'));
assert.equal(run("FEATURE_GROUPS[0].title"), run('LOCALES.pl.data.features[FEATURE_GROUPS[0].id].title'));
// Search matches the boot-risk badge as it is shown in the current language.
const bootRiskCount = run('SERVICES.filter(s => s.bootRisk).length');
for (const lang of ['pl', 'sv', 'en']) assert.equal(run(`currentLanguage='${lang}'; localizeData('${lang}'); filterServices('all', 'all', t('risk.badge'), 'recommended').length`), bootRiskCount, `${lang}: boot-risk badge search`);
run("localizeData('en')");
assert.equal(run("SERVICES.find(s => s.id === 'DiagTrack').summary"), run('DATA_EN.services.DiagTrack.summary'));
assert.equal(run("SOURCES.restore.title"), run('DATA_EN.sources.restore.title'));

console.log(`PASS: language detection, storage fallback, plural forms, and complete Polish and Swedish dictionaries (${Object.keys(staticEn).length} static keys, ${run('Object.keys(UI_EN).length')} interface keys, 3 pages, ${run('SERVICES.length')} services).`);
