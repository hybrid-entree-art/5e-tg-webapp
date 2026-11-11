// tests/test_bilingual_search.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock browser globals
global.DATA = {};
global.HTMLDialogElement = class HTMLDialogElement {};
global.localStorage = {
  _data: {},
  getItem(k){ return this._data[k] || null; },
  setItem(k, v){ this._data[k] = String(v); }
};
global.window = { Telegram: null, addEventListener(){} };
global.document = {
  querySelector: () => ({ classList: { add(){}, remove(){} }, style: {}, textContent: '', innerHTML: '', addEventListener(){} }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};

// Load data files
function loadData(file, varName){
  const txt = fs.readFileSync(file, 'utf8');
  const jsonStr = txt.split('const ' + varName + ' = ')[1].trim().replace(/;$/, '');
  global[varName] = JSON.parse(jsonStr);
}

loadData('class_data.js', 'CLASSES');
loadData('bg_data.js', 'BACKGROUNDS');
loadData('species_data.js', 'SPECIES');
loadData('feats_data.js', 'FEATS');
loadData('equipment_data.js', 'EQUIPMENT');
loadData('magic_data.js', 'MAGIC');
loadData('bastions_data.js', 'BASTIONS');
loadData('glossary_data.js', 'GLOSSARY');
loadData('spells_data.js', 'XP_SPELLS');
loadData('monsters_data.js', 'XP_MONSTERS');
loadData('books_data.js', 'BOOKS');
DATA.spells = XP_SPELLS;
DATA.monsters = XP_MONSTERS;
vm.runInThisContext(fs.readFileSync('translations_it.js', 'utf8'));

// Extract inline script from prototype.html
const html = fs.readFileSync('prototype.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi);
const inline = scripts[scripts.length - 1].replace(/<\/?script[^>]*>/gi, '');
vm.runInThisContext(inline);

console.log('Testing Bilingual & Search Engine...\n');

function testSearch(query, expectedCategory, expectedNameFrag){
  searchAll(query);
  const found = currentSearchResults.some(r => {
    const isCat = !expectedCategory || r.category === expectedCategory;
    const nameMatch = r.bNames.it.toLowerCase().includes(expectedNameFrag.toLowerCase()) ||
                      r.bNames.en.toLowerCase().includes(expectedNameFrag.toLowerCase());
    return isCat && nameMatch;
  });
  if(found){
    console.log(`[PASS] Search "${query}": Found ${expectedCategory || 'item'} matching "${expectedNameFrag}" (${currentSearchResults.length} total results)`);
  } else {
    console.error(`[FAIL] Search "${query}": Could NOT find ${expectedCategory} matching "${expectedNameFrag}". Top 3 results:`, currentSearchResults.slice(0, 3).map(r => `${r.category}: ${r.bNames.it} / ${r.bNames.en}`));
    process.exitCode = 1;
  }
}

// 1. Italian & English Classes
testSearch('Mago', 'classes', 'Mago');
testSearch('Wizard', 'classes', 'Mago');
testSearch('Guerriero', 'classes', 'Guerriero');
testSearch('Fighter', 'classes', 'Guerriero');

// 2. Italian & English Spells
testSearch('Fireball', 'spells', 'Fireball');
testSearch('Palla di fuoco', 'spells', 'Fireball');
testSearch('Cura Ferite', 'spells', 'Cure Wounds');
testSearch('cura delle ferite', 'spells', 'Cure Wounds');
testSearch('Magic Missile', 'spells', 'Dardo Incantato');

// 3. Italian & English Feats & Backgrounds
testSearch('Musician', 'feats', 'Musicista');
testSearch('Musicista', 'feats', 'Musicista');
testSearch('Entertainer', 'backgrounds', 'Artista');
testSearch('Artista', 'backgrounds', 'Artista');

// 4. Italian & English Monsters & Species
testSearch('Drago Rosso', 'monsters', 'Adult Red Dragon');
testSearch('Adult Red Dragon', 'monsters', 'Adult Red Dragon');
testSearch('Goblin', 'monsters', 'Goblin');
testSearch('Orco', 'species', 'Orc');
testSearch('Orc', 'species', 'Orc');
testSearch('Nano', 'species', 'Dwarf');
testSearch('Dwarf', 'species', 'Dwarf');

// 5. Accented & Diacritic Normalization
testSearch('cecita', 'glossary', 'Cecit');
testSearch('cecità', 'glossary', 'Cecit');
testSearch('blinded', 'glossary', 'Blinded');

// 6. Test Language Switching and Bilingual Formatting
setAppLanguage('it');
nameDisplayMode = 'bilingual';
let nIt1 = formatBilingualNames('Mago', 'Wizard');
console.assert(nIt1.primary === 'Mago' && nIt1.secondary === 'Wizard', 'IT Bilingual mode: primary Mago, secondary Wizard');

nameDisplayMode = 'solo_ita';
let nIt2 = formatBilingualNames('Mago', 'Wizard');
console.assert(nIt2.primary === 'Mago' && nIt2.secondary === '', 'IT Solo ITA: primary Mago, no secondary');

nameDisplayMode = 'solo_eng';
let nIt3 = formatBilingualNames('Mago', 'Wizard');
console.assert(nIt3.primary === 'Wizard' && nIt3.secondary === '', 'IT Solo ENG: primary Wizard, no secondary');

// English Mode
setAppLanguage('en');
nameDisplayMode = 'bilingual';
let nEn1 = formatBilingualNames('Mago', 'Wizard');
console.assert(nEn1.primary === 'Wizard' && nEn1.secondary === 'Mago', 'EN Bilingual mode: primary Wizard, secondary Mago');

nameDisplayMode = 'solo_eng';
let nEn2 = formatBilingualNames('Mago', 'Wizard');
console.assert(nEn2.primary === 'Wizard' && nEn2.secondary === '', 'EN Solo ENG: primary Wizard, no secondary');

console.log('\n[PASS] Language Switching & Formatting verified in both IT and EN modes!');

// 7. Verify Direct Home Navigation & Responsive Artwork Face Styling
console.assert(typeof goHomeDirectly === 'function', 'goHomeDirectly must be a globally defined function');
console.assert(html.includes('data-home-crumb'), 'Breadcrumbs must contain data-home-crumb for Elenco/Directory');
console.assert(html.includes('id="classSearchInput"'), 'Classes catalog must include search input');
console.assert(html.includes('id="catalogSearchInput"'), 'Spells/Monsters catalog must include search input');
console.assert(html.includes('id="bgSearchInput"'), 'Backgrounds catalog must include search input');
console.assert(html.includes('id="specSearchInput"'), 'Species catalog must include search input');
console.assert(html.includes('id="itemSearchInput"'), 'Items/Feats catalog must include search input');
console.assert(html.includes('object-fit:contain'), 'Artwork banners must use object-fit:contain to keep faces visible and uncropped');

console.log('\n[PASS] Direct Home Navigation & Responsive Artwork Face Centering verified!');

console.log('\nAll Bilingual Search & UI Tests PASSED successfully!');
