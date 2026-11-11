#!/usr/bin/env python3
"""Build a 2024 monsters dataset (XMM) in the app's compact format, from 5e.tools."""
import json, urllib.request
from pathlib import Path

BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'
ROOT = Path('/opt/data/5e-tg')

def get(p):
    req = urllib.request.Request(BASE + p, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=120))

TYPE_IT = {'aberration': 'Aberrazione', 'beast': 'Bestia', 'celestial': 'Celestiale',
           'construct': 'Costrutto', 'dragon': 'Drago', 'elemental': 'Elementale',
           'fey': 'Fata', 'fiend': 'Demone', 'giant': 'Gigante', 'humanoid': 'Umanoide',
           'monstrosity': 'Mostruosità', 'ooze': 'Melma', 'plant': 'Vegetale',
           'undead': 'Non morto'}

def main():
    idx = get('bestiary/index.json')
    monsters = get('bestiary/' + idx['XMM'])['monster']
    out = []
    for m in monsters:
        cr = m.get('cr')
        if isinstance(cr, dict):
            cr = cr.get('cr')
        abilities = [('FOR', m.get('str')), ('DES', m.get('dex')), ('COS', m.get('con')),
                     ('INT', m.get('int')), ('SAG', m.get('wis')), ('CAR', m.get('cha'))]
        stats = ' / '.join(f'{k} {v}' for k, v in abilities if isinstance(v, int))
        ty = m.get('type')
        while isinstance(ty, dict) and 'type' in ty:
            ty = ty['type']
        if isinstance(ty, list):
            ty = ty[0] if ty else ''
        if not isinstance(ty, str):
            ty = ''
        out.append({
            'n': m['name'], 'cr': cr, 'src': 'MM 2024',
            'sz': (m.get('size') or ['M'])[0],
            'ty': TYPE_IT.get(ty or '', ty or ''),
            'ac': (m.get('ac') or [None])[0],
            'hp': (m.get('hp') or {}).get('average'),
            'stats': stats,
        })
    js = 'const XP_MONSTERS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'monsters_data.js').write_text(js)
    print(f'monsters_data.js: {len(out)} monsters, {bytes(js,"utf-8").__len__()} bytes')
    for m in out[:3]:
        print('-', m['n'], '| CR', m['cr'], '|', m['ty'], '| CA', m['ac'], '| PF', m['hp'], '|', m['stats'][:44])

if __name__ == '__main__':
    main()
