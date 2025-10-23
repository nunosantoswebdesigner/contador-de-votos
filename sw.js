const CACHE_NAME = 'foz-votos-v2';
const urlsToCache = [
    '/',
    '/manifest.json',
    '/imagens/logo.png',
    '/imagens/ps.png',
    '/imagens/psd.png',
    '/imagens/mifa.png',
    '/imagens/cds.png',
    '/imagens/be.png',
    '/imagens/pcp.png',
    '/imagens/ad.png',
    '/imagens/chega.png',
    '/imagens/pt.svg',
    '/imagens/en.svg',
    // App Icons
    '/imagens/icons/android-icon-192x192.png',
    '/imagens/icons/apple-icon-180x180.png',
    '/imagens/icons/favicon-32x32.png',
    '/imagens/icons/favicon-16x16.png',
    '/imagens/icons/ms-icon-144x144.png'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retorna do cache se disponível, senão busca na rede
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Activate event - limpeza de caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});