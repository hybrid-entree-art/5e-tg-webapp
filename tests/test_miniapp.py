"""Regressioni per la Mini App: sezione Backgrounds alimentata da 5e.tools (XPHB)."""
import unittest, json, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def load_bgs():
    src = (ROOT/'bg_data.js').read_text()
    return json.loads(src.split('const BACKGROUNDS = ', 1)[1].strip().rstrip(';'))

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
    def test_attribution_and_local_updater_kept(self):
        self.assertTrue((ROOT/'NOTICE-SRD.md').exists())
        script = (ROOT/'scripts'/'Update-5etools.ps1').read_text()
        self.assertIn('5etools-mirror-3/5etools-src.git', script)

if __name__ == '__main__':
    unittest.main()

