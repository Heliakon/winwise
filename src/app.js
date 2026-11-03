'use strict';
const ICONS = {
  warning:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v.01"/>',
  keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  shield:'<path d="M12 3 4 6v6c0 4 4 7.5 8 9 4-1.5 8-5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  gauge:'<path d="M5 19a9 9 0 1 1 14 0H5Z"/><path d="m12 13 4-5M5 12H4m16 0h-1M12 4v1"/><circle cx="12" cy="13" r="1"/>',
  sliders:'<path d="M5 3v4m0 4v10M12 3v10m0 4v4m7-18v4m0 4v10"/><path d="M2 7h6m1 10h6m1-10h6"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  arrow:'<path d="m9 5 7 7-7 7"/>',
  external:'<path d="M14 3h7v7m0-7-11 11"/><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.01"/>',
  book:'<path d="M12 5v15M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a5 5 0 0 0-4 2 5 5 0 0 0-4-2H3V4Z"/>',
  terminal:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m7 9 3 3-3 3m6 0h4"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  monitor:'<rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5"/>',
  printer:'<path d="M7 8V3h10v5M7 16H3v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6h-4"/><path d="M7 13h10v8H7zm10-2h1"/>',
  bluetooth:'<path d="m7 7 10 10-5 4V3l5 4L7 17"/>',
  network:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
  music:'<path d="M9 18V5l11-2v13"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="17" cy="16" rx="3" ry="3"/><path d="m9 9 11-2"/>',
  store:'<path d="M3 9 5 3h14l2 6M4 10v11h16V10M9 21v-7h6v7"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0H3Z"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>',
  cube:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5m-9 5L3 8m9 5v9"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
  undo:'<path d="M3 10h11a6 6 0 0 1 0 12M3 10l5-5m-5 5 5 5"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'
};
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = text => String(text).replace(/[&<>"']/g, char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.cube}</svg>`;
function fillIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});}
const CATEGORIES = [{id:'all',icon:'grid'},{id:'privacy',icon:'shield'},{id:'performance',icon:'gauge'},{id:'optional',icon:'cube'},{id:'essential',icon:'lock'}];
const categoryName = id => t(`category.${id}.name`);
const state={category:'all',status:'all',query:'',sort:'recommended',view:'directory',requested:new Set(),selected:new Set(),template:null,templateError:false};
let toastTimer;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3200);}
function recommendationText(s){return s.recommendation||t('status.'+s.status);}
function badge(s){return `<span class="recommendation ${s.status}">${icon(s.status==='keep'?'lock':s.status==='settings'?'sliders':'check')}<span>${escapeHTML(recommendationText(s))}</span></span>`;}
function riskBadge(s){return s.bootRisk?`<span class="risk-badge">${icon('warning')}<span>${t('risk.badge')}</span></span>`:'';}
function riskDetails(s){
  if(!s.bootRisk)return '';
  return `<div class="risk-callout"><h3>${escapeHTML(s.bootRisk.condition||t('risk.defaultCondition'))}</h3><p>${escapeHTML(s.bootRisk.reason)}</p><p class="risk-exclusion">${t('risk.excluded')}</p><div class="risk-sources">${s.bootRisk.sources.map(key=>`<a href="${SOURCES[key].url}" target="_blank" rel="noopener noreferrer">${escapeHTML(SOURCES[key].title)} ↗</a>`).join('')}</div></div>`;
}
function settingsPanel(s){
  const setting=SERVICE_SETTINGS[s.id];if(!setting)return '';
  return `<div class="settings-callout"><h3>${t('settings.heading')}</h3><p>${escapeHTML(setting.action)}</p><p class="settings-path">${escapeHTML(setting.path)}</p><a class="secondary-button" href="${setting.uri}">${icon('sliders')}${t('settings.open')}</a><p class="small-note">${t('settings.note')}</p>${isScriptEligible(s)?`<p class="small-note">${t('settings.builderNote')}</p>`:''}</div>`;
}
function serviceIcon(s){if(s.id==='SysMain')return 'gauge';if(s.id==='WSearch')return 'search';if(s.id==='TabletInputService'||s.id==='TextInputManagementService')return 'keyboard';if(/spool|fax|print/i.test(s.id))return 'printer';if(/bluetooth|bth|btag/i.test(s.id))return 'bluetooth';if(/remote|rdp|termservice|sessionenv/i.test(s.id))return 'monitor';return CATEGORIES.find(c=>c.id===s.category)?.icon||'cube';}
function renderDirectory(){
  const cat=CATEGORIES.find(c=>c.id===state.category);
  $('#categories').innerHTML=CATEGORIES.map(c=>`<button class="${state.category===c.id?'selected':''}" data-category="${c.id}" aria-pressed="${state.category===c.id}">${icon(c.icon)}${categoryName(c.id)}<span>${SERVICES.filter(s=>c.id==='all'||s.category===c.id).length}</span></button>`).join('');
  $('#directory-title').innerHTML=`${categoryName(cat.id)} <span>${SERVICES.filter(s=>state.category==='all'||s.category===state.category).length}</span>`;
  $('#category-description').textContent=t(`category.${cat.id}.description`);
  $$('[data-status]').forEach(b=>{b.classList.toggle('selected',b.dataset.status===state.status);b.setAttribute('aria-pressed',String(b.dataset.status===state.status));});
  const results=filterServices(state.category,state.status,state.query,state.sort);
  $('#result-count').innerHTML=t('directory.resultCount',{shown:results.length,total:SERVICES.length});
  $('#service-list').innerHTML=results.map(s=>`<button class="service-row" data-service="${s.id}" aria-label="${escapeHTML(`${s.name} — ${recommendationText(s)}.${s.bootRisk?' '+t('row.risk'):''} ${t('row.viewDetails')}`)}"><span class="service-identity"><span class="service-icon service-icon-${s.category}">${icon(serviceIcon(s))}</span><span><h3>${escapeHTML(s.name)}</h3><span class="service-code">${escapeHTML(s.id)}${s.perUser?'_…':''}</span></span></span><span class="recommendation-stack">${badge(s)}${riskBadge(s)}${s.bootRisk?.condition?`<span class="risk-condition">${escapeHTML(s.bootRisk.condition)}</span>`:''}</span><span class="row-reason">${escapeHTML(s.description||s.summary)}</span><span class="row-arrow">${icon('arrow')}</span></button>`).join('');
  $('.service-table').hidden=!results.length;$('#empty-state').hidden=!!results.length;
}
function setView(view){
  const nextView=['directory','tools','builder','backup','repair'].includes(view)?view:'directory';
  if(nextView!=='directory')window.WinwiseIntro?.dismiss();
  if(state.view!==nextView&&$('#detail-dialog').open)$('#detail-dialog').close();
  state.view=nextView;
  const browsing=state.view==='directory';
  $('#directory').hidden=!browsing;$('.overview').hidden=!browsing;$('#tools').hidden=state.view!=='tools';$('#builder').hidden=state.view!=='builder';
  $('#backup').hidden=state.view!=='backup';$('#repair').hidden=state.view!=='repair';$('.intro').hidden=['backup','repair','tools'].includes(state.view);
  document.title=t('title.'+state.view);
  $('.skip-link').href='#'+state.view;$('.skip-link').textContent=t('skip.'+state.view);
  $$('[data-view]').forEach(el=>{if(el.closest('.top-nav, .header-resources')){el.classList.toggle('active',el.dataset.view===state.view);if(el.dataset.view===state.view)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');}});
  if(state.view==='builder'){renderBuilderOnce();updateBuilder();}
}
function renderCounts(){$('#total-stat').textContent=SERVICES.length;$('#launch-count').textContent=SERVICES.length;$('#total-label').textContent=tn('count.total',SERVICES.length);$('#launch-label').textContent=tn('count.launch',SERVICES.length);}
function setLanguage(language,remember){
  applyLanguage(language);
  if(remember)rememberLanguage(currentLanguage);
  renderCounts();fillIcons();renderDirectory();setView(state.view);
  if($('#builder').children.length){const pickerOpen=$('.individual-picker')?.open;$('#builder').innerHTML='';renderBuilderOnce();$('.individual-picker').open=!!pickerOpen;updateBuilder();}
  document.dispatchEvent(new CustomEvent('winwise:language'));
}
function jumpTo(id){const heading=document.getElementById(id);heading?.scrollIntoView({block:'start'});heading?.focus({preventScroll:true});}
function navigate(view){window.WinwiseIntro?.dismiss();if($('#detail-dialog').open)$('#detail-dialog').close();setView(view);if(location.hash!==`#${state.view}`)history.pushState(null,'',`#${state.view}`);}
function openDialog(html,eyebrow=t('dialog.serviceDetails')){
  $('#dialog-content').innerHTML=html;$('#dialog-eyebrow').textContent=eyebrow;fillIcons($('#detail-dialog'));
  if(!$('#detail-dialog').open)$('#detail-dialog').showModal();
  $('#detail-dialog').scrollTop=0;$('#close-dialog').focus();
}
function serviceDetails(id){
  const s=SERVICES.find(s=>s.id===id);if(!s)return;
  const src=SOURCES[s.source];
  openDialog(`<div class="dialog-title-row"><span class="service-icon service-icon-${s.category}">${icon(serviceIcon(s))}</span><div><h2 id="dialog-title">${escapeHTML(s.name)}</h2><div class="detail-code">${escapeHTML(s.id)}${s.perUser?'_…':''}<button data-copy-name="${s.id}" aria-label="${escapeHTML(t('details.copyName'))}">${icon('copy')}</button></div></div></div><div class="detail-tags">${badge(s)}${riskBadge(s)}<span class="category-tag">${categoryName(s.category)}</span></div>${riskDetails(s)}${s.description?`<p class="service-explainer">${escapeHTML(s.description)}</p>`:''}${s.availability?`<div class="service-availability"><strong>${t('details.checkBuild')}</strong>${escapeHTML(s.availability)}</div>`:''}${settingsPanel(s)}<div class="detail-section"><h3>${t('details.when')}</h3><p>${escapeHTML(s.summary)}</p></div><div class="detail-section"><h3>${t('details.changes')}</h3><p>${escapeHTML(s.tradeoff)}</p></div><div class="detail-section"><h3>${t('details.recommendation')}</h3><p>${escapeHTML(s.advice)}</p></div><div class="detail-callout"><h3>${s.perUser?t('details.perUserHeading'):t('details.configHeading')}</h3><p>${s.perUser?t('details.perUserText'):t('details.configText')}</p></div>${isScriptEligible(s)?`<button class="primary-button add-script-button" data-add-script="${s.id}">${icon('terminal')}${state.selected.has(s.id)?t('details.selectedOpenBuilder'):t('details.addToScript')}</button>`:''}<div class="detail-bottom"><a class="source-link" href="${src.url}" target="_blank" rel="noopener noreferrer">${t('details.reference')} ${icon('external')}</a><button class="text-button" data-dialog="guide">${t('details.howToChange')}</button></div>`);
}
const inventoryCommand='Get-CimInstance Win32_Service |\n  Sort-Object DisplayName |\n  Select-Object DisplayName, Name, State, StartMode |\n  Format-Table -AutoSize';
function codeBlock(text,id){return `<div class="code-block"><pre id="${id}">${escapeHTML(text)}</pre><button class="copy-button" data-copy-block="${id}">${icon('copy')}${t('copy.command')}</button></div>`;}
const restorePointLink=()=>`<p class="backup-inline-link">${t('restorePoint.prefix')} <a href="#repair" data-view="repair" data-backup-jump="system-restore-title">${t('restorePoint.link')}</a>.</p>`;
function showGuide(){openDialog(`<h2 id="dialog-title">${t('guide.title')}</h2><p class="lead">${t('guide.lead')}</p><div class="guide-actions"><button class="primary-button" data-open-builder>${icon('terminal')}${t('guide.openBuilder')}</button><button class="run-instructions-link" data-dialog="run">${icon('book')}${t('guide.runUndo')}</button></div>${restorePointLink()}<h3 class="guide-manual-heading">${t('guide.manualHeading')}</h3><ol class="guide-steps">${[1,2,3,4].map(n=>`<li><h3>${t(`guide.step${n}.title`)}</h3><p>${t(`guide.step${n}.text`)}</p></li>`).join('')}</ol><div class="guide-legend">${['automatic','manual','disabled'].map(k=>`<div><h3>${t(`guide.${k}.title`)}</h3><p>${t(`guide.${k}.text`)}</p></div>`).join('')}</div><div class="detail-callout"><h3>${t('guide.managedHeading')}</h3><p>${t('guide.managedText')}</p></div>`, t('guide.eyebrow'));}
function showSources(){openDialog(`<h2 id="dialog-title">${t('sources.title')}</h2><p class="lead">${t('sources.lead',{count:SERVICES.length})}</p><ul class="source-list">${Object.values(SOURCES).map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.title)} ↗</a><p>${escapeHTML(s.note)}</p></li>`).join('')}</ul>`, t('sources.eyebrow'));}
function showInventory(){openDialog(`<h2 id="dialog-title">${t('inventory.title')}</h2><p class="lead">${t('inventory.lead')}</p>${codeBlock(inventoryCommand,'inventory-command')}<div class="detail-section"><h3>${t('inventory.matchHeading')}</h3><p>${t('inventory.matchText')}</p></div><p class="small-note">${t('inventory.note')}</p>`, t('inventory.eyebrow'));}
function showRunInstructions(){openDialog(`<h2 id="dialog-title">${t('run.title')}</h2><p class="lead">${t('run.lead')}</p>${restorePointLink()}<ol class="guide-steps"><li><h3>${t('run.step1.title')}</h3><p>${t('run.step1.text')}</p></li><li><h3>${t('run.step2.title')}</h3><p>${t('run.step2.text')}</p>${codeBlock('Set-Location -LiteralPath "C:\\Users\\YourName\\Downloads"','run-folder')}<p class="small-note">${t('run.step2.note')}</p></li><li><h3>${t('run.step3.title')}</h3><p>${t('run.step3.text')}</p>${codeBlock('Unblock-File -LiteralPath ".\\Winwise-Services.ps1"\nSet-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned','run-policy')}<p class="execution-policy-note">${t('run.step3.note')}</p></li><li><h3>${t('run.step4.title')}</h3><p>${t('run.step4.text')}</p>${codeBlock('.\\Winwise-Services.ps1 -WhatIf','run-preview')}</li><li><h3>${t('run.step5.title')}</h3><p>${t('run.step5.text')}</p>${codeBlock('.\\Winwise-Services.ps1','run-apply')}</li><li><h3>${t('run.step6.title')}</h3><p>${t('run.step6.text')}</p>${codeBlock('.\\Winwise-Services.ps1 -RestoreFrom ".\\Winwise-backup-YOUR-RUN.json"','run-restore')}</li></ol><div class="detail-callout"><h3>${t('run.backupHeading')}</h3><p>${t('run.backupText')}</p></div><a class="source-link" href="${SOURCES.powershell.url}" target="_blank" rel="noopener noreferrer">${t('run.docs')} ${icon('external')}</a>`, t('run.eyebrow'));}
function showFeatureServices(id){
  const group=FEATURE_GROUPS.find(group=>group.id===id);if(!group)return;
  const services=group.services.map(id=>SERVICES.find(service=>service.id===id)).filter(Boolean);
  openDialog(`<h2 id="dialog-title">${escapeHTML(group.title)}</h2><p class="lead">${tn('feature.lead',services.length)}</p><div class="feature-service-list">${services.map(service=>`<button data-service="${service.id}"><span><strong>${escapeHTML(service.name)}</strong><code>${escapeHTML(service.id)}</code></span>${icon('arrow')}</button>`).join('')}</div>`, t('feature.eyebrow'));
}
function builderSettingsFirst(s, context){
  const setting=SERVICE_SETTINGS[s.id];
  if(s.status!=='settings'||!setting)return '';
  return `<div class="builder-settings-first" id="${context}-settings-${s.id}"><strong>${icon('sliders')}${t('builder.settingsFirst')}</strong><p class="builder-settings-path">${escapeHTML(setting.path)}</p><p>${escapeHTML(setting.action)}</p><a class="source-link" href="${setting.uri}">${t('settings.open')} ${icon('external')}</a></div>`;
}
function builderAdvancedChoice(id){
  const s=SERVICES.find(service=>service.id===id);
  const copy=[t(`builder.${id.toLowerCase()}.title`),t(`builder.${id.toLowerCase()}.text`)];
  const settings=builderSettingsFirst(s,'advanced');
  return `<div class="advanced-choice">${settings}<div class="advanced-option"><label><input type="checkbox" data-individual="${id}"${settings?` aria-describedby="advanced-settings-${id}"`:''}><span><strong>${copy[0]}</strong><span>${copy[1]}</span></span></label><button class="builder-read-more" data-service="${id}">${t('builder.readMore')}</button><code>${id}</code></div></div>`;
}
function builderIndividualChoice(s){
  const settings=builderSettingsFirst(s,'individual');
  const companionNote=s.alsoDisable?.length?`<small class="selection-inclusion">${t('builder.alsoSelects',{names:s.alsoDisable.map(id=>escapeHTML(SERVICES.find(service=>service.id===id).name)).join(', ')})}</small>`:'';
  return `<div class="individual-choice">${settings}<div class="individual-service"><label><input type="checkbox" data-individual="${s.id}"${settings?` aria-describedby="individual-settings-${s.id}"`:''}><span>${settings?t('builder.disableInstead'):''}${escapeHTML(s.name)}<code>${s.id}</code>${companionNote}<small class="selection-inclusion" data-inclusion-for="${s.id}" hidden></small></span></label><button class="builder-read-more" data-service="${s.id}">${t('builder.readMore')}</button></div></div>`;
}
function builderIndividualChoices(){
  const eligible=SERVICES.filter(isScriptEligible);
  const settingsChoices=eligible.filter(s=>s.status==='settings'&&SERVICE_SETTINGS[s.id]);
  const otherChoices=eligible.filter(s=>!settingsChoices.includes(s));
  return `${settingsChoices.length?`<div class="individual-settings-grid" role="group" aria-label="${escapeHTML(t('builder.settingsGroup'))}">${settingsChoices.map(builderIndividualChoice).join('')}</div>`:''}<div class="individual-service-grid">${otherChoices.map(builderIndividualChoice).join('')}</div>`;
}
function renderBuilderOnce(){
  if($('#builder').children.length)return;
  $('#builder').innerHTML=`<div class="builder-heading"><div><p class="section-label">${t('builder.label')}</p><h2 id="builder-title">${t('builder.title')}</h2><p>${t('builder.lead')}</p>${restorePointLink()}</div><button class="back-link" data-back-directory>${t('builder.back')}</button></div><div class="builder-layout"><div class="builder-options"><div class="preset-card"><span class="preset-icon">${icon('sliders')}</span><div><h3>${t('builder.presetTitle')}</h3><p>${t('builder.presetText')}</p></div><button id="use-preset">${t('builder.usePreset')} ${icon('arrow')}</button></div><div class="step-heading"><span>01</span><div><h3>${t('builder.step1.title')}</h3><p>${t('builder.step1.text')}</p></div></div><div class="feature-grid">${FEATURE_GROUPS.map(g=>`<label class="feature-card"><input type="checkbox" data-feature="${g.id}"><span class="feature-card-top">${icon(g.icon)}<span class="custom-checkbox" aria-hidden="true">${icon('check')}</span></span><strong>${escapeHTML(g.title)}</strong><span class="feature-description">${escapeHTML(g.description)}</span><span class="feature-count">${tn('builder.serviceCount',g.services.length)}</span><span class="selection-inclusion" data-feature-inclusion="${g.id}" hidden></span></label>`).join('')}</div><div class="step-heading advanced-heading"><span>02</span><div><h3>${t('builder.step2.title')}</h3><p>${t('builder.step2.text')}</p></div></div><div class="advanced-choices">${['SysMain','WSearch','DiagTrack'].filter(id=>SCRIPT_IDS.includes(id)).map(builderAdvancedChoice).join('')}</div><details class="individual-picker"><summary>${t('builder.pickerSummary')} <span>${t('builder.pickerCount',{n:SCRIPT_IDS.length})}</span></summary><p>${t('builder.pickerText')}</p>${builderIndividualChoices()}</details><div class="builder-boundary">${icon('shield')}<p>${t('builder.boundary')}</p></div></div><aside class="builder-summary" aria-labelledby="selection-title"><div class="summary-title"><span>${t('builder.summaryTitle')}</span>${icon('terminal')}</div><div class="summary-body"><div class="summary-count"><h3 id="selection-title">${t('builder.selection')}</h3><button id="clear-selection">${t('builder.clear')}</button></div><p id="selected-count" role="status" aria-live="polite"></p><div id="selected-services"></div><div class="script-properties"><span>${icon('eye')}<strong>${t('builder.dryRun')}</strong></span><span>${icon('copy')}<strong>${t('builder.savedFirst')}</strong></span><span>${icon('undo')}<strong>${t('builder.restore')}</strong></span></div><button id="download-script" class="primary-button">${icon('download')}${t('builder.download')}</button><button id="preview-script" class="secondary-button">${icon('terminal')}${t('builder.preview')}</button><p id="template-status" class="small-note"></p><button data-dialog="run" class="run-instructions-link">${t('builder.runUndo')} ${icon('external')}</button><p class="builder-expectation">${t('builder.expectation')}</p></div></aside></div>`;
  $$('.feature-count').forEach((count,index)=>{const group=FEATURE_GROUPS[index];count.dataset.featureInfo=group.id;count.tabIndex=0;count.setAttribute('role','button');count.setAttribute('aria-label',tn('builder.serviceCountLabel',group.services.length,{title:group.title}));count.textContent=tn('builder.serviceCountView',group.services.length);});
  const intro=document.createElement('div');intro.className='script-features-intro';intro.textContent=t('builder.featuresIntro');$('.script-properties').before(intro);
}
function companionParents(id){
  return [...state.requested].filter(parent=>parent!==id&&resolveScriptSelection([parent]).includes(id)).map(parent=>SERVICES.find(s=>s.id===parent).name);
}
function updateBuilder(){
  state.requested=new Set([...state.requested].filter(id=>SCRIPT_IDS.includes(id)&&isScriptEligible(SERVICES.find(service=>service.id===id))));
  state.selected=new Set(resolveScriptSelection(state.requested));
  if(!$('#builder').children.length)return;
  $$('[data-feature]').forEach(input=>{
    const group=FEATURE_GROUPS.find(g=>g.id===input.dataset.feature);
    const count=group.services.filter(id=>state.selected.has(id)).length;
    const parents=[...new Set(group.services.flatMap(companionParents))];
    input.checked=count===group.services.length;input.indeterminate=count>0&&count<group.services.length;
    input.disabled=group.services.every(id=>companionParents(id).length>0);
    const card=input.closest('.feature-card');card.classList.toggle('chosen',count>0);
    const note=card.querySelector('[data-feature-inclusion]');note.hidden=!input.disabled;note.textContent=input.disabled?t('builder.includedWithKeep',{names:parents.join(', ')}):'';
  });
  $$('[data-individual]').forEach(input=>{
    const parents=companionParents(input.dataset.individual);
    input.checked=state.selected.has(input.dataset.individual);input.disabled=parents.length>0;
    const note=input.closest('label').querySelector('[data-inclusion-for]');
    if(note){note.hidden=!parents.length;note.textContent=parents.length?t('builder.includedWithKeep',{names:parents.join(', ')}):'';}
  });
  const selected=SERVICES.filter(s=>state.selected.has(s.id));
  $('#selected-count').innerHTML=tn('builder.selectedCount',selected.length);
  $('#selected-services').innerHTML=selected.length?selected.map(s=>{
    const parents=companionParents(s.id);
    return `<div class="selected-service"><div><strong>${escapeHTML(s.name)}</strong><code>${s.id}</code>${parents.length?`<span class="selection-inclusion">${t('builder.includedWith',{names:parents.map(escapeHTML).join(', ')})}</span>`:''}<button class="builder-read-more" data-service="${s.id}">${t('builder.readMore')}</button></div><button data-remove-service="${s.id}"${parents.length?' disabled':''} aria-label="${escapeHTML(parents.length?t('builder.removeFirst',{parents:parents.join(', '),name:s.name}):t('builder.remove',{name:s.name}))}">${icon(parents.length?'lock':'close')}</button></div>`;
  }).join(''):`<div class="selection-empty">${icon('sliders')}<p>${t('builder.empty')}</p></div>`;
  $('#download-script').disabled=!selected.length||!state.template;$('#preview-script').disabled=!selected.length||!state.template;$('#clear-selection').disabled=!selected.length;
  $('#template-status').textContent=t(state.templateError?'builder.templateError':!state.template?'builder.templateLoading':'builder.templateReady');
}
function currentScript(){return buildPowerShell(state.template,[...state.selected]);}
function previewScript(){if(!state.template||!state.selected.size)return;openDialog(`<h2 id="dialog-title">${t('preview.title')}</h2><p class="lead">${tn('preview.lead',state.selected.size)}</p><div class="code-block script-preview"><pre id="generated-script">${escapeHTML(currentScript())}</pre><button class="copy-button" data-copy-block="generated-script">${icon('copy')}${t('copy.script')}</button></div><div class="detail-bottom"><button id="download-script-dialog" class="primary-button">${icon('download')}${t('preview.download')}</button><button class="text-button" data-dialog="run">${t('preview.runUndo')}</button></div>`, t('preview.eyebrow'));}
function downloadScript(){try{const blob=new Blob(['\ufeff'+currentScript()],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Winwise-Services.ps1';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);toast(t('toast.downloaded'));}catch{toast(t('toast.scriptError'));}}
async function copyText(value,button){try{await navigator.clipboard.writeText(value);const previous=button.innerHTML;button.innerHTML=icon('check')+(button.classList.contains('copy-button')?t('copy.done'):'');const originalLabel=button.getAttribute('aria-label');button.setAttribute('aria-label',t('copy.done'));setTimeout(()=>{if(button.isConnected){button.innerHTML=previous;if(originalLabel)button.setAttribute('aria-label',originalLabel);else button.removeAttribute('aria-label');}},1800);toast(t('toast.copied'));}catch{toast(t('toast.copyUnavailable'));}}
document.addEventListener('click',event=>{
  const language=event.target.closest('[data-language]');if(language){setLanguage(language.dataset.language,true);return;}
  const featureInfo=event.target.closest('[data-feature-info]');if(featureInfo){event.preventDefault();event.stopPropagation();showFeatureServices(featureInfo.dataset.featureInfo);return;}
  const view=event.target.closest('[data-view]');if(view){event.preventDefault();navigate(view.dataset.view);if(view.dataset.backupJump)jumpTo(view.dataset.backupJump);return;}
  const backupJump=event.target.closest('[data-backup-jump]');if(backupJump){event.preventDefault();jumpTo(backupJump.dataset.backupJump);return;}
  const category=event.target.closest('[data-category]');if(category){state.category=category.dataset.category;state.status='all';state.query='';$('#search').value='';setView('directory');renderDirectory();return;}
  const status=event.target.closest('[data-status]');if(status){state.status=status.dataset.status;renderDirectory();return;}
  const serviceButton=event.target.closest('[data-service]');if(serviceButton){serviceDetails(serviceButton.dataset.service);return;}
  const modal=event.target.closest('[data-dialog]');if(modal){({guide:showGuide,sources:showSources,inventory:showInventory,run:showRunInstructions})[modal.dataset.dialog]?.();return;}
  const add=event.target.closest('[data-add-script]');if(add){if(SCRIPT_IDS.includes(add.dataset.addScript)&&!state.selected.has(add.dataset.addScript))state.requested.add(add.dataset.addScript);$('#detail-dialog').close();navigate('builder');return;}
  if(event.target.closest('[data-open-builder]')){$('#detail-dialog').close();navigate('builder');return;}
  if(event.target.closest('[data-back-directory]')){navigate('directory');return;}
  const remove=event.target.closest('[data-remove-service]');if(remove){if(!companionParents(remove.dataset.removeService).length)state.requested.delete(remove.dataset.removeService);updateBuilder();return;}
  const copy=event.target.closest('[data-copy-block]');if(copy){const block=document.getElementById(copy.dataset.copyBlock);if(block)copyText(block.textContent,copy);return;}
  const copyName=event.target.closest('[data-copy-name]');if(copyName){copyText(copyName.dataset.copyName,copyName);return;}
  if(event.target.closest('#use-preset')){state.requested=new Set(CONSERVATIVE_PRESET);updateBuilder();toast(t('toast.preset'));return;}
  if(event.target.closest('#clear-selection')){state.requested.clear();updateBuilder();return;}
  if(event.target.closest('#download-script, #download-script-dialog')){downloadScript();return;}
  if(event.target.closest('#preview-script')){previewScript();return;}
  if(event.target.closest('#close-dialog')){$('#detail-dialog').close();return;}
  if(event.target.closest('#reset-filters')){state.category='all';state.status='all';state.query='';state.sort='recommended';$('#search').value='';$('#sort').value='recommended';renderDirectory();}
});
document.addEventListener('change',event=>{
  const el=event.target;
  if(el.matches('[data-feature]')){FEATURE_GROUPS.find(g=>g.id===el.dataset.feature).services.forEach(id=>{if(el.checked)state.requested.add(id);else state.requested.delete(id);});updateBuilder();}
  if(el.matches('[data-individual]')){if(el.checked&&SCRIPT_IDS.includes(el.dataset.individual)&&isScriptEligible(SERVICES.find(service=>service.id===el.dataset.individual)))state.requested.add(el.dataset.individual);else state.requested.delete(el.dataset.individual);updateBuilder();}
});
const settingsTooltip=$('.filter-tooltip');
settingsTooltip.addEventListener('pointerenter',()=>settingsTooltip.classList.remove('tooltip-dismissed'));
settingsTooltip.addEventListener('focusin',()=>settingsTooltip.classList.remove('tooltip-dismissed'));
document.addEventListener('keydown',event=>{if(event.key==='Escape')settingsTooltip.classList.add('tooltip-dismissed');});
$('#search').addEventListener('input',event=>{state.query=event.target.value;renderDirectory();});
$('#sort').addEventListener('change',event=>{state.sort=event.target.value;renderDirectory();});
$('#detail-dialog').addEventListener('click',event=>{if(event.target===$('#detail-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!$('#detail-dialog').open&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){event.preventDefault();navigate('directory');$('#search').focus();}});
document.addEventListener('keydown',event=>{const featureInfo=event.target.closest?.('[data-feature-info]');if(featureInfo&&(event.key==='Enter'||event.key===' ')){event.preventDefault();showFeatureServices(featureInfo.dataset.featureInfo);}});
window.addEventListener('hashchange',()=>setView(location.hash.slice(1)));
window.addEventListener('popstate',()=>setView(location.hash.slice(1)));
if(!window.WinwiseIntro)delete document.documentElement.dataset.intro;
applyLanguage(getInitialLanguage());renderCounts();fillIcons();renderDirectory();setView(location.hash.slice(1));
const embeddedTemplate=document.getElementById('winwise-template');(embeddedTemplate?Promise.resolve(embeddedTemplate.textContent):fetch('script-template.ps1').then(response=>{if(!response.ok)throw new Error('Template unavailable');return response.text();})).then(template=>{if(!template.startsWith('#Requires')||!template.includes('__SERVICE_NAMES__'))throw new Error('Invalid template');state.template=template;updateBuilder();}).catch(()=>{state.templateError=true;updateBuilder();});
