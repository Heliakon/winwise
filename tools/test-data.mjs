#!/usr/bin/env node
// Data/selection regressions. Uses only Node built-ins and the production sources.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const context = vm.createContext({});
vm.runInContext(`${read('src/services.js')}\n${read('src/script-builder.js')}\nthis.api={SERVICES,SOURCES,SCRIPT_IDS,FEATURE_GROUPS,CONSERVATIVE_PRESET,resolveScriptSelection,buildPowerShell,filterServices};`, context);
const {SERVICES, SOURCES, SCRIPT_IDS, FEATURE_GROUPS, CONSERVATIVE_PRESET, resolveScriptSelection, buildPowerShell, filterServices} = context.api;
const template = read('src/script-template.ps1');
const added = ['Sysmon','MidiSrv','AppReadiness','AppIDSvc','BrokerInfrastructure','CoreMessagingRegistrar','SystemEventsBroker','TimeBrokerSvc','KeyIso','NcbService','Wecsvc'];
assert.equal(SERVICES.length, 157);
assert.equal(new Set(SERVICES.map(s => s.id.toLowerCase())).size, SERVICES.length);
assert.equal(SCRIPT_IDS.length, 28);
assert.equal(FEATURE_GROUPS.length, 12);
for (const service of SERVICES) {
  assert(SOURCES[service.source], `${service.id}: missing source`);
  for (const field of ['name','description','summary','tradeoff','advice']) assert(service[field], `${service.id}: missing ${field}`);
  if (SCRIPT_IDS.includes(service.id)) {
    assert(buildPowerShell(template, [service.id]).includes(`'${service.id}'`));
  } else {
    assert.throws(() => buildPowerShell(template, [service.id]), /Unsupported/);
  }
  for (const query of [service.id, service.name]) assert(filterServices('all','all',query,'recommended').some(s => s.id === service.id), query);
  if (service.perUser) for (const query of [service.id+'_4f9ac',service.name+'_4f9ac']) assert(filterServices('all','all',query,'recommended').some(s => s.id === service.id), query);
}
assert.equal(SERVICES.filter(s => s.perUser).length, 24);
for (const id of added) {
  const service = SERVICES.find(s => s.id === id);
  assert(service, id);
  assert.equal(service.status, 'keep');
  assert(!SCRIPT_IDS.includes(id), `${id} must stay out of generated scripts`);
}
for (const group of FEATURE_GROUPS) for (const id of group.services) assert(SCRIPT_IDS.includes(id));
assert.deepEqual(Array.from(CONSERVATIVE_PRESET), ['RemoteRegistry','Fax','RetailDemo']);
assert.deepEqual(Array.from(resolveScriptSelection(['WSearch'])), ['workfolderssvc','WSearch']);
assert.deepEqual(Array.from(resolveScriptSelection(['WSearch','workfolderssvc','WSearch'])), ['workfolderssvc','WSearch']);
assert.deepEqual(Array.from(resolveScriptSelection(['workfolderssvc'])), ['workfolderssvc']);
assert.throws(() => buildPowerShell(template, []), /Select at least/);
assert.throws(() => buildPowerShell(template, ['UnknownSvc']), /Unsupported/);
const allowlist = template.match(/\$AllowedServices = @\(([^\n]+)\)/)[1].match(/'[^']+'/g).map(s => s.slice(1,-1));
assert.deepEqual(allowlist.sort(), Array.from(SCRIPT_IDS).sort());
assert(!/Stop-Service[^\n]*-Force/.test(template));
assert(!/\.Stop\(/.test(template));
for (const query of ['GameDVR','GameDVR and Broadcast User Service_4f9ac']) assert(filterServices('all','all',query,'recommended').some(s => s.id === 'BcastDVRUserService'));
for (const query of ['Sysmon64','Sysmon64a','Windows MIDI Services']) assert(filterServices('all','all',query,'recommended').length > 0);
console.log(`PASS: ${SERVICES.length} entries, ${SCRIPT_IDS.length} builder choices, ${SERVICES.length-SCRIPT_IDS.length} exclusions, selection and search regressions (${fileURLToPath(root)}).`);
