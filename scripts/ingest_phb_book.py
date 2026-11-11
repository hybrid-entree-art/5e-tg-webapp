"""
Ingestion script for the COMPLETE 2024 Player's Handbook (XPHB) in English.
Splits each section/chapter into modular files under data/phb/ and builds phb_content.js.
NO TRANSLATION - 100% Authentic English.
"""

import urllib.request
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHB_DIR = ROOT / 'data' / 'phb'
PHB_DIR.mkdir(parents=True, exist_ok=True)

URL = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/book/book-xphb.json'

def clean_tags(text):
    if not isinstance(text, str):
        return str(text)
    
    # {@dice 1d20+5} or {@damage 2d6}
    text = re.sub(r'\{@dice ([^}]+)\}', r'<span class="rh-dice-pill" data-dice="\1">\1</span>', text)
    text = re.sub(r'\{@damage ([^}]+)\}', r'<span class="rh-dice-pill" data-dice="\1">\1</span>', text)
    text = re.sub(r'\{@d20 ([^}]+)\}', r'<span class="rh-dice-pill" data-dice="1d20\1">1d20\1</span>', text)

    # {@b text} {@i text} {@s text}
    text = re.sub(r'\{@b ([^}]+)\}', r'<b>\1</b>', text)
    text = re.sub(r'\{@i ([^}]+)\}', r'<i>\1</i>', text)
    text = re.sub(r'\{@s ([^}]+)\}', r'<s>\1</s>', text)
    text = re.sub(r'\{@u ([^}]+)\}', r'<u>\1</u>', text)

    # {@spell Name|Source|Display} -> Display or Name
    def ref_replace(m):
        content = m.group(1)
        parts = content.split('|')
        name = parts[0]
        display = parts[2] if len(parts) >= 3 and parts[2] else (parts[1] if len(parts) >= 2 and parts[1] and not parts[1].isupper() else name)
        return f'<span class="rh-ref-link" data-ref="{name}">{display}</span>'

    text = re.sub(r'\{@(spell|condition|item|creature|feat|background|race|action|sense|skill) ([^}]+)\}', ref_replace, text)
    
    # Generic {@tag val|...} fallback
    text = re.sub(r'\{@[a-zA-Z0-9_]+ ([^}|]+)(?:\|[^}]+)?\}', r'\1', text)
    
    return text

def render_node(node, depth=1):
    if isinstance(node, str):
        return f'<p class="rh-book-p">{clean_tags(node)}</p>\n'
    if not isinstance(node, dict):
        return ''

    ntype = node.get('type')
    html = ''

    if ntype == 'quote':
        html += '<blockquote class="rh-book-quote">\n'
        for e in node.get('entries', []):
            html += f'  <p>{clean_tags(e if isinstance(e, str) else render_node(e, depth+1))}</p>\n'
        if node.get('by'):
            html += f'  <cite>— {clean_tags(node["by"])}</cite>\n'
        html += '</blockquote>\n'
        return html

    if ntype == 'inset':
        html += '<aside class="rh-book-inset">\n'
        if node.get('name'):
            html += f'  <h4 class="rh-inset-title">{clean_tags(node["name"])}</h4>\n'
        for e in node.get('entries', []):
            html += render_node(e, depth+1)
        html += '</aside>\n'
        return html

    if ntype == 'list':
        html += '<ul class="rh-book-list">\n'
        for item in node.get('items', []):
            if isinstance(item, str):
                html += f'  <li>{clean_tags(item)}</li>\n'
            elif isinstance(item, dict):
                if item.get('type') == 'item':
                    name_prefix = f'<b>{clean_tags(item.get("name"))}.</b> ' if item.get('name') else ''
                    entry_text = clean_tags(item.get('entry', ''))
                    html += f'  <li>{name_prefix}{entry_text}</li>\n'
                else:
                    html += f'  <li>{render_node(item, depth+1)}</li>\n'
        html += '</ul>\n'
        return html

    if ntype == 'table':
        html += '<div class="rh-book-table-wrap">\n<table class="rh-book-table">\n'
        if node.get('caption'):
            html += f'  <caption>{clean_tags(node["caption"])}</caption>\n'
        if node.get('colLabels'):
            html += '  <thead><tr>'
            for h in node['colLabels']:
                html += f'<th>{clean_tags(h)}</th>'
            html += '</tr></thead>\n'
        if node.get('rows'):
            html += '  <tbody>\n'
            for row in node['rows']:
                html += '    <tr>'
                for cell in row:
                    if isinstance(cell, dict) and cell.get('type') == 'cell':
                        cell_val = clean_tags(cell.get('entry', ''))
                    else:
                        cell_val = clean_tags(cell)
                    html += f'<td>{cell_val}</td>'
                html += '</tr>\n'
            html += '  </tbody>\n'
        html += '</table>\n</div>\n'
        return html

    # Section / Entries with a name
    name = node.get('name')
    if name:
        h_tag = f'h{min(depth + 1, 5)}'
        html += f'<{h_tag} class="rh-book-h" id="{slugify(name)}">{clean_tags(name)}</{h_tag}>\n'

    for e in node.get('entries', []):
        html += render_node(e, depth + 1)

    return html

