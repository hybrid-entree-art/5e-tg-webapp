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
  'id="footerNextTitle"',
  'id="readerCoverChip"',
  'id="readerCoverChipImg"',
  'id="readerCoverChipFallback"',
  'class="rh-reader-cover-chip"',
  'class="rh-reader-cover-fallback hidden"',
  'id="readerTocScrim"',
  'class="rh-reader-scrim"',
  'class="rh-reader-drawer-head"',
  'class="rh-reader-drawer-close"',
  'aria-label="Indice dei capitoli"',
  'rh-masthead-cover"',
  'rh-masthead-art"'
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
  '.rh-reader-mobile-toggle',
  '.rh-reader-cover-chip',
  '.rh-reader-cover-fallback',
  '.rh-reader-cover-fb-txt',
  '.warm .rh-reader-cover-fallback',
  '.dark .rh-reader-cover-chip',
  '.rh-reader-masthead',
  '.rh-hero-cover-frame',
  '.rh-cover-caption',
  '.dark .rh-hero-cover-frame',
  '.dark .rh-cover-caption',
  'aspect-ratio: 1 / 1.44',
  '@media (max-width: 380px)',
  '.rh-reader-scrim',
  '.rh-reader-scrim.mobile-open',
  '.rh-reader-drawer-head',
  '.rh-reader-drawer-close',
  'width: 80%',
  'transform: translateX(-102%)',
  'background: rgba(8, 6, 10, 0.42)',
  'aspect-ratio: 900 / 520',
  'object-fit: contain',
  '.rh-hero-cover-frame .rh-masthead-art',
  '.rh-hero-cover-frame .rh-masthead-cover',
  'prefers-reduced-motion',
  '@media (min-width: 861px)'
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
  'function previewCreature',
  'function getReaderCoverUrl',
  'function getReaderLocalCoverArt',
  'function readerCoverFallback',
  'function applyReaderCoverToImg',
  'function setReaderCoverImages',
  'function buildReaderMastheadCover',
  'function isReaderDrawerViewport',
  'function closeReaderMobileTOC'
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

// 6. Reader Cover Identity contract (toolbar chip + intro masthead)
const coverContract = [
  "const READER_COVER_BASE = 'https://5e.tools/img/covers/'",
  "READER_COVER_BASE + (b.source || b.id || 'XPHB') + '.webp'",
  'onerror="readerCoverFallback(this)"',
  'setReaderCoverImages(b, displayBookTitle)',
  "chMeta.id === '00_intro' ? buildReaderMastheadCover",
  'class="rh-reader-masthead"',
  'class="rh-hero-cover-frame"',
  'class="rh-cover-caption"',
  'data-cover-art=',
  'getPhbCoverSvg()'
];
for (const token of coverContract) {
  assert(protoHtml.includes(token), `prototype.html missing cover contract: ${token}`);
  assert(indexHtml.includes(token), `index.html missing cover contract: ${token}`);
}

// La vecchia iniezione SVG full-width senza stile deve essere sostituita.
assert(!protoHtml.includes('<div class="rh-hero-cover-frame">${getPhbCoverSvg()}</div>'),
  'legacy unstyled full-width SVG cover must be replaced by the framed masthead');

