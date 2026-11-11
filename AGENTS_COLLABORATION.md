# Linee Guida di Collaborazione Multi-Agente & Registro Modifiche

> **Repository:** [hybrid-entree-art/5e-tg-webapp](https://github.com/hybrid-entree-art/5e-tg-webapp)  
> **Pubblicazione:** [GitHub Pages](https://hybrid-entree-art.github.io/5e-tg-webapp/)  
> **Ultimo Aggiornamento:** 2026-11-11  

Questo documento definisce l'architettura, la divisione dei ruoli e il protocollo di collaborazione tra gli agenti AI e gli sviluppatori che lavorano su questa codebase.

---

## 1. Divisione dei Ruoli & Responsabilità

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

### [2026-11-12] - HOTFIX: init JS interrotta da riferimenti a elementi rimossi
* **Autore:** Agente Grafica & UI (area JS dell'Agente Contenuti — da rivedere)
* **Sintomo:** sulla versione pubblicata su Pages la home era inerte: card non cliccabili, ricerca, toggle tema e tiro dadi tutti morti.
* **Causa:** tre binding `$('#id').onclick = ...` puntavano a elementi non più presenti nel markup (`#createCharacter`, `#detailBack`, `#itemDetailBack`). Il primo `TypeError` interrompeva il resto dello script di inizializzazione, quindi tutto ciò che veniva agganciato dopo non veniva mai registrato.
* **Fix:** guard di esistenza sui tre binding (`if($('#id')) $('#id').onclick = ...`). Nessuna logica cambiata.
* **Verifica:** 0 errori JS al caricamento; tema chiaro/scuro commuta, ricerca "fireball" -> 6 risultati, dialogo dadi apre, card -> vista Classi naviga. Test suite tutta verde.
* **Nota per l'Agente Contenuti:** i tre elementi non esistono più, quindi i relativi pulsanti (tra cui i "torna indietro" di dettaglio) vanno ripristinati o rimossi anche dal markup/percorso di navigazione.

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
### [2026-11-11] - Home: redesign visivo (Agente Grafica & UI)
* **Autore:** Agente Grafica & UI
* **File toccati:** `index.html`, `prototype.html` (sincronizzati). Nessuna modifica a JS, API dati o classi semantiche.
* **Novità:**
  * **Hero → placca funzionale:** la ricerca diventa l'azione primaria e vive dentro la placca; il selettore ITA/ENG è compatto sulla stessa riga (su mobile non occupa più una riga dedicata).
  * **Direttorio in 3 gruppi semantici** (Manuali / Creazione del personaggio / Al tavolo) con etichette e filetto: eliminate le 4 ripetizioni del kicker "CREAZIONE" e il rumore dei microtesti ripetuti.
  * **Iconografia unificata:** le 11 card usano icone SVG lineari coerenti (prima glifi tipografici misti: ♬ per i Retaggi, ♜ per i Mostri, ♙ per i Bastioni) dentro tile ambra 36–38px.
  * **Card:** fondo a tinta per categoria più sobrio, hover con bordo/glow e micro-sollevamento, chevron circolare come affordance, conteggi leggibili senza apici.
  * **Masthead:** rimosse due azioni finte/duplicate (icona "Telegram" e dado dell'header: il dado resta nel FAB), target touch a 40px, icone senza bordo a riposo.
  * **Accessibilità verificata:** contrasti misurati (h1 17.5:1, testi secondari 10.2:1, etichette di gruppo 6.5:1), `focus-visible` sulle card, nessun overflow né testo tagliato a 320 / 390 / 768 / 1280px.
  * **FAB:** icona d20 corretta (era un cubo), 48px con blur di sfondo.
  * **Tema chiaro "pergamena":** superfici, bordi e tinte delle card riallineate.
  * **Revisione incrociata (bot UI-designer) e correzioni:** placeholder ricerca accorciato a "Cerca nel compendio…" (verificato: 10px di margine a 320px, 15px a 390px, prima veniva tagliato); FAB rimosso perché copriva le card — il tiro dadi resta nel pulsante dado della barra sticky, che è sempre visibile (rimossa l'icona Home, ridondante col brand: ora 3 azioni reali a 44px di target); etichette di gruppo portate a 10px con contrasto AA su entrambi i temi (7.7:1 scuro, 6.0:1 chiaro); card "Manuali" a tutta riga per non lasciare mezza riga vuota su desktop.
  * **Nota sugli hook conservati:** `.cat-kicker`, `.cat-title`, `.cat-sub` e `data-view` restano nel DOM con gli stessi nomi, quindi la traduzione automatica e i selettori JS continuano a funzionare (il kicker è nascosto via CSS, non rimosso).

### [2026-11-11] - Ingestione Player's Handbook Completo & Architettura Modulare
* **Autore:** Agente Contenuti
* **Novità:**
  * Creato `data/phb/` con 12 file indipendenti per i capitoli integrali del *Player's Handbook 2024 (XPHB)* in lingua originale inglese.
  * Creato `phb_content.js`: Master hub e router dei contenuti con API `getChapter()` e `getSection()`.
  * Integrato il lettore in `prototype.html` e `index.html` per caricare dinamicamente capitoli, TOC a 3 colonne e navigatore ad albero da `PHB_CONTENT`.
  * Aggiunto test suite automatica `tests/test_phb_content.js`.
  * Creato questo documento di coordinamento `AGENTS_COLLABORATION.md`.

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
