param(
    [string]$InstallRoot = (Join-Path $HOME '5etools-src'),
    [switch]$SkipImages,
    [switch]$BuildServiceWorker
)

$ErrorActionPreference = 'Stop'
$SiteUrl = 'https://github.com/5etools-mirror-3/5etools-src.git'
$ImagesUrl = 'https://github.com/5etools-mirror-3/5etools-img.git'
$ImagesPath = Join-Path $InstallRoot 'img'

function Require-Command([string]$Name, [string]$InstallHint) {
    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "$Name non trovato. $InstallHint"
    }
}

Require-Command 'git' 'Installa Git for Windows e riapri PowerShell.'
Require-Command 'node' 'Installa Node.js LTS e riapri PowerShell.'
Require-Command 'npm' 'Verifica che npm sia incluso nel PATH di Node.js.'

if (-not (Test-Path $InstallRoot)) {
    Write-Host "Clone del sito 5e.tools in $InstallRoot"
    git clone $SiteUrl $InstallRoot
    if ($LASTEXITCODE -ne 0) { throw 'Clone del repository sito fallito.' }
} else {
    if (-not (Test-Path (Join-Path $InstallRoot '.git'))) {
        throw "La cartella esiste ma non è un clone Git: $InstallRoot"
    }
    $dirty = git -C $InstallRoot status --porcelain
    if ($LASTEXITCODE -ne 0) { throw 'Impossibile controllare lo stato del clone.' }
    if ($dirty) {
        Write-Host $dirty
        throw 'Il clone contiene modifiche locali. Salvale o scartale prima dell’aggiornamento; lo script non le sovrascrive.'
    }
    Write-Host 'Aggiornamento del sito (solo fast-forward).'
    git -C $InstallRoot pull --ff-only
    if ($LASTEXITCODE -ne 0) { throw 'git pull del sito fallito; nessuna modifica locale sovrascritta.' }
}

if (-not $SkipImages) {
    if (-not (Test-Path $ImagesPath)) {
        Write-Host "Clone delle immagini in $ImagesPath (download grande, può richiedere tempo e spazio)."
        git clone $ImagesUrl $ImagesPath
        if ($LASTEXITCODE -ne 0) { throw 'Clone del repository immagini fallito.' }
    } else {
        if (-not (Test-Path (Join-Path $ImagesPath '.git'))) {
            throw "La cartella immagini esiste ma non è un clone Git: $ImagesPath"
        }
        $imageDirty = git -C $ImagesPath status --porcelain
        if ($LASTEXITCODE -ne 0) { throw 'Impossibile controllare lo stato del clone immagini.' }
        if ($imageDirty) {
            Write-Host $imageDirty
            throw 'Il clone immagini contiene modifiche locali. Risolvi prima; lo script non le sovrascrive.'
        }
        Write-Host 'Aggiornamento immagini (solo fast-forward).'
        git -C $ImagesPath pull --ff-only
        if ($LASTEXITCODE -ne 0) { throw 'git pull delle immagini fallito.' }
    }
}

Push-Location $InstallRoot
try {
    Write-Host 'Installazione/aggiornamento dipendenze npm.'
    npm install
    if ($LASTEXITCODE -ne 0) { throw 'npm install fallito.' }

    if ($BuildServiceWorker) {
        Write-Host 'Build del service worker per la cache offline.'
        npm run build:sw:prod
        if ($LASTEXITCODE -ne 0) { throw 'Build service worker fallita.' }
    }
} finally {
    Pop-Location
}

Write-Host ''
Write-Host "Aggiornamento completato: $InstallRoot"
Write-Host 'Per avviare localmente:'
Write-Host "  Set-Location `"$InstallRoot`""
Write-Host '  npm run serve:dev'
Write-Host 'Poi apri http://localhost:5050/index.html. Tieni la finestra del server aperta.'