// La cover grande NON e' inserita a ogni cambio capitolo: una sola chiamata,
// confinata al ramo frontmatter 00_intro.
const mastheadCallCount = (protoHtml.match(/buildReaderMastheadCover\(/g) || []).length;
assert.strictEqual(mastheadCallCount, 2,
  'buildReaderMastheadCover must appear exactly twice: definition + single 00_intro call');

// Coerenza con la griglia Biblioteca e URL dei 3 manuali core 2024.
const booksDataRaw = fs.readFileSync(path.join(__dirname, '..', 'books_data.js'), 'utf8');
for (const src of ['XPHB', 'XDMG', 'XMM']) {
  assert(booksDataRaw.includes('"source": "' + src + '"'),
    `books_data.js missing core source ${src}`);
}
assert(protoHtml.includes('https://5e.tools/img/covers/${bk.source || bk.id}.webp'),
  'library grid cover URL pattern must be preserved');

// Catena di fallback: remoto -> cover art locale -> testo, con guardia anti-loop.
assert(protoHtml.includes("img.dataset.fbStage = 'art'"), 'local cover-art fallback stage missing');
assert(protoHtml.includes("img.dataset.fbStage = 'done'"), 'final text fallback stage missing');
assert(protoHtml.includes('function getPhbCoverSvg'), 'local vector cover art must remain available');

// Sincronizzazione reale (non solo lunghezza) tra i due file di publishing.
assert.strictEqual(protoHtml, indexHtml,
  'prototype.html and index.html must be byte-identical');

console.log('[PASS] Reader Cover Identity: chip, masthead, fallback chain, core URLs and file sync verified.');

// 7. Mobile responsive contract: TOC drawer + single-column landscape intro
const responsiveContract = [
  'id="readerTocScrim"',
  'closeReaderMobileTOC(true)',
  'background: rgba(8, 6, 10, 0.42)',
  'transform: translateX(-102%)',
  'width: 80%',
  'aspect-ratio: 900 / 520',
  'object-fit: contain',
  'prefers-reduced-motion',
  "e.key === 'Escape'",
  "sidebar.setAttribute('aria-modal', 'true')"
];
for (const token of responsiveContract) {
  assert(protoHtml.includes(token), `prototype.html missing responsive contract: ${token}`);
  assert(indexHtml.includes(token), `index.html missing responsive contract: ${token}`);
}

// Il vecchio comportamento "sidebar in flusso" deve essere stato rimosso.
assert(!protoHtml.includes('display: none;\n    position: static;\n    max-height: none;\n    margin-bottom: 16px;'),
  'legacy in-flow mobile sidebar must be replaced by the fixed drawer');
assert(!protoHtml.includes('.rh-reader-sidebar.mobile-open {\n    display: block;\n  }'),
  'legacy display:block .mobile-open must be replaced');

// Desktop: due colonne sticky intatte.
assert(protoHtml.includes('grid-template-columns: 280px minmax(0, 1fr)'),
  'desktop two-column reader layout must be preserved');
assert(protoHtml.includes('position: sticky'), 'desktop sticky sidebar must be preserved');

// Il pulsante Capitoli resta sull'header e sul foglio.
assert(protoHtml.includes('id="readerMobileTocBtn"'), 'Capitoli button must stay in mobile header');
assert(protoHtml.includes('class="rh-reader-mobile-toggle"'), 'Capitoli toggle must stay on the sheet');
assert(protoHtml.includes('onclick="toggleReaderMobileTOC()"'), 'mobile toggle wiring must be preserved');

// La navigazione ai capitoli chiude anche lo scrim.
const closeCalls = (protoHtml.match(/closeReaderMobileTOC\(\);/g) || []).length;
assert(closeCalls >= 3, 'chapter navigation / view reset must close the drawer and scrim');

// L'immagine introduttiva landscape resta confinata al solo frontmatter.
assert(protoHtml.includes("chMeta.id === '00_intro' ? buildReaderMastheadCover"),
  'landscape intro image must remain gated on 00_intro only');

// Nessuna deformazione della cover quadrata: il frame mobile ha lo stesso
// rapporto dell'artwork locale (900/520) e l'immagine e' contain, non cover.
assert(protoHtml.includes('aspect-ratio: 900 / 520'),
  'mobile frame ratio must match the 900x520 local artwork exactly');
assert(protoHtml.includes('object-fit: contain'),
  'mobile intro artwork must be contained, never cropped/stretched');
assert(protoHtml.includes('getReaderLocalCoverArt(b)'),
  'mobile wide artwork must reuse the existing local asset, not invent one');
assert(protoHtml.includes('rh-masthead-cover"'),
  'official square cover must remain in the desktop masthead');
assert(!protoHtml.includes('aspect-ratio: 16 / 9'),
  '16/9 crop of the square cover must be removed');

console.log('[PASS] Mobile responsive: left drawer (~80%) + scrim, single column, 900/520 landscape artwork (no square-cover crop), desktop sticky preserved.');

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Book Reader UI tests PASSED!');
console.log('======================================================\n');
