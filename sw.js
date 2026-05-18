const CACHE_NAME = 'lingua-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
];

// Domains die immer direkt ans Netzwerk gehen (nie gecacht)
const NETWORK_ONLY = [
  'api.anthropic.com',
  'api-free.deepl.com',
  'api.deepl.com',
  'corsproxy.io',
  'cors-anywhere.herokuapp.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Externe API-Calls: immer direkt ans Netzwerk, nie cachen
  const isNetworkOnly = NETWORK_ONLY.some(domain => url.includes(domain));
  if (isNetworkOnly) {
    e.respondWith(
      fetch(e.request).catch(err => {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Lokale Assets: Cache first, dann Netzwerk
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
