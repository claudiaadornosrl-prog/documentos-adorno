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
    { icon: '🧭', titulo: 'La barra de arriba', desc: 'Es igual en todos los módulos: mismo lugar para cada cosa y el color de la moneda del módulo (el mismo del Hub).',
      pasos: ['A la izquierda, la moneda y el nombre del módulo. En la computadora, tocando el nombre (Documentos ▾) se abre la lista para pasar a otro módulo; al final de esa lista está «Volver al Hub».', 'Al lado van los apartados (Recibos de sueldo, Vacaciones, Recibos, Facturas, Depósitos): son íconos; al pasar el mouse aparece el nombre, y el apartado en el que estás queda marcado en blanco con su nombre.', 'En el celular: los apartados están adentro del botón ☰; a la vista queda 🏠 Hub (volver al Hub).', 'Para cerrar la sesión: volvé al Hub y tocá 👤 (arriba) → Salir; se cierra en todos los módulos. En los módulos no hay botón de Salir.', '¿Dudas? Preguntale a Clodi (el botón de abajo a la derecha): sabe todo lo que dice este manual.'] },
    {
      icon: '🔐', titulo: 'Entrar una sola vez',
      desc: 'La sesión se comparte entre todos los módulos del sistema.',
      pasos: [
        'En el Hub, con el ícono 👤 de arriba, ingresás con tu usuario y podés tildar "Confiar en esta computadora".',
        'Con eso tildado, entrás a todos los módulos de ese equipo sin volver a escribir la clave.',
        'Código del celular (doble factor): si sos admin o directora y lo activaste en el Hub (panel de sesión, "Código del celular al entrar"), en cada computadora te pide, después de la clave, el código de 6 números de la app de autenticación del celular (Google o Microsoft Authenticator), y después una vez cada 30 días. En el celular registrado con "Entrar con la cara en este equipo" no hace falta ni clave ni código: te pide la cara (o la huella) al abrir. Si cambiás o perdés el celular, avisale a JP para darlo de baja.',
        'En las computadoras de los locales, que usan varias personas, NO se tilda: cada módulo sigue pidiendo usuario y contraseña por separado.',
        'La sesión se cierra desde el Hub (👤 → Salir) y se cierra en todos los módulos. La computadora sigue marcada como de confianza hasta que lo apagues desde el Hub.',
      ],
    },
    {
      icon: '📋', titulo: 'Recibos de sueldo',
      desc: 'Control de las firmas de los recibos mensuales y SAC, local por local.',
      pasos: [
        '🔒 Esta pestaña tiene candado. En las computadoras de la oficina (administracion@ y claudiaadorno@) se ve el candado y el botón "Pedir permiso": ahí escribe su usuario y clave personal alguien con permiso para ver los recibos de todos (Marisa o un administrador), más el código del celular si esa cuenta lo tiene. Las cuentas de la oficina no sirven para autorizar, y Analía con su usuario tampoco.',
        'Sin el permiso no se ve nada de la pestaña: ni la lista, ni los filtros, ni el número de pendientes. Solo el candado.',
        'Con el permiso, los recibos se ven y se pueden controlar o rechazar por 8 horas. Arriba de la lista dice quién habilitó y hasta qué hora; "Cerrar" lo vuelve a trabar en el momento. Al recargar la página también se traba. No queda nada guardado en la computadora.',
        'Si entrás con tu propio usuario y ya tenés el permiso (Marisa o un administrador), no aparece el candado.',
        'Filtrás por año y período; cada fila muestra si el recibo ya volvió firmado (✓) o sigue pendiente.',
        'Los SAC aparecen como fila propia con la etiqueta violeta "SAC", con su firma y su control independientes del recibo mensual.',
        'El sistema procesa los escaneos solo, leyendo el código QR del recibo — si figura sin firma, el escaneo no llegó o el QR no se pudo leer.',
        '"Ver PDF" abre el recibo firmado archivado en OneDrive.',
        '↩ Rechazar firma (si un escaneo quedó mal): vuelve el recibo a "sin firma", le avisa a las encargadas del local y el PDF equivocado se BORRA del OneDrive y del archivero en unos minutos.',
        'No hay que hacer nada más: cuando el local mande el escaneo corregido entra solo, aunque el archivo se llame igual que el rechazado. Antes el documento se volvía a marcar como guardado con el PDF viejo — eso quedó arreglado el 16-sep.',
      ],
    },
    {
      icon: '🌴', titulo: 'Vacaciones',
      desc: 'Las notificaciones de vacaciones firmadas por cada colaboradora.',
      pasos: [
        'Misma lógica que los recibos: cada notificación debe volver firmada y escaneada.',
        'El QR del PDF identifica el documento automáticamente al procesarlo.',
        'Si rechazás una firma queda "↩ Rechazada" hasta que llegue el escaneo corregido, que se toma solo aunque se llame igual que el rechazado.',
      ],
    },
    {
      icon: '💵', titulo: 'Recibos de tesorería',
      desc: 'Recibos firmados de retiros de efectivo y egresos de caja de los locales.',
      pasos: [
        'Cada egreso de caja con respaldo "recibo" aparece acá con su estado de firma.',
        'Los escaneos entran por el mismo circuito de mail + QR que los recibos de sueldo.',
        'La columna Concepto es la categoría del movimiento en Tesorería (Retiro Juan Pablo, Retiro Claudia, Sueldos…).',
        'Una firma rechazada se ve como "↩ Rechazada" y sigue así hasta que llegue el escaneo corregido — el PDF viejo ya no la puede volver a marcar como firmada.',
      ],
    },
    {
      icon: '🧺', titulo: 'Facturas',
      desc: 'Facturas y tickets de los egresos de caja cargados con foto (sin firma).',
      pasos: [
        '"Ver factura" abre la foto que sacó el local al cargar el egreso.',
        'Controlá que el importe de la factura coincida con el egreso cargado.',
        'La columna de envío muestra si la factura ya viajó por mail a administración (va sola, cada hora).',
        '⚠ Observar: si algo está mal, marcalo con el triángulo y escribí el motivo — le llega el aviso al local para corregir; la fila queda en amarillo y se puede filtrar por Estado = Observadas. Si el problema es el archivo adjunto (PDF en blanco, foto equivocada, ilegible), al observar el sistema pregunta y, si aceptás, borra el archivo del OneDrive (papelera) y le pide al local que vuelva a adjuntarlo desde Tesorería. Si el archivo ya salió de SIN CONTABILIZAR pide confirmación extra porque puede haber un asiento que revisar. La observación se levanta con el tilde de al lado.',
        'La factura ya NO viaja por mail: el sistema la sube sola al OneDrive, a CONTABILIZAR / 1 - SIN CONTABILIZAR, con el código MOV en el nombre. Administración la contabiliza, la renombra (G PROVEEDOR FC 0001-00001234) y la archiva como siempre: el link del movimiento la sigue por su ID aunque cambie de nombre o carpeta. La columna Etapa muestra en qué carpeta está.',
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
        'El tilde ☑ se pone desde la cuenta de la oficina (administracion@ o claudiaadorno@) o un administrador — queda registrado quién y cuándo. Vale para vacaciones, recibos de tesorería, facturas y depósitos.',
        'Los recibos de sueldo y los SAC se controlan solo con el permiso de Marisa: con su usuario personal, o abriendo el candado de la pestaña Recibos.',
        'Si entrás con tu usuario personal (o con la cuenta de un local), la columna Control muestra el estado pero no se puede tocar: ✔ ya controlado, punto gris = falta controlar. Para controlar, usá la cuenta de la oficina.',
        'Solo el admin puede desmarcarlo.',
        'Todas las tablas tienen buscador y se ordenan tocando el encabezado de la columna.',
        'El número al lado de cada pestaña cuenta TODO lo que falta controlar, de cualquier año. La lista, en cambio, muestra solo lo que pasa los filtros (año, empleada o caja, estado, buscador).',
        'Si hay algo sin controlar que el filtro deja afuera (por ejemplo vacaciones del año que viene, que se firman antes), en la línea de totales aparece la pastilla amarilla "⚠ N sin controlar fuera del filtro · año". Tocándola se limpian los filtros y se va directo a ese año.',
      ],
    },
    {
      icon: '🏪', titulo: 'Desde el local (encargadas y cajeras)',
      desc: 'Las encargadas y cajeras entran con su usuario y ven SOLO los documentos de su local, sin poder modificarlos.',
      pasos: [
        'Al lado del título aparece el local (· Alcorta, · Unicenter, · Oficina). Solo se ven las pestañas Recibos de tesorería, Facturas y Depósitos.',
        'Las filas en AMARILLO son las observadas por Oficina: debajo de la descripción está el motivo y quién lo observó. Van siempre arriba de la lista.',
        'El número al lado de cada pestaña es la cantidad de documentos observados que hay que corregir. Si alguno no se ve por el filtro de año, aparece la pastilla amarilla "⚠ N observado(s) fuera del filtro": tocándola te lleva a ese año.',
        'En la columna Control: ✔ Oficina ya lo controló · punto gris = todavía no lo revisó · ⚠ observado (el motivo aparece al pasar el mouse).',
        'Para corregir un documento observado se vuelve a Tesorería (subir el archivo correcto o pedir a Oficina que lo anule). Desde acá no se cambia nada.',
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
  document.body.appendChild(ov);
  _manualLupa(ov);
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
    b.title = 'Manual';
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="lb">Manual</span>';
    b.onclick = () => abrirManual();
    nav.appendChild(b);
  }
})();

