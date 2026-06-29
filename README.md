# Documentos Adorno

Módulo de auditoría de documentos firmados para Oficina (Claudia Adorno SRL).

## Quiénes acceden

- **Marisa Contreras** (`marisaisabel07@yahoo.com.ar`)
- **Analía Rivera** (`rivera.analia.leon@gmail.com`)
- **JP Simonelli** (`juanpsimonelli@gmail.com`) — admin

Allowlist hardcoded en la tabla `rrhh_es_admin_oficina()` de Postgres.

## Qué muestra

3 tabs:
- **Recibos de sueldo** (`rrhh_liquidacion`)
- **Vacaciones** (`rrhh_vacaciones_movimientos`)
- **Tesorería** (`tesoreria_movimientos`, egresos firmados)

Cada fila tiene un estado de firma. Al clickearla, si el documento está guardado abre el PDF en SharePoint Web (OneDrive del usuario office@claudiaadorno.onmicrosoft.com).

## Stack

- HTML estático single-page con vanilla JS
- Supabase JS SDK (UMD)
- GitHub Pages
- PWA installable

## Deploy

```powershell
cd C:\CRM_Adorno\documentos-adorno
.\deploy.ps1
```

URL: https://claudiaadornosrl-prog.github.io/documentos-adorno/
