// tests/test_reader_ui_ruleholder.js
// Verification suite for Ruleholder Interactive Manual Reader UX & UI
// Screenshot reference: media_1794441659988_e723283c.jpg

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: RULEHOLDER MANUAL READER UX & UI ===\n');

// 1. Verify prototype.html and index.html match and exist
const protoPath = path.join(__dirname, '..', 'prototype.html');
const indexPath = path.join(__dirname, '..', 'index.html');

assert(fs.existsSync(protoPath), 'prototype.html must exist');
assert(fs.existsSync(indexPath), 'index.html must exist');

const protoHtml = fs.readFileSync(protoPath, 'utf8');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert.strictEqual(protoHtml.length, indexHtml.length, 'prototype.html and index.html must have identical lengths');

console.log('[PASS] File existence and synchronization verified between prototype.html and index.html.');

// 2. HTML DOM Elements Check
const requiredHtmlElements = [
  'id="bookReaderView"',
  'class="nav-crumbs"',
  'id="readerBookCrumb"',
  'id="readerBackBtn"',
  'id="readerSourceBadge"',
  'id="readerBookHeading"',
  'id="readerModeTOC"',
  'id="readerTocOverview"',
  'id="readerTocGrid"',
  'id="readerSplitView"',
  'class="rh-reader-container"',
  'id="readerSidebar"',
  'class="rh-reader-sidebar"',
  'class="rh-reader-stepper"',
  'id="prevChapterBtn"',
  'id="readerTocBtn"',
  'id="nextChapterBtn"',
  'id="readerNavTree"',
  'class="rh-reader-accordion"',
  'class="rh-reader-main"',
  'class="rh-reader-mobile-bar"',
  'id="readerMobileActiveChapter"',
  'id="readerArticlePane"',
  'class="rh-reader-sheet"',
  'id="readerChapterFooter"',
  'class="rh-reader-chapter-footer"',
  'id="footerPrevBtn"',
  'id="footerNextBtn"',
  'id="footerPrevTitle"',
  'id="footerNextTitle"'
];

for (const elem of requiredHtmlElements) {
  assert(protoHtml.includes(elem), `prototype.html missing required DOM element: ${elem}`);
  assert(indexHtml.includes(elem), `index.html missing required DOM element: ${elem}`);
}
console.log(`[PASS] All ${requiredHtmlElements.length} required HTML DOM elements present in reader view.`);

// 3. CSS Classes & Rules Check
const requiredCssClasses = [
  '.rh-reader-container',
  '.rh-reader-sidebar',
  '.rh-reader-stepper',
  '.rh-stepper-nav-btn',
  '.rh-stepper-toc-btn',
  '.rh-reader-accordion',
  '.rh-accordion-item',
  '.rh-chap-header',
  '.rh-accordion-item.active .rh-chap-header',
  'border-left-color: #8b1820',
  '.rh-chap-sections',
  '.rh-chap-sec-link',
  '.rh-chap-sec-link.active',
  '.rh-reader-main',
  '.rh-reader-sheet',
  '.rh-read-h1',
  '.rh-reader-sheet .rh-book-h',
  '.rh-ref-link',
  'color: #1976d2',
  '.rh-book-inset',
  '.rh-book-inset .rh-inset-title',
  'background: #362f2d',
  '.rh-reader-chapter-footer',
  '.rh-footer-step-btn',
  '.reader-toc-overview',
  '.reader-toc-banner',
  '.reader-toc-grid',
  '.toc-heading-red',
  '.rh-reader-mobile-bar',
  '.rh-reader-mobile-toggle'
];

for (const css of requiredCssClasses) {
  assert(protoHtml.includes(css), `prototype.html missing required CSS rule: ${css}`);
  assert(indexHtml.includes(css), `index.html missing required CSS rule: ${css}`);
}
console.log(`[PASS] All ${requiredCssClasses.length} required CSS rules and themes verified.`);

// 4. JavaScript Functions Check
const requiredJsFunctions = [
  'function getItalianChapterName',
  'function getItalianSectionName',
  'function openBookReader',
  'function renderReaderNavTree',
  'function renderReaderCurrentChapter',
  'function updateReaderSteppers',
  'function readerSelectChapter',
  'function readerJumpSection',
  'function readerPrevChapter',
  'function readerNextChapter',
  'function toggleReaderTOCView',
  'function toggleReaderMobileTOC',
  'function renderReaderTOC',
  'function readerJump',
  'function getPhbCoverSvg',
  'function previewCreature'
];

for (const fn of requiredJsFunctions) {
  assert(protoHtml.includes(fn), `prototype.html missing required JS function: ${fn}`);
  assert(indexHtml.includes(fn), `index.html missing required JS function: ${fn}`);
}
console.log(`[PASS] All ${requiredJsFunctions.length} required JS functions verified.`);

// 5. Verify Chapter 2 Content & Authentic English
const ch2Path = path.join(__dirname, '..', 'data', 'phb', '02_creating_a_character.js');
assert(fs.existsSync(ch2Path), '02_creating_a_character.js must exist');
const ch2Raw = fs.readFileSync(ch2Path, 'utf8');

// Parse chapter 2
const start = ch2Raw.indexOf('{');
const end = ch2Raw.lastIndexOf('}');
const ch2Data = JSON.parse(ch2Raw.substring(start, end + 1));

assert.strictEqual(ch2Data.id, '02_creating_a_character');
assert.strictEqual(ch2Data.sectionsCount, 6, 'Chapter 2 must contain 6 main sections');

const expectedSecIds = [
  'get-ready',
  'create-your-character',
  'level-advancement',
  'starting-at-higher-levels',
  'multiclassing',
  'trinkets'
];

const actualSecIds = ch2Data.sections.map(s => s.id);
assert.deepStrictEqual(actualSecIds, expectedSecIds, 'Section IDs must match Player\'s Handbook chapter 2 structure');

// Check Session Zero callout box in get-ready
const getReadyHtml = ch2Data.sections[0].html;
assert(getReadyHtml.includes('Session Zero'), 'Must contain Session Zero note box');
assert(getReadyHtml.includes('class="rh-book-inset"'), 'Must use rh-book-inset styling for callout box');
assert(getReadyHtml.includes('class="rh-inset-title"'), 'Must have attached rh-inset-title banner tab');

// Check headings
assert(getReadyHtml.includes('Get Ready'), 'Must contain Get Ready');
assert(getReadyHtml.includes('Talk with Your DM'), 'Must contain Talk with Your DM');
assert(getReadyHtml.includes('Choose a Character Sheet'), 'Must contain Choose a Character Sheet');

console.log('[PASS] Chapter 2: Creating a Character authentic English text, headings, and Session Zero callout box verified.');

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Book Reader UI tests PASSED!');
console.log('======================================================\n');
