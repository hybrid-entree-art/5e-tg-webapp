# Linee Guida di Collaborazione Multi-Agente & Registro Modifiche

> **Repository:** [hybrid-entree-art/5e-tg-webapp](https://github.com/hybrid-entree-art/5e-tg-webapp)  
> **Pubblicazione:** [GitHub Pages](https://hybrid-entree-art.github.io/5e-tg-webapp/)  
> **Ultimo Aggiornamento:** 2026-11-11  

Questo documento definisce l'architettura, la divisione dei ruoli e il protocollo di collaborazione tra gli agenti AI e gli sviluppatori che lavorano su questa codebase.

---

## 1. Divisione dei Ruoli & Responsabilità

> ### 🎯 DIRETTIVA PRIORITARIA: IMPLEMENTAZIONE PERFETTA DEI 3 MANUALI CORE (2024)
> **Obiettivo primario e vincolante per tutti gli agenti (Contenuti, Grafica & UI):**
> Il focus assoluto dello sviluppo deve essere rivolto all'implementazione **perfetta ed esaustiva** dei 3 manuali base ufficiali di D&D 2024:
> 1. 📖 **Player's Handbook / Manuale del Giocatore (2024)** (`XPHB`)
> 2. 🧙‍♂️ **Dungeon Master's Guide / Guida del Dungeon Master (2024)** (`XDMG`)
> 3. 🐉 **Monster Manual / Manuale dei Mostri (2024)** (`XMM`)
>
> **Comportamento UI Attuale (Filtro Catalogo):**
> * Nella vista Biblioteca (`renderBooksGrid`), vengono mostrati **esclusivamente questi 3 manuali core** (`CORE_BOOK_IDS = ['XPHB', 'XDMG', 'XMM']`), ordinati canonicamente (`XPHB` -> `XDMG` -> `XMM`).
> * Tutti gli altri manuali (supplementi, ambientazioni, avventure e homebrew) rimangono temporaneamente esclusi dalla visualizzazione grafica e archiviati nei dataset (`books_data.js`).
> * **Roadmap:** Solo quando i 3 manuali core saranno stati completamente integrati, verificati e rifiniti alla perfezione (struttura capitoli, regole, tabelle, blocchi statistiche, collegamenti ipertestuali ed entità popover), si procederà ad abilitare e perfezionare il resto della biblioteca.

Per evitare conflitti, sovrascritture accidentali o regressioni, il lavoro è strettamente suddiviso:

### 📗 Agente Contenuti (Content Agent)
* **Responsabilità:** Dati, manuali, statistiche, architettura dei contenuti, parser di ingestione e integrità testuale.
* **File di competenza:**
  * `data/phb/*.js` (tutti i capitoli del Player's Handbook)
  * `phb_content.js` (master hub e router del libro)
  * `*_data.js` (`spells_data.js`, `monsters_data.js`, `class_data.js`, `species_data.js`, `bg_data.js`, `feats_data.js`, `equipment_data.js`, `magic_data.js`, `bastions_data.js`, `glossary_data.js`, `books_data.js`)
  * `scripts/` (script di parsing e aggiornamento dati)
  * `tests/` (test di validazione contratti dati e API)
* **Regole d'oro:**
  1. **Player's Handbook al 100% in Inglese Autentico:** I capitoli e le regole del PHB 2024 **non devono essere tradotti** in italiano: mantengono la terminologia, i capitoli, le tabelle e i testi originali XPHB.
  2. **Non toccare la grafica:** Non alterare layout CSS complessi o scelte estetiche, salvo definire classi semantiche standard per permettere all'Agente Grafico di stilizzarle.

### 🎨 Agente Grafica & UI (Graphic/UI Agent)
* **Responsabilità:** Design visivo, layout responsivo, CSS, animazioni, palette colori (Ruleholder dark & light), SVG, icone, componenti Telegram Mini App e accessibilità.
* **File di competenza:**
  * Sezioni `<style>` o fogli di stile CSS dedicati.
  * Markup di presentazione e template grafici in `prototype.html` / `index.html`.
  * Asset visivi in `assets/`.
* **Regole d'oro:**
  1. **Non alterare le API dei dati:** I metodi come `PHB_CONTENT.getChapter()`, `PHB_CONTENT.getSection()` e gli array dei dataset devono rimanere intatti.
  2. **Stilizzare tramite classi semantiche:** Usare le classi emesse dal motore di rendering del contenuto (elencate sotto).

---

## 2. Mappa dell'Architettura dei Contenuti

### A. Player's Handbook 2024 (XPHB) - Inglese Integrale
Tutto il manuale è suddiviso in sezioni modulari indipendenti caricate come script globali:

| File | Capitolo / Sezione | Contenuto Chiave |
|---|---|---|
| `data/phb/00_intro.js` | **Introduction: Welcome to Adventure** | Cos'è D&D, cosa serve, prefazione, mondi |
| `data/phb/01_playing_the_game.js` | **Chapter 1: Playing the Game** | 6 Caratteristiche, D20 Test, Proficiency, Azioni, Combattimento, Esplorazione |
| `data/phb/02_creating_a_character.js` | **Chapter 2: Creating a Character** | Creazione passo-passo, avanzamento livelli, multiclasse, ninnoli |
| `data/phb/03_character_classes.js` | **Chapter 3: Character Classes** | Panoramica 12 classi, dadi vita, tabelle incantesimi |
| `data/phb/04_character_origins.js` | **Chapter 4: Character Origins** | Componenti d'origine, panoramica retaggi e specie |
| `data/phb/05_feats.js` | **Chapter 5: Feats** | Regole talenti, talenti di origine, generali, stile di lotta, doni epici |
| `data/phb/06_equipment.js` | **Chapter 6: Equipment** | Monete, weapon mastery, armature, attrezzi, cavalcature, servizi |
| `data/phb/07_spells.js` | **Chapter 7: Spells** | Regole di lancio, scuole, componenti, concentrazione, aree d'effetto |
| `data/phb/08_appendix_a_multiverse.js` | **Appendix A: The Multiverse** | Piano Materiale, Piani di Transizione, Piani Interni ed Esterni |
| `data/phb/09_appendix_b_creatures.js` | **Appendix B: Creature Stat Blocks** | Blocchi statistiche creature e famigli del PHB |
| `data/phb/10_rules_glossary.js` | **Rules Glossary** | Definizioni integrali delle regole 2024 (Advantage, Concentration, Cover, Emanation...) |
| `data/phb/11_credits.js` | **Credits** | Riconoscimenti e crediti editoriali |

### B. Master Hub e Router (`phb_content.js`)
Espone `window.PHB_CONTENT`:
```javascript
// Recuperare un capitolo per indice (0..11) o per slug ('01_playing_the_game')
const ch1 = PHB_CONTENT.getChapter(1); 
console.log(ch1.title); // "Chapter 1: Playing the Game"
console.log(ch1.html);  // HTML completo del capitolo

// Recuperare una sezione specifica ovunque nel manuale
const d20Sec = PHB_CONTENT.getSection('d20-tests');
console.log(d20Sec.title); // "D20 Tests"
console.log(d20Sec.html);  // HTML formattato della sezione
```

---

## 3. Contratti di Stile per l'Agente Grafico

Il motore di contenuti formatta il testo del Player's Handbook generando elementi con le seguenti classi CSS standard che l'Agente Grafico può personalizzare a piacimento:

* `.rh-book-body`: Contenitore principale del testo del capitolo.
* `.rh-book-p`: Paragrafi di testo standard.
* `.rh-book-h`: Intestazioni di sezione (`h2.rh-book-h`, `h3.rh-book-h`, `h4.rh-book-h`).
* `.rh-book-quote`: Riquadro di citazione (es. lettere dei designer), con `<cite>` per l'autore.
* `.rh-book-inset`: Box di approfondimento con titolo `.rh-inset-title` (es. *"Watch and Learn"*).
* `.rh-book-list`: Liste puntate del manuale.
* `.rh-book-table-wrap` & `.rh-book-table`: Tabelle delle regole con `<th>` e `<td>`.
* `.rh-dice-pill`: Pillola interattiva per il lancio dadi (contiene attributo `data-dice="1d20+5"` per il trigger del rullo dadi).
* `.rh-ref-link`: Riferimenti incrociati cliccabili (contiene attributo `data-ref="Nome"`).

---

## 4. Registro Modifiche & Novità (Changelog)

### [2026-11-12] - Protocollo persistente di handoff multi-agente
* **Autore:** Agente Contenuti
* **Novità:** aggiunta la sezione `Lavori in corso` e la procedura di avviso pre-intervento in `AGENTS_COLLABORATION.md`.
* **Regola:** prima di modifiche significative, leggere il registro e lo stato Git, dichiarare ambito/file/branch/test, controllare sovrapposizioni; a fine lavoro registrare commit e verifiche. Il file è asincrono e non genera notifiche push automatiche.

### [2026-11-12] - Direttiva Manuali Core 2024 & Visualizzazione Esclusiva Biblioteca (PHB, DMG, MM)
* **Autore:** Agente Contenuti & Agente Grafica & UI
* **Decisione Architetturale:**
  * Tutti gli sforzi di sviluppo sono focalizzati sull'implementazione impeccabile ed esaustiva dei 3 manuali base ufficiali D&D 2024:
    1. *Player's Handbook / Manuale del Giocatore* (`XPHB`)
    2. *Dungeon Master's Guide / Guida del Dungeon Master* (`XDMG`)
    3. *Monster Manual / Manuale dei Mostri* (`XMM`)
  * **Filtro UI Biblioteca:** Il catalogo "Biblioteca / Libri di regole" (`renderBooksGrid` in `prototype.html` e `index.html`) visualizza **esclusivamente** i 3 manuali core, ordinati secondo la sequenza ufficiale canonica (`XPHB` -> `XDMG` -> `XMM`).
  * Aggiornato il metadato `itName` di `XMM` in `books_data.js` a `"Manuale dei mostri"`.
  * Aggiornati i badge della home directory a `"3 manuali core · 2024"`.
  * Tutti gli altri 27 manuali rimangono salvaguardati nel dataset `books_data.js` ma nascosti dalla vista catalogo fino al completamento e alla validazione perfetta dei 3 manuali base.
  * Suite di test aggiornata e validata in `tests/test_books_ui_ruleholder.js`.

### [2026-11-12] - Restyling Totale Badge (Eliminazione Stili "AI Slop" & Allineamento Ruleholder)
* **Autore:** Agente Grafica & UI
* **Problema Risolto:** I badge delle fonti (`.rh-badge-phb`, `.rh-badge-dmg`, `.rh-badge-amber-outline`) utilizzavano colori accesi e poco realistici (verde neon `#4ade80` con bordo `#22542a` o arancione brillante con effetto finto-chip), tipici dei template generati da AI ("AI slop") e incompatibili con l'estetica autentica di Ruleholder.
* **Novità & Regole di Design Ufficiale:**
  * **Neutral Slate Minimalista (`.rh-badge-phb`, `.rh-badge-dmg`, `.rh-badge-mm`, `.rh-badge-source`):**
    * Background scuro uniforme e piatto: `rgba(255, 255, 255, 0.05)` (dark) / `#eee7db` (light/warm).
    * Bordo sottile ed elegante: `1px solid rgba(255, 255, 255, 0.1)` (dark) / `1px solid #dcd2c1` (light/warm).
    * Testo color ardesia/crema ad alta leggibilità: `#c4bdcc` (dark) / `#4a433a` (light/warm).
    * Tipografia: `var(--sans)`, `11px`, `font-weight: 600`, padding compatto `2px 7px`, border-radius `4px` netto e non a capsula deformata.
    * Checkmark tipografico naturale `✓` dello stesso colore sobrio del testo.
  * **Tag di Proprietà Discreti (`.rh-badge-amber-outline`, `.rh-badge-tag`, `.bg-skill-pill`, `.spell-mini-badge`):**
    * Rimossa ogni fluorescenza ambra o verde: ora hanno un aspetto integrato, morbido ed equilibrato, esattamente identico agli screenshot di Ruleholder.

### [2026-11-12] - Nuova UX & UI Dettaglio Bastioni & Schede Oggetti (Ruleholder Spec Card)
* **Autore:** Agente Contenuti & Agente Grafica & UI
* **Riferimento UX:** Screenshot di Ruleholder `media_1794442074664_8f44693e.jpg` (Dettaglio Bastione *Semipiano / Demiplane*).
* **Novità:**
  * **Breadcrumbs Row con Warning & Back ergonomico (`.rh-detail-crumbs-row`):**
    * Struttura: `🗂 Elenco > 🏰 Bastioni > [Nome Bastione]` con chevron `>` e badge icona `⚠️` allineata a destra.
    * Pulsante compatto `← Elenco` per tornare rapidamente al catalogo.
  * **Intestazione Titolo a Riquadro Ruleholder (`.rh-item-detail-header`):**
    * Titolo prominente a sinistra (`.rh-item-title`, es. *Semipiano* / *Demiplane*).
    * A destra allineato sulla riga: sottotitolo in lingua originale inglese (`.rh-item-en-sub`, es. *Demiplane*) affiancato dal badge sorgente a pillola (`.rh-badge-source`, es. `✓ DMG` o `✓ PHB`).
  * **Card Specifica Struttura / Oggetto (`.rh-spec-box`):**
    * **Griglia Metadati a Colonne (`.rh-spec-grid-header`):**
      * `TIPO` (`Struttura speciale` / `Struttura base`).
      * `LIVELLO` (`17° livello` / `Livello 17`).
    * **Corpo Testuale con Paragrafi e Sotto-Incipit in Grassetto-Corsivo (`.rh-spec-desc-text`):**
      * Formattazione automatica in paragrafi distinti (`<p class="rh-spec-p">`).
      * Evidenziazione automatica dei comandi e capacità di bastione (es. `<i><b>Empower: Arcane Resilience.</b></i>`, `<i><b>Fabrication.</b></i>`, `<i><b>Research: Helpful Lore.</b></i>`, `<i><b>Craft Options.</b></i>`).
      * Autolink a entità note (es. *Temporary Hit Points*, *Long Rest*, *Magic action*, *Size*) con card popover al passaggio del mouse.
  * **Traduzione Integrata dei 35 Bastioni (`bastions_data.js`):**
    * Tutte le 35 strutture del *Dungeon Master's Guide 2024* sono ora arricchite con il nome ufficiale italiano (`it`) per la ricerca e visualizzazione bilingue (es. *Demiplane* -> *Semipiano*, *Arcane Study* -> *Studio Arcano*, *Archive* -> *Archivio*).
  * **Test Suite Dedicata (`tests/test_bastion_detail_ui.js`):**
    * Copertura completa su sincronizzazione DOM HTML, regole CSS, helper JavaScript, integrità dei 35 bastioni e fedeltà al layout di *Demiplane*.

### [2026-11-12] - Nuova UX & UI Lettore Manuale Integrale (Ruleholder Book Reader)
* **Autore:** Agente Contenuti & Agente Grafica & UI
* **Riferimento UX:** Screenshot di Ruleholder `media_1794441659988_e723283c.jpg` (Lettura completa di *Capitolo 2: Creazione del personaggio*).
* **Novità:**
  * **Layout a Due Colonne Immersivo (`.rh-reader-container`):**
    * **Colonna Sinistra: Sidebar Sticky a Fisarmonica (`.rh-reader-sidebar`):**
      * **Header Stepper Compatto (`.rh-reader-stepper`):** Pulsante `‹ CAP. PREC.` (`#prevChapterBtn`), icona centrale `📖` per l'indice generale (`#readerTocBtn`), e pulsante `CAP. SUCC. ›` (`#nextChapterBtn`).
      * **Albero dei Capitoli ad Accordion (`.rh-reader-accordion`):** Elenco ordinato dei 12 capitoli con etichette bilingue (italiano e inglese).
      * **Stato Capitolo Attivo (`.rh-accordion-item.active`):** Bordo sinistro cremisi spesso 3px (`border-left: 3px solid #8b1820`), sfondo caldo a contrasto, chevron rivolto verso il basso (`▾`) e font in grassetto.
      * **Sotto-sezioni del Capitolo Attivo (`.rh-chap-sections`):** Lista dei capitoli/sezioni figlie (es. per il Cap. 2: *Preparazione / Get Ready*, *Crea il tuo personaggio*, *Avanzamento di livello*, *Iniziare a livelli superiori*, *Multiclasse*, *Bazzecole*).
      * **Smooth Scroll alle Sezioni (`readerJumpSection`):** Il click su una voce di sezione fa scorrere fluidamente la vista del manuale all'intestazione corrispondente (`document.getElementById(secId)?.scrollIntoView({behavior: 'smooth'})`) ed evidenzia la voce attiva in cremisi.
    * **Colonna Destra: Foglio di Lettura del Manuale (`.rh-reader-sheet`):**
      * **Impaginazione Pergamena & Tipografia D&D:** Titoli H1, H2, H3 in maiuscoletto cremisi (`#7a161d`), kicker editoriale con capitolo e sorgente, e testo giustificato leggibile (`line-height: 1.68`).
      * **Box di Approfondimento Stile Ruleholder (`aside.rh-book-inset`):** Riquadro con cartiglio/etichetta a nastro superiore in ardesia scura (`.rh-inset-title`, es. *SESSION ZERO* / *NULEVAYA VSTRECHA* con testo bianco in maiuscolo) per le note dei designer e le regole opzionali.
      * **Collegamenti Ipertestuali Blu (`.rh-ref-link`):** Riferimenti a condizioni, incantesimi, mostri, equipaggiamento e classi formattati in blu (`#1976d2`, dark `#64b5f6`), con anteprima popover al passaggio del mouse e apertura rapida al click.
      * **Footer Stepper a Card Grandi (`.rh-reader-chapter-footer`):** Schede `‹ CAPITOLO PRECEDENTE` e `PROSSIMO CAPITOLO ›` a fondo pagina per consentire una lettura continua da inizio a fine manuale.
    * **Indice Generale a 3 Colonne (`#readerTocOverview`):** Cassetto/modale su foglio di pergamena attivabile tramite il pulsante `📋 Indice generale` o l'icona `📖` dello stepper, con suddivisione equilibrata dei capitoli su tre colonne e collegamenti diretti a tutti i sottoparagrafi.
    * **Modalità Mobile Ergonomica (`@media(max-width: 860px)`):** Barra di commutazione capitoli rapida (`.rh-reader-mobile-bar`) che apre e chiude la sidebar senza occupare spazio visivo sul foglio di lettura.
  * **Test Suite Dedicata (`tests/test_reader_ui_ruleholder.js`):** Valida al 100% l'integrità del DOM HTML (30 elementi), delle regole CSS (30 selettori), delle funzioni JavaScript (16 API) e della fedeltà al Capitolo 2 autentico in inglese.

### [2026-11-12] - Home senza numeri, card Specie allineate al riferimento, immagini Classi corrette
* **Autore:** Agente Grafica & UI
* **Home:** rimossi i badge numerici (`.cat-count`) introdotti nel giro precedente: le card restano titolo + artwork.
* **Specie:** la card ora replica la tecnica di ruleholder.com — l'artwork è il `background` della card (`background-size:auto 100%`, `top right`, nessuna maschera né velo), quindi è la trasparenza del cutout a fondere il personaggio nel fondo. Altezza 146px come il riferimento, badge sorgente compatto e monocromatico in basso a sinistra, testo con `padding-right:42%` per non finire sotto la figura. Hover/pressione: il soggetto esce dai bordi (scale 1.14, ancorato in alto a destra) con alone ambra.
* **Classi:** l'immagine era resa con `object-fit:contain` dentro un riquadro 16:10, quindi restava pillarboxata con bande nere e doppia cornice. Ora `object-fit:cover` + `object-position:50% 0%` (come il riferimento) e artwork locale `assets/classes/*.webp` (stessa fonte di ruleholder) al posto del ritratto remoto di 5e.tools, via `content:url()` per `[data-class]`: nessuna modifica al renderer JS.
* **Verifica:** profilo di luminanza della card Specie confrontato con lo screenshot di ruleholder → correlazione **0.99** (picco a 78% della larghezza, centro di massa 65% vs 66%); card Classe: immagine 356×190 che riempie il riquadro (dev. luminanza 38.8, nessuna banda nera); home senza overflow a 320/390/768/1280; test suite verde.

### [2026-11-12] - Artwork su Specie e Classi, atmosfera della home, rimozione slop
* **Autore:** Agente Grafica & UI
* **Asset:** `assets/species/*.webp` — 10 cutout con trasparenza da `media.ruleholder.com/images/species/`. Attribuzione in `assets/species/README.md`.
* **Novità:**
  * **Lista Specie:** artwork locale al posto dell'immagine remota di 5e.tools, con lo stesso comportamento della home — il soggetto esce dai bordi in hover/focus/pressione (scale 1.18, 6% verso l'alto e a sinistra), alone ambra e velo orizzontale per il testo. Nessuna modifica al renderer: tutto via CSS su `[data-spec]`.
  * **Lista Classi:** artwork rettangolare (niente cutout) → **zoom** dell'immagine (1.09) dentro il riquadro, con glow ambra e bordo acceso.
  * **Sfondo home:** luce ambientale a quattro radiali (ambra in alto, brace a destra, viola freddo a sinistra, ambra dal basso) + grana finissima a 3.5% in overlay fisso. Il tema chiaro ha la sua variante calda.
  * **Rimozione slop:** eliminati `eyebrow` della home, i kicker di categoria, le frecce `↗` e i sottotitoli `· PHB 2024` ripetuti; il conteggio è ora un badge numerico monocromatico (`.cat-count`). Rimossa anche la riga "D&D 5.5e (2024) · fonti selezionate" accanto al titolo di sezione.
* **Nota:** i `eyebrow` delle viste di dettaglio sono rimasti: lì sono etichette informative, non decorazione.
* **Verifica:** 10/10 cutout specie caricati (340×340), hover misurato via CDP (`overflow:visible`, scala 1.18, `drop-shadow` ambra), zoom classi 1.09 con riquadro che resta tagliato, nessun overflow né titolo troncato a 320/390/768/1280, test suite verde.

### [2026-11-12] - Home: artwork di categoria con soggetto che esce dai bordi + glow
* **Autore:** Agente Grafica & UI
* **Asset:** `assets/menu/*.webp` — 11 cutout con trasparenza dal menu di `ruleholder.com` (`media.ruleholder.com/images/menu/`), scaricati il 2026-11-12 su autorizzazione dell'utente. Attribuzione e mappatura categorie in `assets/menu/README.md`.
* **Novità:**
  * Ogni card del direttorio usa l'artwork della propria categoria come soggetto, ancorato in basso con velo sfumato per la leggibilità del testo (`.category:after`).
  * **Hover / focus:** la card passa a `overflow:visible` e il soggetto si ingrandisce (+16%) **uscendo dai bordi** (verificato: 33px sopra, 13px per lato), con alone ambra (`.category:before` a opacità 1) e `drop-shadow` caldo sull'artwork.
  * **Tocco:** su telefono l'hover non esiste, quindi la stessa scena parte in `:active` (pressione) — non è dentro `@media (hover:none)` perché quella query non è affidabile su tutti i WebView.
  * La card "Libri di regole" mantiene il layout orizzontale, con artwork a destra e velo orizzontale.
  * Le icone SVG restano nel DOM ma sono nascoste sulle card con artwork (`display:none`), visibili solo sulla card wide: il soggetto prende il posto del glifo.
  * Tema chiaro: velo chiaro e glow in ambra scura, ombre più morbide.
* **Peso:** nuove immagini ~600 KB (11 file, dopo aver scartato le varianti `-bg`).
* **Verifica:** 11/11 immagini caricate senza 404; nessun overflow né testo tagliato a 320/390/768/1280px; test suite verde (7 node + 12 python).

### [2026-11-12] - Integrazione Home v2 (Grafica & UI) e Ripristino Schede / Robustezza Listener
* **Autore:** Agente Contenuti & Agente Grafica & UI
* **Novità:**
  * **Integrazione del Layer Grafico Home v2 (`origin/design/home-v2`):**
    * **Placca Hero (`.hero-plate`):** La barra di ricerca compendio principale e il toggle bilingue ITA/ENG vivono ora nella placca centrale, con texture diagonale dorata e bordi sfumati.
    * **Direttorio in 3 Gruppi Semantici (`.dir-group`):** Riorganizzate le 11 card del compendio in *"Manuali"*, *"Creazione del personaggio"* e *"Al tavolo"*, con icone SVG pulite e bordi a tinta.
    * **Masthead ripulito:** Rimosse le azioni duplicate/rumorose, target touch ergonomici e dado reindirizzato alla barra comandi.
  * **Risoluzione Blocco Schede & Guardie DOM:**
    * Ripristinato il riquadro e pulsante di creazione scheda (`#createCharacter`) nella vista classe per permettere la generazione istantanea della scheda rapida del personaggio.
    * Aggiunto controllo di esistenza (null-guard) su tutti i listener di back button e modali (`#createCharacter`, `#detailBack`, `#itemDetailBack`, ecc.) per azzerare qualsiasi TypeError a runtime che poteva bloccare l'esecuzione degli script o l'interazione con le card e le schede.

### [2026-11-12] - Nuova Vista Dettaglio Classe (Ruleholder UX) con Descrizione Laterale e Sottoclassi Dinamiche
* **Autore:** Agente Contenuti & UI
* **Novità:**
  * **Layout a Due Colonne Ruleholder (come per le Specie):** 
    * Seguendo l'istruzione dell'utente (*"con l'unica differenza che la descrizione la metterei nel laterlare come per la specie"*), la narrazione del lore e l'artwork ufficiale sono collocati nella colonna destra (scheda laterale), anziché essere nascosti in un tab separato.
    * **Colonna Sinistra (Meccaniche, Tabelle e Privilegi):**
      * **Card Specifiche Principali (`.rh-class-spec-card`):** Caratteristiche principali, Dado Vita, Competenze nei tiri salvezza, Competenze nelle abilità, Addestramento armi, Strumenti, Armature, Equipaggiamento iniziale (scelta A o B), Requisiti di Multiclasse.
      * **Card Progressione con Selettore Sottoclassi (`#rhClassSubclassSelect`):** Include il dropdown dinamico delle 4 sottoclassi 2024 (`Senza sottoclasse` o collegi/domini specifici) e il pulsante per gli incantesimi di classe (`Incantesimi di classe`).
      * **Tabella di Progressione Livelli 1-20 (`.rh-prog-table`):** Mostra Lv, BU (+2..+6), Peculiarità e tutte le colonne di risorse di classe (es. Dado Ispirazione Bardica, Trucchetti, Incantesimi preparati, Slot 1-9). La selezione di una sottoclasse inietta e fonde in tempo reale i privilegi della sottoclasse nella colonna "Peculiarità" (es. per il Collegio del Fascino: Liv 3 *Magia incantevole, Mantello dell'Ispirazione*, Liv 6 *Mantello di grandezza*, Liv 14 *Grandezza indistruttibile*).
      * **TOC di Navigazione Rapida (`.rh-class-nav-box`):** Lista di link di salto che scorrono fluidamente alla card del privilegio corrispondente aprendola automaticamente, con evidenziazione dorata per i privilegi di sottoclasse (`.subclass-nav`).
      * **Suite Privilegi ("Peculiarità", `.rh-class-features-section`):** Intestazione con pulsante `» Espandi tutto` / `« Comprimi tutto`. Card a fisarmonica con kicker di livello (`CLASSE DI LIVELLO X` per privilegi base; `X° LIVELLO · SOTTOCLASSE · [NOME]` in ambra dorata per la sottoclasse). Controlli contestuali inline: pulsante incantesimi di classe per il privilegio Incantesimi, e selettore di sottoclasse direttamente nella card di livello 3. Tutti i testi sono collegati interattivamente con `linkKnownEntities` e `parseDiceInText`.
    * **Colonna Destra (Scheda Laterale - Lore & Illustrazione):**
      * **Frame Artwork Ufficiale (`.rh-class-art-frame`):** Ritratto cutout a corpo intero su alone radioso sfumato (`.rh-class-hero-img`) con didascalia/tagline della classe.
      * **Card Narrativa ("Descrizione", `.rh-class-lore-card`):** Tutti i paragrafi di storia e contesto estratti ufficialmente da XPHB.
      * **Riquadro Tematico di Ruolo (`.rh-class-callout-card`):** Box stilizzato in ambra con titolo (es. *Il repertorio di Bard*) e domande di interpretazione scenica e di stile d'azione.
  * **Dataset Esteso `class_data.js`:** 
    * 12 classi del Player's Handbook 2024 complete di tutte le specifiche tecniche, tabelle progressione 1-20, e 48 sottoclassi con privilegi completi a ciascun livello.
  * **Test Suite Dedicata (`tests/test_class_ui_ruleholder.js`):** Valida al 100% l'integrità dei dati delle classi, dei componenti HTML e delle classi CSS Ruleholder.

### [2026-11-11] - Collegamenti Interattivi, Anteprime Popover (Ruleholder) & Navigazione Diretta
* **Autore:** Agente Contenuti & UI
* **Novità:**
  * **Motore di Risoluzione Entità (`resolveEntity`):** Ricerca e risolve istantaneamente incantesimi (`DATA.spells`), condizioni (`GLOSSARY`), talenti (`FEATS`), oggetti ed equipaggiamento (`EQUIPMENT`, `MAGIC`), mostri (`DATA.monsters`) e definizioni essenziali delle regole 2024 (`CORE_RULES_REGISTRY`).
  * **Autolinker Intelligente & Disambiguazione Contestuale (`linkKnownEntities`):** Scansiona in modo sicuro i testi di tratti di specie, azioni dei mostri, descrizioni di oggetti e capitoli del Player's Handbook, convertendo condizioni (es. *Prone*, *Blinded*, *Invisible*), incantesimi e regole in link interattivi `.rh-ref-link`. **Disambiguazione rigorosa dei falsi positivi:** parole inglesi comuni come *"light"*, *"shield"*, *"darkness"*, *"resistance"*, *"command"*, *"sleep"*, *"jump"*, *"friends"* NON vengono mai scambiate per incantesimi se usate come sostantivi ordinari (es. *"searing light"*, *"light activity"*, *"a shield adds +2 AC"*). Vengono linkate come incantesimo solo in presenza di prefisso di lancio (*"cast Light"*, *"know the Light cantrip"*) o suffisso (*"Light cantrip"*, *"Shield spell"*). Termini di illuminazione come *"Bright Light"* e *"Dim Light"* rimandano invece correttamente alle regole ambientali del manuale.
  * **Card Popover Flottante (`#rhEntityPopover` - Stile Ruleholder):** Al passaggio del mouse (hover) o al tap su mobile, appare una card fluttuante arrotondata con:
    * Intestazione con titolo, icona `↗`, badge sorgente (`✓ PHB`, `✓ DMG`, `✓ MM`) e pillola categoria.
    * Griglia compatta delle specifiche (es. *Tempo di lancio*, *Gittata*, *Durata* per incantesimi; *CA*, *PF*, *Velocità* per mostri; *Costo*, *Peso* per equipaggiamento).
    * Estratto descrittivo con dadi interattivi cliccabili.
    * Pulsante d'azione *"Apri pagina ↗"*.
    * Gestione timer di hover (250ms) per permettere all'utente di spostare il cursore all'interno della popover.
    * Chiusura automatica al click esterno o allo scorrimento della pagina.
  * **Navigazione Diretta (`navigateToEntity`):** Cliccando sul link nel testo o nel popover, l'app passa istantaneamente alla pagina completa dell'entità corrispondente (`openSpellDetail`, `openMonsterDetail`, `openItem` per glossario/talenti/oggetti, `openBookReader` per regole del manuale), nascondendo in modo pulito tutte le altre viste aperte.
  * **Stilizzazione Semantica:** Classi dedicate `.rh-ref-link`, `.ref-spell`, `.ref-condition`, `.ref-feat`, `.ref-item`, `.ref-monster`, `.ref-rule` e card `.rh-entity-popover` ottimizzata sia per il tema scuro profondo sia per il tema pergamena chiaro.
  * Aggiunto test suite automatica `tests/test_entity_lookup.js`.

### [2026-11-11] - Ingestione Player's Handbook Completo & Architettura Modulare
* **Autore:** Agente Contenuti
* **Novità:**
  * Creato `data/phb/` con 12 file indipendenti per i capitoli integrali del *Player's Handbook 2024 (XPHB)* in lingua originale inglese.
  * Creato `phb_content.js`: Master hub e router dei contenuti con API `getChapter()` e `getSection()`.
  * Integrato il lettore in `prototype.html` e `index.html` per caricare dinamicamente capitoli, TOC a 3 colonne e navigatore ad albero da `PHB_CONTENT`.
  * Aggiunto test suite automatica `tests/test_phb_content.js`.
  * Creato questo documento di coordinamento `AGENTS_COLLABORATION.md`.

### [2026-11-12] - UI Biblioteca Ruleholder (Rulebooks Catalog)
* **Autore:** Agente Contenuti & UI
* **Riferimento UX:** Screenshot di Ruleholder `media_1794440474152_6429a6e9.jpg` (Biblioteca D&D 5.5e).
* **Novità:**
  * **Breadcrumbs:** `📖 Elenco > 📚 Biblioteca` con link rapido di navigazione.
  * **Toolbar a due gruppi di filtri pillola + Ricerca istantanea + Ordinamento:**
    * Gruppo Tipo: `[ Tutto ]` | `[ Regole ]` | `[ Avventure ]`
    * Gruppo Fonte: `[ Tutto ]` | `[ Ufficiale ]` | `[ Affiliato ]` | `[ Birra fatta in casa ]`
    * Barra di ricerca `🔍 Cerca per nome` con match bilingue (italiano e inglese) e pulsante di cancellazione rapida.
    * Pulsante ordinamento `[ ⇅ ]` con toggle sequenziale (Predefinito, A-Z, Z-A).
  * **Griglia Poster Responsive 5 colonne (`.rh-books-grid`):**
    * Poster verticali con `aspect-ratio: 1 / 1.44`, angoli arrotondati 8px, ombreggiatura e striscia rossa d'accento per i manuali ufficiali.
    * Copertine caricate via 5e.tools webp con fallback automatico e pulito (cover in pelle scura e pergamena SVG/CSS).
    * Titolo italiano prominente sotto il poster, con sottotitolo inglese e anno di pubblicazione.
    * I primi 10 manuali della collezione riproducono fedelmente le prime 2 righe dello screenshot: *Eroi della terra di confine*, *Classe Mago*, *Libro del giocatore*, *Il libro delle passioni di Astarion*, *Magia sfrenata*, *Eredi del Male Elementale*, *Trattenere i morti*, *La bisaccia del Grifone, Libro 1*, *Sale del Drago*, *Enciclopedia dei mostri*.
  * **Integrazione Lettore:** Il click su qualsiasi manuale apre direttamente la lettura interattiva o l'indice generale TOC a 3 colonne via `openBookReader(bookId)`.
  * **Test Suite:** Aggiunto `tests/test_books_ui_ruleholder.js` con copertura completa su dati, DOM, CSS, filtri, ricerca e ordinamento.

### [2026-11-11] - UI Specie Ruleholder & Singolo Switch Tema
* **Autore:** Agente Contenuti & UI
* **Novità:**
  * Rimosso il pulsante duplicato del tema nel lettore: ora esiste unicamente il pulsante **🌓** globale nella barra in alto.
  * Nuova scheda Specie aperta a due colonne identica allo screenshot di Ruleholder (card caratteristiche con tratti aperti e sotto-opzioni formattate a sinistra, ritratto ufficiale e lore completa a destra).
  * Creato `index.html` sincronizzato per l'apertura immediata via root su GitHub Pages.

---

## 5. Regole di Contribuzione per i Prossimi Agenti
1. Prima di fare modifiche strutturali, leggere questo file (`AGENTS_COLLABORATION.md`).
2. Rispettare la separazione tra file di contenuto (`data/`, `scripts/`) e file grafici (`style`, markup visivo).
3. Eseguire sempre i test prima di committare:
   ```bash
   python -m unittest discover -s tests -v
   node tests/test_bilingual_search.js
   node tests/test_species_theme_ui.js
   node tests/test_phb_content.js
   node tests/test_entity_lookup.js
   ```
4. Aggiornare la sezione *Registro Modifiche* di questo file dopo ogni implementazione significativa.

## 6. Protocollo di Avviso & Handoff tra Agenti

Questo file è il **registro condiviso asincrono**: prima di un intervento significativo, l'agente deve leggere il changelog e lo stato Git più recente, poi aggiungere una nota nella sezione `Lavori in corso` qui sotto indicando agente, obiettivo, file/aree coinvolti, branch e test previsti. Gli altri agenti devono controllare tale sezione prima di iniziare e non modificare in parallelo gli stessi file senza accordarsi.

Quando il lavoro è concluso, l'agente aggiorna lo stato della nota a `completato`, registra commit e verifiche nel changelog, esegue i test richiesti e aggiorna/pusha il branch condiviso. Se un blocco o una sovrapposizione impedisce il lavoro, segnala il problema nella stessa nota invece di sovrascrivere modifiche altrui.

Il file GitHub rende la comunicazione persistente ma **non invia notifiche push automatiche**: ogni agente deve sincronizzare/pullare e rileggere il registro prima di lavorare. Se esiste un canale di messaggistica condiviso con un agente specifico, inviare anche lì un breve avviso con commit/branch e aree toccate.

### Lavori in corso

| Stato | Agente | Obiettivo | File/aree | Branch / commit | Verifiche |
|---|---|---|---|---|---|
| In corso | Hermes / UI-designer (review) | Migliorare lettore e mostrare cover volume | `prototype.html`, `index.html`, test reader | `main` | reader test, unit test, viewport 320/390/768/1280 |
