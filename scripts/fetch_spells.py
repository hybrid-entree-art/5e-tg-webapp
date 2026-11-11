#!/usr/bin/env python3
"""Build a 2024 spells dataset (XPHB) in the app's compact format, from 5e.tools."""
import json, re, urllib.request
from pathlib import Path

BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'
ROOT = Path('/opt/data/5e-tg')

def get(p):
    req = urllib.request.Request(BASE + p, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=120))

def strip_tags(t):
    t = re.sub(r'\{@(?:spell|skill|action|condition|variantrule|item|[a-z]+) ([^|}\n]+)(?:[^}]*)?\}', r'\1', t)
    t = re.sub(r'\{@dc ?(\d+)\}', r'CD \1', t)
    t = re.sub(r'\{@[^}]+\}', '', t)
    t = t.replace('{@i ', '').replace('{@b ', '')
    return re.sub(r'\s+', ' ', t).strip()

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

RNG_OK = {'point': 'point', 'self': 'self', 'touch': 'touch', 'radius': 'radius',
          'cone': 'cone', 'line': 'line', 'cube': 'cube', 'hemisphere': 'hemisphere',
          'sphere': 'sphere', 'plane': 'plane', 'special': 'special',
          'unlimited': 'unlimited', 'sight': 'sight'}

def main():
    idx = get('spells/index.json')
    spells = get('spells/' + idx['XPHB'])['spell']
    out = []
    for s in spells:
        rng = s.get('range') or {}
        rtype = rng.get('type') or 'special'
        time = (s.get('time') or [{}])[0]
        txt = ' '.join(node_text(x) for x in (s.get('entries', []) or []))
        out.append({
            'n': s['name'], 'lv': s.get('level', 0),
            'sc': s.get('school'), 'src': 'PHB 2024',
            'tmn': time.get('number'), 'tmi': time.get('unit'),
            'rng': rtype, 'txt': txt,
        })
    js = 'const XP_SPELLS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'spells_data.js').write_text(js)
    print(f'spells_data.js: {len(out)} spells, {bytes(js,"utf-8").__len__()} bytes')
    for s in out[:4]:
        print('-', s['n'], '| lv', s['lv'], '| school', s['sc'], '| rng', s['rng'],
              '| time', s['tmn'], s['tmi'], '| txt', s['txt'][:60])

if __name__ == '__main__':
    main()
