# Compendio — Mini App Telegram · D&D 5.5e (2024)

Web app statica ospitata su **GitHub Pages** e aperta come **Telegram Mini App**. Un compendio da tavolo in italiano ispirato al design delle schermate di riferimento: catalogo filtrabile, indice del manuale, schede di classe/dettaglio e tooltip, salvando la scheda del personaggio in locale.

## Apri

- Pagina web: https://hybrid-entree-art.github.io/5e-tg-webapp/prototype.html
- Repo: https://github.com/hybrid-entree-art/5e-tg-webapp

Nel browser del PC/telefono la pagina funziona anche fuori da Telegram; dentro Telegram, viene caricata tramite lo script `telegram-web-app.js`.

## Todo contenuti

Il prototipo è in fase di allineamento alla **5.5e (2024)** e va completato sezione per sezione seguendo i riferimenti visivi forniti:

- [ ] **Regole** (biblioteca, indice del manuale) — da collegare allo SRD localizzato
- [ ] **Classi** — presente (12 classi, artwork Ruleholder)
- [ ] **Background** — da compilare (es. Artista/Intrattenitore, Nobile…)
- [ ] **Specie** — da compilare (Aasimar, Nano, Tiefling…)
- [ ] **Talenti** — da compilare
- [ ] **Incantesimi** — presente (361 voci PHB; verificare edizione 2014)
- [ ] **Equipaggiamento** — da compilare
- [ ] **Oggetti magici** — da compilare
- [ ] **Mostri** — presente (450 voci MM; verificare edizione 2014)
- [ ] **Bastioni** e **Glossario** — da compilare

## Risorse e diritti

- **SRD 5.2.1** (CC BY 4.0): attribuzione in `NOTICE-SRD.md`.
- **Artwork classi**: da `ruleholder.com`, usati sulla base del permesso dichiarato dall’utente; provenienza annotata in `assets/classes/README.md`.
- Il testo e le immagini integrali dei manuali (Player's Handbook, Monster Manual…) **non** vanno ripubblicati in una repo/Pages pubblica senza conferma dei diritti: usa lo SRD per la porzione pubblica e mantieni privato quanto necessario.

## Contenuti

- `prototype.html` — UI completa (home, classi, incantesimi, mostri, dettaglio classe, creazione personaggio in `localStorage`).
- `data_inject.js` — dataset iniziale (incantesimi/mostri; edizione da verificare).
- `class_data.js` — dati classi XPHB 2024.
- `assets/classes/*.webp` — artwork classi.
- `scripts/Update-5etools.ps1` — updater per una copia locale completa di 5e.tools (vedi sotto).

## Copia locale completa (facoltativa)

Per avere il **mirror completo** di 5e.tools sul PC (aggiornamento manuale):

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\Update-5etools.ps1
```

Poi avvia con `npm run serve:dev` dentro `~/5etools-src` e apri http://localhost:5050/index.html. Genera la cache offline con `-BuildServiceWorker`; salta le immagini con `-SkipImages`. Dettagli in `scripts/Update-5etools.ps1`.

## Sviluppo e test

```bash
python3 -m unittest discover -s tests -v
git add -A && git commit -m "..."
git push origin main   # Pages ripubblica automaticamente da main
```
