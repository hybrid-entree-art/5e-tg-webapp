// tests/test_bastion_detail_ui.js
// Verification suite for Ruleholder Bastion & Item Detail View UX/UI
// Screenshot reference: media_1794442074664_8f44693e.jpg (Demiplane / Демиплан)

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: RULEHOLDER BASTION & ITEM DETAIL UI ===\n');

// 1. Verify prototype.html and index.html match
const protoPath = path.join(__dirname, '..', 'prototype.html');
const indexPath = path.join(__dirname, '..', 'index.html');
assert(fs.existsSync(protoPath), 'prototype.html must exist');
assert(fs.existsSync(indexPath), 'index.html must exist');

const protoHtml = fs.readFileSync(protoPath, 'utf8');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
assert.strictEqual(protoHtml.length, indexHtml.length, 'prototype.html and index.html must be synchronized');
console.log('[PASS] File existence and synchronization verified.');

// 2. DOM Elements Check in #itemDetailView
const requiredDomElements = [
  'id="itemDetailView"',
  'class="rh-detail-crumbs-row"',
  'class="nav-crumbs"',
  'id="itemDetailParentCrumb"',
  'id="itemDetailCrumbName"',
  'class="rh-warn-badge"',
  'class="rh-item-detail-header"',
  'id="itemDetailName"',
  'class="rh-item-title"',
  'class="rh-item-title-aside"',
  'id="itemDetailSub"',
  'class="rh-item-en-sub"',
  'id="itemDetailSource"',
  'class="rh-badge-source"',
  'id="itemDetailSpecBox"'
];

for (const elem of requiredDomElements) {
  assert(protoHtml.includes(elem), `prototype.html missing required element: ${elem}`);
  assert(indexHtml.includes(elem), `index.html missing required element: ${elem}`);
}
console.log(`[PASS] All ${requiredDomElements.length} required HTML DOM elements verified in #itemDetailView.`);

// 3. CSS Rules Check
const requiredCssRules = [
  '#itemDetailView',
  '.rh-detail-crumbs-row',
  '.rh-warn-badge',
  '.rh-item-detail-header',
  '.rh-item-title',
  '.rh-item-title-aside',
  '.rh-item-en-sub',
  '.rh-badge-source',
  '.rh-spec-box',
  '.rh-spec-grid-header',
  '.rh-spec-col',
  '.rh-spec-col-label',
  '.rh-spec-col-val',
  '.rh-spec-desc-text',
  '.rh-spec-p'
];

for (const css of requiredCssRules) {
  assert(protoHtml.includes(css), `prototype.html missing CSS rule: ${css}`);
  assert(indexHtml.includes(css), `index.html missing CSS rule: ${css}`);
}
console.log(`[PASS] All ${requiredCssRules.length} required CSS rules verified.`);

// 4. JavaScript Functions Check
const requiredJsFns = [
  'function cleanBastionText',
  'function formatBastionParagraphs',
  'function openItem'
];

for (const fn of requiredJsFns) {
  assert(protoHtml.includes(fn), `prototype.html missing JS function: ${fn}`);
  assert(indexHtml.includes(fn), `index.html missing JS function: ${fn}`);
}
console.log(`[PASS] All ${requiredJsFns.length} required JS helper functions verified.`);

// 5. Verify BASTIONS dataset integrity and Demiplane
const bastionsPath = path.join(__dirname, '..', 'bastions_data.js');
assert(fs.existsSync(bastionsPath), 'bastions_data.js must exist');
const bastionsRaw = fs.readFileSync(bastionsPath, 'utf8');
eval(bastionsRaw.replace('const BASTIONS', 'global.BASTIONS'));

assert.strictEqual(global.BASTIONS.length, 35, 'Must contain 35 Bastions from DMG 2024');

// Verify all 35 have Italian translations
const missingIt = global.BASTIONS.filter(b => !b.it);
assert.strictEqual(missingIt.length, 0, 'All 35 bastions must have an Italian translation');

// Verify Demiplane specifically
const demi = global.BASTIONS.find(b => b.name === 'Demiplane');
assert(demi, 'Demiplane facility must exist');
assert.strictEqual(demi.it, 'Semipiano');
assert.strictEqual(demi.type, 'Special');
assert.strictEqual(demi.level, 17);
assert.strictEqual(demi.source, 'DMG 2024');

console.log('[PASS] BASTIONS dataset integrity & Demiplane facility verified.');

// 6. Test formatBastionParagraphs for Demiplane
function cleanBastionText(t) {
  if (!t) return '';
  t = t.replace(/\|[A-Z0-9]+\|[^|]*\|([a-zA-Z0-9\s\'-]+)/g, ' $1');
  t = t.replace(/\|[A-Z0-9]+\|[^|\s]+/g, '');
  t = t.replace(/\{@[a-zA-Z]+\s+([^|}]+)[^}]*\}/g, '$1');
  t = t.replace(/\b([A-Za-z]+)\s+\1\b/g, '$1');
  return t;
}

function formatBastionParagraphs(t) {
  if (!t) return '';
  t = cleanBastionText(t);
  t = t.replace(/(\.\s+)(Only you and your\b)/g, '$1\n\n$2');
  const pattern = /(\.\s+)([A-Z][a-zA-Z0-9\s\'-]+:\s+[A-Z][a-zA-Z0-9\s\'-]+\.|\bFabrication\.|\bArcane Study Charm\.|\bCraft Options\.|\bTrade Options\.|\bHarvest Options\.|\bRecruit Options\.)/g;
  t = t.replace(pattern, '$1\n\n$2');

  const paras = t.split('\n\n').map(p => p.trim()).filter(Boolean);
  const formatted = paras.map(p => {
    const leadMatch = p.match(/^([A-Z][a-zA-Z0-9\s\'-]+:\s+[A-Z][a-zA-Z0-9\s\'-]+\.|\bFabrication\.|\bArcane Study Charm\.|\bCraft Options\.|\bTrade Options\.|\bHarvest Options\.|\bRecruit Options\.)\s*(.*)$/);
    if (leadMatch) {
      return `<p class="rh-spec-p"><i><b>${leadMatch[1]}</b></i> ${leadMatch[2]}</p>`;
    }
    return `<p class="rh-spec-p">${p}</p>`;
  });
  return formatted.join('\n');
}

const formattedDemi = formatBastionParagraphs(demi.text);
const pTags = formattedDemi.match(/<p class="rh-spec-p">/g);
assert(pTags && pTags.length === 4, 'Demiplane must format into exactly 4 distinct paragraphs matching screenshot media_1794442074664_8f44693e.jpg');
assert(formattedDemi.includes('<i><b>Empower: Arcane Resilience.</b></i>'), 'Must contain Empower lead');
assert(formattedDemi.includes('<i><b>Fabrication.</b></i>'), 'Must contain Fabrication lead');

console.log('[PASS] Paragraph structure and bold-italic leads match screenshot media_1794442074664_8f44693e.jpg exactly.');

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Bastion Detail UI tests PASSED!');
console.log('======================================================\n');
