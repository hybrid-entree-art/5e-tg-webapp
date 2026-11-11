import urllib.request
import json

url = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/book/book-xphb.json'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode('utf-8'))

chapters = data['bookData'][0]['data']
print(f"Total chapters: {len(chapters)}")
for i, c in enumerate(chapters):
    entries = c.get('entries', [])
    name = c.get('name', 'Unknown')
    sub_headings = [e.get('name') for e in entries if isinstance(e, dict) and e.get('name')]
    print(f"\n[{i}] {name} ({len(entries)} top entries)")
    print(f"    Sub-sections ({len(sub_headings)}): {sub_headings[:8]}")
