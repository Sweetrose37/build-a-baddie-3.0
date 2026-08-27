import { sections, presets, defaults, getFieldsForSection, shouldShowField, paletteFor, isGameDay, teamColorsFor, gameDayExpressionFor } from './data.js';

const $ = selector => document.querySelector(selector);
const nav = $('#sectionNav');
const fieldGrid = $('#fieldGrid');
const storageKeys = { state: 'baddie3-state', saved: 'baddie3-saved' };
const cloneDefaults = () => structuredClone(defaults);

const sectionHeadlines = {
  her: ['THE FOUNDATION', 'Build <em>her.</em>'],
  face: ['BEAUTY + CROWN', 'Frame the <em>face.</em>'],
  fashion: ['HEAD-TO-TOE LOOK', 'Style the <em>fashion.</em>'],
  attitude: ['POSE + ENERGY', 'Give her <em>attitude.</em>'],
  art: ['THE CREATIVE VISION', 'Direct the <em>art.</em>'],
  production: ['MAKE IT USABLE', 'Finish the <em>recipe.</em>']
};

const controlGroups = {
  her: [
    { id:'core', label:'Core', keys:['world','age','body','complexion','occasion'] },
    { id:'details', label:'Details', keys:['bodyArt','height','piercings'] },
    { id:'holiday', label:'Holiday', keys:['holiday','holidayVibe','holidayIntensity','holidayPalette','holidayFashion','holidayProps','holidayEnvironment','holidayTypography','holidayPhrase','holidayBeauty','holidayCustomPalette'] },
    { id:'game', label:'Game Day', game:true }
  ],
  face: [
    { id:'hair', label:'Hair', keys:['hairFamily','hairStyle','hairLength','texture','hairColor'] },
    { id:'features', label:'Features', keys:['faceShape','eyes'] },
    { id:'beauty', label:'Beauty', keys:['makeup','nails','beautyDetails'] },
    { id:'game', label:'Game Day', game:true }
  ],
  fashion: [
    { id:'direction', label:'Direction', keys:['fashionDirection','silhouette','material','fit','fashionColor'] },
    { id:'garments', label:'Garments', keys:['top','bottom','onePiece','outerwear','garmentLength','layering','pattern'] },
    { id:'finishers', label:'Finishers', keys:['footwear','jewelry','jewelryMaterial','wristwear','rings','accessory','prop'] },
    { id:'game', label:'Game Day', game:true }
  ],
  attitude: [
    { id:'energy', label:'Energy', keys:['attitude','expressionCategory','expression'] },
    { id:'pose', label:'Pose', keys:['poseCategory','pose','typeInteraction'] },
    { id:'game', label:'Game Day', game:true }
  ],
  art: [
    { id:'visual', label:'Visual Style', keys:['artStyle','palette','customPalette','composition','camera','lighting'] },
    { id:'layout', label:'Layout', keys:['designArchitecture','subjectPlacement','detailPlacement','visualDensity'] },
    { id:'world', label:'World', keys:['atmosphere','background'] },
    { id:'type', label:'Typography', keys:['includeTypography','typography','exactPhrase'] },
    { id:'game', label:'Game Day', game:true }
  ],
  production: [
    { id:'output', label:'Output', keys:['productionMode','detail','outputShape','qualityNotes'] },
    { id:'game', label:'Game Day', game:true }
  ]
};

const isGameField = key => key.startsWith('gameDay') || ['footballMode','teamPaletteType','teamColors'].includes(key);

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.state));
    if (!saved) return null;
    const section = sections.some(item => item.id === saved.section) ? saved.section : 'her';
    const visited = new Set((saved.visited || []).filter(id => sections.some(item => item.id === id)));
    visited.add(section);
    return {
      section,
      mode: saved.mode === 'quick' ? 'quick' : 'studio',
      values: { ...cloneDefaults(), ...(saved.values || {}) },
      locks: new Set(saved.locks || []),
      visited,
      activeGroups: { ...(saved.activeGroups || {}) }
    };
  } catch { return null; }
}

const state = restore() || { section: 'her', mode: 'studio', values: cloneDefaults(), locks: new Set(), visited: new Set(['her']), activeGroups: {} };

