# Deploy a GitHub Pages — documentos-adorno
# Hace add + commit + push
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$ts = Get-Date -Format 'yyyy-MM-dd HH:mm'

Write-Host "`n→ git add..." -ForegroundColor Cyan
git add -A

Write-Host "→ git commit: deploy $ts" -ForegroundColor Cyan
git commit -m "deploy $ts" --allow-empty

Write-Host "→ git push..." -ForegroundColor Cyan
git push

Write-Host "`n✓ Deploy iniciado. GitHub Pages tarda 1-2 minutos en actualizar." -ForegroundColor Green
Write-Host "  URL: https://claudiaadornosrl-prog.github.io/documentos-adorno/" -ForegroundColor Yellow