// ── 🔍 Lupa del manual (29-sep, pedido Contreras): busca por palabra, sin tildes ni mayúsculas.
//    Deja solo las secciones que la contienen, dentro de ellas los pasos que la contienen,
//    y resalta la palabra. Mismo bloque en todos los módulos (el de RRHH usa _mLupaFiltrar).
function _mLupaNorm(s){ return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function _mLupaMarcar(el, q){
  const nodos = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) nodos.push(w.currentNode);
  nodos.forEach(n => {
    const t = n.nodeValue; let norm = '', mapa = [];
    for (let i = 0; i < t.length; i++){ const c = _mLupaNorm(t[i]); for (let k = 0; k < c.length; k++){ norm += c[k]; mapa.push(i); } }
    let desde = 0, pos, frag = null, ult = 0;
    while (q && (pos = norm.indexOf(q, desde)) >= 0){
      frag = frag || document.createDocumentFragment();
      const a = mapa[pos], b = mapa[pos + q.length - 1] + 1;
      if (a > ult) frag.appendChild(document.createTextNode(t.slice(ult, a)));
      const m = document.createElement('mark'); m.textContent = t.slice(a, b);
      m.style.cssText = 'background:#fde047;color:inherit;padding:0 1px;border-radius:3px'; frag.appendChild(m);
      ult = b; desde = pos + q.length;
    }
    if (frag){ if (ult < t.length) frag.appendChild(document.createTextNode(t.slice(ult))); n.parentNode.replaceChild(frag, n); }
  });
}
function _mLupaFiltrar(cont, selSec, texto, info){
  if (!cont) return;
  const q = _mLupaNorm(String(texto || '').trim());
  let vistas = 0;
  cont.querySelectorAll(selSec).forEach(sec => {
    if (sec.dataset.mOrig == null) sec.dataset.mOrig = sec.innerHTML; else sec.innerHTML = sec.dataset.mOrig;
    if (!q){ sec.style.display = ''; return; }
    const lis = [...sec.querySelectorAll('li')];
    const enLis = lis.filter(li => _mLupaNorm(li.textContent).includes(q));
    const hay = _mLupaNorm(sec.textContent).includes(q);
    sec.style.display = hay ? '' : 'none';
    if (!hay) return;
    vistas++;
    if (enLis.length) lis.forEach(li => { if (!enLis.includes(li)) li.style.display = 'none'; });
    _mLupaMarcar(sec, q);
  });
  if (info) info.textContent = !q ? '' : vistas ? `${vistas} ${vistas === 1 ? 'sección' : 'secciones'} con «${String(texto).trim()}»` : `No encontré «${String(texto).trim()}» en el manual.`;
  const primera = q && cont.querySelector('mark');
  if (primera) primera.scrollIntoView({block: 'center', behavior: 'smooth'});
}
function _manualLupa(ov){
  const head = ov && ov.querySelector('.m-head'); if (!head) return;
  head.style.flexWrap = 'wrap';
  const box = document.createElement('div');
  box.style.cssText = 'flex-basis:100%;display:flex;gap:8px;align-items:center;margin-top:8px';
  box.innerHTML = '<input type="search" placeholder="🔍 Buscar en el manual (por ej.: equivalencias, remito, echeq)…" '
    + 'style="flex:1;min-width:0;padding:8px 11px;border-radius:9px;border:none;font-size:14px;color:#0f172a;font-family:inherit">'
    + '<span class="m-lupa-info" style="font-size:12px;opacity:.9;white-space:nowrap"></span>';
  head.appendChild(box);
  const inp = box.querySelector('input'), info = box.querySelector('.m-lupa-info');
  let t = null;
  inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => _mLupaFiltrar(ov, '.m-sec', inp.value, info), 250); });
  inp.addEventListener('keydown', e => { if (e.key === 'Escape' && inp.value){ e.stopPropagation(); inp.value = ''; _mLupaFiltrar(ov, '.m-sec', '', info); } });
  setTimeout(() => inp.focus(), 50);
}
