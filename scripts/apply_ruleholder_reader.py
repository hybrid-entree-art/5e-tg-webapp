# -*- coding: utf-8 -*-
import os, re

proto_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "prototype.html")
with open(proto_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. CSS REPLACEMENT
css_start_marker = "/* =====================================================================\n   INTERACTIVE BOOK READER"
css_end_marker = "/* =====================================================================\n   SEARCH & BILINGUAL SUITE"

css_start_pos = content.find(css_start_marker)
css_end_pos = content.find(css_end_marker)

if css_start_pos == -1 or css_end_pos == -1:
    print(f"ERROR: CSS markers not found! start={css_start_pos}, end={css_end_pos}")
    exit(1)

new_reader_css = """/* =====================================================================
   RULEHOLDER MANUAL READER UX & UI (Screenshot media_1794441659988_e723283c.jpg)
   ===================================================================== */
#bookReaderView {
  margin-top: 6px;
  width: 100%;
}
.rh-reader-container {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  margin-top: 12px;
  width: 100%;
}

/* Left Sidebar - Sticky Chapter Accordion */
.rh-reader-sidebar {
  background: #fbf8f2;
  border: 1px solid #e5ded2;
  border-radius: 8px;
  padding: 0;
  position: sticky;
  top: 16px;
  max-height: calc(100vh - 36px);
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
}
.warm .rh-reader-sidebar {
  background: #fbf8f2;
  border-color: #e5ded2;
}
.dark .rh-reader-sidebar, .dark-reader .rh-reader-sidebar {
  background: #17141a;
  border-color: #2b2433;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

/* Stepper Header inside Sidebar: < CAP. PREC. | 📖 | CAP. SUCC. > */
.rh-reader-stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid #e5ded2;
  background: rgba(0, 0, 0, 0.02);
  gap: 4px;
}
.dark .rh-reader-stepper, .dark-reader .rh-reader-stepper {
  border-bottom-color: #2b2433;
  background: rgba(255, 255, 255, 0.02);
}
.rh-stepper-nav-btn {
  background: transparent;
  border: none;
  color: var(--rh-text-muted);
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.rh-stepper-nav-btn:hover:not(:disabled) {
  color: #8b1820;
  background: rgba(139, 24, 32, 0.06);
}
.dark .rh-stepper-nav-btn:hover:not(:disabled), .dark-reader .rh-stepper-nav-btn:hover:not(:disabled) {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}
.rh-stepper-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.rh-stepper-toc-btn {
  background: #ece3d3;
  border: 1px solid #d9ccb8;
  color: #4a3e30;
  width: 32px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.15s ease;
  flex-shrink: 0;
}
.rh-stepper-toc-btn:hover {
  background: #e0d4c0;
  border-color: #8b1820;
  color: #8b1820;
}
.dark .rh-stepper-toc-btn, .dark-reader .rh-stepper-toc-btn {
  background: #251f2b;
  border-color: #3b3145;
  color: #d1c8db;
}
.dark .rh-stepper-toc-btn:hover, .dark-reader .rh-stepper-toc-btn:hover {
  border-color: #f59e0b;
  color: #f59e0b;
}

/* Accordion Chapters */
.rh-reader-accordion {
  display: flex;
  flex-direction: column;
}
.rh-accordion-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.dark .rh-accordion-item, .dark-reader .rh-accordion-item {
  border-bottom-color: rgba(255, 255, 255, 0.04);
}
.rh-chap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px 10px 12px;
  cursor: pointer;
  font-family: var(--sans);
  font-size: 13.5px;
  font-weight: 500;
  color: #2c2825;
  border-left: 3px solid transparent;
  transition: all 0.14s ease;
  user-select: none;
}
.dark .rh-chap-header, .dark-reader .rh-chap-header {
  color: #ded8ce;
}
.rh-chap-header:hover {
  background: rgba(0, 0, 0, 0.025);
  color: #8b1820;
}
.dark .rh-chap-header:hover, .dark-reader .rh-chap-header:hover {
  background: rgba(255, 255, 255, 0.03);
  color: #f59e0b;
}
.rh-accordion-item.active .rh-chap-header {
  border-left-color: #8b1820;
  background: rgba(139, 24, 32, 0.07);
  color: #1a1715;
  font-weight: 700;
}
.dark .rh-accordion-item.active .rh-chap-header, .dark-reader .rh-accordion-item.active .rh-chap-header {
  border-left-color: #ef4444;
  background: rgba(239, 68, 68, 0.12);
  color: #ffffff;
}
.rh-chap-chevron {
  font-size: 13px;
  color: var(--rh-text-muted);
  transition: transform 0.15s ease;
}

/* Chapter Sub-sections */
.rh-chap-sections {
  padding: 4px 0 8px;
  background: rgba(0, 0, 0, 0.015);
  display: flex;
  flex-direction: column;
}
.dark .rh-chap-sections, .dark-reader .rh-chap-sections {
  background: rgba(0, 0, 0, 0.2);
}
.rh-chap-sec-link {
  display: block;
  padding: 6px 14px 6px 26px;
  font-family: var(--sans);
  font-size: 13px;
  color: #554e47;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.12s ease;
}
.dark .rh-chap-sec-link, .dark-reader .rh-chap-sec-link {
  color: #9e9486;
}
.rh-chap-sec-link:hover {
  color: #8b1820;
  background: rgba(139, 24, 32, 0.04);
  padding-left: 28px;
}
.dark .rh-chap-sec-link:hover, .dark-reader .rh-chap-sec-link:hover {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.06);
}
.rh-chap-sec-link.active {
  color: #8b1820;
  font-weight: 700;
}
.dark .rh-chap-sec-link.active, .dark-reader .rh-chap-sec-link.active {
  color: #f59e0b;
  font-weight: 700;
}

/* Right Main Reading Pane */
.rh-reader-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.rh-reader-sheet {
  background: #fdfaf3;
  color: #23201d;
  border: 1px solid #e5ded2;
  border-radius: 8px;
  padding: 36px 44px 56px;
  box-shadow: 0 3px 18px rgba(0, 0, 0, 0.05);
  min-height: 650px;
  line-height: 1.68;
}
.warm .rh-reader-sheet {
  background: #fdfaf3;
  color: #23201d;
  border-color: #e5ded2;
}
.dark .rh-reader-sheet, .dark-reader .rh-reader-sheet {
  background: #141117;
  color: #ded8ce;
  border-color: #2b2433;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

/* Typography in Reading Sheet */
.rh-reader-sheet h1, .rh-read-h1 {
  font-family: var(--sans);
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #7a161d;
  margin: 0 0 16px;
  border-bottom: 2px solid #ecdcc8;
  padding-bottom: 8px;
}
.dark .rh-reader-sheet h1, .dark-reader .rh-reader-sheet h1, .dark .rh-read-h1, .dark-reader .rh-read-h1 {
  color: #f59e0b;
  border-bottom-color: #2c251e;
}
.rh-read-kicker {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #8c2a2c;
  margin-bottom: 4px;
}
.dark .rh-read-kicker, .dark-reader .rh-read-kicker {
  color: var(--rh-text-muted);
}
.rh-reader-sheet .rh-book-h, .rh-read-h2, .rh-read-h3 {
  color: #7a161d;
  font-family: var(--sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin: 28px 0 10px;
  border-bottom: none;
}
.rh-reader-sheet h3.rh-book-h {
  font-size: 20px;
  letter-spacing: 0.04em;
  margin: 32px 0 12px;
}
.rh-reader-sheet h4.rh-book-h {
  font-size: 16px;
  margin: 24px 0 8px;
}
.rh-reader-sheet h5.rh-book-h {
  font-size: 14px;
  color: #4a1216;
  text-transform: uppercase;
  margin: 18px 0 6px;
}
.dark .rh-reader-sheet .rh-book-h, .dark-reader .rh-reader-sheet .rh-book-h {
  color: #f59e0b;
}
.dark .rh-reader-sheet h5.rh-book-h, .dark-reader .rh-reader-sheet h5.rh-book-h {
  color: #fbbf24;
}
.rh-book-p, .rh-read-p {
  font-family: var(--sans);
  font-size: 14.5px;
  line-height: 1.68;
  color: #2c2825;
  margin: 0 0 14px;
}
.dark .rh-book-p, .dark-reader .rh-book-p, .dark .rh-read-p, .dark-reader .rh-read-p {
  color: #ddd5c7;
}

/* Blue Entity Reference Links (Matching Ruleholder Screenshot) */
.rh-ref-link, a.rh-ref-link {
  color: #1976d2 !important;
  text-decoration: none !important;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.15s, text-decoration 0.15s;
}
.rh-ref-link:hover, a.rh-ref-link:hover {
  color: #0d47a1 !important;
  text-decoration: underline !important;
}
.dark .rh-ref-link, .dark-reader .rh-ref-link, .dark a.rh-ref-link, .dark-reader a.rh-ref-link {
  color: #64b5f6 !important;
}
.dark .rh-ref-link:hover, .dark-reader .rh-ref-link:hover, .dark a.rh-ref-link:hover, .dark-reader a.rh-ref-link:hover {
  color: #90caf9 !important;
}

/* Inset / Note Box with Attached Banner Tab (Matching Screenshot) */
.rh-book-inset, aside.rh-book-inset {
  background: #f4ecdf;
  border: 1px solid #d4c8b5;
  border-radius: 0 4px 4px 4px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin: 26px 0;
  position: relative;
}
.rh-book-inset .rh-inset-title, aside.rh-book-inset .rh-inset-title {
  display: inline-block;
  background: #362f2d;
  color: #ffffff;
  padding: 4px 14px;
  font-family: var(--sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 4px 4px 0 0;
  margin: -16px -20px 14px -20px;
  border: none;
}
.dark .rh-book-inset, .dark-reader .rh-book-inset, .dark aside.rh-book-inset, .dark-reader aside.rh-book-inset {
  background: #1c1815;
  border-color: #3d342a;
}
.dark .rh-book-inset .rh-inset-title, .dark-reader .rh-book-inset .rh-inset-title, .dark aside.rh-book-inset .rh-inset-title, .dark-reader aside.rh-book-inset .rh-inset-title {
  background: #2b221d;
  color: #f59e0b;
}

/* Chapter Tables */
.rh-book-table-wrap {
  width: 100%;
  overflow-x: auto;
  margin: 18px 0 24px;
  border: 1px solid #d4c8b5;
  border-radius: 6px;
}
.rh-book-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  text-align: left;
}
.rh-book-table caption {
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 8px 12px;
  text-align: left;
  background: #eae2d3;
  color: #3a3229;
}
.dark .rh-book-table caption {
  background: #25202c;
  color: #e2dbec;
}
.rh-book-table th {
  background: #7a161d;
  color: #ffffff;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 8px 12px;
}
.dark .rh-book-table th {
  background: #2a151b;
  color: #f59e0b;
}
.rh-book-table td {
  padding: 7px 12px;
  border-top: 1px solid #e5ded2;
}
.rh-book-table tr:nth-child(even) td {
  background: rgba(0, 0, 0, 0.02);
}
.dark .rh-book-table tr:nth-child(even) td {
  background: rgba(255, 255, 255, 0.02);
}

/* Chapter Footer Stepper */
.rh-reader-chapter-footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--rh-border-subtle);
}
.rh-footer-step-btn {
  background: var(--rh-bg-surface);
  border: 1px solid var(--rh-border-subtle);
  border-radius: 8px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
  max-width: 48%;
  text-align: left;
}
.rh-footer-step-btn:hover:not(:disabled) {
  border-color: var(--rh-accent-primary);
  background: rgba(245, 158, 11, 0.06);
  transform: translateY(-2px);
}
.rh-footer-step-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.rh-footer-step-btn .step-arr {
  font-size: 22px;
  color: var(--rh-accent-primary);
  line-height: 1;
}
.rh-footer-step-btn .step-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: var(--rh-text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.rh-footer-step-btn .step-title {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--rh-text-primary);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 3-Column Parchment TOC Overview Modal/Drawer */
.reader-toc-overview {
  margin-bottom: 24px;
}
.reader-toc-banner {
  background: #171f2b;
  color: #fff;
  font: 700 15px var(--sans);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;
  border: 1px solid #2a3545;
  border-bottom: none;
}
.rh-toc-close-btn {
  background: transparent;
  border: none;
  color: #c9d2de;
  font-size: 16px;
  cursor: pointer;
  padding: 2px 6px;
}
.reader-parchment-sheet {
  background: #fbf7ee;
  color: #22201d;
  border: 1px solid #dcd3c4;
  box-shadow: 0 4px 18px rgba(0,0,0,0.15);
}
.dark-reader .reader-parchment-sheet, .dark .reader-parchment-sheet {
  background: #12100d;
  color: #f5f0e8;
  border-color: #2c251e;
  box-shadow: 0 4px 18px rgba(0,0,0,0.6);
}
.reader-toc-grid {
  padding: 24px 28px 32px;
  border-radius: 0 0 8px 8px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.toc-col {
  display: flex;
  flex-direction: column;
}
.toc-heading-red {
  font: 700 15px var(--sans);
  color: #7a2021;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 14px 0 6px;
  cursor: pointer;
  display: inline-block;
  transition: color 0.14s;
}
.toc-heading-red:first-child {
  margin-top: 0;
}
.toc-heading-red:hover {
  color: #a82e30;
  text-decoration: underline;
}
.dark .toc-heading-red, .dark-reader .toc-heading-red {
  color: #f59e0b;
}
.toc-list {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
}
.toc-list li {
  font-size: 13px;
  line-height: 1.5;
  color: #38342f;
  padding: 2px 0;
  cursor: pointer;
  transition: color 0.12s, transform 0.12s;
}
.toc-list li:hover {
  color: #7a2021;
  text-decoration: underline;
  transform: translateX(2px);
}
.dark .toc-list li, .dark-reader .toc-list li {
  color: #c9c0b3;
}
.dark .toc-list li:hover, .dark-reader .toc-list li:hover {
  color: #f59e0b;
}

/* Mobile Bar & Drawer */
.rh-reader-mobile-bar {
  display: none;
  margin-bottom: 12px;
}
@media (max-width: 860px) {
  .rh-reader-mobile-bar {
    display: block;
  }
  .rh-reader-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .rh-reader-sidebar {
    display: none;
    position: static;
    max-height: none;
    margin-bottom: 16px;
  }
  .rh-reader-sidebar.mobile-open {
    display: block;
  }
  .reader-toc-grid {
    grid-template-columns: 1fr;
  }
}
.rh-reader-mobile-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--rh-bg-surface);
  border: 1px solid var(--rh-border-subtle);
  border-radius: 8px;
  padding: 10px 14px;
  font-family: var(--sans);
  font-size: 13.5px;
  color: var(--rh-text-primary);
  cursor: pointer;
}
"""

content = content[:css_start_pos] + new_reader_css + "\n\n" + content[css_end_pos:]
print("CSS injected successfully!")

# 2. JS REPLACEMENT
# Extract previewCreature and getPhbCoverSvg from original or defined here
js_start_marker = "/* =====================================================================\n   INTERACTIVE BOOK READER SUITE"
js_end_marker = "/* Event listeners */"

js_start_pos = content.find(js_start_marker)
js_end_pos = content.find(js_end_marker)

if js_start_pos == -1 or js_end_pos == -1:
    print(f"ERROR: JS markers not found! start={js_start_pos}, end={js_end_pos}")
    exit(1)

# Extract old getPhbCoverSvg and previewCreature if present
old_js_block = content[js_start_pos:js_end_pos]
svg_match = re.search(r'function getPhbCoverSvg\(\)[\s\S]*?^}', old_js_block, re.MULTILINE)
prev_match = re.search(r'function previewCreature\(\w+\)[\s\S]*?^}', old_js_block, re.MULTILINE)

cover_svg_code = svg_match.group(0) if svg_match else """function getPhbCoverSvg(){
  return `<svg viewBox="0 0 400 580" width="100%" height="auto" style="display:block;border-radius:6px;box-shadow:0 6px 24px rgba(0,0,0,0.45);background:#1a100c;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4a0e14"/>
        <stop offset="40%" stop-color="#2a060a"/>
        <stop offset="100%" stop-color="#0d0305"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd56b"/>
        <stop offset="50%" stop-color="#b8860b"/>
        <stop offset="100%" stop-color="#805700"/>
      </linearGradient>
    </defs>
    <rect width="400" height="580" fill="url(#phbGrad)"/>
    <rect x="14" y="14" width="372" height="552" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" rx="4"/>
    <rect x="22" y="22" width="356" height="536" fill="none" stroke="rgba(255,213,107,0.3)" stroke-width="1" rx="2"/>
    <text x="200" y="80" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="20" font-weight="700" letter-spacing="4" fill="url(#goldGrad)">DUNGEONS &amp; DRAGONS</text>
    <path d="M100 95 L300 95" stroke="url(#goldGrad)" stroke-width="1.5"/>
    <text x="200" y="160" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="30" font-weight="900" letter-spacing="3" fill="#ffffff">PLAYER'S</text>
    <text x="200" y="200" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="30" font-weight="900" letter-spacing="3" fill="#ffffff">HANDBOOK</text>
    <text x="200" y="230" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="13" font-weight="600" letter-spacing="3" fill="url(#goldGrad)">LIBRO DEL GIOCATORE</text>
    <circle cx="200" cy="350" r="90" fill="rgba(255,213,107,0.06)" stroke="url(#goldGrad)" stroke-width="1.5"/>
    <polygon points="200,280 270,390 130,390" fill="none" stroke="url(#goldGrad)" stroke-width="2"/>
    <text x="200" y="360" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="28" font-weight="800" fill="url(#goldGrad)">5.5e</text>
    <text x="200" y="380" text-anchor="middle" font-family="'Cinzel',serif,Georgia" font-size="10" font-weight="700" letter-spacing="2" fill="#ffd56b">2024 CORE RULEBOOK</text>
    <text x="200" y="520" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="2" fill="#d4c8b5">OFFICIAL CORE SYSTEM</text>
  </svg>`;
}"""

preview_creature_code = prev_match.group(0) if prev_match else """function previewCreature(name){
  triggerHaptic('light');
  const box = $('#creaturePreviewBox');
  if(!box) return;
  const q = name.toLowerCase();
  const m = (typeof DATA !== 'undefined' && DATA.monsters && DATA.monsters.find(x => x.n.toLowerCase() === q || x.it.toLowerCase() === q)) || { n: name, it: name, cr: '1', hp: 22, ac: 13, sz: 'M', t: 'Creatura', txt: 'Dettagli creatura nel compendio dei mostri.' };
  box.classList.remove('hidden');
  box.innerHTML = `
    <div style="background:var(--rh-bg-surface);border:1px solid var(--rh-border-subtle);border-radius:8px;padding:12px;margin-top:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div><b>${esc(m.it || m.n)}</b> <span style="font-size:12px;color:var(--rh-text-muted);">(${esc(m.n)})</span></div>
        <button type="button" onclick="$('#creaturePreviewBox').classList.add('hidden')" style="background:none;border:none;color:var(--rh-text-muted);cursor:pointer;font-size:14px;">✕</button>
      </div>
      <div style="font-size:12px;color:var(--rh-text-muted);margin:4px 0 8px;">${esc(m.sz)} ${esc(m.t)} · GS ${esc(m.cr)} · CA ${esc(m.ac)} · PF ${esc(m.hp)}</div>
      <div style="font-size:13px;line-height:1.55;">${parseDiceInText(esc(m.txt||'Nessuna azione speciale.'))}</div>
    </div>
  `;
  bindDicePills();
  box.scrollIntoView({behavior:'smooth', block:'nearest'});
}"""

new_reader_js = f"""/* =====================================================================
   INTERACTIVE BOOK READER SUITE (Screenshot media_1794441659988_e723283c.jpg)
   ===================================================================== */
let activeBookReader = 'XPHB';
let activeReaderChapter = '02_creating_a_character';
let activeReaderSection = 'get-ready';
let readerTheme = 'parchment';
let readerMode = 'reader';

function getItalianChapterName(chId){{
  const names = {{
    '00_intro': "L'avventura ti chiama!",
    '01_playing_the_game': "Cap. 1. Modalità di gioco",
    '02_creating_a_character': "Cap. 2. Creazione del personaggio",
    '03_character_classes': "Cap. 3. Classi dei personaggi",
    '04_character_origins': "Cap. 4. Origini dei personaggi",
    '05_feats': "Cap. 5. Talenti",
    '06_equipment': "Cap. 6. Equipaggiamento",
    '07_spells': "Cap. 7. Incantesimi",
    '08_appendix_a_multiverse': "App. A. Il Multiverso",
    '09_appendix_b_creatures': "App. B. Parametri delle creature",
    '10_rules_glossary': "App. C. Glossario delle regole",
    '11_credits': "Crediti e ringraziamenti"
  }};
  return names[chId] || '';
}}

function getItalianSectionName(secId){{
  const secNames = {{
    'get-ready': "Preparazione (Get Ready)",
    'talk-with-your-dm': "Parla con il DM",
    'choose-a-character-sheet': "Scegli una scheda",
    'create-your-character': "Crea il tuo personaggio",
    'step-1-choose-a-class': "Passo 1: Scegli una classe",
    'step-2-determine-origin': "Passo 2: Determina l'origine",
    'step-3-determine-ability-scores': "Passo 3: Punteggi di caratteristica",
    'step-4-choose-an-alignment': "Passo 4: Scegli l'allineamento",
    'step-5-fill-in-details': "Passo 5: Completa i dettagli",
    'level-advancement': "Avanzamento di livello",
    'starting-at-higher-levels': "Iniziare a livelli superiori",
    'multiclassing': "Multiclasse",
    'trinkets': "Bazzecole (Trinkets)",
    'what-you-need': "Cosa ti servirà",
    'using-this-book': "Come usare questo libro",
    'worlds-of-adventure': "Mondi d'avventura",
    'rules-glossary': "Glossario delle regole",
    'player-or-dm': "Giocatore o DM?",
    'rhythm-of-play': "Ritmo del gioco",
    'an-ongoing-game': "Il gioco in corso",
    'dice': "Dadi da gioco",
    'd20-test': "Test del D20",
    'actions': "Azioni in combattimento"
  }};
  return secNames[secId] || '';
}}

function openBookReader(bookId, sectionOrChapId){{
  triggerHaptic('light');
  activeBookReader = bookId || 'XPHB';
  const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader)) || (typeof BOOKS !== 'undefined' && BOOKS.find(x => x.id === 'XPHB')) || (typeof BOOKS !== 'undefined' && BOOKS[0]);
  view = 'bookreader';

  $('#homeView .hero').classList.add('hidden');
  $('.search-wrap').classList.add('hidden');
  $('#directory').classList.add('hidden');
  $('#searchResults').classList.add('hidden');
  $('#resultsView').classList.add('hidden');
  $('#classListView').classList.add('hidden');
  $('#classDetailView').classList.add('hidden');
  $('#bgListView').classList.add('hidden');
  $('#bgDetailView').classList.add('hidden');
  $('#specListView').classList.add('hidden');
  $('#specDetailView').classList.add('hidden');
  $('#itemListView').classList.add('hidden');
  $('#itemDetailView').classList.add('hidden');
  $('#bookReaderView').classList.remove('hidden');

  const displayBookTitle = (b && (b.itName || b.it || b.name)) || 'Libro del giocatore';
  $('#readerBookHeading').textContent = displayBookTitle;
  $('#readerBookCrumb').textContent = displayBookTitle;
  $('#readerSourceBadge').textContent = '✓ ' + ((b && b.source) || 'PHB');

  // Render 3-column TOC for quick access
  if (b) renderReaderTOC(b);

  if (sectionOrChapId) {{
    if (window.PHB_CONTENT && PHB_CONTENT.getChapter(sectionOrChapId)) {{
      activeReaderChapter = sectionOrChapId;
      activeReaderSection = '';
    }} else {{
      activeReaderSection = sectionOrChapId;
      if (window.PHB_CONTENT) {{
        const found = PHB_CONTENT.getSection(sectionOrChapId);
        if (found && found.chapter) activeReaderChapter = found.chapter.id;
      }}
    }}
  }} else {{
    // Default to Chapter 2 (Creating a Character) matching Ruleholder reference screenshot!
    activeReaderChapter = '02_creating_a_character';
    activeReaderSection = 'get-ready';
  }}

  // Ensure TOC overview is closed by default so user reads immediately
  const tocOverview = $('#readerTocOverview');
  if(tocOverview) tocOverview.classList.add('hidden');

  renderReaderNavTree(b);
  renderReaderCurrentChapter();

  updateTelegramBackButton();
  window.scrollTo({{top: 0, behavior: 'smooth'}});
}}

function renderReaderNavTree(book){{
  const tree = $('#readerNavTree');
  if(!tree) return;

  if (window.PHB_CONTENT && (!book || book.id === 'XPHB' || !book.id || (book.name && book.name.includes("Player's Handbook")))) {{
    tree.innerHTML = PHB_CONTENT.chapters.map(ch => {{
      const isChapActive = ch.id === activeReaderChapter;
      const itTitle = getItalianChapterName(ch.id) || ch.title;
      return `
        <div class="rh-accordion-item ${{isChapActive ? 'active open' : ''}}" data-chap="${{ch.id}}">
          <div class="rh-chap-header" onclick="readerSelectChapter('${{ch.id}}')" role="button" tabindex="0">
            <span class="rh-chap-name">${{esc(itTitle)}}</span>
            <span class="rh-chap-chevron">${{isChapActive ? '▾' : '›'}}</span>
          </div>
          ${{isChapActive ? `
            <div class="rh-chap-sections">
              ${{(ch.sections || []).map(sec => {{
                const isSecActive = sec.id === activeReaderSection;
                const itSecTitle = getItalianSectionName(sec.id) || sec.title;
                return `
                  <a class="rh-chap-sec-link ${{isSecActive ? 'active' : ''}}" data-sec="${{sec.id}}" onclick="readerJumpSection('${{ch.id}}', '${{sec.id}}', event)">
                    ${{esc(itSecTitle)}}
                  </a>
                `;
              }}).join('')}}
            </div>
          ` : ''}}
        </div>
      `;
    }}).join('');
    return;
  }}

  // Non-PHB books
  if(book && book.toc && Array.isArray(book.toc)){{
    const chapters = book.toc;
    let currIdx = typeof activeReaderChapter === 'number' ? activeReaderChapter : 0;
    tree.innerHTML = chapters.map((chTitle, idx) => {{
      const isChapActive = idx === currIdx;
      return `
        <div class="rh-accordion-item ${{isChapActive ? 'active open' : ''}}" data-chap="${{idx}}">
          <div class="rh-chap-header" onclick="readerSelectChapter(${{idx}})" role="button" tabindex="0">
            <span class="rh-chap-name">${{esc(chTitle)}}</span>
            <span class="rh-chap-chevron">${{isChapActive ? '▾' : '›'}}</span>
          </div>
        </div>
      `;
    }}).join('');
  }}
}}

function renderReaderCurrentChapter(){{
  const pane = $('#readerArticlePane');
  if(!pane) return;

  const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader)) || (typeof BOOKS !== 'undefined' && BOOKS[0]);

  if(window.PHB_CONTENT && (activeBookReader === 'XPHB' || !activeBookReader || (b && b.name && b.name.includes("Player's Handbook")))){{
    const chMeta = PHB_CONTENT.chapters.find(c => c.id === activeReaderChapter) || PHB_CONTENT.chapters[2];
    const chData = window[chMeta.varName];
    const chIdx = PHB_CONTENT.chapters.indexOf(chMeta);

    // Update steppers
    updateReaderSteppers(chIdx, PHB_CONTENT.chapters);

    // Update mobile active chapter name
    const mobileChapName = $('#readerMobileActiveChapter');
    if(mobileChapName) mobileChapName.textContent = getItalianChapterName(chMeta.id) || chMeta.title;

    if(chData && chData.sections && chData.sections.length > 0){{
      pane.innerHTML = `
        <div class="rh-read-kicker">Player's Handbook (2024) · ${{esc(chMeta.title)}}</div>
        <h1 class="rh-read-h1">${{esc(getItalianChapterName(chMeta.id) || chMeta.title)}}</h1>
        ${{chMeta.id === '00_intro' ? `
          <div class="rh-hero-cover-frame">${{getPhbCoverSvg()}}</div>
          <div class="rh-cover-caption">Player's Handbook 2024 (D&amp;D 5.5e Core Rulebook). Art by Tyler Jacobson.</div>
        ` : ''}}
        <div class="rh-book-body">
          ${{chData.sections.map(sec => `
            <section class="rh-book-section" id="${{sec.id}}">
              ${{linkKnownEntities(sec.html)}}
            </section>
          `).join('\\n')}}
        </div>
      `;
    }} else {{
      pane.innerHTML = `<div class="rh-read-kicker">Player's Handbook (2024)</div><h1 class="rh-read-h1">${{esc(chMeta.title)}}</h1><p>Contenuto del capitolo in caricamento...</p>`;
    }}

    bindDicePills();

    // If activeReaderSection is set, smooth scroll to it
    if(activeReaderSection){{
      setTimeout(() => {{
        const el = document.getElementById(activeReaderSection);
        if(el) el.scrollIntoView({{behavior: 'smooth', block: 'start'}});
      }}, 80);
    }}
    return;
  }}

  // Fallback for non-PHB books
  if(b){{
    const chapList = b.toc || ["Capitolo 1", "Capitolo 2"];
    let currIdx = 0;
    if(typeof activeReaderChapter === 'number') currIdx = activeReaderChapter;
    const chapTitle = chapList[currIdx] || chapList[0];

    updateReaderSteppers(currIdx, chapList.map((t, i) => ({{ id: i, title: t }})));

    pane.innerHTML = `
      <div class="rh-read-kicker">${{esc(b.itName || b.name)}} · Capitolo ${{currIdx + 1}}</div>
      <h1 class="rh-read-h1">${{esc(chapTitle)}}</h1>
      <p class="rh-book-p">Stai leggendo <strong>${{esc(b.itName || b.name)}}</strong> (${{esc(b.name)}}), edizione ufficiale ${{b.year || 2024}} di ${{esc(b.author || 'Wizards RPG Team')}}.</p>
      <aside class="rh-book-inset">
        <h4 class="rh-inset-title">Nota Editoriale</h4>
        <p class="rh-book-p">Contenuto completo del capitolo indicizzato e disponibile nel compendio.</p>
      </aside>
    `;
  }}
}}

function updateReaderSteppers(currIdx, chapList){{
  const prevBtn = $('#prevChapterBtn');
  const nextBtn = $('#nextChapterBtn');
  const footerPrevBtn = $('#footerPrevBtn');
  const footerNextBtn = $('#footerNextBtn');
  const footerPrevTitle = $('#footerPrevTitle');
  const footerNextTitle = $('#footerNextTitle');

  const hasPrev = currIdx > 0;
  const hasNext = currIdx < chapList.length - 1;

  if(prevBtn) prevBtn.disabled = !hasPrev;
  if(nextBtn) nextBtn.disabled = !hasNext;

  if(footerPrevBtn){{
    footerPrevBtn.disabled = !hasPrev;
    if(hasPrev && footerPrevTitle) {{
      const prevCh = chapList[currIdx - 1];
      footerPrevTitle.textContent = getItalianChapterName(prevCh.id) || prevCh.title;
    }}
  }}

  if(footerNextBtn){{
    footerNextBtn.disabled = !hasNext;
    if(hasNext && footerNextTitle) {{
      const nextCh = chapList[currIdx + 1];
      footerNextTitle.textContent = getItalianChapterName(nextCh.id) || nextCh.title;
    }}
  }}
}}

function readerSelectChapter(chId){{
  triggerHaptic('light');
  activeReaderChapter = chId;
  activeReaderSection = '';

  const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader)) || (typeof BOOKS !== 'undefined' && BOOKS[0]);
  renderReaderNavTree(b);
  renderReaderCurrentChapter();

  // Close mobile sidebar if open
  $('#readerSidebar')?.classList.remove('mobile-open');

  window.scrollTo({{top: 0, behavior: 'smooth'}});
}}

function readerJumpSection(chapterId, sectionId, event){{
  if(event) event.preventDefault();
  triggerHaptic('light');

  activeReaderSection = sectionId;

  if(activeReaderChapter !== chapterId){{
    activeReaderChapter = chapterId;
    const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader)) || (typeof BOOKS !== 'undefined' && BOOKS[0]);
    renderReaderNavTree(b);
    renderReaderCurrentChapter();
  }} else {{
    // Update active style on sub-links
    $$('.rh-chap-sec-link').forEach(link => {{
      link.classList.toggle('active', link.dataset.sec === sectionId);
    }});
    const el = document.getElementById(sectionId);
    if(el) el.scrollIntoView({{behavior: 'smooth', block: 'start'}});
  }}

  $('#readerSidebar')?.classList.remove('mobile-open');
}}

function readerPrevChapter(){{
  triggerHaptic('light');
  if(window.PHB_CONTENT && activeBookReader === 'XPHB'){{
    const currIdx = PHB_CONTENT.chapters.findIndex(c => c.id === activeReaderChapter);
    if(currIdx > 0){{
      readerSelectChapter(PHB_CONTENT.chapters[currIdx - 1].id);
    }}
    return;
  }}
  const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader));
  if(b && b.toc){{
    let currIdx = typeof activeReaderChapter === 'number' ? activeReaderChapter : 0;
    if(currIdx > 0){{
      readerSelectChapter(currIdx - 1);
    }}
  }}
}}

function readerNextChapter(){{
  triggerHaptic('light');
  if(window.PHB_CONTENT && activeBookReader === 'XPHB'){{
    const currIdx = PHB_CONTENT.chapters.findIndex(c => c.id === activeReaderChapter);
    if(currIdx < PHB_CONTENT.chapters.length - 1){{
      readerSelectChapter(PHB_CONTENT.chapters[currIdx + 1].id);
    }}
    return;
  }}
  const b = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS) && BOOKS.find(x => x.id === activeBookReader));
  if(b && b.toc){{
    let currIdx = typeof activeReaderChapter === 'number' ? activeReaderChapter : 0;
    if(currIdx < b.toc.length - 1){{
      readerSelectChapter(currIdx + 1);
    }}
  }}
}}

function toggleReaderTOCView(){{
  triggerHaptic('light');
  const tocOverview = $('#readerTocOverview');
  if(tocOverview) tocOverview.classList.toggle('hidden');
}}

function toggleReaderMobileTOC(){{
  triggerHaptic('light');
  $('#readerSidebar')?.classList.toggle('mobile-open');
}}

function readerJump(secOrChapId){{
  triggerHaptic('light');
  $('#readerTocOverview')?.classList.add('hidden');
  if (window.PHB_CONTENT) {{
    if (PHB_CONTENT.getChapter(secOrChapId)) {{
      readerSelectChapter(secOrChapId);
      return;
    }}
    const found = PHB_CONTENT.getSection(secOrChapId);
    if (found && found.chapter) {{
      readerJumpSection(found.chapter.id, found.id);
      return;
    }}
  }}
  readerSelectChapter(secOrChapId);
}}

function renderReaderTOC(book){{
  if (window.PHB_CONTENT && (!book || book.id === 'XPHB' || !book.id || (book.name && book.name.includes("Player's Handbook")))) {{
    const chapters = PHB_CONTENT.chapters;
    const cols = [[], [], []];
    chapters.forEach((ch, idx) => {{
      const colIdx = Math.min(Math.floor(idx / 4), 2);
      cols[colIdx].push(ch);
    }});

    $('#readerTocGrid').innerHTML = cols.map(colChapters => `
      <div class="toc-col">
        ${{colChapters.map(ch => {{
          const itTitle = getItalianChapterName(ch.id) || ch.title;
          return `
            <h3 class="toc-heading-red" onclick="readerJump('${{ch.id}}')">${{esc(itTitle)}}</h3>
            <ul class="toc-list">
              ${{(ch.sections || []).slice(0, 10).map(sec => `
                <li onclick="readerJump('${{sec.id}}')">${{esc(getItalianSectionName(sec.id) || sec.title)}}</li>
              `).join('')}}
              ${{(ch.sections || []).length > 10 ? `<li class="sub-item" onclick="readerJump('${{ch.id}}')">+ ${{(ch.sections || []).length - 10}} more topics...</li>` : ''}}
            </ul>
          `;
        }}).join('')}}
      </div>
    `).join('');
    return;
  }}

  if(book && book.toc && Array.isArray(book.toc) && book.toc.length > 0){{
    const chapters = book.toc;
    const itemsPerCol = Math.max(1, Math.ceil(chapters.length / 3));
    const cols = [
      chapters.slice(0, itemsPerCol),
      chapters.slice(itemsPerCol, itemsPerCol * 2),
      chapters.slice(itemsPerCol * 2)
    ];
    $('#readerTocGrid').innerHTML = cols.map((colChapters, colI) => `
      <div class="toc-col">
        <h3 class="toc-heading-red">${{esc(book.itName || book.name).toUpperCase()}} - PARTE ${{colI + 1}}</h3>
        <ul class="toc-list">
          ${{colChapters.map(ch => `
            <li onclick="alert('${{esc(ch)}}')">${{esc(ch)}}</li>
          `).join('')}}
        </ul>
      </div>
    `).join('');
    return;
  }}
}}

{cover_svg_code}

{preview_creature_code}
"""

content = content[:js_start_pos] + new_reader_js + "\n\n" + content[js_end_pos:]
print("JS injected successfully!")

with open(proto_path, "w", encoding="utf-8") as f:
    f.write(content)

print("prototype.html successfully updated!")
