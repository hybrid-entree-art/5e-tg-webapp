import unittest
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]

class MiniAppContractTests(unittest.TestCase):
    def test_prototype_and_tg_sdk_are_tracked(self):
        tracked=subprocess.check_output(['git','ls-files'],cwd=ROOT,text=True).splitlines()
        self.assertIn('prototype.html',tracked)
        self.assertIn('data_inject.js',tracked)
        self.assertIn('class_data.js',tracked)
        html=(ROOT/'prototype.html').read_text()
        self.assertIn('telegram.org/js/telegram-web-app.js',html)
    def test_updater_targets_2024_mirror_for_local_copy(self):
        script=(ROOT/'scripts'/'Update-5etools.ps1').read_text()
        self.assertIn('5etools-mirror-3/5etools-src.git',script)
        self.assertIn('5etools-mirror-3/5etools-img.git',script)
        self.assertIn('pull --ff-only',script)
    def test_readme_points_to_mini_app_and_live_pages_url(self):
        readme=(ROOT/'README.md').read_text().lower()
        self.assertIn('mini app telegram',readme)
        self.assertIn('pages',readme)

if __name__=='__main__': unittest.main()
