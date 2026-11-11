const fs = require('fs');
const path = require('path');

function linkKnownEntities(html) {
  if (!html || typeof html !== 'string') return html;

  // 1. 5e.tools explicit tags
  let processed = html.replace(/\{@(spell|condition|sense|item|creature|feat|action|hazard)\s+([^}]+)\}/gi, (match, tagType, tagContent) => {
    const parts = tagContent.split('|');
    const name = parts[0].trim();
    const display = (parts[1] && parts[1].trim()) || name;
    let type = 'rule';
    if (tagType === 'spell') type = 'spell';
    else if (tagType === 'condition') type = 'condition';
    else if (tagType === 'sense') type = 'rule';
    else if (tagType === 'item') type = 'item';
    else if (tagType === 'creature') type = 'creature';
    else if (tagType === 'feat') type = 'feat';
    return `<a class="rh-ref-link ref-${type}" data-type="${type}" data-name="${display}">${display}</a>`;
  });

  // Tokenize by HTML tags to only replace in text nodes
  const tokens = processed.split(/(<[^>]+>)/g);
  let insideLink = 0;

  // Ambiguous words that only refer to spells when in spell context
  const ambiguousSpells = [
    'Light', 'Shield', 'Resistance', 'Darkness', 'Command', 'Sleep', 'Jump',
    'Friends', 'Aid', 'Bless', 'Heroism', 'Sanctuary', 'Fly', 'Web', 'Blink',
    'Haste', 'Slow', 'Fear', 'Teleport', 'Wish', 'Guidance'
  ];
  const ambigRegex = new RegExp(
    `(\\b(?:cast|casts|casting|cast a|cast the|know|knows|learn|learns|prepare|prepares|prepared the)\\s+)?` +
    `\\b(${ambiguousSpells.join('|')})\\b` +
    `(\\s+(?:cantrip|spell))?`,
    'gi'
  );

  // Distinctive spells that never collide with ordinary English
  const distinctiveSpells = [
    'Pass without Trace', 'Speak with Animals', 'Dancing Lights', 'Minor Illusion',
    'Faerie Fire', 'Hellish Rebuke', 'Ray of Sickness', 'Ray of Frost', 'Acid Splash',
    'Fire Bolt', 'Poison Spray', 'Shocking Grasp', 'Chill Touch', 'Sacred Flame',
    'Spare the Dying', 'Vicious Mockery', 'Blade Ward', 'True Strike', 'Mage Hand',
    'Prestidigitation', 'Druidcraft', 'Produce Flame', 'Shillelagh', 'Thaumaturgy',
    'Mending', 'Misty Step', 'Cure Wounds', 'Healing Word', 'Eldritch Blast',
    'Magic Missile', 'Fireball', "Tasha's Hideous Laughter", 'Animal Friendship',
    'Armor of Agathys', 'Arms of Hadar', 'Color Spray', 'Chromatic Orb',
    'Dissonant Whispers', 'Expeditious Retreat', 'False Life', 'Feather Fall',
    'Hold Person', "Hunter's Mark", 'Lesser Restoration', 'Mirror Image',
    'Scorching Ray', 'Thunderwave', 'Witch Bolt'
  ].sort((a, b) => b.length - a.length);
  const distinctSpellRegex = new RegExp(`\\b(${distinctiveSpells.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');

  // Rules terms
  const ruleTerms = [
    'Bright Light', 'Dim Light', 'Darkvision', 'Scurovista',
    'Long Rest', 'Short Rest', 'Riposo Lungo', 'Riposo Breve',
    'Concentration', 'Concentrazione', 'Attunement', 'Sintonizzazione',
    'Magic action', 'Azione Magica', 'Opportunity Attack', "Attacco d'Opportunità"
  ].sort((a, b) => b.length - a.length);
  const ruleRegex = new RegExp(`\\b(${ruleTerms.map(r => r.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');

  // Conditions
  const conditions = [
    'Incapacitated', 'Unconscious', 'Frightened', 'Paralyzed', 'Petrified',
    'Restrained', 'Exhaustion', 'Deafened', 'Grappled', 'Poisoned',
    'Invisible', 'Blinded', 'Charmed', 'Stunned', 'Prone',
    'Accecato', 'Affascinato', 'Assordato', 'Sfinimento', 'Spaventato',
    'Afferrato', 'Incapace', 'Invisibile', 'Paralizzato', 'Pietrificato',
    'Avvelenato', 'Prono', 'Trattenuto', 'Stordito', 'Privo di Sensi'
  ].sort((a, b) => b.length - a.length);
  const condRegex = new RegExp(`\\b(${conditions.join('|')})\\b`, 'gi');

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

    let res = token;

    // 1. Rules (Bright Light, Dim Light, Darkvision, Long Rest...)
    res = res.replace(ruleRegex, (matched) => `<a class="rh-ref-link ref-rule" data-type="rule" data-name="${matched}">${matched}</a>`);

    // 2. Distinctive spells
    res = res.replace(distinctSpellRegex, (matched) => `<a class="rh-ref-link ref-spell" data-type="spell" data-name="${matched}">${matched}</a>`);

    // 3. Ambiguous spells (requires spell/cantrip prefix or suffix)
    res = res.replace(ambigRegex, (fullMatch, prefix, spellWord, suffix) => {
      const hasPrefix = Boolean(prefix && prefix.trim());
      const hasSuffix = Boolean(suffix && suffix.trim());
      if (!hasPrefix && !hasSuffix) return fullMatch;
      const p = prefix || '';
      const s = suffix || '';
      return `${p}<a class="rh-ref-link ref-spell" data-type="spell" data-name="${spellWord}">${spellWord}</a>${s}`;
    });

    // 4. Conditions
    res = res.replace(condRegex, (matched) => `<a class="rh-ref-link ref-condition" data-type="condition" data-name="${matched}">${matched}</a>`);

    return res;
  }).join('');
}

console.log('Testing contextual spell & rule linking:');

const t1 = 'You know the Light cantrip.';
const r1 = linkKnownEntities(t1);
console.log('T1 (cantrip Light):', r1);

const t2 = 'Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.';
const r2 = linkKnownEntities(t2);
console.log('T2 (searing light / Bright Light):', r2);

const t3 = 'A shield adds +2 to AC, but casting Shield adds +5 as a Reaction.';
const r3 = linkKnownEntities(t3);
console.log('T3 (shield item vs Shield spell):', r3);

const t4 = 'Target must succeed or have the Frightened condition until its turn ends.';
const r4 = linkKnownEntities(t4);
console.log('T4 (condition):', r4);

// Verifications:
// In T1: "Light" MUST be a spell link
if (!r1.includes('data-name="Light"')) {
  console.error('FAIL: T1 should have linked Light as a cantrip!');
  process.exit(1);
}

// In T2: "Searing light" MUST NOT be a link!
if (r2.includes('data-name="light"') || r2.includes('data-name="Searing light"')) {
  console.error('FAIL: T2 falsely linked common word light as a spell!');
  process.exit(1);
}

// In T2: "Bright Light" and "Dim Light" MUST be rule links!
if (!r2.includes('data-name="Bright Light"') || !r2.includes('data-name="Dim Light"')) {
  console.error('FAIL: T2 should have linked Bright Light and Dim Light as rules!');
  process.exit(1);
}

// In T3: "A shield" MUST NOT be a spell, but "casting Shield" MUST be a spell!
if (r3.includes('A <a class="rh-ref-link ref-spell" data-type="spell" data-name="shield">shield</a>')) {
  console.error('FAIL: T3 falsely linked armor shield as a spell!');
  process.exit(1);
}
if (!r3.includes('data-name="Shield"')) {
  console.error('FAIL: T3 should have linked casting Shield as a spell!');
  process.exit(1);
}

console.log('SUCCESS: All contextual spell linking tests PASSED!');
