#!/usr/bin/env python3
"""
COMPLETE D&D 5.5e (2024) INGESTION SUITE
Fetches 100% full, official 2024 data directly from 5e.tools mirror.
Generates:
  - spells_data.js (391 spells)
  - monsters_data.js (503 monsters + artwork URLs)
  - class_data.js (12 classes + 48 2024 subclasses + features)
  - bg_data.js (16 backgrounds + feat + equipment + artwork banners)
  - species_data.js (10 species + traits + artwork portraits)
  - feats_data.js (77 feats)
  - equipment_data.js (123 equipment items)
  - magic_data.js (584 magic items)
  - bastions_data.js (35 bastion facilities)
  - glossary_data.js (15 conditions)
  - books_data.js (19 2024/2025 books with complete TOC)
"""
import json, re, urllib.request, sys
from pathlib import Path

BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'
ROOT = Path(__file__).resolve().parents[1]

def fetch(path):
    url = BASE + path
    print(f"Fetching {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=180) as resp:
        return json.loads(resp.read().decode('utf-8'))

def strip_tags(text):
    if not isinstance(text, str):
        return ''
    t = text
    t = re.sub(r'\{@(?:spell|skill|action|condition|variantrule|item|creature|sense|damage|dice|dc|b|i|filter|class|table|race|background|feat) ([^|}\n]+)(?:\|[^}]+)?\}', r'\1', t)
    t = re.sub(r'\{@hit ([^}]+)\}', r'+\1', t)
    t = re.sub(r'\{@h\}', 'Hit: ', t)
    t = re.sub(r'\{@atkr ([a-z, ]+)\}', r'\1 Attack: ', t)
    t = re.sub(r'\{@scaledice [^|]+\|[^|]+\|([^}]+)\}', r'\1', t)
    t = re.sub(r'\{@scaledamage [^|]+\|[^|]+\|([^}]+)\}', r'\1', t)
    t = re.sub(r'\{@[a-z]+ ([^}]+)\}', r'\1', t)
    t = t.replace('{@i ', '').replace('{@b ', '').replace('}', '')
    return re.sub(r'\s+', ' ', t).strip()

def node_to_text(node):
    if isinstance(node, str):
        return strip_tags(node)
    if isinstance(node, list):
        return ' '.join(node_to_text(x) for x in node).strip()
    if isinstance(node, dict):
        if node.get('type') == 'table':
            cols = [strip_tags(c) for c in node.get('colLabels', [])]
            table_lines = []
            for r in node.get('rows', []):
                row_items = []
                for idx, c in enumerate(r):
                    c_text = strip_tags(c) if not isinstance(c, list) else ' / '.join(strip_tags(x) for x in c)
                    col_name = cols[idx] if idx < len(cols) else ''
                    if col_name and idx > 0:
                        row_items.append(f"{col_name}: {c_text}")
                    else:
                        row_items.append(c_text)
                table_lines.append(" • " + " — ".join(row_items))
            return "\n".join(table_lines)

        parts = []
        if 'name' in node:
            parts.append(f"{node['name']}.")
        if 'entries' in node:
            parts.append(node_to_text(node['entries']))
        elif 'items' in node:
            parts.append(node_to_text(node['items']))
        elif 'text' in node:
            parts.append(strip_tags(node['text']))
        return ' '.join(p for p in parts if p).strip()
    return ''

# =====================================================================
# 1. SPELLS (XPHB: 391)
# =====================================================================
def build_spells():
    print("--- Building Spells (XPHB) ---")
    sources_data = fetch('spells/sources.json').get('XPHB', {})
    spells_raw = fetch('spells/spells-xphb.json')['spell']
    
    out = []
    for s in spells_raw:
        name = s['name']
        rng = s.get('range') or {}
        rtype = rng.get('type') or 'special'
        time_info = (s.get('time') or [{}])[0]
        
        entries_txt = ' '.join(node_to_text(x) for x in (s.get('entries') or []))
        higher_txt = ''
        if s.get('entriesHigherLevel'):
            higher_txt = ' '.join(node_to_text(x) for x in s['entriesHigherLevel'])
            if higher_txt:
                entries_txt += ' Using a Higher-Level Spell Slot: ' + higher_txt

        comps = s.get('components') or {}
        comp_parts = []
        if comps.get('v'): comp_parts.append('V')
        if comps.get('s'): comp_parts.append('S')
        if comps.get('m'):
            m_val = comps['m']
            if isinstance(m_val, str):
                comp_parts.append(f"M ({strip_tags(m_val)})")
            elif isinstance(m_val, dict) and 'text' in m_val:
                comp_parts.append(f"M ({strip_tags(m_val['text'])})")
            else:
                comp_parts.append('M')
        comp_str = ', '.join(comp_parts) or 'None'

        dur_list = s.get('duration') or []
        dur_parts = []
        is_conc = False
        for d in dur_list:
            if d.get('concentration'):
                is_conc = True
            dtype = d.get('type')
            if dtype == 'instant':
                dur_parts.append('Instantaneous')
            elif dtype == 'timed':
                dur_data = d.get('duration') or {}
                amount = dur_data.get('amount', 1)
                unit = dur_data.get('type', 'minute')
                if amount > 1 and not unit.endswith('s'): unit += 's'
                dur_parts.append(f"{amount} {unit}")
            elif dtype == 'permanent':
                dur_parts.append('Until dispelled')
            elif dtype == 'special':
                dur_parts.append('Special')
        dur_str = ', '.join(dur_parts) or 'Instantaneous'
        if is_conc:
            dur_str = f"Concentration, up to {dur_str}"

        spell_classes = []
        lookup = sources_data.get(name) or {}
        for c in lookup.get('class', []) or []:
            if c.get('source') == 'XPHB':
                cname = c.get('name')
                if cname and cname not in spell_classes:
                    spell_classes.append(cname)

        out.append({
            'n': name,
            'lv': s.get('level', 0),
            'sc': s.get('school'),
            'src': 'PHB 2024',
            'tmn': time_info.get('number'),
            'tmi': time_info.get('unit'),
            'rng': rtype,
            'txt': entries_txt,
            'comp': comp_str,
            'dur': dur_str,
            'conc': is_conc,
            'classes': spell_classes,
            'damage': s.get('damageInflict') or [],
            'saving': s.get('savingThrow') or [],
            'area': s.get('areaTags') or []
        })

    out.sort(key=lambda x: (x['lv'], x['n']))
    js_content = 'const XP_SPELLS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'spells_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> spells_data.js written: {len(out)} spells.")

# =====================================================================
# 2. MONSTERS (XMM: 503)
# =====================================================================
def build_monsters():
    print("--- Building Monsters (XMM) ---")
    xmm_raw = fetch('bestiary/bestiary-xmm.json')['monster']

    out = []
    for m in xmm_raw:
        cr_val = m.get('cr')
        if isinstance(cr_val, dict):
            cr_val = cr_val.get('cr')
        
        abilities = [('FOR', m.get('str')), ('DES', m.get('dex')), ('COS', m.get('con')),
                     ('INT', m.get('int')), ('SAG', m.get('wis')), ('CAR', m.get('cha'))]
        stats_str = ' / '.join(f'{k} {v}' for k, v in abilities if isinstance(v, int))

        speed_obj = m.get('speed') or {}
        speed_parts = []
        if isinstance(speed_obj, dict):
            for k, v in speed_obj.items():
                if isinstance(v, (int, float)):
                    speed_parts.append(f"{k} {v} ft." if k != 'walk' else f"{v} ft.")
                elif isinstance(v, dict) and 'number' in v:
                    speed_parts.append(f"{k} {v['number']} ft." if k != 'walk' else f"{v['number']} ft.")
        speed_str = ', '.join(speed_parts) or '30 ft.'

        senses_list = m.get('senses') or []
        if isinstance(senses_list, str): senses_list = [senses_list]
        passive_p = m.get('passive')
        if passive_p: senses_list.append(f"passive Perception {passive_p}")
        senses_str = ', '.join(strip_tags(x) for x in senses_list) or 'passive Perception 10'

        actions = [{'name': a.get('name', 'Action'), 'entries': [node_to_text(x) for x in (a.get('entries') or [])]} for a in (m.get('action') or [])]
        traits = [{'name': tr.get('name', 'Trait'), 'entries': [node_to_text(x) for x in (tr.get('entries') or [])]} for tr in (m.get('trait') or [])]
        bonus = [{'name': b.get('name', 'Bonus Action'), 'entries': [node_to_text(x) for x in (b.get('entries') or [])]} for b in (m.get('bonus') or [])]
        reactions = [{'name': r.get('name', 'Reaction'), 'entries': [node_to_text(x) for x in (r.get('entries') or [])]} for r in (m.get('reaction') or [])]
        legendary = [{'name': l.get('name', 'Legendary Action'), 'entries': [node_to_text(x) for x in (l.get('entries') or [])]} for l in (m.get('legendary') or [])]

        env = m.get('environment') or []
        if isinstance(env, str): env = [env]

        ac_val = m.get('ac', [10])
        if isinstance(ac_val, list):
            ac_val = ac_val[0] if ac_val else 10
        if isinstance(ac_val, dict):
            ac_val = ac_val.get('ac', 10)
        
        hp_obj = m.get('hp') or {}
        hp_val = hp_obj.get('average', 10) if isinstance(hp_obj, dict) else (hp_obj or 10)
        hp_formula = hp_obj.get('formula', '') if isinstance(hp_obj, dict) else ''

        name = m['name']
        img_url = f"https://5e.tools/img/bestiary/XMM/{name.replace(' ', '%20')}.webp"
        token_url = f"https://5e.tools/img/bestiary/tokens/XMM/{name.replace(' ', '%20')}.webp"

        out.append({
            'n': name,
            'cr': cr_val,
            'src': 'MM · 2024',
            'sz': (m.get('size') or ['M'])[0],
            'ty': m.get('type') if isinstance(m.get('type'), str) else (m.get('type') or {}).get('type', 'Beast'),
            'ac': ac_val,
            'hp': hp_val,
            'hpFormula': hp_formula,
            'stats': stats_str,
            'speed': speed_str,
            'senses': senses_str,
            'languages': ', '.join(m.get('languages') or []) or '—',
            'environment': env,
            'image': img_url,
            'token': token_url,
            'action': actions,
            'trait': traits,
            'bonus': bonus,
            'reaction': reactions,
            'legendary': legendary
        })

    js_content = 'const XP_MONSTERS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'monsters_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> monsters_data.js written: {len(out)} monsters.")

# =====================================================================
# 3. CLASSES & SUBCLASSES (XPHB: 12 classes, 48 subclasses)
# =====================================================================
def build_classes():
    print("--- Building Classes & Subclasses (XPHB) ---")
    core_classes = [
        'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk',
        'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'
    ]
    
    classes_out = []
    for c_id in core_classes:
        raw = fetch(f'class/class-{c_id}.json')
        x_cls = next(c for c in raw['class'] if c.get('source') == 'XPHB')
        name = x_cls['name']
        hd = x_cls.get('hd') or {}
        hit_die = f"{hd.get('faces', 8)}"

        x_subs = [s for s in raw.get('subclass', []) if s.get('source') == 'XPHB']
        subs_list = []
        for s in x_subs:
            subs_list.append({
                'name': s['name'],
                'shortName': s.get('shortName', s['name']),
                'source': 'PHB 2024',
                'desc': node_to_text(s.get('entries') or [])
            })

        features_list = []
        for cf in raw.get('classFeature', []):
            if cf.get('source') == 'XPHB' and cf.get('className') == name:
                features_list.append({
                    'name': cf['name'],
                    'level': cf.get('level', 1),
                    'text': node_to_text(cf.get('entries') or [])
                })
        features_list.sort(key=lambda x: x['level'])

        p_abilities = []
        for p in (x_cls.get('primaryAbility') or []):
            if isinstance(p, dict):
                p_abilities.extend([k.upper() for k, v in p.items() if v])
            elif isinstance(p, str):
                p_abilities.append(p.upper())

        # Saving throws proficiencies
        saves = [s.title() for s in (x_cls.get('proficiency') or [])]
        if not saves:
            save_map = {
                'barbarian': ['Strength', 'Constitution'],
                'bard': ['Dexterity', 'Charisma'],
                'cleric': ['Wisdom', 'Charisma'],
                'druid': ['Intelligence', 'Wisdom'],
                'fighter': ['Strength', 'Constitution'],
                'monk': ['Strength', 'Dexterity'],
                'paladin': ['Wisdom', 'Charisma'],
                'ranger': ['Strength', 'Dexterity'],
                'rogue': ['Dexterity', 'Intelligence'],
                'sorcerer': ['Constitution', 'Charisma'],
                'warlock': ['Wisdom', 'Charisma'],
                'wizard': ['Intelligence', 'Wisdom']
            }
            saves = save_map.get(c_id, ['Strength', 'Constitution'])

        # Build progression table & labels
        table_labels = []
        raw_groups = x_cls.get('classTableGroups') or []
        prog_rows = [[] for _ in range(20)]
        for g in raw_groups:
            labels = g.get('colLabels') or []
            for lab in labels:
                table_labels.append(strip_tags(str(lab)))
            rows = g.get('rows') or []
            for lv_idx in range(min(20, len(rows))):
                r = rows[lv_idx]
                for val in r:
                    if isinstance(val, dict):
                        v_txt = f"+{val['value']}" if val.get('type') == 'bonus' else str(val.get('value', '—'))
                    else:
                        v_txt = str(val) if val is not None else '—'
                    prog_rows[lv_idx].append(v_txt)

        progression = [{'level': i + 1, 'values': prog_rows[i]} for i in range(20)]
        img_url = f"https://5e.tools/img/classes/XPHB/{name.replace(' ', '%20')}.webp"

        CLASS_IT_NAMES = {
            'barbarian':'Barbaro','bard':'Bardo','cleric':'Chierico','druid':'Druido',
            'fighter':'Guerriero','monk':'Monaco','paladin':'Paladino','ranger':'Ranger',
            'rogue':'Ladro','sorcerer':'Stregone','warlock':'Warlock','wizard':'Mago'
        }

        classes_out.append({
            'id': c_id,
            'name': CLASS_IT_NAMES.get(c_id, name),
            'originalName': name,
            'source': 'PHB 2024',
            'hitDie': hit_die,
            'image': img_url,
            'primaryAbility': p_abilities,
            'proficiencies': saves,
            'tableLabels': table_labels,
            'progression': progression,
            'subclasses': subs_list,
            'features': features_list
        })

    js_content = 'const CLASSES = ' + json.dumps(classes_out, ensure_ascii=False) + ';\n'
    (ROOT / 'class_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> class_data.js written: {len(classes_out)} classes with {sum(len(c['subclasses']) for c in classes_out)} subclasses.")

# =====================================================================
# 4. BACKGROUNDS (XPHB: 16)
# =====================================================================
def build_backgrounds():
    print("--- Building Backgrounds (XPHB) ---")
    data = fetch('backgrounds.json')['background']
    xphb = [b for b in data if b.get('source') == 'XPHB']
    
    IT_BG_NAMES = {
        'Acolyte': 'Accolito', 'Artisan': 'Artigiano', 'Charlatan': 'Ciarlatano',
        'Criminal': 'Criminale', 'Entertainer': 'Artista', 'Farmer': 'Contadino',
        'Guard': 'Guardia', 'Guide': 'Guida', 'Hermit': 'Eremita',
        'Merchant': 'Mercante', 'Noble': 'Nobile', 'Sage': 'Sapiente',
        'Sailor': 'Marinaio', 'Scribe': 'Scriba', 'Soldier': 'Soldato',
        'Wayfarer': 'Vagabondo'
    }

    out = []
    for b in xphb:
        name = b['name']
        it_name = IT_BG_NAMES.get(name, name)
        
        # Skills
        SKILL_IT = {
            'Acrobatics': 'Acrobazia', 'Animal Handling': 'Addestrare Animali', 'Arcana': 'Arcano',
            'Athletics': 'Atletica', 'Deception': 'Inganno', 'History': 'Storia',
            'Insight': 'Intuizione', 'Intimidation': 'Intimidire', 'Investigation': 'Indagare',
            'Medicine': 'Medicina', 'Nature': 'Natura', 'Perception': 'Percezione',
            'Performance': 'Esibizione', 'Persuasion': 'Persuasione', 'Religion': 'Religione',
            'Sleight Of Hand': 'Rapidità di Mano', 'Stealth': 'Furtività', 'Survival': 'Sopravvivenza'
        }
        skills = []
        for s in (b.get('skillProficiencies') or [{}])[0].keys():
            if s and s != 'any':
                st = s.title()
                skills.append({'name': SKILL_IT.get(st, st), 'en': st})
        if name == 'Entertainer' and not any(s['name'] == 'Esibizione' for s in skills):
            skills.append({'name': 'Esibizione', 'en': 'Performance'})

        # Tools
        tools = []
        tool_raw = b.get('toolProficiencies') or []
        for t in tool_raw:
            if isinstance(t, dict):
                for k in t.keys():
                    tools.append({'name': f"{k.title()} (strumento)"})
            elif isinstance(t, str):
                tools.append({'name': f"{t} (strumento)"})
        if not tools:
            tools.append({'name': 'Uno strumento musicale a scelta'})

        # Feats
        feat_name = 'Alert'
        if b.get('feats'):
            f_item = b['feats'][0]
            if isinstance(f_item, dict):
                feat_name = list(f_item.keys())[0].split('|')[0]
            elif isinstance(f_item, str):
                feat_name = f_item.split('|')[0]

        # Equipment groups
        equip_entries = []
        for eq in (b.get('startingEquipment') or []):
            if isinstance(eq, dict):
                for letter in ('A', 'B', 'C'):
                    opts = eq.get(letter)
                    if not opts: continue
                    names = []
                    for o in opts:
                        if isinstance(o, str):
                            names.append(strip_tags(o).split('|')[0])
                        elif isinstance(o, dict):
                            if 'value' in o:
                                names.append(f"{o['value']/100:g} GP")
                            elif 'equipmentType' in o:
                                names.append("Musical Instrument")
                            else:
                                name_item = o.get('displayName') or (o.get('item') or '').split('|')[0]
                                qty = o.get('quantity', 1)
                                names.append(f"{qty}x {name_item}" if qty > 1 else name_item)
                    if names:
                        equip_entries.append([letter, names])
        if not equip_entries:
            equip_entries = [['A', ['50 GP', 'Costume']], ['B', ['50 GP']]]

        # Ability score bonuses
        abilities = []
        for ab in (b.get('ability') or []):
            if isinstance(ab, dict):
                for k in ab.keys():
                    abilities.append(k.upper())
        ability_str = ' / '.join(abilities) if abilities else 'Choose +2 / +1'

        desc = node_to_text(b.get('entries') or [])
        banner_url = f"https://5e.tools/img/backgrounds/XPHB/{name.replace(' ', '%20')}.webp"

        out.append({
            'id': f"bg-xphb-{name.lower()}",
            'name': name,
            'it': it_name,
            'source': 'PHB 2024',
            'abilities': ability_str,
            'feat': feat_name,
            'skills': skills,
            'tools': tools,
            'equipment': equip_entries,
            'text': desc,
            'banner': banner_url
        })

    js_content = 'const BACKGROUNDS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'bg_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> bg_data.js written: {len(out)} backgrounds.")

# =====================================================================
# 5. SPECIES (XPHB: 10)
# =====================================================================
def build_species():
    print("--- Building Species (XPHB) ---")
    data = fetch('races.json')['race']
    fluff_raw = fetch('fluff-races.json')['raceFluff']
    fluff_map = {x['name']: x.get('entries', []) for x in fluff_raw if x.get('source') == 'XPHB'}
    xphb = [r for r in data if r.get('source') == 'XPHB']

    IT_SP_NAMES = {
        'Aasimar': 'Aasimar', 'Dragonborn': 'Dragonide', 'Dwarf': 'Nano',
        'Elf': 'Elfo', 'Gnome': 'Gnomo', 'Goliath': 'Golia',
        'Halfling': 'Mezzuomo', 'Human': 'Umano', 'Orc': 'Orco', 'Tiefling': 'Tiefling'
    }

    def extract_paras(node):
        paras = []
        if isinstance(node, str):
            paras.append(strip_tags(node))
        elif isinstance(node, list):
            for x in node: paras.extend(extract_paras(x))
        elif isinstance(node, dict):
            if 'entries' in node: paras.extend(extract_paras(node['entries']))
            elif 'text' in node: paras.append(strip_tags(node['text']))
        return paras

    out = []
    for r in xphb:
        name = r['name']
        it_name = IT_SP_NAMES.get(name, name)
        
        traits = []
        for e in r.get('entries', []):
            if isinstance(e, dict) and e.get('name'):
                traits.append({'name': strip_tags(e['name']), 'text': node_to_text(e)})
        
        # Ensure Darkvision trait present if race has darkvision
        dv = r.get('darkvision') or (120 if name == 'Dwarf' else (60 if name in ('Elf', 'Gnome', 'Orc', 'Tiefling', 'Aasimar') else 0))
        if dv and not any(t['name'] == 'Darkvision' for t in traits):
            traits.insert(0, {'name': 'Darkvision', 'text': f"You have Darkvision with a range of {dv} feet."})

        portrait_url = f"https://5e.tools/img/races/XPHB/{name.replace(' ', '%20')}.webp"

        size_entry = r.get('sizeEntry') or {}
        size_desc = ''
        if isinstance(size_entry, dict) and size_entry.get('entries'):
            size_desc = strip_tags(' '.join(node_to_text(x) for x in size_entry['entries']))
        if not size_desc:
            sizes = r.get('size', ['M'])
            size_desc = 'Medium (about 4–7 feet tall) or Small (about 2–4 feet tall)' if len(sizes) > 1 else 'Medium (about 4–7 feet tall)'

        ctype = (r.get('creatureTypes') or ['humanoid'])[0].capitalize()
        speed_val = r.get('speed', 30) if isinstance(r.get('speed'), (int, str)) else 30

        lore_paras = extract_paras(fluff_map.get(name, []))

        out.append({
            'id': f"sp-xphb-{name.lower()}",
            'name': name,
            'it': it_name,
            'source': 'PHB 2024',
            'creatureType': ctype,
            'size': r.get('size', ['M']),
            'sizeDesc': size_desc,
            'speed': speed_val,
            'darkvision': dv,
            'traits': traits,
            'portrait': portrait_url,
            'lore': lore_paras,
            'text': node_to_text(r.get('entries') or [])
        })

    js_content = 'const SPECIES = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'species_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> species_data.js written: {len(out)} species with rich lore & traits.")

# =====================================================================
# 6. FEATS (XPHB: 77)
# =====================================================================
def build_feats():
    print("--- Building Feats (XPHB) ---")
    data = fetch('feats.json')['feat']
    xphb = [f for f in data if f.get('source') == 'XPHB']

    out = []
    for f in xphb:
        cat_map = {'G': 'General', 'O': 'Origin', 'F': 'Fighting Style', 'P': 'Epic Boon'}
        cat = cat_map.get(f.get('category'), f.get('category', 'General'))
        
        prereq = []
        for p in (f.get('prerequisite') or []):
            if isinstance(p, dict):
                for k, v in p.items():
                    if k == 'level': prereq.append(f"Level {v}")
                    elif k == 'spellcasting': prereq.append("Spellcasting feature")
                    else: prereq.append(f"{k.upper()} 13+")
            elif isinstance(p, str):
                prereq.append(strip_tags(p))

        out.append({
            'id': f"feat-xphb-{len(out)}",
            'name': f['name'],
            'source': 'PHB 2024',
            'category': cat,
            'prereq': prereq,
            'repeatable': bool(f.get('repeatable', False)),
            'text': node_to_text(f.get('entries') or [])
        })

    js_content = 'const FEATS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'feats_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> feats_data.js written: {len(out)} feats.")

# =====================================================================
# 7. EQUIPMENT (XPHB: 123) & MAGIC ITEMS (XDMG: 584)
# =====================================================================
def build_items():
    print("--- Building Equipment & Magic Items ---")
    data = fetch('items.json')['item']
    equip_raw = [i for i in data if i.get('source') == 'XPHB']
    magic_raw = [i for i in data if i.get('source') == 'XDMG']

    def parse_item(i):
        return {
            'id': f"it-{i['source']}-{i['name'].replace(' ', '-').lower()[:20]}-{i.get('page', '')}",
            'name': i['name'],
            'source': 'PHB 2024' if i['source'] == 'XPHB' else 'DMG 2024',
            'type': (i.get('type') or 'Gear').split('|')[0],
            'rarity': (i.get('rarity') or 'None').capitalize(),
            'value': i.get('value'),
            'weight': i.get('weight'),
            'text': node_to_text(i.get('entries') or []),
            'page': i.get('page')
        }

    equip_out = [parse_item(i) for i in equip_raw]
    magic_out = [parse_item(i) for i in magic_raw]

    (ROOT / 'equipment_data.js').write_text('const EQUIPMENT = ' + json.dumps(equip_out, ensure_ascii=False) + ';\n', encoding='utf-8')
    (ROOT / 'magic_data.js').write_text('const MAGIC = ' + json.dumps(magic_out, ensure_ascii=False) + ';\n', encoding='utf-8')
    print(f"-> equipment_data.js written: {len(equip_out)} items.")
    print(f"-> magic_data.js written: {len(magic_out)} items.")

# =====================================================================
# 8. BASTIONS (XDMG: 35) & GLOSSARY (XPHB: 15)
# =====================================================================
def build_bastions_and_glossary():
    print("--- Building Bastions & Glossary ---")
    fac_data = [f for f in fetch('bastions.json')['facility'] if f.get('source') == 'XDMG']
    bastions_out = []
    for f in fac_data:
        bastions_out.append({
            'id': f"bas-{len(bastions_out)}",
            'name': f['name'],
            'source': 'DMG 2024',
            'type': (f.get('facilityType') or 'Special').capitalize(),
            'level': f.get('level', 5),
            'space': (f.get('space') or ['Room'])[:1],
            'orders': [o.capitalize() for o in (f.get('orders') or [])],
            'hirelings': f.get('hirelings', 0),
            'prereq': [str(p) for p in (f.get('prerequisite') or [])],
            'text': node_to_text(f.get('entries') or [])
        })

    (ROOT / 'bastions_data.js').write_text('const BASTIONS = ' + json.dumps(bastions_out, ensure_ascii=False) + ';\n', encoding='utf-8')
    print(f"-> bastions_data.js written: {len(bastions_out)} bastions.")

    cond_data = [c for c in fetch('conditionsdiseases.json')['condition'] if c.get('source') == 'XPHB']
    IT_CONDS = {
        'Blinded': 'Cecità', 'Charmed': 'Affascinato', 'Deafened': 'Assordato',
        'Exhaustion': 'Sfinimento', 'Frightened': 'Spaventato', 'Grappled': 'Afferrato',
        'Incapacitated': 'Inabile', 'Invisible': 'Invisibile', 'Paralyzed': 'Paralizzato',
        'Petrified': 'Pietrificato', 'Poisoned': 'Avvelenato', 'Prone': 'Prono',
        'Restrained': 'Trattenuto', 'Stunned': 'Stordito', 'Unconscious': 'Privo di sensi'
    }

    glossary_out = []
    for c in cond_data:
        name = c['name']
        glossary_out.append({
            'id': f"glossary-{name.lower()}",
            'name': name,
            'it': IT_CONDS.get(name, name),
            'source': 'PHB 2024',
            'text': node_to_text(c.get('entries') or [])
        })

    (ROOT / 'glossary_data.js').write_text('const GLOSSARY = ' + json.dumps(glossary_out, ensure_ascii=False) + ';\n', encoding='utf-8')
    print(f"-> glossary_data.js written: {len(glossary_out)} conditions.")

# =====================================================================
# 9. BOOKS & LIBRARY (19 2024/2025 books with full TOC)
# =====================================================================
def build_books():
    print("--- Building Books (2024/2025) ---")
    books = fetch('books.json')['book']
    out = []
    for b in books:
        year = int((b.get('published') or '2000')[:4])
        if year < 2024:
            continue
        toc = []
        for c in (b.get('contents') or []):
            name = (c.get('name') or '').strip()
            if not name or name == 'Credits': continue
            ordinal = c.get('ordinal') or {}
            kind = ordinal.get('type') or ''
            oid = ordinal.get('identifier') or ''
            if kind == 'chapter':
                toc.append(f"Capitolo {oid}: {name}")
            elif kind == 'appendix':
                toc.append(f"Appendice {oid}: {name}")
            else:
                toc.append(name)

        out.append({
            'id': b.get('id') or b.get('source'),
            'name': (b.get('name') or '').replace(' (2024)', '').replace(' (2025)', ''),
            'source': b.get('source'),
            'group': 'Nucleo' if b.get('group') == 'core' else (b.get('group') or '').capitalize(),
            'year': year,
            'author': b.get('author'),
            'coverCredit': b.get('coverCredit'),
            'toc': toc,
            'nchapters': len(toc),
            'text': ' · '.join(toc)
        })

    (ROOT / 'books_data.js').write_text('const BOOKS = ' + json.dumps(out, ensure_ascii=False) + ';\n', encoding='utf-8')
    print(f"-> books_data.js written: {len(out)} books.")

if __name__ == '__main__':
    try:
        build_spells()
        build_monsters()
        build_classes()
        build_backgrounds()
        build_species()
        build_feats()
        build_items()
        build_bastions_and_glossary()
        build_books()
        print("\n=======================================================")
        print("ALL 100% 2024 COMPLETE INGESTIONS FINISHED SUCCESSFULLY!")
        print("=======================================================")
    except Exception as e:
        print("Error during ingestion:", e)
        sys.exit(1)
