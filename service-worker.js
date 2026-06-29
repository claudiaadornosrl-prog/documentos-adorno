// ═══════════════════════════════════════════════════════════════════════
// Documentos Adorno · Service Worker
// Estrategia: network-first (siempre intentar última versión)
// ═══════════════════════════════════════════════════════════════════════

const CACHE_VERSION = 'docs-v1-mvp';
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(CACHE_ASSETS))
      .catch(err => console.warn('[SW] addAll error:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Saltar Supabase / CDN
  if (
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('jsdelivr.net') ||
    url.hostname.includes('cdnjs.cloudflare.com') ||
    url.hostname.includes('sharepoint.com')
  ) {
    return;
  }

  // Navegación: network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(resp => {
          if (resp && resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_VERSION).then(c => c.put('./index.html', clone));
          }
          return resp;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Otros assets: cache-first
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        if (resp && resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
