#!/usr/bin/env python3
"""Build a 2024 rulebooks dataset (Biblioteca) from 5e.tools `books.json`."""
import json, urllib.request
from pathlib import Path

BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'
ROOT = Path('/opt/data/5e-tg')

def fetch(name):
    req = urllib.request.Request(BASE + name, headers={'User-Agent': 'Mozilla/5.0'})
    return json.load(urllib.request.urlopen(req, timeout=120))

GROUP_IT = {'core': 'Nucleo', 'adventure': 'Avventura', 'setting': 'Ambientazione',
            'supplement': 'Supplemento', 'homebrew': 'Birra fatta in casa',
            'screen': 'Paravento', 'supplement-alt': 'Supplemento', 'other': 'Altro',
            'recipe': 'Ricetta', 'homecraft': 'Fatto in casa', 'setting-alt': 'Ambientazione'}

def main():
    books = fetch('books.json')['book']
    out = []
    for book in books:
        # keep 2024/2025 rulebook core + official; drop 2014-era core only for focus
        year = int((book.get('published') or '2000')[:4])
        if year < 2024:
            continue
        group = GROUP_IT.get(book.get('group'), book.get('group', ''))
        toc = []
        for c in (book.get('contents') or []):
            name = (c.get('name') or '').strip()
            if not name or name == 'Credits' or 'Credits' == name:
                continue
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
            'id': book.get('id') or book.get('source'),
            'name': (book.get('name') or '').replace(' (2024)', '').replace(' (2025)', ''),
            'source': book.get('source'), 'group': group,
            'year': year, 'author': book.get('author'),
            'coverCredit': book.get('coverCredit'),
            'toc': toc, 'nchapters': sum(1 for c in (book.get('contents') or []) if (c.get('ordinal') or {}).get('type') == 'chapter'),
            'text': ' · '.join(toc),
        })
    js = 'const BOOKS = ' + json.dumps(out, ensure_ascii=False) + ';\n'
    (ROOT / 'books_data.js').write_text(js)
    print(f'books_data.js: {len(out)} books')
    for b in out[:8]:
        print('-', f"[{b['group']}]", b['name'], '(', b['year'], ')', '| cap.', b['nchapters'], '| id', b['id'])

if __name__ == '__main__':
    main()
