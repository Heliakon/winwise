'use strict';
function buildPowerShell(template, selectedIds) {
  const selected = [...new Set(selectedIds)];
  if (!selected.length) throw new Error('Select at least one service first.');
  if (selected.some(id => !SCRIPT_IDS.includes(id) || !isScriptEligible(SERVICES.find(service=>service.id===id)))) throw new Error('Unsupported service selection.');
  if (template.split('__SERVICE_NAMES__').length !== 2) throw new Error('The PowerShell template could not be loaded correctly.');
  return template.replace('__SERVICE_NAMES__', selected.map(id => "'" + id + "'").join(',')).replace(/\r?\n/g,'\r\n');
}
function filterServices(category, status, query, sort) {
  // Accept a per-user instance name copied from services.msc or the local inventory.
  const normalizedQuery = query.replace(/_[0-9a-f]+(?=\s|$)/gi, '');
  const terms = normalizedQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let result = SERVICES.filter(s => (category === 'all' || s.category === category) && (status === 'all' || s.status === status) && terms.every(term => [s.id,s.name,s.description||'',s.summary,s.tradeoff,s.category,s.advice,s.bootRisk ? 'Can break boot or sign-in '+s.bootRisk.reason+' '+(s.bootRisk.condition||'') : '',...(s.aliases||[])].join(' ').toLowerCase().includes(term)));
  if (sort === 'az') result.sort((a,b) => a.name.localeCompare(b.name));
  if (sort === 'za') result.sort((a,b) => b.name.localeCompare(a.name));
  return result;
}