function persist() {
  try { localStorage.setItem(storageKeys.state, JSON.stringify({ ...state, locks: [...state.locks], visited: [...state.visited] })); } catch {}
}

function getSaved() {
  try { return JSON.parse(localStorage.getItem(storageKeys.saved)) || []; } catch { return []; }
}

function setSaved(items) {
  try { localStorage.setItem(storageKeys.saved, JSON.stringify(items)); } catch {}
  updateSavedBadge();
}

let toastTimer;
function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2400);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
}

function renderNav() {
  nav.innerHTML = sections.map(section => `
    <button class="nav-item ${state.section === section.id ? 'active' : ''}" data-section="${section.id}" aria-current="${state.section === section.id ? 'step' : 'false'}">
      <span>${section.number}</span><b>${section.label}<small>${section.note}</small></b><i>${section.icon}</i>
    </button>`).join('');
}

function renderPresets() {
  $('#presetList').innerHTML = presets.map((preset, index) => `<button class="preset" data-preset="${index}"><span>${preset.emoji}</span>${preset.name}</button>`).join('');
}

function colorControl(field, value) {
  const colors = Array.isArray(value) ? value : ['#153ee8', '#ff5d47', '#f4eddf'];
  return `<div class="color-grid">${colors.map((color, index) => `
    <label class="color-chip"><input type="color" data-color-key="${field.key}" data-color-index="${index}" value="${color}"><span style="background:${color}"></span><b>${color.toUpperCase()}</b></label>`).join('')}</div>`;
}

