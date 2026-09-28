#!/usr/bin/env node
// Builds index.html, the complete Winwise site in one file, from the files in src/.
//
//   node tools/build.mjs          write index.html
//   node tools/build.mjs --check  fail if index.html does not match src/ (used by CI)
//
// Only Node.js built-in modules are used, so there is nothing to install.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const outFile = join(root, 'index.html');
const checkOnly = process.argv.includes('--check');

function fail(message) {
  console.error(`build: ${message}`);
  process.exit(1);
}

// Line endings are normalised so every platform produces the same bytes.
function read(name) {
  const path = join(src, name);
  if (!existsSync(path)) fail(`src/${name} is referenced but missing`);
  return readFileSync(path, 'utf8').replace(/\r\n?/g, '\n');
}

// Inlined code must not contain its own end tag, or the browser would end the block early.
function inlineable(name, tag) {
  const code = read(name);
  const lower = code.toLowerCase();
  if (lower.includes(`</${tag}`)) fail(`src/${name} contains "</${tag}"`);
  if (tag === 'script' && lower.includes('<!--')) fail(`src/${name} contains "<!--"`);
  return code;
}

let html = read('index.html');

// Replacements use functions so "$" in the inlined code is never treated as a pattern.
function replaceOnce(pattern, make, what) {
  let count = 0;
  html = html.replace(pattern, (...match) => { count += 1; return make(...match); });
  if (count !== 1) fail(`expected exactly one ${what} in src/index.html, found ${count}`);
}

// 1. Swap every file reference in the page for a marker, so later steps never scan inlined code.
const mark = (kind, name) => `\u0000${kind}:${name}\u0000`;
html = html.replace(/<link rel="stylesheet" href="([\w.-]+\.css)">/g, (_, name) => mark('style', name));
html = html.replace(/<script src="([\w.-]+\.js)"><\/script>/g, (_, name) => mark('script', name));

// Deferred scripts run after the page is parsed, so they move to the end of <body> in the same order.
const deferred = [];
html = html.replace(/\s*<script src="([\w.-]+\.js)" defer><\/script>/g, (_, name) => { deferred.push(name); return ''; });
if (!deferred.length) fail('no deferred scripts found in src/index.html');

// The PowerShell template travels as plain text; src/app.js reads it from #winwise-template.
replaceOnce(/<\/body>/, () =>
  [mark('template', 'script-template.ps1'), ...deferred.map((name) => mark('script', name)), '</body>'].join('\n'), '</body>');

replaceOnce(/<link rel="icon" href="favicon\.svg" type="image\/svg\+xml">/, () =>
  `<link rel="icon" href="data:image/svg+xml;base64,${Buffer.from(read('favicon.svg')).toString('base64')}">`, 'favicon link');

replaceOnce(/^<!doctype html>\n/i, (m) =>
  `${m}<!-- Built from src/ by tools/build.mjs. Edit the files in src/, then run: node tools/build.mjs -->\n`, 'doctype');

// 2. Anything still pointing at a local file would break in a downloaded copy.
const leftover = html.match(/\s(?:src|href)="(?![a-z][a-z0-9+.-]*:|#)[^"]+"/i);
if (leftover) fail(`src/index.html references a file the build does not inline: ${leftover[0].trim()}`);

// 3. Fill the markers with the file contents.
html = html.replace(/\u0000(style|script|template):([\w.-]+)\u0000/g, (_, kind, name) => {
  if (kind === 'style') return `<style>${inlineable(name, 'style')}</style>`;
  if (kind === 'template') return `<script type="text/plain" id="winwise-template">${inlineable(name, 'script')}</script>`;
  return `<script>${inlineable(name, 'script')}</script>`;
});

const sha256 = createHash('sha256').update(html).digest('hex');
const size = `${Math.round(Buffer.byteLength(html) / 1024)} KB`;

if (checkOnly) {
  const current = existsSync(outFile) ? readFileSync(outFile, 'utf8').replace(/\r\n?/g, '\n') : '';
  if (current !== html) fail('index.html does not match src/. Run "node tools/build.mjs" and commit the result.');
  console.log(`index.html matches src/ (${size}, sha256 ${sha256})`);
} else {
  writeFileSync(outFile, html);
  console.log(`Wrote index.html (${size}, sha256 ${sha256})`);
}
