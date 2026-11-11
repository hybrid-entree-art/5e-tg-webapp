/**
 * TEST SUITE: Ruleholder Biblioteca (Rulebooks Catalog) UX Verification
 * Verifies the layout, filtering, search, sorting, and book cover poster grid
 * against Ruleholder reference media_1794440474152_6429a6e9.jpg.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== 1. VERIFYING BOOKS DATA INTEGRITY ===');
const booksFile = fs.readFileSync(path.join(__dirname, '../books_data.js'), 'utf8');
const BOOKS = eval(booksFile.replace('const BOOKS =', ''));

assert.ok(Array.isArray(BOOKS), 'BOOKS should be an array');
assert.ok(BOOKS.length >= 25, `Expected at least 25 books, found ${BOOKS.length}`);
console.log(`[PASS] Found ${BOOKS.length} books in books_data.js.`);

// Verify Top 10 Books match Ruleholder screenshot media_1794440474152_6429a6e9.jpg
const expectedTop10 = [
  { it: 'Eroi della terra di confine', id: 'HotB' },
  { it: 'Classe Mago', id: 'ClMag' },
  { it: 'Libro del giocatore', id: 'XPHB' },
  { it: 'Il libro delle passioni di Astarion', id: 'ABH' },
  { it: 'Magia sfrenata', id: 'AU' },
  { it: 'Eredi del Male Elementale', id: 'PotA' },
  { it: 'Trattenere i morti', id: 'HoldDead' },
  { it: 'La bisaccia del Grifone, Libro 1', id: 'TGS1' },
  { it: 'Sale del Drago', id: 'FTD' },
  { it: 'Enciclopedia dei mostri', id: 'XMM' }
];

expectedTop10.forEach((exp, idx) => {
  const b = BOOKS[idx];
  assert.ok(b, `Book at index ${idx} must exist`);
  assert.strictEqual(b.id, exp.id, `Book ${idx} id should be ${exp.id}, got ${b.id}`);
  assert.strictEqual(b.itName, exp.it, `Book ${idx} itName should be ${exp.it}, got ${b.itName}`);
  assert.ok(b.type === 'Regole' || b.type === 'Avventure', `Book ${idx} type must be valid`);
  assert.ok(['Ufficiale', 'Affiliato', 'Birra fatta in casa'].includes(b.bookSource), `Book ${idx} bookSource must be valid`);
});
console.log('[PASS] Top 10 books exactly match Ruleholder screenshot media_1794440474152_6429a6e9.jpg!');

console.log('\n=== 2. VERIFYING HTML STRUCTURE IN PROTOTYPE.HTML & INDEX.HTML ===');
['prototype.html', 'index.html'].forEach(filename => {
  const html = fs.readFileSync(path.join(__dirname, '..', filename), 'utf8');

  // Breadcrumbs
  assert.ok(html.includes('class="rh-books-breadcrumbs"'), `${filename}: missing .rh-books-breadcrumbs`);
  assert.ok(html.includes('📚 Biblioteca'), `${filename}: missing 📚 Biblioteca crumb`);

  // Toolbar
  assert.ok(html.includes('class="rh-books-toolbar"'), `${filename}: missing .rh-books-toolbar`);

  // Type filter pills: Tutto | Regole | Avventure
  assert.ok(html.includes('id="booksTypeFilterGroup"'), `${filename}: missing #booksTypeFilterGroup`);
  assert.ok(html.includes('data-type="Tutto"'), `${filename}: missing type Tutto`);
  assert.ok(html.includes('data-type="Regole"'), `${filename}: missing type Regole`);
  assert.ok(html.includes('data-type="Avventure"'), `${filename}: missing type Avventure`);

  // Source filter pills: Tutto | Ufficiale | Affiliato | Birra fatta in casa
  assert.ok(html.includes('id="booksSourceFilterGroup"'), `${filename}: missing #booksSourceFilterGroup`);
  assert.ok(html.includes('data-source="Tutto"'), `${filename}: missing source Tutto`);
  assert.ok(html.includes('data-source="Ufficiale"'), `${filename}: missing source Ufficiale`);
  assert.ok(html.includes('data-source="Affiliato"'), `${filename}: missing source Affiliato`);
  assert.ok(html.includes('data-source="Birra fatta in casa"'), `${filename}: missing source Birra fatta in casa`);

  // Search box & input
  assert.ok(html.includes('id="booksSearchInput"'), `${filename}: missing #booksSearchInput`);
  assert.ok(html.includes('placeholder="Cerca per nome"'), `${filename}: missing search placeholder`);

  // Sort button
  assert.ok(html.includes('id="booksSortBtn"'), `${filename}: missing #booksSortBtn`);

  console.log(`[PASS] All HTML elements verified in ${filename}.`);
});

console.log('\n=== 3. VERIFYING CSS POSTER GRID & STYLES ===');
const protoHtml = fs.readFileSync(path.join(__dirname, '../prototype.html'), 'utf8');
const requiredCssClasses = [
  '.rh-books-grid',
  '.rh-books-toolbar',
  '.rh-pill-segment',
  '.rh-pill-btn',
  '.rh-pill-btn.active',
  '.rh-books-search-input',
  '.rh-books-sort-btn',
  '.rh-book-card',
  '.rh-book-poster-wrap',
  '.rh-book-cover-img',
  '.rh-book-stripe-red',
  '.rh-book-cover-fallback',
  '.rh-book-title',
  '.rh-book-sub'
];

requiredCssClasses.forEach(cls => {
  assert.ok(protoHtml.includes(cls), `Missing CSS class: ${cls}`);
});
console.log(`[PASS] All ${requiredCssClasses.length} required CSS classes verified.`);

console.log('\n=== 4. SIMULATING FILTERING, SEARCH AND SORTING ===');
// Filter by Regole
const regoleBooks = BOOKS.filter(b => b.type === 'Regole');
assert.ok(regoleBooks.some(b => b.id === 'XPHB'), 'Player Handbook should be in Regole');
assert.ok(regoleBooks.some(b => b.id === 'ClMag'), 'Classe Mago should be in Regole');
console.log(`[PASS] Regole filter returned ${regoleBooks.length} books.`);

// Filter by Avventure
const avventureBooks = BOOKS.filter(b => b.type === 'Avventure');
assert.ok(avventureBooks.some(b => b.id === 'HotB'), 'HotB should be in Avventure');
assert.ok(avventureBooks.some(b => b.id === 'ABH'), 'ABH should be in Avventure');
console.log(`[PASS] Avventure filter returned ${avventureBooks.length} books.`);

// Filter by Source: Ufficiale vs Affiliato vs Birra fatta in casa
const uff = BOOKS.filter(b => b.bookSource === 'Ufficiale');
const aff = BOOKS.filter(b => b.bookSource === 'Affiliato');
const homebrew = BOOKS.filter(b => b.bookSource === 'Birra fatta in casa');
assert.ok(uff.length > 15, 'Official books should be > 15');
assert.ok(aff.length >= 2, 'Affiliate books should be >= 2');
assert.ok(homebrew.length >= 2, 'Homebrew books should be >= 2');
console.log(`[PASS] Source filters verified: ${uff.length} Ufficiali, ${aff.length} Affiliati, ${homebrew.length} Birra fatta in casa.`);

// Bilingual search test
const queryMago = 'Mago';
const resMago = BOOKS.filter(b => (b.itName || '').toLowerCase().includes(queryMago.toLowerCase()) || (b.name || '').toLowerCase().includes(queryMago.toLowerCase()));
assert.ok(resMago.some(b => b.id === 'ClMag'), 'Search "Mago" should find Classe Mago');

const queryAstarion = 'Astarion';
const resAstarion = BOOKS.filter(b => (b.itName || '').toLowerCase().includes(queryAstarion.toLowerCase()) || (b.name || '').toLowerCase().includes(queryAstarion.toLowerCase()));
assert.ok(resAstarion.some(b => b.id === 'ABH'), 'Search "Astarion" should find Il libro delle passioni di Astarion');

const queryPHB = 'Player';
const resPHB = BOOKS.filter(b => (b.itName || '').toLowerCase().includes(queryPHB.toLowerCase()) || (b.name || '').toLowerCase().includes(queryPHB.toLowerCase()));
assert.ok(resPHB.some(b => b.id === 'XPHB'), 'Search "Player" should find Libro del giocatore');
console.log('[PASS] Bilingual search verified for Italian & English queries.');

// Sort test
const sortedAsc = BOOKS.slice().sort((a, b) => (a.itName || a.name).localeCompare(b.itName || b.name, 'it'));
assert.strictEqual(sortedAsc[0].itName, 'Banchetto degli Eroi: Leggende della Tavola');
assert.strictEqual(sortedAsc[sortedAsc.length - 1].itName, 'World of Warcraft');
console.log('[PASS] Alphabetical sorting verified.');

console.log('\n======================================================');
console.log('SUCCESS: All Ruleholder Biblioteca UI tests PASSED!');
console.log('======================================================');
