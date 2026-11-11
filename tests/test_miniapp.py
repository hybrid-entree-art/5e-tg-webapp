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
    def test_attribution_and_local_updater_kept(self):
        self.assertTrue((ROOT/'NOTICE-SRD.md').exists())
        script = (ROOT/'scripts'/'Update-5etools.ps1').read_text()
        self.assertIn('5etools-mirror-3/5etools-src.git', script)

if __name__ == '__main__':
    unittest.main()

