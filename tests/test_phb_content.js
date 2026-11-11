const fs = require('fs');
const assert = require('assert');

console.log('Testing Player\'s Handbook (XPHB) Architecture & Authentic English Content...');

// 1. Verify existence of all 12 section files
const files = [
  '00_intro.js', '01_playing_the_game.js', '02_creating_a_character.js',
  '03_character_classes.js', '04_character_origins.js', '05_feats.js',
  '06_equipment.js', '07_spells.js', '08_appendix_a_multiverse.js',
  '09_appendix_b_creatures.js', '10_rules_glossary.js', '11_credits.js'
];

files.forEach(f => {
  const p = `./data/phb/${f}`;
  assert.ok(fs.existsSync(p), `Missing modular chapter file: ${p}`);
  const content = fs.readFileSync(p, 'utf8');
  assert.ok(content.length > 500, `File ${p} is too small (${content.length} chars)`);
});
console.log('[PASS] All 12 modular chapter files exist and have substantial content!');

// 2. Load into sandbox and test API
global.window = global;
files.forEach(f => require(`../data/phb/${f}`));
require('../phb_content.js');

assert.ok(global.PHB_CONTENT, 'window.PHB_CONTENT must be defined');
assert.strictEqual(global.PHB_CONTENT.totalChapters, 12, 'Must have 12 chapters');
assert.strictEqual(global.PHB_CONTENT.language, 'en', 'Language must be English');

// 3. Test getChapter & getSection methods
const ch1 = PHB_CONTENT.getChapter(1);
assert.ok(ch1, 'getChapter(1) should return Chapter 1');
assert.strictEqual(ch1.title, 'Chapter 1: Playing the Game');
assert.ok(ch1.sections.length >= 10, 'Chapter 1 should have >= 10 sub-sections');

const d20Sec = PHB_CONTENT.getSection('d20-tests');
assert.ok(d20Sec, 'getSection("d20-tests") should return D20 Tests');
assert.ok(d20Sec.html.includes('D20 Tests'), 'Section HTML should contain D20 Tests in English');

// 4. Verify authentic English (no Italian translation in PHB book text)
assert.ok(ch1.html.includes('cooperative game'), 'Contains authentic English PHB text');
assert.ok(!ch1.html.includes('Manuale del Giocatore'), 'Book text must NOT be machine translated into Italian');

console.log('[PASS] PHB_CONTENT API, section router, and authentic English content verified!');
