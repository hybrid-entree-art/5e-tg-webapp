# Compendio — installazione privata di 5e.tools

Questa repo non ospita più una Telegram Mini App. GitHub Pages è disattivato e il repository è privato.

Per usare **5e.tools completo (regole, dati e immagini) sul tuo PC**, lo script qui sotto scarica i due repository upstream direttamente sul computer. Non copia il corpus nel repository `hybrid-entree-art/5e-tg-webapp`: il mirror immagini è molto grande e il suo contenuto non è materiale che questo progetto possa rilicenziare o ripubblicare.

## Prima installazione o aggiornamento — Windows

Prerequisiti: Git, Node.js e npm installati.

Apri PowerShell nella cartella del repository e lancia:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\Update-5etools.ps1
```

La prima volta clona il sito completo in `C:\Users\<utente>\5etools-src` e le immagini in `5etools-src\img`. Le volte successive fa `git pull --ff-only` su entrambi, poi `npm install`.

Avvia il sito localmente:

```powershell
Set-Location "$HOME\5etools-src"
npm run serve:dev
```

Apri **http://localhost:5050/index.html**. Il server deve restare aperto mentre lo usi.

Aggiornamento ordinario: ripeti lo script PowerShell sopra, poi riavvia `npm run serve:dev`. Se hai modificato file del mirror localmente, lo script si ferma invece di sovrascrivere le modifiche.

## Immagini opzionali

Se vuoi evitare il download delle immagini, avvia così:

```powershell
.\scripts\Update-5etools.ps1 -SkipImages
```

Per ricostruire la cache offline/service worker, che è opzionale:

```powershell
.\scripts\Update-5etools.ps1 -BuildServiceWorker
```

## Edizioni

La repo configurata è `5etools-mirror-3/5etools-src`, cioè l’edizione corrente 2024/5.5e. Non mescolarla con il repository `5etools-2014-src`: teniamo la 2014 separata per un eventuale profilo/volume futuro.

## Nota su accesso e contenuti

`localhost` è accessibile solo dal tuo PC: non è un link Telegram né un servizio pubblico. La Mini App Telegram è stata fermata; Pages non pubblica più questa copia. I mirror 5e.tools dichiarano che il materiale è destinato alla consultazione per prodotti posseduti e rimandano alle leggi applicabili. Mantieni il download per il tuo uso privato e verifica i diritti prima di ridistribuire testo o immagini.

## Fonti

- Installazione e aggiornamenti: https://wiki.tercept.net/en/5eTools/InstallGuide
- Codice 5e.tools: https://github.com/5etools-mirror-3/5etools-src
- Immagini: https://github.com/5etools-mirror-3/5etools-img
