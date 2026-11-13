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
  'rh-book-figure-img"',
  '<script src="phb_images.js"></script>'
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
  '.rh-book-figure-img',
  '.rh-book-figure-caption',
  '.rh-book-figure--portrait',
  '.rh-book-figures',
  'dark .rh-book-figure-img',
  '@media (max-width: 380px)',
  '.rh-reader-scrim',
  '.rh-reader-scrim.mobile-open',
  '.rh-reader-drawer-head',
  '.rh-reader-drawer-close',
  'width: 80%',
  'transform: translateX(-102%)',
  'background: rgba(8, 6, 10, 0.42)',
  'aspect-ratio: auto',
  'object-fit: contain',
  'const READER_IMG_BASE',
  'window.BOOK_IMAGE_MANIFEST',
  'width="${img.width}" height="${img.height}"',
  '.rh-hero-cover-frame .rh-masthead-cover',
  'window.PHB_IMAGES',
  'function getReaderCoverArt',
  'function getChapterImagePlacement',
  'function renderChapterLeadFigures',
  'im.position === 0',
  'function buildReaderFigure',
  'function renderChapterSectionFigures',
  'function renderChapterFigureGallery',
  'renderChapterSectionFigures(chMeta.id, sec.id)',
  'renderChapterFigureGallery(chMeta.id,',
  'im.chapterId === chId',
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
  'function closeReaderMobileTOC',
  'function getReaderCoverArt',
  'function strip5eToolsMarkup',
  'function buildReaderFigure',
  'function getChapterImagePlacement',
  'function renderChapterLeadFigures',
  'function renderChapterSectionFigures',
  'function renderChapterFigureGallery'
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

