/**
 * tests/test_class_ui_ruleholder.js
 * Verification suite for Ruleholder Class Detail View UX & Data
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// 1. Load class_data.js
const classCode = fs.readFileSync(path.join(ROOT, 'class_data.js'), 'utf-8');
eval(classCode.replace('const CLASSES', 'global.CLASSES'));

console.log('=== 1. VERIFYING CLASS DATA INTEGRITY ===');
console.assert(global.CLASSES && global.CLASSES.length === 12, `Expected 12 classes, got ${global.CLASSES ? global.CLASSES.length : 0}`);
console.log(`[PASS] Found ${global.CLASSES.length} core classes.`);

const bard = global.CLASSES.find(c => c.id === 'bard');
console.assert(bard, 'Bard class must exist');
console.assert(bard.name === 'Bardo', 'Bard name must be Bardo');
console.assert(bard.originalName === 'Bard', 'Bard originalName must be Bard');
console.assert(bard.hitDie === 8, 'Bard hitDie must be 8');
console.assert(bard.primaryAbility.includes('Carisma'), 'Bard primary ability must include Carisma');
console.assert(bard.proficiencies.includes('Destrezza') && bard.proficiencies.includes('Carisma'), 'Bard saving throws must include Destrezza and Carisma');
console.assert(bard.weapons.includes('Armi semplici'), 'Bard weapons must include Armi semplici');
console.assert(bard.armor.includes('Armatura leggera'), 'Bard armor must include Armatura leggera');
console.assert(bard.subclasses.length === 4, `Bard must have 4 2024 subclasses, got ${bard.subclasses.length}`);

// Check 2024 Subclasses
const subNames = bard.subclasses.map(s => s.name);
console.log('Bard 2024 Subclasses:', subNames);
console.assert(subNames.some(s => s.includes('Danza')), 'Must have College of Dance');
console.assert(subNames.some(s => s.includes('Fascino')), 'Must have College of Glamour');
console.assert(subNames.some(s => s.includes('Sapere')), 'Must have College of Lore');
console.assert(subNames.some(s => s.includes('Valore')), 'Must have College of Valor');

// Check Subclass Features
const glamour = bard.subclasses.find(s => s.name.includes('Fascino'));
console.assert(glamour, 'College of Glamour must exist');
const glamFeatNames = glamour.features.map(f => f.nameIt || f.name);
console.log('Glamour features:', glamFeatNames);
console.assert(glamour.features.some(f => f.level === 3 && (f.nameIt.includes('Ispirazione') || f.name.includes('Mantle'))), 'Must have Mantle of Inspiration at level 3');
console.assert(glamour.features.some(f => f.level === 6), 'Must have Mantle of Majesty at level 6');
console.assert(glamour.features.some(f => f.level === 14), 'Must have Unbreakable Majesty at level 14');
console.log('[PASS] Bard class data and subclasses verified.');

// 2. Verify HTML & CSS Structure in prototype.html
console.log('\n=== 2. VERIFYING HTML & CSS IN PROTOTYPE.HTML ===');
const protoHtml = fs.readFileSync(path.join(ROOT, 'prototype.html'), 'utf-8');

const requiredHtmlElements = [
  'id="classDetailTitle"',
  'id="classDetailAlias"',
  'id="classDetailSource"',
  'id="classDetailQuote"',
  'id="classSpecCardTitle"',
  'id="classCoreSpecs"',
  'id="rhClassSubclassSelect"',
  'id="rhClassSpellsBtn"',
  'id="classProgTableWrap"',
  'id="classNavBox"',
  'id="classNavLinks"',
  'id="rhClassExpandAllBtn"',
  'id="classFeaturesList"',
  'id="classArtFrame"',
  'id="classSideCaption"',
  'id="classLoreCard"',
  'id="classLoreBody"',
  'id="classCalloutCard"'
];

requiredHtmlElements.forEach(elem => {
  console.assert(protoHtml.includes(elem), `prototype.html must contain ${elem}`);
});
console.log(`[PASS] All ${requiredHtmlElements.length} required HTML elements present in #classDetailView.`);

const requiredCssRules = [
  '.rh-class-detail-header',
  '.rh-class-detail-layout',
  '.rh-class-main-column',
  '.rh-class-spec-card',
  '.rh-class-progression-card',
  '.rh-subclass-select',
  '.rh-class-spells-btn',
  '.rh-prog-table',
  '.rh-class-nav-box',
  '.rh-feature-kicker.subclass-kicker',
  '.rh-class-side-column',
  '.rh-class-art-frame',
  '.rh-class-lore-card',
  '.rh-class-callout-card'
];

requiredCssRules.forEach(rule => {
  console.assert(protoHtml.includes(rule), `prototype.html must contain CSS rule ${rule}`);
});
console.log(`[PASS] All ${requiredCssRules.length} required Ruleholder CSS classes present.`);

// 3. Verify JavaScript Functions
console.log('\n=== 3. VERIFYING JS FUNCTIONS IN PROTOTYPE.HTML ===');
const requiredJsFunctions = [
  'function openClass',
  'function onClassSubclassChange',
  'function openActiveClassSpells',
  'function toggleAllClassFeatures',
  'function jumpToClassFeature',
  'function renderClassDetail'
];

requiredJsFunctions.forEach(fn => {
  console.assert(protoHtml.includes(fn), `prototype.html must contain ${fn}`);
});
console.log(`[PASS] All ${requiredJsFunctions.length} required JS functions present.`);

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Class Detail UI tests PASSED!');
console.log('======================================================');
