import unittest
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]

class PrivateInstallerContractTests(unittest.TestCase):
    def test_updater_targets_current_mirror_and_optional_images(self):
        script=(ROOT/'scripts'/'Update-5etools.ps1').read_text()
        self.assertIn('5etools-mirror-3/5etools-src.git',script)
        self.assertIn('5etools-mirror-3/5etools-img.git',script)
        self.assertIn('pull --ff-only',script)
        self.assertIn('[switch]$SkipImages',script)
        self.assertIn('npm run serve:dev',script)
    def test_pages_and_old_embedded_demo_are_not_published(self):
        tracked=subprocess.check_output(['git','ls-files'],cwd=ROOT,text=True).splitlines()
        self.assertFalse(any(x.endswith('prototype.html') for x in tracked))
        self.assertFalse(any(x.endswith('data_inject.js') or x.endswith('class_data.js') for x in tracked))
        self.assertFalse(any(x.startswith('assets/classes/') for x in tracked))
    def test_readme_describes_private_local_download(self):
        readme=(ROOT/'README.md').read_text().lower()
        self.assertIn('scarica',readme)
        self.assertIn('localmente',readme)
        self.assertIn('pages',readme)

if __name__=='__main__': unittest.main()
