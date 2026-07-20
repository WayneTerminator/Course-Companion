const CACHE_NAME = "course-companion-v0-8-8";

const CORE_ASSETS = [
  "./manifest.json",
  "./assets/mashie-hero.jpg",
  "./assets/mashie-tile.jpg",
  "./assets/championship-hero.jpg",
  "./assets/championship-tile.jpg",
  "./assets/kokstad-hero.jpg",
  "./assets/kokstad-tile.jpg",
  "./assets/margate-hero.jpg",
  "./assets/margate-tile.jpg"
];

// Do not cache config.js. It contains local project-specific Supabase settings.

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).catch(() => null)
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith("/js/config.js")) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => null);
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
