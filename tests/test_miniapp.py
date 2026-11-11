"""Regressioni per la Mini App: sezione Backgrounds alimentata da 5e.tools (XPHB)."""
import unittest, json, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def load(section, const):
    src = (ROOT / section).read_text()
    return json.loads(src.split(f'const {const} = ', 1)[1].strip().rstrip(';'))

def load_bgs():
    return load('bg_data.js', 'BACKGROUNDS')

def load_species():
    return load('species_data.js', 'SPECIES')

def load_arr(name, const):
    return load(name, const)

class MiniAppContractTests(unittest.TestCase):
    def test_backgrounds_data_is_real_2024_phb(self):
        bgs = load_bgs()
        self.assertEqual(len(bgs), 16)
        names = {b['name'] for b in bgs}
        for expect in ('Entertainer', 'Noble', 'Charlatan'):
            self.assertIn(expect, names)
        ent = next(b for b in bgs if b['name'] == 'Entertainer')
        self.assertEqual(ent['it'], 'Artista')
        self.assertIn('Esibizione', {s['name'] for s in ent['skills']})
        self.assertTrue(any('strumento' in t['name'] for t in ent['tools']))
        self.assertTrue(any(g[0] in ('A', 'B') for g in ent['equipment']))
    def test_backgrounds_wired_into_prototype(self):
        html = (ROOT/'prototype.html').read_text()
        self.assertIn('bg_data.js', html)
        self.assertIn('data-view="backgrounds"', html)
        self.assertIn('bgListView', html)
        self.assertIn('renderBgList', html)
    def test_species_data_is_real_2024_phb(self):
        sp = load_species()
        self.assertEqual(len(sp), 10)
        names = {s['name'] for s in sp}
        for expect in ('Aasimar', 'Dwarf', 'Tiefling'):
            self.assertIn(expect, names)
        dwarf = next(s for s in sp if s['name'] == 'Dwarf')
        self.assertEqual(dwarf['it'], 'Nano')
        self.assertEqual(dwarf['darkvision'], 120)
        self.assertTrue(any(t['name'] == 'Darkvision' for t in dwarf['traits']))
        self.assertTrue(all(t['text'] for t in dwarf['traits']))
    def test_species_wired_into_prototype(self):
        html = (ROOT/'prototype.html').read_text()
        self.assertIn('species_data.js', html)
        self.assertIn('data-view="species"', html)
        self.assertIn('specListView', html)
        self.assertIn('renderSpecDetail', html)
    def test_feats_equipment_magic_data_is_real_2024(self):
        feats = load_arr('feats_data.js', 'FEATS')
        self.assertEqual(len(feats), 77)
        self.assertTrue(all(f['category'] and f['text'] for f in feats))
        equip = load_arr('equipment_data.js', 'EQUIPMENT')
        self.assertEqual(len(equip), 123)
        self.assertTrue(any(e['name'] == 'Acid' for e in equip))
        magic = load_arr('magic_data.js', 'MAGIC')
        self.assertEqual(len(magic), 584)
        self.assertTrue(all(m['rarity'] for m in magic))
    def test_generic_item_sections_wired(self):
        html = (ROOT/'prototype.html').read_text()
        for frag in ('feats_data.js', 'equipment_data.js', 'magic_data.js',
                     'data-view="feats"', 'data-view="equipment"', 'data-view="magic"',
                     'ITEMKINDS', 'itemListView', 'renderItemList'):
            self.assertIn(frag, html)
    def test_bastions_and_glossary_data_is_real_2024(self):
        bas = load_arr('bastions_data.js', 'BASTIONS')
        self.assertEqual(len(bas), 35)
        self.assertTrue(all(f['name'] and f['text'] for f in bas))
        g = load_arr('glossary_data.js', 'GLOSSARY')
        self.assertEqual(len(g), 15)
        names = {x['name'] for x in g}
        self.assertIn('Blinded', names)
        blinded = next(x for x in g if x['name'] == 'Blinded')
        self.assertEqual(blinded['it'], 'Cecità')
    def test_bastions_glossary_wired(self):
        html = (ROOT/'prototype.html').read_text()
        for frag in ('bastions_data.js', 'glossary_data.js', 'data-view="bastions"',
                     'data-view="glossary"', 'BASTIONS:BASTIONS', 'GLOSSARY:GLOSSARY'):
            self.assertIn(frag, html)
    def test_attribution_and_local_updater_kept(self):
        self.assertTrue((ROOT/'NOTICE-SRD.md').exists())
        script = (ROOT/'scripts'/'Update-5etools.ps1').read_text()
        self.assertIn('5etools-mirror-3/5etools-src.git', script)

if __name__ == '__main__':
    unittest.main()

