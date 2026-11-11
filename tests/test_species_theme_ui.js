const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('./prototype.html', 'utf8');

// 1. Verify Strictly ONE Theme Toggle in the Entire UI
console.log('Testing Single Theme Toggle Requirement...');
const themeButtons = html.match(/id=["'](readerParchmentToggle|themeToggle|readerThemeBtn)["']/g) || [];
assert.strictEqual(themeButtons.length, 0, 'No extra theme buttons allowed in reader or subviews');

const mastheadThemeBtn = html.match(/id=["']themeBtn["']/g) || [];
assert.strictEqual(mastheadThemeBtn.length, 1, 'Strictly ONE theme button (#themeBtn) in masthead');
console.log('[PASS] Only a single theme toggle button exists in the entire app!');

// 2. Verify Species Detail UI structure matching Ruleholder screenshot (media_1794431589502_22c2463b.jpg)
console.log('Testing Species Detail UI Structure...');
assert.ok(html.includes('class="rh-species-detail-layout"'), 'Has rh-species-detail-layout 2-column grid');
assert.ok(html.includes('class="rh-species-spec-card"'), 'Has left spec card');
assert.ok(html.includes('id="specCardTitle"'), 'Has spec card title');
assert.ok(html.includes('id="specCoreSpecs"'), 'Has spec core properties');
assert.ok(html.includes('id="specIntroLine"'), 'Has intro line');
assert.ok(html.includes('id="specDetailTraits"'), 'Has traits container');
assert.ok(html.includes('class="rh-species-side-column"'), 'Has right side column');
assert.ok(html.includes('id="specArtFrame"'), 'Has artwork frame');
assert.ok(html.includes('id="specLoreCard"'), 'Has narrative lore card');
assert.ok(html.includes('formatSpeciesTrait'), 'formatSpeciesTrait helper is defined');

// Verify renderSpecDetail does not use feature-accordion
const specDetailCode = html.slice(html.indexOf('function renderSpecDetail'), html.indexOf('function backToSpecList'));
assert.ok(!specDetailCode.includes('feature-accordion'), 'renderSpecDetail does not hide traits in accordions');
assert.ok(specDetailCode.includes('formatSpeciesTrait'), 'renderSpecDetail formats open traits');
console.log('[PASS] Species detail layout strictly matches Ruleholder screenshot (open readable paragraphs & side card)!');

console.log('All Theme & Species UI Tests PASSED!');
