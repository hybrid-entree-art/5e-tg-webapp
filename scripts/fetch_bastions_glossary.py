#!/usr/bin/env python3
"""Build compact 2024 datasets: Bastions (facilities) and Glossary (conditions)."""
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

FACILITY_IT = {'arcane': 'Arcana', 'cult': 'Culto', 'defense': 'Difesa',
               'guild': 'Associazione', 'trade': 'Commercio', 'special': 'Speciale',
               'religious': 'Religioso', 'lifestyle': 'Vita'}
ORDER_IT = {'recruit': 'Reclutare', 'craft': 'Fabbricare', 'trade': 'Commercio',
            'investigate': 'Indagare', 'research': 'Ricercare', 'harvest': 'Raccogliere',
            'maintain': 'Manutenzione', 'empower': 'Potenziare', 'payday': 'Incasso',
            'gainays':'', 'grant': 'Concedere'}

def build_bastions():
    facs = [f for f in fetch('bastions.json')['facility'] if f.get('source') == 'XDMG']
    out = []
    for f in facs:
        prereq = []
        for p in f.get('prerequisite', []) or []:
            if isinstance(p, dict):
                for k, v in p.items():
                    if k == 'level':
                        prereq.append(f'Livello {v}')
                    elif v:
                        prereq.append(k.replace('_', ' ').title())
        out.append({'id': f'bas-{len(out)}', 'name': f['name'], 'source': f['source'],
                    'type': FACILITY_IT.get(f.get('facilityType'), f.get('facilityType', '')),
                    'level': f.get('level'), 'space': (f.get('space') or [])[:1],
                    'orders': [ORDER_IT.get(o, o) for o in (f.get('orders') or [])],
                    'hirelings': f.get('hirelings'), 'prereq': prereq,
                    'text': ' '.join(node_text(x) for x in (f.get('entries', []) or []))})
    (ROOT / 'bastions_data.js').write_text('const BASTIONS = ' + json.dumps(out, ensure_ascii=False) + ';\n')
    print(f'bastions_data.js: {len(out)}')

def build_glossary():
    conds = [c for c in fetch('conditionsdiseases.json')['condition'] if c.get('source') == 'XPHB']
    out = []
    it = {'Blinded': 'Cecità', 'Charmed': 'Amaliato', 'Deafened': 'Assordato',
          'Exhaustion': 'Affaticamento', 'Frightened': 'Spaventato', 'Grappled': 'Afferrato',
          'Incapacitated': 'Incapacitato', 'Invisible': 'Invisibile', 'Paralyzed': 'Paralizzato',
          'Petrified': 'Pietrificato', 'Poisoned': 'Avvelenato', 'Prone': 'Prono',
          'Restrained': 'Trattenuto', 'Stunned': 'Stordito', 'Unconscious': 'Privo di Sensi'}
    for c in conds:
        out.append({'id': f'gl-{len(out)}', 'name': c['name'], 'it': it.get(c['name'], c['name']),
                    'category': 'Condizione',
                    'text': ' '.join(node_text(x) for x in (c.get('entries', []) or []))})
    (ROOT / 'glossary_data.js').write_text('const GLOSSARY = ' + json.dumps(out, ensure_ascii=False) + ';\n')
    print(f'glossary_data.js: {len(out)}')

if __name__ == '__main__':
    build_bastions()
    build_glossary()