def slugify(text):
    text = str(text or '').lower()
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text or 'section'

def main():
    print(f"Fetching XPHB full data from {URL}...")
    req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))

    raw_chapters = data['bookData'][0]['data']
    print(f"Loaded {len(raw_chapters)} chapters. Processing individual section files...")

    file_slugs = [
        ('00_intro', 'Introduction: Welcome to Adventure'),
        ('01_playing_the_game', 'Chapter 1: Playing the Game'),
        ('02_creating_a_character', 'Chapter 2: Creating a Character'),
        ('03_character_classes', 'Chapter 3: Character Classes'),
        ('04_character_origins', 'Chapter 4: Character Origins'),
        ('05_feats', 'Chapter 5: Feats'),
        ('06_equipment', 'Chapter 6: Equipment'),
        ('07_spells', 'Chapter 7: Spells'),
        ('08_appendix_a_multiverse', 'Appendix A: The Multiverse'),
        ('09_appendix_b_creatures', 'Appendix B: Creature Stat Blocks'),
        ('10_rules_glossary', 'Rules Glossary'),
        ('11_credits', 'Credits')
    ]

    manifest_chapters = []

    for i, raw_ch in enumerate(raw_chapters):
        ch_slug, default_title = file_slugs[i] if i < len(file_slugs) else (f'ch_{i:02d}', raw_ch.get('name', f'Chapter {i}'))
        ch_name = raw_ch.get('name', default_title)

        sections = []
        full_html = ''
        
        for entry in raw_ch.get('entries', []):
            if isinstance(entry, dict) and entry.get('name'):
                sec_name = entry.get('name')
                sec_slug = slugify(sec_name)
                sec_html = render_node(entry, depth=2)
                full_html += sec_html
                
                # Extract sub-sections
                sub_secs = []
                for sub in entry.get('entries', []):
                    if isinstance(sub, dict) and sub.get('name'):
                        sub_secs.append({
                            'id': slugify(sub.get('name')),
                            'title': sub.get('name')
                        })

                sections.append({
                    'id': sec_slug,
                    'title': sec_name,
                    'html': sec_html,
                    'subsections': sub_secs
                })
            else:
                full_html += render_node(entry, depth=1)

        ch_obj = {
            'index': i,
            'id': ch_slug,
            'title': ch_name,
            'sectionsCount': len(sections),
            'sections': sections,
            'html': full_html
        }

        # Write modular chapter file
        out_file = PHB_DIR / f'{ch_slug}.js'
        var_name = f'PHB_CH_{ch_slug.upper()}'
        js_content = f"// 2024 Player's Handbook (XPHB) - {ch_name}\n"
        js_content += f"window.{var_name} = " + json.dumps(ch_obj, ensure_ascii=False, indent=2) + ";\n"
        out_file.write_text(js_content, encoding='utf-8')
        print(f"  -> Written {out_file.name} ({len(sections)} sections, {len(full_html)} chars)")

        manifest_chapters.append({
            'index': i,
            'id': ch_slug,
            'title': ch_name,
            'varName': var_name,
            'file': f'data/phb/{ch_slug}.js',
            'sections': [{'id': s['id'], 'title': s['title'], 'subsections': s['subsections']} for s in sections]
        })

    # Build central content master file: phb_content.js
    master_content = {
        'id': 'XPHB',
        'title': "Player's Handbook (2024)",
        'edition': '5.5e / 2024 Core Rulebook',
        'source': 'XPHB',
        'language': 'en',
        'totalChapters': len(manifest_chapters),
        'chapters': manifest_chapters
    }

    master_js = f"""// Player's Handbook (2024) - Central Content Manifest & Router
// 100% Authentic English Content from XPHB.
window.PHB_CONTENT = {json.dumps(master_content, ensure_ascii=False, indent=2)};

window.PHB_CONTENT.getChapter = function(idOrIdx) {{
  if (typeof idOrIdx === 'number') {{
    const chMeta = this.chapters[idOrIdx];
    return chMeta ? window[chMeta.varName] : null;
  }}
  const chMeta = this.chapters.find(c => c.id === idOrIdx || c.title.toLowerCase().includes(String(idOrIdx).toLowerCase()));
  return chMeta ? window[chMeta.varName] : null;
}};

window.PHB_CONTENT.getSection = function(sectionId) {{
  for (const ch of this.chapters) {{
    const chData = window[ch.varName];
    if (!chData || !chData.sections) continue;
    const found = chData.sections.find(s => s.id === sectionId);
    if (found) return {{ ...found, chapter: ch }};
  }}
  return null;
}};
"""
    master_file = ROOT / 'phb_content.js'
    master_file.write_text(master_js, encoding='utf-8')
    print(f"\n-> Master content hub written to {master_file.name} successfully!")

if __name__ == '__main__':
    main()
