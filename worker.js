/**
 * LINGUA — DeepL Cloudflare Worker Proxy
 * =======================================
 * Löst das CORS-Problem beim direkten Browser-Zugriff auf die DeepL API.
 *
 * DEPLOYMENT (kostenlos, ~2 Minuten):
 * 1. https://dash.cloudflare.com → Workers & Pages → Create Worker
 * 2. Diesen Code einfügen
 * 3. DEEPL_KEY durch deinen Key ersetzen (oder als Secret speichern)
 * 4. Deploy → Worker-URL kopieren (z.B. https://lingua-deepl.DEINNAME.workers.dev)
 * 5. In LINGUA index.html: DEEPL_WORKER_URL auf die Worker-URL setzen
 *
 * SICHERHEIT:
 * - Der DeepL-Key bleibt auf dem Server — nie im Browser-Code sichtbar
 * - Optional: Rate-Limiting per IP einbauen
 * - Optional: Allowed-Origins einschränken (nur deine GitHub-Pages-URL)
 */

// ⬇ Deinen DeepL Key hier eintragen (oder als Cloudflare Secret):
const DEEPL_KEY = 'e5b8f6d1-e5ca-4481-a83f-a1762fe3f6d9:fx';

// Optional: Nur diese Origins erlauben (leer = alle erlaubt)
const ALLOWED_ORIGINS = [
  // 'https://reneprause.github.io',
  // 'http://localhost:3000',
];

export default {
  async fetch(request, env, ctx) {
    // CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(request),
      });
    }

    // Nur POST erlauben
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Origin prüfen (optional)
    const origin = request.headers.get('Origin') || '';
    if (ALLOWED_ORIGINS.length > 0 && !ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Origin not allowed', { status: 403 });
    }

    try {
      // Body von Client lesen
      const body = await request.json();

      // Validierung
      if (!body.text || !body.target_lang) {
        return new Response(JSON.stringify({ error: 'text und target_lang erforderlich' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
        });
      }

      // DeepL API aufrufen (Key bleibt serverseitig!)
      const deeplRes = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${DEEPL_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: Array.isArray(body.text) ? body.text : [body.text],
          target_lang: body.target_lang.toUpperCase(),
          source_lang: body.source_lang ? body.source_lang.toUpperCase() : undefined,
        }),
      });

      const data = await deeplRes.json();

      if (!deeplRes.ok) {
        return new Response(JSON.stringify({ error: data.message || 'DeepL Fehler', status: deeplRes.status }), {
          status: deeplRes.status,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
        });
      }

      // Erfolg — Ergebnis an Browser zurückgeben
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(request),
        },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
      });
    }
  },
};

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.length > 0 ? origin : '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}
