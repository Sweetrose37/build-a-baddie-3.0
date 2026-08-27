const CACHE = 'baddie-look-lab-v10';
const SHELL = ['./', './index.html', './styles.css', './js/app.js', './js/data.js', './js/catalog/data.js', './js/catalog/holidayData.js', './js/catalog/performanceData.js', './js/catalog/designData.js', './js/catalog/gameDayData.js', './manifest.webmanifest', './assets/images/studio-hero.png', './assets/images/app-icon-192.png', './assets/images/app-icon-512.png'];

self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html'))));
});
