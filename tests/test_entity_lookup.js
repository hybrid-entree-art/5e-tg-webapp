const fs = require('fs');
const path = require('path');

global.window = global;
global.DATA = {};

function loadData(file, varName){
  const txt = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
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

function resolveEntity(name, typeHint) {
  if (!name) return null;
  const q = name.toLowerCase().trim();

  // Helper matching
  const matchName = (item, prop = 'name') => {
    const val = item[prop] || item.n;
    return val && val.toLowerCase() === q;
  };
  const matchIt = (item) => {
    return (item.it && item.it.toLowerCase() === q) || (item.name && item.name.toLowerCase() === q);
  };

  // 1. Spells (XP_SPELLS / DATA.spells)
  const spellList = (typeof XP_SPELLS !== 'undefined' ? XP_SPELLS : (global.DATA && global.DATA.spells ? global.DATA.spells : []));
  if (!typeHint || typeHint === 'spell') {
    const spell = spellList.find(s => matchName(s, 'n') || matchName(s, 'name') || matchIt(s));
    if (spell) {
      const sName = spell.n || spell.name;
      const sLevel = spell.lv != null ? spell.lv : (spell.l != null ? spell.l : spell.level);
      const sSchool = spell.sc || spell.s || spell.school || '';
      const sTime = (spell.tmn ? `${spell.tmn} ${spell.tmi || 'action'}` : (spell.t || spell.time || '1 action'));
      const sRange = spell.rng || spell.r || spell.range || 'Self';
      const sDur = spell.dur || spell.d || spell.duration || 'Instantaneous';
      const sText = spell.txt || spell.text || (spell.entries ? spell.entries.join('\n') : '');
      return {
        type: 'spell',
        title: sName,
        sub: `${sLevel === 0 ? 'Cantrip' : `Level ${sLevel}`} ${sSchool}`,
        source: spell.src || spell.source || 'PHB 2024',
        badge: 'Spell',
        meta: [
          { label: 'Casting Time', value: sTime },
          { label: 'Range', value: sRange },
          { label: 'Duration', value: sDur }
        ],
        text: sText,
        raw: spell
      };
    }
  }

  // 2. Conditions / Glossary (GLOSSARY)
  if (!typeHint || typeHint === 'condition' || typeHint === 'glossary' || typeHint === 'rule') {
    const condList = typeof GLOSSARY !== 'undefined' ? GLOSSARY : [];
    const cond = condList.find(c => matchName(c) || matchIt(c));
    if (cond) {
      return {
        type: 'condition',
        title: cond.name,
        sub: cond.category || 'Condition',
        source: 'PHB 2024',
        badge: 'Rule',
        text: cond.text || '',
        raw: cond
      };
    }
  }

  // 3. Feats (FEATS)
  if (!typeHint || typeHint === 'feat') {
    const featList = typeof FEATS !== 'undefined' ? FEATS : [];
    const feat = featList.find(f => matchName(f) || matchIt(f));
    if (feat) {
      return {
        type: 'feat',
        title: feat.name,
        sub: feat.category || 'Feat',
        source: 'PHB 2024',
        badge: 'Feat',
        meta: [
          { label: 'Category', value: feat.category || 'General' },
          { label: 'Prerequisite', value: (feat.prereq || []).join(', ') || 'None' }
        ],
        text: feat.text || '',
        raw: feat
      };
    }
  }

  // 4. Magic Items & Equipment
  if (!typeHint || typeHint === 'item' || typeHint === 'magic' || typeHint === 'equipment') {
    const magicList = typeof MAGIC !== 'undefined' ? MAGIC : [];
    const magic = magicList.find(m => matchName(m) || matchIt(m));
    if (magic) {
      return {
        type: 'magic',
        title: magic.name,
        sub: `${magic.type || 'Wondrous Item'} (${magic.rarity || 'Common'})`,
        source: 'DMG 2024',
        badge: 'Magic Item',
        text: magic.text || '',
        raw: magic
      };
    }

    const equipList = typeof EQUIPMENT !== 'undefined' ? EQUIPMENT : [];
    const equip = equipList.find(e => matchName(e) || matchIt(e));
    if (equip) {
      return {
        type: 'equipment',
        title: equip.name,
        sub: equip.type || 'Equipment',
        source: 'PHB 2024',
        badge: 'Item',
        meta: [
          { label: 'Cost', value: equip.value != null ? (equip.value >= 100 ? `${Math.round(equip.value / 100)} gp` : `${equip.value} cp`) : '—' },
          { label: 'Weight', value: equip.weight ? `${equip.weight} lb` : '—' }
        ],
        text: equip.text || '',
        raw: equip
      };
    }
  }

  // 5. Monsters / Creatures
  if (!typeHint || typeHint === 'creature' || typeHint === 'monster') {
    const monList = (typeof XP_MONSTERS !== 'undefined' ? XP_MONSTERS : (typeof MONSTERS !== 'undefined' ? MONSTERS : (global.DATA && global.DATA.monsters ? global.DATA.monsters : [])));
    const mon = monList.find(m => {
      const n = m.n || m.name || '';
      return n.toLowerCase() === q;
    });
    if (mon) {
      return {
        type: 'monster',
        title: mon.n || mon.name,
        sub: `CR ${mon.cr} · ${mon.t || 'Creature'}`,
        source: mon.src || 'MM 2024',
        badge: 'Monster',
        meta: [
          { label: 'AC', value: String(mon.ac) },
          { label: 'HP', value: String(mon.hp) },
          { label: 'Speed', value: String(mon.spd) }
        ],
        text: mon.txt || mon.text || '',
        raw: mon
      };
    }
  }

  // 6. Common Rule definitions
  const CORE_RULES = {
    'long rest': {
      title: 'Long Rest',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'A Long Rest is a period of extended downtime—at least 8 hours long—available to any creature. During a Long Rest, you sleep or perform light activity. At the end of the rest, you regain all lost Hit Points and spent Hit Point Dice up to half your total.',
      sectionId: 'long-rest'
    },
    'riposo lungo': {
      title: 'Riposo Lungo',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Un Riposo Lungo è un periodo di riposo prolungato (almeno 8 ore). Al termine, la creatura recupera tutti i punti ferita persi e metà dei Dadi Vita massimi.',
      sectionId: 'long-rest'
    },
    'short rest': {
      title: 'Short Rest',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'A Short Rest is a 1-hour period of downtime during which a creature does nothing more strenuous than eating, drinking, reading, and tending to wounds. A creature can spend one or more Hit Point Dice at the end of a Short Rest.',
      sectionId: 'short-rest'
    },
    'riposo breve': {
      title: 'Riposo Breve',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Un Riposo Breve dura almeno 1 ora. La creatura può spendere uno o più Dadi Vita per recuperare punti ferita.',
      sectionId: 'short-rest'
    },
    'darkvision': {
      title: 'Darkvision',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Senso',
      text: 'A creature with Darkvision can see in Dim Light within the specified range as if it were Bright Light, and in Darkness as if it were Dim Light. The creature cannot discern color in Darkness, only shades of gray.',
      sectionId: 'darkvision'
    },
    'scurovista': {
      title: 'Scurovista',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Senso',
      text: 'Una creatura con Scurovista può vedere nella Luce Fioca come se fosse Luce Intensa, e nell\'Oscurità come se fosse Luce Fioca. Non discerne i colori nell\'oscurità, solo sfumature di grigio.',
      sectionId: 'darkvision'
    },
    'concentration': {
      title: 'Concentration',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Some spells and other effects require Concentration to keep their magic active. If you lose Concentration, such an effect ends. Taking damage, casting another concentration spell, or being Incapacitated breaks Concentration.',
      sectionId: 'concentration'
    },
    'concentrazione': {
      title: 'Concentrazione',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Alcuni incantesimi richiedono Concentrazione per restare attivi. Subire danni, lanciare un altro incantesimo a concentrazione o essere Incapace interrompe la concentrazione.',
      sectionId: 'concentration'
    }
  };

  if (!typeHint || typeHint === 'rule') {
    const rule = CORE_RULES[q];
    if (rule) {
      return {
        type: 'rule',
        title: rule.title,
        sub: rule.sub,
        source: rule.source,
        badge: rule.badge,
        text: rule.text,
        raw: rule
      };
    }
  }

  return null;
}

function navigateTarget(type, name) {
  const entity = resolveEntity(name, type);
  if (!entity) return null;

  if (entity.type === 'spell') {
    return { action: 'openSpellDetail', target: entity.raw.n || entity.raw.name };
  }
  if (entity.type === 'condition') {
    const idx = GLOSSARY.findIndex(c => c.name === entity.title || c.it === entity.title);
    return { action: 'openItem', group: 'glossary', index: idx, title: entity.title };
  }
  if (entity.type === 'feat') {
    const idx = FEATS.findIndex(f => f.name === entity.title || f.it === entity.title);
    return { action: 'openItem', group: 'feats', index: idx, title: entity.title };
  }
  if (entity.type === 'equipment') {
    const idx = EQUIPMENT.findIndex(e => e.name === entity.title || e.it === entity.title);
    return { action: 'openItem', group: 'equipment', index: idx, title: entity.title };
  }
  if (entity.type === 'magic') {
    const idx = MAGIC.findIndex(m => m.name === entity.title || m.it === entity.title);
    return { action: 'openItem', group: 'magic', index: idx, title: entity.title };
  }
  if (entity.type === 'monster') {
    return { action: 'openMonsterDetail', target: entity.raw.n || entity.raw.name };
  }
  // 6. Common Rule definitions
  const CORE_RULES = {
    'long rest': {
      title: 'Long Rest',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'A Long Rest is a period of extended downtime—at least 8 hours long—available to any creature. During a Long Rest, you sleep or perform light activity. At the end of the rest, you regain all lost Hit Points and spent Hit Point Dice up to half your total.',
      sectionId: 'long-rest'
    },
    'riposo lungo': {
      title: 'Riposo Lungo',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Un Riposo Lungo è un periodo di riposo prolungato (almeno 8 ore). Al termine, la creatura recupera tutti i punti ferita persi e metà dei Dadi Vita massimi.',
      sectionId: 'long-rest'
    },
    'short rest': {
      title: 'Short Rest',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'A Short Rest is a 1-hour period of downtime during which a creature does nothing more strenuous than eating, drinking, reading, and tending to wounds. A creature can spend one or more Hit Point Dice at the end of a Short Rest.',
      sectionId: 'short-rest'
    },
    'riposo breve': {
      title: 'Riposo Breve',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Un Riposo Breve dura almeno 1 ora. La creatura può spendere uno o più Dadi Vita per recuperare punti ferita.',
      sectionId: 'short-rest'
    },
    'darkvision': {
      title: 'Darkvision',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Senso',
      text: 'A creature with Darkvision can see in Dim Light within the specified range as if it were Bright Light, and in Darkness as if it were Dim Light. The creature cannot discern color in Darkness, only shades of gray.',
      sectionId: 'darkvision'
    },
    'scurovista': {
      title: 'Scurovista',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Senso',
      text: 'Una creatura con Scurovista può vedere nella Luce Fioca come se fosse Luce Intensa, e nell\'Oscurità come se fosse Luce Fioca. Non discerne i colori nell\'oscurità, solo sfumature di grigio.',
      sectionId: 'darkvision'
    },
    'concentration': {
      title: 'Concentration',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Some spells and other effects require Concentration to keep their magic active. If you lose Concentration, such an effect ends. Taking damage, casting another concentration spell, or being Incapacitated breaks Concentration.',
      sectionId: 'concentration'
    },
    'concentrazione': {
      title: 'Concentrazione',
      sub: "Rules Glossary · Player's Handbook 2024",
      source: 'PHB 2024',
      badge: 'Regola',
      text: 'Alcuni incantesimi richiedono Concentrazione per restare attivi. Subire danni, lanciare un altro incantesimo a concentrazione o essere Incapace interrompe la concentrazione.',
      sectionId: 'concentration'
    }
  };

  if (!typeHint || typeHint === 'rule') {
    const rule = CORE_RULES[q];
    if (rule) {
      return {
        type: 'rule',
        title: rule.title,
        sub: rule.sub,
        source: rule.source,
        badge: rule.badge,
        text: rule.text,
        raw: rule
      };
    }
  }

  return null;
}

console.log('Testing entity resolution...');
const s1 = resolveEntity('Acid Splash', 'spell');
console.log('Spell Acid Splash:', s1 ? { title: s1.title, sub: s1.sub, source: s1.source } : 'NOT FOUND');

const c1 = resolveEntity('Blinded', 'condition');
console.log('Condition Blinded:', c1 ? { title: c1.title, sub: c1.sub, textSnippet: c1.text.slice(0, 80) } : 'NOT FOUND');

const f1 = resolveEntity('Musician', 'feat');
console.log('Feat Musician:', f1 ? { title: f1.title, sub: f1.sub } : 'NOT FOUND');

const m1 = resolveEntity('Goblin Warrior', 'creature');
console.log('Creature Goblin Warrior:', m1 ? { title: m1.title, sub: m1.sub } : 'NOT FOUND');

const e1 = resolveEntity('Backpack', 'equipment');
console.log('Equipment Backpack:', e1 ? { title: e1.title, sub: e1.sub } : 'NOT FOUND');

console.log('Testing navigation targets...');
const navSpell = navigateTarget('spell', 'Acid Splash');
console.log('Nav Spell:', navSpell);

const navCond = navigateTarget('condition', 'Blinded');
console.log('Nav Condition:', navCond);

const navFeat = navigateTarget('feat', 'Musician');
console.log('Nav Feat:', navFeat);

const navEquip = navigateTarget('equipment', 'Backpack');
console.log('Nav Equipment:', navEquip);

const navMon = navigateTarget('creature', 'Goblin Warrior');
console.log('Nav Monster:', navMon);

function linkKnownEntities(html) {
  if (!html || typeof html !== 'string') return html;

  const conditions = [
    'Blinded', 'Charmed', 'Deafened', 'Exhaustion', 'Frightened', 
    'Grappled', 'Incapacitated', 'Invisible', 'Paralyzed', 'Petrified', 
    'Poisoned', 'Prone', 'Restrained', 'Stunned', 'Unconscious',
    'Accecato', 'Affascinato', 'Assordato', 'Sfinimento', 'Spaventato',
    'Afferrato', 'Incapace', 'Invisibile', 'Paralizzato', 'Pietrificato',
    'Avvelenato', 'Prono', 'Trattenuto', 'Stordito'
  ];

  const commonSpells = [
    'Pass without Trace', 'Speak with Animals', 'Dancing Lights', 'Minor Illusion',
    'Faerie Fire', 'Hellish Rebuke', 'Ray of Sickness', 'Ray of Frost', 'Acid Splash',
    'Fire Bolt', 'Poison Spray', 'Shocking Grasp', 'Chill Touch', 'Sacred Flame',
    'Spare the Dying', 'Vicious Mockery', 'Blade Ward', 'True Strike', 'Mage Hand',
    'Prestidigitation', 'Druidcraft', 'Produce Flame', 'Shillelagh', 'Thaumaturgy',
    'Guidance', 'Resistance', 'Mending', 'Darkness', 'Light', 'Invisibility',
    'Fireball', 'Command', 'Shield', 'Misty Step', 'Bless', 'Cure Wounds', 'Healing Word'
  ];

  const rulesTerms = [
    'Long Rest', 'Short Rest', 'Darkvision', 'Scurovista', 'Riposo Lungo', 'Riposo Breve',
    'Concentration', 'Concentrazione', 'Ritual', 'Rituale'
  ];

  // Sort by descending length so multi-word phrases take precedence
  const allTerms = [
    ...conditions.map(c => ({ term: c, type: 'condition' })),
    ...commonSpells.map(s => ({ term: s, type: 'spell' })),
    ...rulesTerms.map(r => ({ term: r, type: 'rule' }))
  ].sort((a, b) => b.term.length - a.term.length);

  const termMap = new Map();
  const patternParts = [];
  allTerms.forEach(item => {
    const lower = item.term.toLowerCase();
    if (!termMap.has(lower)) {
      termMap.set(lower, item);
      patternParts.push(item.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
  });

  const fullRegex = new RegExp(`\\b(${patternParts.join('|')})\\b`, 'gi');

  const tokens = html.split(/(<[^>]+>)/g);
  let insideLink = 0;

  return tokens.map(token => {
    if (token.startsWith('<')) {
      if (/^<a\b/i.test(token) || /class=["'][^"']*rh-ref-link/i.test(token)) {
        insideLink++;
      } else if (/^<\/a>/i.test(token) || (insideLink > 0 && /^<\/span>/i.test(token))) {
        insideLink = Math.max(0, insideLink - 1);
      }
      return token;
    }

    if (insideLink > 0) return token;

    return token.replace(fullRegex, (matched) => {
      const info = termMap.get(matched.toLowerCase());
      const type = info ? info.type : 'rule';
      return `<a class="rh-ref-link ref-${type}" data-type="${type}" data-name="${matched}">${matched}</a>`;
    });
  }).join('');
}

console.log('Testing linkKnownEntities...');
const sample1 = 'The creature falls Prone and is Blinded.';
const linked1 = linkKnownEntities(sample1);
console.log('Linked 1:', linked1);

const sample2 = 'Already linked: <a class="rh-ref-link" data-type="condition" data-name="Prone">Prone</a> and not linked: Invisible.';
const linked2 = linkKnownEntities(sample2);
console.log('Linked 2:', linked2);

if (!linked1.includes('data-name="Prone"') || !linked1.includes('data-name="Blinded"')) {
  console.error('FAIL: linkKnownEntities failed to link conditions!');
  process.exit(1);
}
if ((linked2.match(/data-name="Prone"/g) || []).length !== 1) {
  console.error('FAIL: linkKnownEntities double linked inside <a> tag!');
  process.exit(1);
}
console.log('SUCCESS: linkKnownEntities passed tests.');