function renderField(field) {
  const value = state.values[field.key] ?? '';
  const locked = state.locks.has(field.key);
  let control = '';
  if (field.type === 'text') {
    const placeholder = field.key.includes('Phrase') || field.key === 'exactPhrase' ? 'Type exact wording or leave blank…' : 'Optional detail…';
    control = `<input id="field-${field.key}" data-key="${field.key}" value="${escapeHtml(value)}" placeholder="${placeholder}" maxlength="160">`;
  } else if (field.type === 'textarea') {
    control = `<textarea id="field-${field.key}" data-key="${field.key}" placeholder="Add production notes, exclusions, or must-keep details…" maxlength="700">${escapeHtml(value)}</textarea>`;
  } else if (field.type === 'colors' || field.type === 'teamColors') {
    control = colorControl(field, value);
  } else {
    control = `<div class="select-wrap"><select id="field-${field.key}" data-key="${field.key}">${field.options.map(option => `<option ${value === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select><span>${field.options.length}</span></div>`;
  }
  return `<article class="field-card ${field.wide ? 'wide' : ''} ${locked ? 'is-locked' : ''}" data-field-card="${field.key}">
    <label for="field-${field.key}"><b>${escapeHtml(field.label)}</b><small>${escapeHtml(field.hint)}</small></label>
    <button class="lock ${locked ? 'active' : ''}" data-lock="${field.key}" aria-label="${locked ? 'Unlock' : 'Lock'} ${escapeHtml(field.label)}" title="${locked ? 'Unlock' : 'Lock'} this choice">${locked ? '●' : '○'}</button>
    ${control}
  </article>`;
}

function allVisibleFields() {
  return getFieldsForSection(state.section, state.values).filter(field => shouldShowField(field, state.values, state.mode));
}

function groupsForCurrentSection() {
  const available = allVisibleFields();
  return (controlGroups[state.section] || []).map(group => ({
    ...group,
    fields: available.filter(field => group.game ? isGameField(field.key) : group.keys.includes(field.key))
  })).filter(group => group.fields.length);
}

function currentControlGroup() {
  const groups = groupsForCurrentSection();
  const requested = state.activeGroups[state.section];
  const active = groups.find(group => group.id === requested) || groups[0];
  if (active) state.activeGroups[state.section] = active.id;
  return { groups, active };
}

function renderControlGroupNav(groups, active) {
  $('#controlGroupNav').innerHTML = groups.map(group => `
    <button class="control-group-button ${group.id === active?.id ? 'active' : ''}" data-control-group="${group.id}">
      <span>${group.label}</span><b>${group.fields.length}</b>
    </button>`).join('');
}

function renderWorkspace() {
  const index = sections.findIndex(section => section.id === state.section);
  const [kicker, title] = sectionHeadlines[state.section];
  const { groups, active } = currentControlGroup();
  const activeFields = active?.fields || [];
  $('#sectionKicker').textContent = `${sections[index].number} — ${kicker}`;
  $('#sectionTitle').innerHTML = title;
  $('#sectionProgress').textContent = `${index + 1} of ${sections.length} · ${active?.label || 'Controls'} · ${activeFields.length} controls`;
  $('#prevBtn').disabled = index === 0;
  $('#prevBtn').style.opacity = index === 0 ? '.4' : '1';
  $('#nextBtn').innerHTML = index === sections.length - 1 ? 'Make recipe <span>✦</span>' : 'Next section <span>→</span>';
  renderControlGroupNav(groups, active);
  fieldGrid.innerHTML = activeFields.map(renderField).join('');
  const progress = Math.round((state.visited.size / sections.length) * 100);
  $('#completionText').textContent = `${progress}% styled`;
  $('#completionBar').style.width = `${progress}%`;
}

function renderMode() {
  document.querySelectorAll('[data-mode]').forEach(button => button.classList.toggle('active', button.dataset.mode === state.mode));
}

function renderPreview() {
  const v = state.values;
  const colors = paletteFor(v).filter(Boolean);
  $('#paletteDots').innerHTML = colors.map(color => `<i style="background:${color}"></i>`).join('');
  const attitude = isGameDay(v) ? v.gameDayAttitude : v.attitude;
  $('#attitudeSticker').innerHTML = escapeHtml(attitude || 'MAIN CHARACTER').toUpperCase().replace(/\s+/, '<br>');
  $('#museCaption').textContent = isGameDay(v) ? v.footballMode : v.world;
  $('#lookCaption').textContent = isGameDay(v) ? v.gameDayTop : v.fashionDirection;
  const ingredients = isGameDay(v) ? [v.gameDayHair, v.gameDayMakeup, v.gameDayEnvironment] : [v.hairFamily, v.makeup, v.occasion];
  $('#ingredientRow').innerHTML = ingredients.filter(Boolean).map(item => `<span class="ingredient">${escapeHtml(item)}</span>`).join('');
  $('.look-panel').style.background = colors[1] || '#ff5d47';
  const portrait = $('#portraitWrap img');
  const lighting = String(v.lighting || '');
  portrait.style.filter = lighting.includes('Rim') ? 'saturate(1.22) contrast(1.08)' : lighting.includes('Golden') || lighting.includes('Warm') ? 'sepia(.12) saturate(1.12)' : lighting.includes('Dramatic') ? 'contrast(1.18) brightness(.9)' : lighting.includes('Soft') ? 'brightness(1.04) saturate(.92)' : 'none';
  const pose = isGameDay(v) ? v.gameDayPose : v.pose;
  portrait.style.transform = String(pose).toLowerCase().includes('low-angle') ? 'scale(1.08) translateY(-1%)' : String(v.camera).toLowerCase().includes('close') ? 'scale(1.14)' : 'scale(1.01)';
}

function render() {
  renderNav();
  renderPresets();
  renderWorkspace();
  renderMode();
  renderPreview();
  persist();
}

function moveSection(delta) {
  const index = sections.findIndex(section => section.id === state.section);
  const next = index + delta;
  if (next >= sections.length) return openRecipe();
  if (next < 0) return;
  state.section = sections[next].id;
  state.visited.add(state.section);
  render();
  if (window.innerWidth < 700) $('#builder').scrollIntoView({ behavior: 'smooth' });
}

function randomOption(field, bold = false) {
  if (!field.options?.length) return state.values[field.key];
  const alternatives = field.options.filter(option => option !== state.values[field.key] && (!bold || option !== 'Surprise Me'));
  return alternatives[Math.floor(Math.random() * alternatives.length)] || field.options[0];
}

function randomizeGroup(group, bold) {
  group.forEach(field => {
    if (state.locks.has(field.key) || ['text', 'textarea', 'colors', 'teamColors'].includes(field.type)) return;
    state.values[field.key] = randomOption(field, bold);
  });
}

function remix(scope = 'all', bold = false) {
  if (scope === 'all') {
    sections.forEach(section => randomizeGroup(getFieldsForSection(section.id, state.values), bold));
  } else {
    randomizeGroup(getFieldsForSection(scope, state.values), bold);
  }
  state.visited = new Set(sections.map(section => section.id));
  render();
  toast(bold ? 'Bad girl behavior activated. Every unlocked choice got bolder.' : 'Fresh look remixed — locks stayed put.');
}

function badGirlRemix() {
  remix('all', true);
  const panel = $('.look-card');
  panel.classList.remove('act-up');
  requestAnimationFrame(() => panel.classList.add('act-up'));
  setTimeout(() => panel.classList.remove('act-up'), 700);
}

function applyPreset(index) {
  const preset = presets[index];
  if (!preset) return;
  Object.entries(preset.picks).forEach(([key, value]) => { if (!state.locks.has(key)) state.values[key] = value; });
  render();
  toast(`${preset.name} applied.`);
}

function formatValue(value) {
  if (Array.isArray(value)) return value.join(', ');
  return String(value ?? '').trim();
}

function sectionDirection(section) {
  const lines = getFieldsForSection(section.id, state.values)
    .filter(field => shouldShowField(field, state.values, 'studio'))
    .map(field => [field.label, formatValue(state.values[field.key])])
    .filter(([, value]) => value && value !== 'None' && value !== 'Surprise Me')
    .map(([label, value]) => `${label}: ${value}`);
  return `${section.label.toUpperCase()} DIRECTION\n${lines.join('\n') || 'Use tasteful surprise-me direction consistent with the rest of the build.'}`;
}

function compileRecipe() {
  const v = state.values;
  const colors = paletteFor(v).join(', ');
  const typeDirection = v.includeTypography === 'No — Image Only'
    ? 'Typography is disabled. Include no words, letters, numbers, signs, labels, or decorative letterforms.'
    : v.exactPhrase?.trim()
      ? `Render “${v.exactPhrase.trim()}” exactly once and no other wording, using ${v.typography}. Keep it legible and subordinate to the woman.`
      : `Use ${v.typography} only if it strengthens the composition; create one short original phrase and render it once.`;
  const holidayDirection = v.holiday !== 'None' ? `The ${v.holiday} influence must support the selected ${v.holidayVibe} story without replacing the woman, becoming costume-like, or overcrowding the scene.` : '';
  const production = v.productionMode === 'DTF / Shirt Artwork'
    ? 'Prepare isolated apparel-ready artwork with a genuinely transparent background, clean print-safe edges, strong silhouette, no rectangular backdrop, haze, tiny debris, or physical shirt mockup.'
    : v.productionMode === 'Sticker'
      ? 'Create a compact sticker-ready outer silhouette with a clean die-cut border and no photographed sticker mockup.'
      : `Format as ${v.outputShape} regular artwork with ${v.detail} and background mode ${v.background}.`;
  const gameDay = isGameDay(v) ? `\n\nGAME-DAY ACCURACY + IP LOCK\nAny American football must be a recognizable pointed oval with believable panels and centered lengthwise laces. Any helmet, field marking, goalpost, scoreboard, or turf must be structurally coherent. Use only original, generic football styling. No NFL, NCAA, school, professional-team, sportswear, or luxury-brand logos; no copied uniforms, mascots, slogans, helmet marks, stadium trade dress, or identity-defining color arrangements.` : '';
  return `BUILD A BADDIE 3.0 — PRODUCTION-READY CREATIVE RECIPE

PRIMARY REQUEST
Create one original, fashion-forward image of a glamorous adult Black woman in her ${v.age}. Present her as ${v.body}, with a ${v.complexion} complexion and ${v.height}. Her world is ${v.world}, built around a ${v.occasion} lifestyle moment. Keep her identity specific, human, confident, unmistakably adult, and free from caricature, tokenism, age ambiguity, or body homogenization.

${sections.map(sectionDirection).join('\n\n')}

COLOR SPECIFICATION
Use ${v.palette} with these working colors: ${colors}. Apply color intentionally across wardrobe, typography, props, and environment without muddying skin tone.

TYPOGRAPHY RULE
${typeDirection}

COHESION RULE
Resolve any conflicting selections in favor of a believable adult woman, the chosen production mode, clean fashion hierarchy, physical realism, and the selected art direction. Keep props edited, separated, and subordinate. ${holidayDirection}

OUTPUT RULE
${production}

ANATOMY + QUALITY HARD LOCK
Exactly one head, one torso, two arms, two hands, two legs, and two feet unless naturally outside the crop. Five fingers per visible hand. No duplicate faces, extra limbs, fused fingers, backward joints, disconnected body parts, impossible grips, melted accessories, warped footwear, or clothing merged into skin. Keep facial features coherent, both eyes aligned, jewelry intentional, fabrics believable, and text correctly spelled. No watermark, UI chrome, generation artifacts, or unintended text.

ORIGINALITY HARD LOCK
Create an entirely original person, outfit, setting, typography treatment, and composition. Do not imitate a living artist or celebrity. No copyrighted characters, third-party logos, trademarked slogans, recognizable branded products, or copied campaign layouts.${gameDay}${v.qualityNotes?.trim() ? `\n\nDIRECTOR'S PRODUCTION NOTES\n${v.qualityNotes.trim()}` : ''}`;
}

function openRecipe() {
  const recipe = compileRecipe();
  $('#recipeText').textContent = recipe;
  const tags = [state.values.world, isGameDay(state.values) ? state.values.gameDayAttitude : state.values.attitude, isGameDay(state.values) ? state.values.gameDayArtStyle : state.values.artStyle, state.values.productionMode];
  $('#recipeTags').innerHTML = tags.filter(Boolean).map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  $('#recipeDialog').showModal();
}

async function copyRecipe() {
  const text = $('#recipeText').textContent || compileRecipe();
  try { await navigator.clipboard.writeText(text); }
  catch {
    const area = document.createElement('textarea');
    area.value = text; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); area.select(); document.execCommand('copy'); area.remove();
  }
  toast('Recipe copied to your clipboard.');
}

async function shareRecipe() {
  const data = { title: 'My Build a Baddie 3.0 Recipe', text: $('#recipeText').textContent || compileRecipe() };
  if (navigator.share) {
    try { await navigator.share(data); } catch (error) { if (error.name !== 'AbortError') toast('Sharing is not available right now.'); }
  } else { await copyRecipe(); }
}

function downloadRecipe() {
  const blob = new Blob([$('#recipeText').textContent || compileRecipe()], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `baddie-${String(state.values.world).toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  toast('Recipe downloaded.');
}

function saveCurrent() {
  const items = getSaved();
  const item = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), created: new Date().toISOString(), values: structuredClone(state.values), locks: [...state.locks] };
  items.unshift(item);
  setSaved(items.slice(0, 30));
  $('#saveBtn').classList.add('saved');
  $('#saveBtn').textContent = '♥';
  toast('Look saved to your private archive.');
}

function updateSavedBadge() { $('#savedBadge').textContent = getSaved().length; }

function renderSaved() {
  const items = getSaved();
  $('#savedGrid').innerHTML = items.length ? items.map(item => `
    <article class="saved-card">
      <small>${new Date(item.created).toLocaleDateString(undefined, { month:'short', day:'numeric', year:'numeric' }).toUpperCase()}</small>
      <h3>${escapeHtml(item.values.world || 'Baddie Build')}</h3>
      <p>${escapeHtml(item.values.fashionDirection || '')} · ${escapeHtml(item.values.attitude || '')}</p>
      <div><button type="button" data-load-saved="${item.id}">Load look</button><button type="button" data-delete-saved="${item.id}" aria-label="Delete saved look">Delete</button></div>
    </article>`).join('') : '<div class="saved-empty">No saved looks yet. Build something undeniable, then tap the heart.</div>';
}

function loadSaved(id) {
  const item = getSaved().find(saved => saved.id === id);
  if (!item) return;
  state.values = { ...cloneDefaults(), ...item.values };
  state.locks = new Set(item.locks || []);
  state.visited = new Set(sections.map(section => section.id));
  $('#savedDialog').close();
  render();
  toast('Saved look loaded.');
}

function deleteSaved(id) {
  setSaved(getSaved().filter(item => item.id !== id));
  renderSaved();
  toast('Saved look removed.');
}

function applySelection(key, value) {
  state.values[key] = value;
  if (key === 'holiday' && value === 'Surprise Me') {
    const holidayField = getFieldsForSection('her', state.values).find(field => field.key === 'holiday');
    const choices = holidayField.options.filter(option => !['None', 'Surprise Me'].includes(option));
    state.values.holidayResolved = choices[Math.floor(Math.random() * choices.length)];
  }
  if (key === 'expressionCategory' && !state.locks.has('expression')) state.values.expression = 'Surprise Me';
  if (key === 'poseCategory' && !state.locks.has('pose')) state.values.pose = 'Surprise Me';
  if (key === 'teamPaletteType' && !['Surprise Me', 'Custom'].includes(value) && !state.locks.has('teamColors')) state.values.teamColors = teamColorsFor(value);
  if (key === 'gameDayAttitude' && !state.locks.has('gameDayExpression')) {
    const matchedExpression = gameDayExpressionFor(value);
    if (matchedExpression) state.values.gameDayExpression = matchedExpression;
  }
}

document.addEventListener('click', event => {
  const section = event.target.closest('[data-section]');
  if (section) { state.section = section.dataset.section; state.visited.add(state.section); render(); return; }
  const mode = event.target.closest('[data-mode]');
  if (mode) { state.mode = mode.dataset.mode; render(); return; }
  const preset = event.target.closest('[data-preset]');
  if (preset) { applyPreset(Number(preset.dataset.preset)); return; }
  const controlGroup = event.target.closest('[data-control-group]');
  if (controlGroup) { state.activeGroups[state.section] = controlGroup.dataset.controlGroup; render(); return; }
  const lock = event.target.closest('[data-lock]');
  if (lock) { const key = lock.dataset.lock; state.locks.has(key) ? state.locks.delete(key) : state.locks.add(key); render(); return; }
  const load = event.target.closest('[data-load-saved]');
  if (load) { loadSaved(load.dataset.loadSaved); return; }
  const remove = event.target.closest('[data-delete-saved]');
  if (remove) deleteSaved(remove.dataset.deleteSaved);
});

fieldGrid.addEventListener('change', event => {
  if (event.target.dataset.colorKey) return;
  const key = event.target.dataset.key;
  if (!key) return;
  applySelection(key, event.target.value);
  render();
});

fieldGrid.addEventListener('input', event => {
  if (event.target.dataset.colorKey) {
    const key = event.target.dataset.colorKey;
    const index = Number(event.target.dataset.colorIndex);
    const colors = [...(state.values[key] || [])];
    colors[index] = event.target.value;
    state.values[key] = colors;
    renderPreview(); persist();
    event.target.closest('.color-chip').querySelector('span').style.background = event.target.value;
    event.target.closest('.color-chip').querySelector('b').textContent = event.target.value.toUpperCase();
    return;
  }
  const key = event.target.dataset.key;
  if (!key) return;
  state.values[key] = event.target.value;
  renderPreview();
  persist();
});

$('#prevBtn').addEventListener('click', () => moveSection(-1));
$('#nextBtn').addEventListener('click', () => moveSection(1));
$('#shuffleBtn').addEventListener('click', () => remix('all'));
$('#newLookBtn').addEventListener('click', () => { state.locks.clear(); remix('all'); });
$('#badGirlBtn').addEventListener('click', badGirlRemix);
$('#makeBtn').addEventListener('click', openRecipe);
$('#saveBtn').addEventListener('click', saveCurrent);
$('#copyBtn').addEventListener('click', copyRecipe);
$('#shareBtn').addEventListener('click', shareRecipe);
$('#downloadBtn').addEventListener('click', downloadRecipe);
$('#savedBtn').addEventListener('click', () => { renderSaved(); $('#savedDialog').showModal(); });

document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));

let installPrompt;
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; $('#installBtn').hidden = false; });
$('#installBtn').addEventListener('click', async () => {
  if (installPrompt) { installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; $('#installBtn').hidden = true; }
  else $('#installDialog').showModal();
});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));

updateSavedBadge();
render();
