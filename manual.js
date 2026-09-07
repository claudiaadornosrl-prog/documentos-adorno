// ═══════════════════════════════════════════════════════════════════════
//  Documentos Adorno · manual.js — Manual de uso (overlay 📖, autoinyectable)
//  🚨 REGLA: cada vez que se agrega o cambia una función del módulo,
//  actualizar la sección correspondiente acá (y bump del ?v= en index.html).
// ═══════════════════════════════════════════════════════════════════════

function _mEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function _manualSecciones() {
  return [
    {
      icon: '📋', titulo: 'Recibos de sueldo',
      desc: 'Control de las firmas de los recibos mensuales y SAC, local por local.',
      pasos: [
        'Filtrás por año y período; cada fila muestra si el recibo ya volvió firmado (✓) o sigue pendiente.',
        'Los SAC aparecen como fila propia con la etiqueta violeta "SAC", con su firma y su control independientes del recibo mensual.',
        'El sistema procesa los escaneos solo, leyendo el código QR del recibo — si figura sin firma, el escaneo no llegó o el QR no se pudo leer.',
        '"Ver PDF" abre el recibo firmado archivado en OneDrive.',
        '↩ Rechazar firma (si un escaneo quedó mal): vuelve el recibo a "sin firma", le avisa a las encargadas del local y el PDF equivocado se BORRA del OneDrive en unos minutos (así no vuelve a figurar como guardado). El escaneo nuevo entra normal.',
      ],
    },
    {
      icon: '🌴', titulo: 'Vacaciones',
      desc: 'Las notificaciones de vacaciones firmadas por cada colaboradora.',
      pasos: [
        'Misma lógica que los recibos: cada notificación debe volver firmada y escaneada.',
        'El QR del PDF identifica el documento automáticamente al procesarlo.',
      ],
    },
    {
      icon: '💵', titulo: 'Recibos de tesorería',
      desc: 'Recibos firmados de retiros de efectivo y egresos de caja de los locales.',
      pasos: [
        'Cada egreso de caja con respaldo "recibo" aparece acá con su estado de firma.',
        'Los escaneos entran por el mismo circuito de mail + QR que los recibos de sueldo.',
        'La columna Concepto es la categoría del movimiento en Tesorería (Retiro Juan Pablo, Retiro Claudia, Sueldos…).',
        'Una firma rechazada se ve como "↩ Rechazada" hasta que llega el escaneo nuevo.',
      ],
    },
    {
      icon: '🧺', titulo: 'Facturas',
      desc: 'Facturas y tickets de los egresos de caja cargados con foto (sin firma).',
      pasos: [
        '"Ver factura" abre la foto que sacó el local al cargar el egreso.',
        'Controlá que el importe de la factura coincida con el egreso cargado.',
        'La columna de envío muestra si la factura ya viajó por mail a administración (va sola, cada hora).',
        '⚠ Observar: si algo está mal, marcalo — le llega el aviso al local para corregir; al editar el movimiento la observación se levanta sola.',
        'La factura ya NO viaja por mail: el sistema la sube sola al OneDrive, a CONTABILIZAR / SIN CONTABILIZAR, con el código MOV en el nombre. Administración la contabiliza, la renombra (G PROVEEDOR FC 0001-00001234) y la archiva como siempre: el link del movimiento la sigue por su ID aunque cambie de nombre o carpeta. La columna Etapa muestra en qué carpeta está.',
        '🗑 Rechazar archivo (foto equivocada, ilegible): se borra del OneDrive (papelera) y le llega un aviso al local para volver a adjuntarlo desde Tesorería. Si el archivo ya salió de SIN CONTABILIZAR, pide confirmación extra porque puede haber un asiento que revisar.',
      ],
    },
    {
      icon: '🏦', titulo: 'Depósitos',
      desc: 'Depósitos bancarios cargados desde Tesorería con el comprobante adjunto.',
      pasos: [
        'Mismo funcionamiento que Facturas: "Ver comprobante" abre la foto, se controla con ☑ y se puede ⚠ observar.',
        'Es el tercer tipo de respaldo que se elige al cargar en Tesorería: recibo firmado / factura / depósito bancario.',
        'El comprobante se guarda solo en el OneDrive, en <año>/RECIBOS Y RETIROS LOCALES/<MES> (junto a los recibos de caja), y el link apunta a ese archivo.',
      ],
    },
    {
      icon: '☑', titulo: 'Columna Control (todas las pestañas)',
      desc: 'El tilde de "esto ya lo revisé" que comparte todo el equipo.',
      pasos: [
        'Cualquier usuaria puede marcar ☑ un documento como controlado — queda registrado quién y cuándo.',
        'Solo el admin puede desmarcarlo.',
        'Todas las tablas tienen buscador y se ordenan tocando el encabezado de la columna.',
      ],
    },
  ];
}

