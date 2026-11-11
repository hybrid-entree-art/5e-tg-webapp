#!/usr/bin/env python3
"""Build a compact 2024-species data file for the Compendio Mini App,
parsing the real 5e.tools `races.json` (source=XPHB)."""
import json, re, urllib.request
from pathlib import Path

SRC = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/races.json'
OUT = Path('/opt/data/5e-tg/species_data.js')

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=120))

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

NAME_IT = {'Aasimar':'Aasimar','Dragonborn':'Dragonide','Dwarf':'Nano','Elf':'Elfo',
 'Gnome':'Gnomo','Goliath':'Golia','Halfling':'Halfling','Human':'Umano',
 'Orc':'Orco','Tiefling':'Tiefling'}
SIZE_IT = {'S':'Piccola','M':'Media','L':'Grande','T':'Minuscola','H':'Enorme','G':'Mastodontica'}
RESIST_IT = {'necrotic':'Necrotico','radiant':'Radiante','fire':'Fuoco','cold':'Freddo',
 'acid':'Acido','lightning':'Fulmine','thunder':'Tuono','poison':'Veleno',
 'psychic':'Psichico','force':'Forza','bludgeoning':'Contundente',
 'piercing':'Perforante','slashing':'Tagliente'}
CREATURE_IT = {'humanoid':'Umanoide','fiend':'Demone','celestial':'Celestiale',
 'construct':'Costrutto','dragon':'Drago','beast':'Bestia'}

def main():
    data = fetch(SRC)['race']
    xphb = [r for r in data if r.get('source') == 'XPHB']
    records = []
    for r in xphb:
        # traits: top-level entries, each named entry becomes a trait
        traits = []
        for e in r.get('entries', []):
            if isinstance(e, dict) and e.get('type') == 'entries' and e.get('name'):
                traits.append({'name': strip_tags(e['name']), 'text': node_text(e)})
        sizes = [SIZE_IT.get(s, s) for s in (r.get('size') or [])]
        resists = []
        for x in (r.get('resist') or []):
            if isinstance(x, str):
                resists.append(RESIST_IT.get(x.lower(), x))
        types = [CREATURE_IT.get(x.lower(), x) for x in (r.get('creatureTypes') or []) if isinstance(x, str)]
        records.append({
            'id': f"sp-{r['source'].lower()}-{len(records)}",
            'name': r['name'], 'it': NAME_IT.get(r['name'], r['name']),
            'source': r['source'], 'page': r.get('page'),
            'size': sizes or ['Media'], 'speed': r.get('speed'),
            'darkvision': r.get('darkvision'),
            'resist': resists, 'types': types, 'traits': traits,
            'spells': r.get('additionalSpells'),
        })
    js = 'const SPECIES = ' + json.dumps(records, ensure_ascii=False) + ';\n'
    OUT.write_text(js)
    print(f'wrote {OUT} with {len(records)} species, {bytes(js,"utf-8").__len__()} bytes')
    for r in records:
        print('-', r['name'], '->', r['it'], '| size:', r['size'], '| speed', r['speed'],
              '| darkvis', r['darkvision'], '| traits:', len(r['traits']))
    print('sample trait:', records[0]['traits'][0]['name'], '::', records[0]['traits'][0]['text'][:80])

if __name__ == '__main__':
    main()
