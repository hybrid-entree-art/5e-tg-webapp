#!/usr/bin/env python3
"""Build a compact 2024-backgrounds data file for the Compendio Mini App,
parsing the real 5e.tools `backgrounds.json` (source=XPHB)."""
import json, re, urllib.request
from pathlib import Path

SRC = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/backgrounds.json'
OUT = Path('/opt/data/5e-tg/bg_data.js')

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=120))

# ----------------------------------------------------------------------------
# helpers to flatten 5etools "entries" (list/item/table + {@tags})
def link_note(s):
    # turn {@skill History|XPHB} -> "History" ; keep known joiners
    return s

def strip_tags(text):
    text = re.sub(r'\{@([a-z]+) ([^|}]+)(?:\|[^}]+)?\}',
                  lambda m: m.group(2), text)
    text = text.replace('{@i ', '').replace('{@b ', '')
    text = text.replace('}', '')
    return re.sub(r'\s+', ' ', text).strip()

def entry_text(e):
    """Render a single 5e.tools entry node to text (recursively)."""
    if isinstance(e, str):
        return strip_tags(e)
    if not isinstance(e, dict):
        return ''
    t = e.get('type')
    if t in ('list', 'list-hang', 'list-hang-notitle'):
        items = []
        for it in e.get('items', []):
            if isinstance(it, str):
                items.append('• ' + strip_tags(it))
            else:
                name = it.get('name')
                ent = it.get('entry', '')
                head = f"{name}: " if name else ''
                if isinstance(ent, list):
                    ent = ' '.join(entry_text(x) for x in ent)
                items.append('• ' + head + strip_tags(ent) if isinstance(ent, str) else '• ' + head + '')
        return '\n'.join(items)
    if t == 'item':
        name = e.get('name', '')
        ent = e.get('entry', '')
        if isinstance(ent, list):
            ent = ' '.join(entry_text(x) for x in ent)
        return f"{name}: {ent}".strip()
    if t == 'table':
        rows = []
        for r in e.get('rows', []):
            row = e.get('colLabels', [])
            rows.append('\t'.join(strip_tags(str(c)) if not isinstance(c, list) else ' / '.join(strip_tags(str(cc)) for cc in c) for c in r))
        return '\n'.join([strip_tags(str(x)) for x in e.get('colLabels', [])] + rows)
    if t == 'hr':
        return ''
    if t == 'quote':
        return '“' + (e.get('text') or '') + '”'
    # generic: try label + entries
    if 'entries' in e:
        return '\n'.join(entry_text(x) for x in e['entries'])
    if 'text' in e:
        return strip_tags(e['text'])
    return json.dumps(e, ensure_ascii=False)[:200]

IT = {
    'Entertainer': 'Artista', 'Charlatan': 'Vagabondo', 'Noble': 'Nobile',
    'Acolyte': 'Accolito', 'Artisan': 'Artigiano', 'Criminal': 'Criminale',
    'Farmer': 'Contadino', 'Guard': 'Guardia', 'Guide': 'Guida',
    'Hermit': 'Eremita', 'Merchant': 'Mercante', 'Sage': 'Saggio',
    'Sailor': 'Marinaio', 'Scribe': 'Scrivano', 'Soldier': 'Soldato',
    'Wayfarer': 'Viandante',
}
ABILITY_IT = {'str':'Forza','dex':'Destrezza','con':'Costituzione',
              'int':'Intelligenza','wis':'Saggezza','cha':'Carisma'}
SKILL_IT = {'acrobatics':'Acrobazia','animal handling':'Addestrare Animali','arcana':'Arcano',
 'athletics':'Atletica','deception':'Inganno','history':'Storia','insight':'Intuizione',
 'intimidation':'Intimidire','investigation':'Indagine','medicine':'Medicina','nature':'Natura',
 'perception':'Percezione','performance':'Esibizione','persuasion':'Persuasione','religion':'Religione',
 'sleight of hand':'Rapidità di Mano','stealth':'Furtività','survival':'Sopravvivenza'}
TOOL_IT = {'musical instrument':'uno strumento musicale','thieves\' tools':"arnesi da scasso",
 'disguise kit':'kit da travestimento','forgery kit':'kit da falsario','herbalism kit':'kit da erborista',
 'alchemists\' supplies':'forniture da alchimista','cartographer\'s tools':'strumenti da cartografo',
 'carpenter\'s tools':'strumenti da carpentiere','cobbler\'s tools':'strumenti da calzolaio',
 'navigator\'s tools':'strumenti da navigatore','tinker\'s tools':'arnesi da riparatore',
 'vehicles (land)':'veicoli (terra)','vehicles (water)':'veicoli (acqua)',
 'anymusical instrument':'uno strumento musicale','instrumentmusical':'uno strumento musicale',
 'anymusicalinstrument':'uno strumento musicale','musicalinstrument':'uno strumento musicale'}
