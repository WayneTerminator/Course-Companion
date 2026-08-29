const CACHE_NAME = "course-companion-v0-9-8";

const CORE_ASSETS = [
  "./manifest.json",
  "./assets/mashie-hero.jpg",
  "./assets/mashie-tile.jpg",
  "./assets/championship-hero.jpg",
  "./assets/championship-tile.jpg",
  "./assets/kokstad-hero.jpg",
  "./assets/kokstad-tile.jpg",
  "./assets/margate-hero.jpg",
  "./assets/margate-tile.jpg",
  "./assets/mashie-hole-guide-1-v5.png",
  "./assets/mashie-hole-guide-2-v4.png",
  "./assets/mashie-hole-guide-3-v4.png",
  "./assets/mashie-hole-guide-4-v4.png",
  "./assets/mashie-hole-guide-5-v4.png",
  "./assets/mashie-hole-guide-6-v4.png",
  "./assets/mashie-hole-guide-7-v4.png",
  "./assets/mashie-hole-guide-8-v4.png",
  "./assets/mashie-hole-guide-9-v4.png"
,
  "./assets/gowrie-hole-guide-1-v1.png",
  "./assets/gowrie-hole-guide-2-v1.png",
  "./assets/gowrie-hole-guide-3-v1.png",
  "./assets/gowrie-hole-guide-4-v1.png",
  "./assets/gowrie-hole-guide-5-v1.png",
  "./assets/gowrie-hole-guide-6-v1.png",
  "./assets/gowrie-hole-guide-7-v1.png",
  "./assets/gowrie-hole-guide-8-v1.png",
  "./assets/gowrie-hole-guide-9-v1.png"
,
  "./assets/gowrie-hole-guide-10-v1.png",
  "./assets/gowrie-hole-guide-11-v1.png",
  "./assets/gowrie-hole-guide-12-v1.png",
  "./assets/gowrie-hole-guide-13-v1.png",
  "./assets/gowrie-hole-guide-14-v1.png",
  "./assets/gowrie-hole-guide-15-v1.png",
  "./assets/gowrie-hole-guide-16-v1.png",
  "./assets/gowrie-hole-guide-17-v1.png",
  "./assets/gowrie-hole-guide-18-v1.png"
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
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isCriticalAppFile =
    event.request.mode === "navigate" ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/js/app.js") ||
    url.pathname.endsWith("/js/config.js") ||
    url.pathname.endsWith("/css/style.css") ||
    url.pathname.endsWith("/service-worker.js") ||
    url.pathname.endsWith("/manifest.json");

  if (isSameOrigin && isCriticalAppFile) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .catch(() => caches.match(event.request))
    );
    return;
  }

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
