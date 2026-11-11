# -*- coding: utf-8 -*-
import os

proto_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "prototype.html")
with open(proto_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. CSS REPLACEMENT
old_css_marker = """/* Books / Biblioteca */
.book-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.book-grid .bg-card{overflow:hidden}
.book-grid .bg-card .class-copy{
  min-height:190px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  background:radial-gradient(120% 90% at 15% 0%,rgba(245, 158, 11, 0.16),rgba(18, 16, 13, 0.5) 55%),linear-gradient(160deg,#2e181c,#12100d);
  position:relative;
  padding-top:30px;
}
.book-grid .bg-card .class-copy:before{
  content:'';
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:4px;
  background:linear-gradient(180deg,var(--rh-accent-fire),var(--rh-table-header-bg));
}
.book-grid .bg-card .class-title{font-size:17.5px}
.book-grid .bg-card .class-desc{display:-webkit-box;-webkit-line-clamp:3;overflow:hidden}
.book-grid .bg-card .class-open b{color:var(--rh-accent-primary)}"""

new_css = """/* =====================================================================
   RULEHOLDER BIBLIOTECA (RULEBOOKS CATALOG) UX
   Matching Screenshot media_1794440474152_6429a6e9.jpg
   ===================================================================== */
.rh-books-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: var(--sans);
  margin-bottom: 12px;
}
.rh-books-crumb-link {
  background: transparent;
  border: none;
  color: var(--rh-text-muted);
  cursor: pointer;
  padding: 2px 4px;
  font-size: 13px;
  font-family: var(--sans);
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  transition: color 0.15s ease;
}
.rh-books-crumb-link:hover {
  color: var(--rh-accent-primary);
}
.rh-books-crumb-sep {
  color: var(--rh-text-dimmed);
  font-size: 11px;
}
.rh-books-crumb-active {
  color: var(--rh-text-primary);
  font-weight: 600;
}

.rh-books-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 10px 0 24px;
  width: 100%;
}
.rh-pill-segment {
  display: inline-flex;
  align-items: center;
  background: var(--rh-bg-surface);
  border: 1px solid var(--rh-border-subtle);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
}
.rh-pill-btn {
  background: transparent;
  border: none;
  color: var(--rh-text-muted);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.rh-pill-btn:hover {
  color: var(--rh-text-primary);
  background: rgba(255, 255, 255, 0.05);
}
.warm .rh-pill-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}
.rh-pill-btn.active {
  background: var(--rh-bg-surface-elevated, #2b1822);
  color: var(--rh-accent-primary);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.warm .rh-pill-btn.active {
  background: #ffffff;
  color: var(--rh-accent-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.rh-books-search-box {
  position: relative;
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
}
.rh-books-search-icon {
  position: absolute;
  left: 12px;
  font-size: 14px;
  color: var(--rh-text-muted);
  pointer-events: none;
}
.rh-books-search-input {
  width: 100%;
  background: var(--rh-bg-surface);
  border: 1px solid var(--rh-border-subtle);
  border-radius: 8px;
  color: var(--rh-text-primary);
  font-family: var(--sans);
  font-size: 13.5px;
  padding: 8px 34px 8px 36px;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
  box-sizing: border-box;
}
.rh-books-search-input:focus {
  border-color: var(--rh-accent-primary);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}
.rh-books-search-clear {
  position: absolute;
  right: 10px;
  background: transparent;
  border: none;
  color: var(--rh-text-muted);
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.rh-books-sort-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--rh-bg-surface);
  border: 1px solid var(--rh-border-subtle);
  border-radius: 8px;
  color: var(--rh-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}
.rh-books-sort-btn:hover {
  color: var(--rh-text-primary);
  border-color: var(--rh-accent-primary);
}

.rh-books-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px 18px;
  width: 100%;
  margin-top: 10px;
}
@media (max-width: 1200px) {
  .rh-books-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 860px) {
  .rh-books-grid { grid-template-columns: repeat(3, 1fr); gap: 18px 14px; }
}
@media (max-width: 580px) {
  .rh-books-grid { grid-template-columns: repeat(2, 1fr); gap: 14px 10px; }
}

.rh-book-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
  position: relative;
  user-select: none;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.rh-book-card:focus-visible {
  outline: 2px solid var(--rh-accent-primary);
  border-radius: 8px;
}
.rh-book-poster-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.44;
  border-radius: 8px;
  overflow: hidden;
  background: var(--rh-bg-surface);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--rh-border-subtle);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
}
.warm .rh-book-poster-wrap {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}
.rh-book-card:hover .rh-book-poster-wrap {
  transform: translateY(-4px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(245, 158, 11, 0.45);
  border-color: rgba(245, 158, 11, 0.5);
}
.warm .rh-book-card:hover .rh-book-poster-wrap {
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(184, 108, 18, 0.45);
}
.rh-book-card:active .rh-book-poster-wrap {
  transform: translateY(-1px) scale(0.98);
}
.rh-book-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.rh-book-card:hover .rh-book-cover-img {
  transform: scale(1.03);
}
.rh-book-stripe-red {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #d32f2f, #ef5350);
  z-index: 2;
}

.rh-book-cover-fallback {
  width: 100%;
  height: 100%;
  background: radial-gradient(120% 90% at 20% 10%, rgba(245,158,11,0.18), rgba(18,16,23,0.92) 70%), linear-gradient(160deg, #2b151a, #0d0b10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
.warm .rh-book-cover-fallback {
  background: radial-gradient(120% 90% at 20% 10%, rgba(245,158,11,0.25), rgba(244,239,230,0.95) 70%), linear-gradient(160deg, #f7efe2, #e5dbcb);
}
.rh-book-fb-icon {
  font-size: 34px;
  margin-bottom: 6px;
  opacity: 0.9;
}
.rh-book-fb-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(245, 158, 11, 0.2);
  color: var(--rh-accent-primary);
  border: 1px solid rgba(245, 158, 11, 0.35);
}
.rh-book-fb-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--rh-text-primary);
  line-height: 1.3;
  margin-bottom: 4px;
}
.rh-book-fb-sub {
  font-size: 11px;
  color: var(--rh-text-muted);
}

.rh-book-info {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rh-book-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--rh-text-primary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.15s ease;
}
.rh-book-card:hover .rh-book-title {
  color: var(--rh-accent-primary);
}
.rh-book-sub {
  font-family: var(--sans);
  font-size: 11.5px;
  color: var(--rh-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}"""

if old_css_marker in content:
    content = content.replace(old_css_marker, new_css, 1)
    print("CSS replaced successfully!")
else:
    print("Warning: old_css_marker not found!")

# 2. HTML REPLACEMENT
old_html_marker = """    <section id="itemListView" class="hidden">
      <div class="nav-crumbs">
        <button type="button" class="nav-crumb-btn" onclick="goHomeDirectly(event)">📖 <span data-home-crumb>Elenco</span></button>
        <span class="nav-crumb-sep">/</span>
        <span class="nav-crumb-current" id="itemListCrumb">Riferimento</span>
      </div>
      <div class="class-list-head">
        <button class="back" id="itemListBack" aria-label="Torna alla home">←</button>
        <div>
          <div class="eyebrow" id="itemListEyebrow">Riferimento</div>
          <h2 class="class-list-title" id="itemListTitle"></h2>
          <div class="results-note" id="itemListNote"></div>
        </div>
      </div>
      <div class="search-wrap" style="margin:12px 0 16px;">
        <div class="search-input-box">
          <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.4 4.4"/></svg>
          <input class="search" id="itemSearchInput" placeholder="Cerca nel catalogo per nome o proprietà..." autocomplete="off" aria-label="Cerca nel catalogo">
          <button type="button" class="search-clear-btn hidden" id="itemSearchClear" aria-label="Cancella ricerca">✕</button>
        </div>
      </div>
      <div class="filters" id="itemFilters"></div>
      <div class="class-grid bg-grid" id="itemGrid"></div>
    </section>"""

new_html = """    <section id="itemListView" class="hidden">
      <!-- Standard Catalog Header/Search/Filters (for Feats, Equipment, Magic, Bastions, Glossary) -->
      <div id="itemListStandardWrap">
        <div class="nav-crumbs">
          <button type="button" class="nav-crumb-btn" onclick="goHomeDirectly(event)">📖 <span data-home-crumb>Elenco</span></button>
          <span class="nav-crumb-sep">/</span>
          <span class="nav-crumb-current" id="itemListCrumb">Riferimento</span>
        </div>
        <div class="class-list-head">
          <button class="back" id="itemListBack" aria-label="Torna alla home">←</button>
          <div>
            <div class="eyebrow" id="itemListEyebrow">Riferimento</div>
            <h2 class="class-list-title" id="itemListTitle"></h2>
            <div class="results-note" id="itemListNote"></div>
          </div>
        </div>
        <div class="search-wrap" style="margin:12px 0 16px;">
          <div class="search-input-box">
            <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.4 4.4"/></svg>
            <input class="search" id="itemSearchInput" placeholder="Cerca nel catalogo per nome o proprietà..." autocomplete="off" aria-label="Cerca nel catalogo">
            <button type="button" class="search-clear-btn hidden" id="itemSearchClear" aria-label="Cancella ricerca">✕</button>
          </div>
        </div>
        <div class="filters" id="itemFilters"></div>
      </div>

      <!-- Dedicated Ruleholder Biblioteca Controls (Screenshot media_1794440474152_6429a6e9.jpg) -->
      <div id="itemListBooksWrap" class="hidden">
        <div class="rh-books-breadcrumbs">
          <button type="button" class="rh-books-crumb-link" onclick="goHomeDirectly(event)">📖 <span data-home-crumb>Elenco</span></button>
          <span class="rh-books-crumb-sep">&gt;</span>
          <span class="rh-books-crumb-active">📚 Biblioteca</span>
        </div>

        <div class="rh-books-toolbar">
          <!-- Type Filter Segment -->
          <div class="rh-pill-segment" id="booksTypeFilterGroup">
            <button type="button" class="rh-pill-btn active" data-type="Tutto">Tutto</button>
            <button type="button" class="rh-pill-btn" data-type="Regole">Regole</button>
            <button type="button" class="rh-pill-btn" data-type="Avventure">Avventure</button>
          </div>

          <!-- Source Filter Segment -->
          <div class="rh-pill-segment" id="booksSourceFilterGroup">
            <button type="button" class="rh-pill-btn active" data-source="Tutto">Tutto</button>
            <button type="button" class="rh-pill-btn" data-source="Ufficiale">Ufficiale</button>
            <button type="button" class="rh-pill-btn" data-source="Affiliato">Affiliato</button>
            <button type="button" class="rh-pill-btn" data-source="Birra fatta in casa">Birra fatta in casa</button>
          </div>

          <!-- Search Bar -->
          <div class="rh-books-search-box">
            <span class="rh-books-search-icon">🔍</span>
            <input type="text" id="booksSearchInput" class="rh-books-search-input" placeholder="Cerca per nome" autocomplete="off" aria-label="Cerca per nome">
            <button type="button" id="booksSearchClear" class="rh-books-search-clear hidden" aria-label="Cancella ricerca">✕</button>
          </div>

          <!-- Sort Button -->
          <button type="button" id="booksSortBtn" class="rh-books-sort-btn" title="Inverti ordinamento" aria-label="Inverti ordinamento">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18M6 12h12M9 18h6"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="class-grid bg-grid" id="itemGrid"></div>
    </section>"""

if old_html_marker in content:
    content = content.replace(old_html_marker, new_html, 1)
    print("HTML replaced successfully!")
else:
    print("Warning: old_html_marker not found!")

# 3. JS LOGIC REPLACEMENT
old_js_marker = """  books:{key:'BOOKS',coll:'manuali',title:'Libri di regole',note:'19 manuali · edizioni 2024/2025',kicker:'Manuale · edizione 2024+',tag:x=>x.group||'Nucleo',text:x=>x.text||'',
   meta:x=>[(x.year||''),(x.nchapters?x.nchapters+' capitoli':'indice completo'),x.author].filter(Boolean),match:(x,q)=>x.name.toLowerCase().includes(q)}
};
let activeGroup=null,itemGroupFilter='Tutti';
const GROUP_DATA={FEATS:FEATS||[],EQUIPMENT:EQUIPMENT||[],MAGIC:MAGIC||[],BASTIONS:BASTIONS||[],GLOSSARY:GLOSSARY||[],BOOKS:BOOKS||[]};

function showItemList(kind){
  const k=ITEMKINDS[kind];
  activeGroup=k;view='itemlist';activeItem=null;query='';itemGroupFilter='Tutti';
  $('#q').value='';
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
  $('#itemDetailView').classList.add('hidden');
  $('#itemListView').classList.remove('hidden');
  $('#itemGrid').className=(k.key==='BOOKS'?'class-grid book-grid':'class-grid bg-grid');
  $('#itemListEyebrow').textContent='Riferimento';
  $('#itemListTitle').textContent=k.title;
  $('#itemListNote').textContent=k.note;
  $('#itemListCrumb').textContent=k.title;
  renderGroupFilters();
  renderItemList();
  updateTelegramBackButton();
  window.scrollTo({top:0,behavior:'smooth'});
}"""

new_js = """  books:{key:'BOOKS',coll:'manuali',title:'Biblioteca',note:(typeof BOOKS!=='undefined'?BOOKS.length:30)+' manuali · D&D 5.5e e 5e',kicker:'Biblioteca · Manuali',tag:x=>x.type||'Regole',text:x=>x.text||'',
   meta:x=>[(x.year||''),(x.nchapters?x.nchapters+' capitoli':'indice completo'),x.author].filter(Boolean),match:(x,q)=>x.name.toLowerCase().includes(q)||(x.itName&&x.itName.toLowerCase().includes(q))}
};
let activeGroup=null,itemGroupFilter='Tutti';
const GROUP_DATA={FEATS:FEATS||[],EQUIPMENT:EQUIPMENT||[],MAGIC:MAGIC||[],BASTIONS:BASTIONS||[],GLOSSARY:GLOSSARY||[],BOOKS:BOOKS||[]};

/* Ruleholder Biblioteca State */
let booksTypeFilter = 'Tutto';
let booksSourceFilter = 'Tutto';
let booksSearchQuery = '';
let booksSortOrder = 'default';
let booksBibliotecaInitialized = false;

function initBooksBiblioteca(){
  if(booksBibliotecaInitialized) return;
  booksBibliotecaInitialized = true;

  // Type filter pills
  const typeBtns = $$('#booksTypeFilterGroup .rh-pill-btn');
  typeBtns.forEach(btn => {
    btn.onclick = () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      booksTypeFilter = btn.dataset.type || 'Tutto';
      triggerHaptic('light');
      renderBooksGrid();
    };
  });

  // Source filter pills
  const sourceBtns = $$('#booksSourceFilterGroup .rh-pill-btn');
  sourceBtns.forEach(btn => {
    btn.onclick = () => {
      sourceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      booksSourceFilter = btn.dataset.source || 'Tutto';
      triggerHaptic('light');
      renderBooksGrid();
    };
  });

  // Search input
  const searchInput = $('#booksSearchInput');
  const searchClear = $('#booksSearchClear');
  if(searchInput){
    searchInput.oninput = () => {
      booksSearchQuery = searchInput.value.trim();
      if(searchClear){
        if(booksSearchQuery) searchClear.classList.remove('hidden');
        else searchClear.classList.add('hidden');
      }
      renderBooksGrid();
    };
  }
  if(searchClear){
    searchClear.onclick = () => {
      if(searchInput) searchInput.value = '';
      booksSearchQuery = '';
      searchClear.classList.add('hidden');
      renderBooksGrid();
    };
  }

  // Sort button
  const sortBtn = $('#booksSortBtn');
  if(sortBtn){
    sortBtn.onclick = () => {
      triggerHaptic('light');
      if(booksSortOrder === 'default') {
        booksSortOrder = 'asc';
        sortBtn.title = 'Ordinamento A-Z (clicca per Z-A)';
        sortBtn.style.color = 'var(--rh-accent-primary, #f59e0b)';
      } else if(booksSortOrder === 'asc') {
        booksSortOrder = 'desc';
        sortBtn.title = 'Ordinamento Z-A (clicca per Predefinito)';
        sortBtn.style.color = 'var(--rh-accent-primary, #f59e0b)';
      } else {
        booksSortOrder = 'default';
        sortBtn.title = 'Ordinamento predefinito';
        sortBtn.style.color = '';
      }
      renderBooksGrid();
    };
  }
}

function renderBooksGrid(){
  const grid = $('#itemGrid');
  if(!grid) return;
  grid.className = 'rh-books-grid';

  let list = (typeof BOOKS !== 'undefined' && Array.isArray(BOOKS)) ? BOOKS.slice() : [];

  // Filter by Type
  if(booksTypeFilter && booksTypeFilter !== 'Tutto'){
    list = list.filter(b => (b.type || 'Regole') === booksTypeFilter);
  }

  // Filter by Source
  if(booksSourceFilter && booksSourceFilter !== 'Tutto'){
    list = list.filter(b => (b.bookSource || 'Ufficiale') === booksSourceFilter);
  }

  // Filter by Search Query
  if(booksSearchQuery){
    const qNorm = typeof normalizeStr === 'function' ? normalizeStr(booksSearchQuery) : booksSearchQuery.toLowerCase().trim();
    list = list.filter(b => {
      const itName = typeof normalizeStr === 'function' ? normalizeStr(b.itName || b.it || '') : (b.itName || b.it || '').toLowerCase();
      const enName = typeof normalizeStr === 'function' ? normalizeStr(b.name || '') : (b.name || '').toLowerCase();
      const src = (b.source || b.id || '').toLowerCase();
      const auth = (b.author || '').toLowerCase();
      return itName.includes(qNorm) || enName.includes(qNorm) || src.includes(qNorm) || auth.includes(qNorm);
    });
  }

  // Sorting
  if(booksSortOrder === 'asc'){
    list.sort((a, b) => (a.itName || a.name).localeCompare(b.itName || b.name, 'it', { sensitivity: 'base' }));
  } else if(booksSortOrder === 'desc'){
    list.sort((a, b) => (b.itName || b.name).localeCompare(a.itName || a.name, 'it', { sensitivity: 'base' }));
  }

  if(!list.length){
    grid.innerHTML = '<div style="grid-column: 1 / -1; padding: 48px 16px; text-align: center; color: var(--rh-text-muted);"><p style="font-size: 16px; margin-bottom: 8px;">Nessun libro trovato per i filtri selezionati.</p><button type="button" class="rh-pill-btn active" style="margin-top: 8px;" onclick="resetBooksFilters()">Reimposta filtri</button></div>';
    return;
  }

  grid.innerHTML = list.map(bk => {
    const coverUrl = bk.coverUrl || `https://5e.tools/img/covers/${bk.source || bk.id}.webp`;
    const isOfficial = (bk.bookSource || 'Ufficiale') === 'Ufficiale';
    const displayTitle = bk.itName || bk.it || bk.name;
    const subTitle = bk.name !== displayTitle ? `${bk.name} · ${bk.year || 2024}` : `${bk.source || ''} · ${bk.year || 2024}`;

    return `
      <div class="rh-book-card" onclick="openBookReader('${esc(bk.id)}')" role="button" tabindex="0" aria-label="${esc(displayTitle)}">
        <div class="rh-book-poster-wrap">
          <img class="rh-book-cover-img" src="${coverUrl}" alt="${esc(displayTitle)}" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.classList.remove('hidden');">
          <div class="rh-book-cover-fallback hidden">
            <div class="rh-book-fb-badge">${esc(bk.source || bk.id)}</div>
            <div class="rh-book-fb-icon">📚</div>
            <div class="rh-book-fb-title">${esc(displayTitle)}</div>
            <div class="rh-book-fb-sub">${esc(bk.name)}</div>
          </div>
          ${isOfficial ? '<div class="rh-book-stripe-red"></div>' : ''}
        </div>
        <div class="rh-book-info">
          <h3 class="rh-book-title">${esc(displayTitle)}</h3>
          <div class="rh-book-sub">${esc(subTitle)}</div>
        </div>
      </div>
    `;
  }).join('');
}

function resetBooksFilters(){
  booksTypeFilter = 'Tutto';
  booksSourceFilter = 'Tutto';
  booksSearchQuery = '';
  booksSortOrder = 'default';
  const typeBtns = $$('#booksTypeFilterGroup .rh-pill-btn');
  typeBtns.forEach(b => {
    if(b.dataset.type === 'Tutto') b.classList.add('active');
    else b.classList.remove('active');
  });
  const sourceBtns = $$('#booksSourceFilterGroup .rh-pill-btn');
  sourceBtns.forEach(b => {
    if(b.dataset.source === 'Tutto') b.classList.add('active');
    else b.classList.remove('active');
  });
  const searchInput = $('#booksSearchInput');
  if(searchInput) searchInput.value = '';
  const searchClear = $('#booksSearchClear');
  if(searchClear) searchClear.classList.add('hidden');
  renderBooksGrid();
}

function showItemList(kind){
  const k=ITEMKINDS[kind];
  activeGroup=k;view='itemlist';activeItem=null;query='';itemGroupFilter='Tutti';
  $('#q').value='';
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
  $('#itemDetailView').classList.add('hidden');
  $('#itemListView').classList.remove('hidden');

  if(k.key === 'BOOKS'){
    if($('#itemListStandardWrap')) $('#itemListStandardWrap').classList.add('hidden');
    if($('#itemListBooksWrap')) $('#itemListBooksWrap').classList.remove('hidden');
    initBooksBiblioteca();
    renderBooksGrid();
  } else {
    if($('#itemListStandardWrap')) $('#itemListStandardWrap').classList.remove('hidden');
    if($('#itemListBooksWrap')) $('#itemListBooksWrap').classList.add('hidden');
    $('#itemGrid').className = (k.key==='FEATS' ? 'feats-catalog-container' : 'class-grid bg-grid');
    $('#itemListEyebrow').textContent='Riferimento';
    $('#itemListTitle').textContent=k.title;
    $('#itemListNote').textContent=k.note;
    $('#itemListCrumb').textContent=k.title;
    renderGroupFilters();
    renderItemList();
  }
  updateTelegramBackButton();
  window.scrollTo({top:0,behavior:'smooth'});
}"""

if old_js_marker in content:
    content = content.replace(old_js_marker, new_js, 1)
    print("JS logic replaced successfully!")
else:
    print("Warning: old_js_marker not found!")

# 4. Enhance renderReaderTOC fallback for other books
old_toc_fallback = """  // 3-Column Parchment TOC matching Screenshot 1
  $('#readerTocGrid').innerHTML = `
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('intro')">L'AVVENTURA TI CHIAMA!</h3>
      <ul class="toc-list">
        <li onclick="readerJump('intro-what-need')">Cosa ti servirà</li>
        <li onclick="readerJump('intro-how-use')">Come usare questo libro</li>
        <li onclick="readerJump('intro-worlds')">Mondi d'avventura</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap1')">CAPITOLO 1. MODALITÀ DI GIOCO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap1-dm')">Giocatore o padrone?</li>
        <li onclick="readerJump('cap1-rhythm')">Ritmo del gioco</li>
        <li onclick="readerJump('cap1-ongoing')">Il gioco in corso</li>
        <li onclick="readerJump('cap1-dice')">Dadi da gioco</li>
        <li onclick="readerJump('cap1-abilities')">Sei caratteristiche</li>
        <li onclick="readerJump('cap1-d20')">Test D20</li>
        <li onclick="readerJump('cap1-actions')">Azioni in Combattimento</li>
      </ul>
    </div>
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('cap2')">CAPITOLO 2. CREAZIONE DEL PERSONAGGIO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap2-steps')">Passi di creazione</li>
        <li onclick="readerJump('cap2-origins')">Origini del personaggio</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap3')">CAPITOLO 3. CLASSI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap3-intro')">Descrizione generale</li>
        <li onclick="readerJump('cap3-sub')">Sottoclassi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap4')">CAPITOLO 4. TALENTI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap4-intro')">Acquisizione talenti</li>
        <li onclick="readerJump('cap4-list')">Elenco completo</li>
      </ul>
    </div>
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('cap5')">CAPITOLO 5. EQUIPAGGIAMENTO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap5-arm')">Armi e armature</li>
        <li onclick="readerJump('cap5-tools')">Strumenti e attrezzi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap6')">CAPITOLO 6. INCANTESIMI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap6-casting')">Lanciare incantesimi</li>
        <li onclick="readerJump('cap6-list')">Lista incantesimi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('appc')">APPENDICE C. GLOSSARIO DELLE REGOLE</h3>
      <ul class="toc-list">
        <li onclick="readerJump('appc-rules')">Regole A-Z</li>
        <li onclick="readerJump('appc-cond')">Condizioni</li>
      </ul>
    </div>
  `;"""

new_toc_fallback = """  if(book.toc && Array.isArray(book.toc) && book.toc.length > 0){
    const chapters = book.toc;
    const itemsPerCol = Math.max(1, Math.ceil(chapters.length / 3));
    const cols = [
      chapters.slice(0, itemsPerCol),
      chapters.slice(itemsPerCol, itemsPerCol * 2),
      chapters.slice(itemsPerCol * 2)
    ];
    $('#readerTocGrid').innerHTML = cols.map((colChapters, colI) => `
      <div class="toc-col">
        <h3 class="toc-heading-red">${esc(book.itName || book.name).toUpperCase()} - PARTE ${colI + 1}</h3>
        <ul class="toc-list">
          ${colChapters.map(ch => `
            <li onclick="alert('${esc(ch)}')">${esc(ch)}</li>
          `).join('')}
        </ul>
      </div>
    `).join('');
    return;
  }
  // 3-Column Parchment TOC matching Screenshot 1
  $('#readerTocGrid').innerHTML = `
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('intro')">L'AVVENTURA TI CHIAMA!</h3>
      <ul class="toc-list">
        <li onclick="readerJump('intro-what-need')">Cosa ti servirà</li>
        <li onclick="readerJump('intro-how-use')">Come usare questo libro</li>
        <li onclick="readerJump('intro-worlds')">Mondi d'avventura</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap1')">CAPITOLO 1. MODALITÀ DI GIOCO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap1-dm')">Giocatore o padrone?</li>
        <li onclick="readerJump('cap1-rhythm')">Ritmo del gioco</li>
        <li onclick="readerJump('cap1-ongoing')">Il gioco in corso</li>
        <li onclick="readerJump('cap1-dice')">Dadi da gioco</li>
        <li onclick="readerJump('cap1-abilities')">Sei caratteristiche</li>
        <li onclick="readerJump('cap1-d20')">Test D20</li>
        <li onclick="readerJump('cap1-actions')">Azioni in Combattimento</li>
      </ul>
    </div>
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('cap2')">CAPITOLO 2. CREAZIONE DEL PERSONAGGIO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap2-steps')">Passi di creazione</li>
        <li onclick="readerJump('cap2-origins')">Origini del personaggio</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap3')">CAPITOLO 3. CLASSI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap3-intro')">Descrizione generale</li>
        <li onclick="readerJump('cap3-sub')">Sottoclassi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap4')">CAPITOLO 4. TALENTI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap4-intro')">Acquisizione talenti</li>
        <li onclick="readerJump('cap4-list')">Elenco completo</li>
      </ul>
    </div>
    <div class="toc-col">
      <h3 class="toc-heading-red" onclick="readerJump('cap5')">CAPITOLO 5. EQUIPAGGIAMENTO</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap5-arm')">Armi e armature</li>
        <li onclick="readerJump('cap5-tools')">Strumenti e attrezzi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('cap6')">CAPITOLO 6. INCANTESIMI</h3>
      <ul class="toc-list">
        <li onclick="readerJump('cap6-casting')">Lanciare incantesimi</li>
        <li onclick="readerJump('cap6-list')">Lista incantesimi</li>
      </ul>

      <h3 class="toc-heading-red" onclick="readerJump('appc')">APPENDICE C. GLOSSARIO DELLE REGOLE</h3>
      <ul class="toc-list">
        <li onclick="readerJump('appc-rules')">Regole A-Z</li>
        <li onclick="readerJump('appc-cond')">Condizioni</li>
      </ul>
    </div>
  `;"""

if old_toc_fallback in content:
    content = content.replace(old_toc_fallback, new_toc_fallback, 1)
    print("TOC fallback enhanced successfully!")
else:
    print("Warning: old_toc_fallback not found!")

with open(proto_path, "w", encoding="utf-8") as f:
    f.write(content)

print("prototype.html successfully updated!")