ITEM_IT = {'costume':'Costume','mirror':'Specchio','perfume':'Profumo',
 "traveler's clothes":'Vesti da viaggio','book (prayers)':'Libro di preghiere',
 'holy symbol':'Simbolo sacro','parchment':'Pergamena','robe':'Veste','candle':'Candela',
 'ball bearings':'Biglie','block and tackle':'Paranco','bell':'Campanello','bucket':'Secchio',
 'caltrops':'Chiodi a quattro punte','chalk':'Gesso','chest':'Cassa','crowbar':'Piede di porco',
 'flask':'Fiaschetta','grappling hook':'Rampino','hammer':'Martello','ink':'Inchiostro',
 'ink pen':'Penna','ladder':'Scala','lock':'Lucchetto','magnifying glass':'Lente d\'ingrandimento',
 'manacles':'Manette','mess kit':'Necessaire da campo','mirror (steel)':'Specchio d\'acciaio',
 'pitons':'Picchetti da roccia','pouch':'Borsa','rope':'Corda','sack':'Sacco','signal whistle':'Fischietto',
 'spellbook':'Libro degli incantesimi','spyglass':'Cannocchiale','tent':'Tenda','waterskin':'Otre d\'acqua',
 "whetstone":'Cote per affilare','backpack':'Zaino','bedroll':'Giaciglio','blanket':'Coperta'}

def ascii_abilities(v):
    out = []
    if isinstance(v, dict):
        for k, flag in v.items():
            if flag and k in ABILITY_IT:
                out.append(ABILITY_IT[k])
    return out

def main():
    data = fetch(SRC)['background']
    xphb = [b for b in data if b.get('source') == 'XPHB']
    records = []
    for b in xphb:
        # ability list
        abilities = []
        for ab in b.get('ability', []):
            abilities.extend(ascii_abilities(ab))
            if isinstance(ab, dict) and 'choose' in ab:
                choose = ab['choose']
                if 'from' in choose:
                    abilities.extend(choose['from'])
                elif 'weighted' in choose and isinstance(choose['weighted'].get('from'), list):
                    abilities.extend(choose['weighted']['from'])
        abilities = [ABILITY_IT.get(a, a) for a in abilities]
        abilities = list(dict.fromkeys(abilities))
        # skills / tools
        def flat(profs, mapping):
            out = []
            for p in profs or []:
                if isinstance(p, dict):
                    for k, flag in p.items():
                        if flag:
                            key = k.replace('-', ' ').replace('_', ' ').lower()
                            out.append({'name': mapping.get(key, k.title()), 'choose': False})
                    if 'choose' in p:
                        out.append({'name': ' (a scelta)', 'choose': True})
                elif isinstance(p, str):
                    key = p.replace('-', ' ').replace('_', ' ').lower()
                    out.append({'name': mapping.get(key, p.title()), 'choose': False})
            return out
        skills = flat(b.get('skillProficiencies'), SKILL_IT)
        tools = flat(b.get('toolProficiencies'), TOOL_IT)
        feats = []
        for f in b.get('feats', []) or []:
            if isinstance(f, str):
                name = f.split('|')[0]
            elif isinstance(f, dict):
                name = f.get('name') or str(f)
                # name may be a tag like {'entertainer|xphb': True}
                if not isinstance(name, str) or '|' in str(f):
                    key = next(iter(f)) if isinstance(f, dict) and f else ''
                    name = key.split('|')[0]
            name = re.sub(r'\s*;\s*', ', ', str(name))
            name = re.sub(r'[_\-]', ' ', name).strip()
            name = ' '.join(w.capitalize() if i == 0 or w.lower() not in ('of', 'and') else w for i, w in enumerate(name.split(' ')))
            feats.append(name)
        # prose description + feature: separate the fluff intro from mechanics
        entries = b.get('entries', [])
        text = '\n'.join(entry_text(e) for e in entries)
        # starting equipment
        eq = []
        for grp in b.get('startingEquipment', []):
            if not isinstance(grp, dict):
                continue
            for letter in ('A', 'B', 'C'):
                opts = grp.get(letter)
                if not opts:
                    continue
                names = []
                for o in opts:
                    if isinstance(o, str):
                        names.append(o.split('|')[0].title())
                    elif isinstance(o, dict):
                        if 'value' in o:
                            names.append(f"{o['value']/100:g} PO")
                            continue
                        if 'equipmentType' in o:
                            names.append('Uno strumento musicale')
                            continue
                        name = o.get('displayName') or (o.get('item') or '').split('|')[0]
                        if not name:
                            continue
                        name = ITEM_IT.get(name.lower(), name if name[:1].isupper() else name.title())
                        qty = o.get('quantity', 1)
                        names.append(name if qty == 1 else f"{qty}× {name}")
                if names:
                    eq.append((letter, names))
        records.append({
            'id': f"bg-{b['source'].lower()}-{len(records)}",
            'name': b['name'], 'it': IT.get(b['name'], b['name']),
            'source': b['source'], 'page': b.get('page'),
            'ability': abilities, 'skills': skills, 'tools': tools,
            'feats': feats, 'equipment': eq, 'text': text,
        })
    js = 'const BACKGROUNDS = ' + json.dumps(records, ensure_ascii=False) + ';\n'
    OUT.write_text(js)
    print(f'wrote {OUT} with {len(records)} backgrounds, {bytes(js, "utf-8").__len__()} bytes')
    for r in records[:3]:
        print('-', r['name'], '->', r['it'], '| abil:', r['ability'], '| feats:', r['feats'])
    print('sample text:', records[4]['text'][:300].replace('\n', ' / '))

if __name__ == '__main__':
    main()