// 7. Mobile responsive contract: TOC drawer + single column + cover intro
const responsiveContract = [
  'id="readerTocScrim"',
  'closeReaderMobileTOC(true)',
  'background: rgba(8, 6, 10, 0.42)',
  'transform: translateX(-102%)',
  'width: 80%',
  'aspect-ratio: auto',
  'object-fit: contain',
  'window.BOOK_IMAGE_MANIFEST',
  'renderChapterLeadFigures(chMeta.id',
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

// Intro: cover ufficiale XPHB. L'opening art NON appartiene all'intro/TOC.
assert(protoHtml.includes("chMeta.id === '00_intro' ? buildReaderMastheadCover"),
  'masthead must be gated on 00_intro only');
assert(protoHtml.includes('function getReaderCoverArt'),
  'intro masthead must use the official XPHB cover');
assert(protoHtml.includes('rh-masthead-cover'),
  'official cover must be present in the intro masthead');
assert(!protoHtml.includes('getReaderIntroImage'),
  'no intro-artwork misattribution helper may remain');
assert(!protoHtml.includes('book/XPHB/000-01-013.opening-art.webp'),
  'opening art must NOT be attributed to the intro/TOC in reader HTML');
assert(!protoHtml.includes('READER_INTRO_ART_FALLBACK'),
  'no hardcoded intro artwork fallback may remain');

// Nessuna deformazione: nessun aspect-ratio forzato, img con dimensioni
// naturali e object-fit:contain.
assert(protoHtml.includes('aspect-ratio: auto'),
  'mobile frame must not force an aspect-ratio');
assert(protoHtml.includes('width="${img.width}" height="${img.height}"'),
  'masthead img must carry intrinsic dimensions: no CLS, no stretch');
assert(protoHtml.includes('object-fit: contain'),
  'images must be contained, never cropped/stretched');
assert(!protoHtml.includes('aspect-ratio: 16 / 9'),
  '16/9 crop of the square cover must be removed');

// Le immagini vengono dal mapping statico, non da path hardcoded nell'HTML.
assert(protoHtml.includes('window.BOOK_IMAGE_MANIFEST'),
  'optional separate manifest override must remain available');
assert(protoHtml.includes('function strip5eToolsMarkup'),
  '5etools {@...} markup in titles must be sanitised');
assert(protoHtml.includes('getReaderCoverUrl(b)'),
  'official cover URL must remain for chip and intro masthead');
assert(protoHtml.includes('window.PHB_IMAGES'),
  'reader must consume the static phb_images.js mapping');
assert(protoHtml.includes('renderChapterLeadFigures(chMeta.id'),
  'chapter lead figure (position 0) must be rendered in flow');
assert(protoHtml.includes('im.position === 0'),
  'position 0 from source JSON must drive chapter-lead placement');

console.log('[PASS] Mobile responsive: left drawer (~80%) + scrim, single column, official XPHB cover intro, opening art in Chapter 1 flow, desktop sticky preserved.');

// 8. phb_images.js mapping: 63 immagini autentiche XPHB 2024
const phbImagesPath = path.join(__dirname, '..', 'phb_images.js');
assert(fs.existsSync(phbImagesPath), 'phb_images.js must exist');
const phbImagesRaw = fs.readFileSync(phbImagesPath, 'utf8');
const imgSandbox = { window: {} };
require('vm').runInNewContext(phbImagesRaw, imgSandbox);
const PHB_IMAGES = imgSandbox.window.PHB_IMAGES;
assert(PHB_IMAGES, 'window.PHB_IMAGES must be defined');
assert.strictEqual(PHB_IMAGES.count, 63, 'mapping must contain all 63 XPHB image nodes');
assert.strictEqual(PHB_IMAGES.all.length, 63, 'flat list must contain all 63 nodes');
assert(PHB_IMAGES.base.includes('5etools-img/main/'), 'base URL must point to 5etools-img');
assert.strictEqual(Object.keys(PHB_IMAGES.byChapter).length, 12, 'mapping must cover all 12 chapters');
assert(Object.keys(PHB_IMAGES.bySection).length > 0, 'per-section mapping must exist');
// Attribuzione FEDELE al JSON: Introduction (id '000') ha 0 immagini.
assert.strictEqual(PHB_IMAGES.byChapter['00_intro'].length, 0,
  'Introduction: Welcome to Adventure must have 0 images per source JSON');
assert(!PHB_IMAGES.intro, 'mapping must not expose an intro image');
const ch1 = PHB_IMAGES.byChapter['01_playing_the_game'];
assert(ch1.length > 0, 'Chapter 1 must carry its own images');
const opening = ch1[0];
assert.strictEqual(opening.path, 'book/XPHB/000-01-013.opening-art.webp',
  'opening art must be attributed to Chapter 1, position 0');
assert.strictEqual(opening.sourceChapterId, '007',
  'sourceChapterId must match the raw JSON Chapter 1 id');
assert.strictEqual(opening.position, 0, 'opening art is the first node of Chapter 1');
assert.strictEqual(opening.width, 1700);
assert.strictEqual(opening.height, 2182);
assert.strictEqual(opening.orientation, 'portrait');
assert.strictEqual(opening.credit, 'Antonio José Manzanedo',
  'caption credit must come from source JSON');
assert(PHB_IMAGES.all.every(im => !('isFrontispiece' in im)),
  'no frontispiece misattribution flag may remain');
assert(PHB_IMAGES.all.every(im => typeof im.position === 'number'),
  'every node must carry its position within the chapter');
assert(PHB_IMAGES.all.every(im => typeof im.sourceChapterId === 'string'),
  'every node must carry the raw source chapter id');
assert(PHB_IMAGES.all.every(im => Object.prototype.hasOwnProperty.call(PHB_IMAGES.byChapter, im.chapterId)),
  'every chapterId must resolve in byChapter');
assert(PHB_IMAGES.all.every(im => im.path.indexOf('book/XPHB/') === 0),
  'every path must be a XPHB book path');
assert(PHB_IMAGES.all.every(im => typeof im.title === 'string' && im.title.indexOf('{@') === -1),
  'titles must be sanitised from 5etools {@...} markup');
assert(PHB_IMAGES.all.every(im => typeof im.credit === 'string'),
  'every node must carry a credit field');
assert(PHB_IMAGES.all.every(im => im.orientation === (im.width >= im.height ? 'landscape' : 'portrait')),
  'orientation must follow the original image dimensions');

// Gate per chapter e wiring nel lettore
assert(protoHtml.includes('renderChapterSectionFigures(chMeta.id, sec.id)'),
  'per-section figures must be rendered in the chapter');
assert(protoHtml.includes('renderChapterFigureGallery(chMeta.id, chData.sections.map(s => s.id))'),
  'gallery must receive rendered section ids so no image is dropped');
assert(protoHtml.includes('done.has(im.ordinal)'),
  'already-placed figures must be tracked to avoid losing nodes');
assert(protoHtml.includes('im.chapterId === chId'), 'figures must be gated by chapter id');
assert(protoHtml.includes("chMeta.id === '00_intro' ? buildReaderMastheadCover"),
  'masthead must be gated on 00_intro only');
assert(protoHtml.includes('<script src="phb_images.js"></script>'),
  'phb_images.js must be loaded by both pages');
assert(indexHtml.includes('<script src="phb_images.js"></script>'),
  'index.html must load phb_images.js too');
assert(protoHtml.includes('rh-masthead-cover'),
  'official XPHB cover must be used in the intro masthead');
assert(protoHtml.includes('renderChapterLeadFigures(chMeta.id, [])'),
  'chapters without sections must still render lead figures');
assert(protoHtml.includes('renderChapterFigureGallery(chMeta.id, chData.sections.map(s => s.id))'),
  'gallery must receive rendered section ids so no image is dropped');
assert(protoHtml.includes('renderChapterFigureGallery(chMeta.id, [])'),
  'chapters without sections (Credits) must still render their figures');
assert(!protoHtml.includes('Contenuto del capitolo in caricamento'),
  'credits fallback placeholder must be replaced by real HTML content');
assert(protoHtml.includes('linkKnownEntities(chData.html)'),
  'credits chapter HTML must be rendered');

console.log('[PASS] phb_images.js: 63 authentic XPHB images, faithful chapter attribution (intro=0, opening art in Ch1 pos0), credits/orientation, per-chapter gate and reader wiring verified.');

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Book Reader UI tests PASSED!');
console.log('======================================================\n');