function abrirManual() {
  if (document.getElementById('manual-overlay')) return;
  const items = _manualSecciones();
  const ov = document.createElement('div');
  ov.id = 'manual-overlay';
  ov.innerHTML = `
    <div class="m-box">
      <div class="m-head">
        <span style="font-size:22px;">📖</span>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:16px;">Manual · Documentos</div>
          <div style="font-size:12px;opacity:.85;">Guía rápida de cada herramienta del módulo</div>
        </div>
        <button class="m-close" onclick="cerrarManual()">✕</button>
      </div>
      ${items.map((s, i) => `
        <div class="m-sec">
          <div class="m-tit">${s.icon} ${i + 1}. ${_mEsc(s.titulo)}</div>
          <div class="m-desc">${_mEsc(s.desc)}</div>
          <ul class="m-pasos">${s.pasos.map(p => `<li>${_mEsc(p)}</li>`).join('')}</ul>
        </div>`).join('')}
      <div class="m-foot">💡 Este manual se actualiza junto con el sistema. ¿Falta algo o no funciona? Avisale a JP.</div>
    </div>`;
  ov.addEventListener('click', e => { if (e.target === ov) cerrarManual(); });
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
}

function cerrarManual() {
  const ov = document.getElementById('manual-overlay');
  if (ov) ov.remove();
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarManual(); });

(function _manualInit() {
  const css = document.createElement('style');
  css.textContent = `
    #manual-overlay{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:flex;align-items:flex-start;justify-content:center;padding:20px 12px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    #manual-overlay .m-box{background:#f8fafc;border-radius:14px;max-width:760px;width:100%;padding-bottom:6px;box-shadow:0 20px 60px rgba(0,0,0,.3);}
    #manual-overlay .m-head{position:sticky;top:0;background:#6b21a8;color:#fff;padding:14px 18px;border-radius:14px 14px 0 0;display:flex;align-items:center;gap:10px;z-index:1;}
    #manual-overlay .m-close{background:rgba(255,255,255,.18);border:none;color:#fff;font-size:16px;border-radius:8px;padding:6px 11px;cursor:pointer;}
    #manual-overlay .m-sec{background:#fff;border:1px solid #e2e8f0;border-left:4px solid #6b21a8;border-radius:10px;margin:14px 14px 0;padding:14px 18px;}
    #manual-overlay .m-tit{font-weight:700;font-size:15px;margin-bottom:4px;color:#581c87;}
    #manual-overlay .m-desc{font-size:13px;color:#475569;margin-bottom:8px;}
    #manual-overlay .m-pasos{margin:0 0 2px 18px;padding:0;font-size:13px;line-height:1.65;color:#334155;}
    #manual-overlay .m-pasos li{margin-bottom:4px;}
    #manual-overlay .m-foot{margin:16px 14px 12px;background:#fef3c7;border-left:4px solid #d97706;border-radius:8px;padding:11px 14px;font-size:12.5px;color:#92400e;}`;
  document.head.appendChild(css);

  const nav = document.querySelector('nav.tabs');
  if (nav) {
    const b = document.createElement('button');
    b.textContent = '📖 Manual';
    b.onclick = () => abrirManual();
    nav.appendChild(b);
  }
})();
