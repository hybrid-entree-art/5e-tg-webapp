#!/usr/bin/env python3
"""Build compact 2024 datasets for the Compendio Mini App: feats, equipment,
magic items — from the real 5e.tools `feats.json` and `items.json` (XPHB/XDMG)."""
import json, re, urllib.request
from pathlib import Path

BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'
ROOT = Path('/opt/data/5e-tg')

def fetch(name):
    req = urllib.request.Request(BASE + name, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=180))

def strip_tags(text):
    text = re.sub(r'\{@([a-z]+) ([^|}]+)(?:\|[^}]+)?\}', lambda m: m.group(2), text)
    text = text.replace('{@i ', '').replace('{@b ', '')
    text = text.replace('}', '')
    return re.sub(r'\s+', ' ', text).strip()

def node_text(e):
    if isinstance(e, str):
        return strip_tags(e)
    if not isinstance(e, dict):
        return ''
    if 'entries' in e:
        return ' '.join(node_text(x) for x in e['entries']).strip()
    if 'text' in e:
        return strip_tags(e['text'])
    return ''

# ---------------------------------------------------------------- feats
CAT_IT = {'G': 'Generale', 'O': 'Origine', 'F': 'Stile di combattimento',
          'P': 'Epico', 'B': 'Bonus'}
PREREQ_IT = {'str': 'Forza', 'dex': 'Destrezza', 'con': 'Costituzione',
             'int': 'Intelligenza', 'wis': 'Saggezza', 'cha': 'Carisma'}

def build_feats():
    data = fetch('feats.json')['feat']
    out = []
    for f in data:
        if f.get('source') != 'XPHB':
            continue
        cat = CAT_IT.get(f.get('category'), f.get('category', 'Generale'))
        prereq = []
        for p in f.get('prerequisite', []) or []:
            if isinstance(p, dict):
                for k, v in p.items():
                    if k == 'level':
                        prereq.append(f'Livello {v}')
                    elif k == 'spellcasting' and v:
                        prereq.append('Capacità di incantare')
                    elif k in PREREQ_IT and v:
                        prereq.append(f'{PREREQ_IT[k]} 13+')
            elif isinstance(p, str):
                prereq.append(strip_tags(p))
        text = ' '.join(node_text(x) for x in (f.get('entries', []) or []))
        out.append({'id': f'feat-{len(out)}', 'name': f['name'], 'source': f['source'],
                    'category': cat, 'prereq': prereq, 'text': text,
                    'repeatable': bool(f.get('repeatable', False))})
    (ROOT / 'feats_data.js').write_text(
        'const FEATS = ' + json.dumps(out, ensure_ascii=False) + ';\n')
    print(f'feats_data.js: {len(out)}')

# ---------------------------------------------------------------- equipment / magic
ITEM_TYPE_IT = {'W': 'Arma', 'M': 'Arma da mischia', 'R': 'Arma a distanza',
                'A': 'Armatura', 'LA': 'Armatura leggera', 'MA': 'Armatura media',
                'HA': 'Armatura pesante', 'S': 'Scudo', 'G': 'Attrezzatura',
                'AT': 'Munizioni', 'F': 'Focus', 'SF': 'Focus', 'T': 'Attrezzo',
                'INS': 'Strumento', 'SCF': 'Focus', 'EX': 'Esplosivo',
                'GV': 'Veicolo terrestre', 'VH': 'Veicolo'}
RARITY_IT = {'common': 'Comune', 'uncommon': 'Non comune', 'rare': 'Raro',
             'very rare': 'Molto raro', 'legendary': 'Leggendario',
             'artifact': 'Artefatto', 'varies': 'Variabile', 'none': '—'}

def item_type_name(it):
    t = (it.get('type') or 'G').split('|')[0]
    return ITEM_TYPE_IT.get(t, t)

def build_items():
    items = fetch('items.json')['item']
    equip = [i for i in items if i.get('source') == 'XPHB']
    magic = [i for i in items if i.get('source') == 'XDMG']
    def rec(i):
        return {'id': f"it-{i['source']}-{i['name'].replace(' ','-').lower()[:20]}-{i.get('page','')}",
                'name': i['name'], 'source': i['source'],
                'type': item_type_name(i), 'typeCode': (i.get('type') or '').split('|')[0],
                'rarity': RARITY_IT.get((i.get('rarity') or 'none'), i.get('rarity', '')),
                'value': i.get('value'), 'weight': i.get('weight'),
                'text': ' '.join(node_text(x) for x in (i.get('entries', []) or [])), 'page': i.get('page')}
    (ROOT / 'equipment_data.js').write_text(
        'const EQUIPMENT = ' + json.dumps([rec(i) for i in equip], ensure_ascii=False) + ';\n')
    (ROOT / 'magic_data.js').write_text(
        'const MAGIC = ' + json.dumps([rec(i) for i in magic], ensure_ascii=False) + ';\n')
    print(f'equipment_data.js: {len(equip)}  magic_data.js: {len(magic)}')

if __name__ == '__main__':
    build_feats()
    build_items()
