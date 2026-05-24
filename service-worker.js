const VERSION = 'BUILD_TIME_PLACEHOLDER';
const CACHE_NAME = 'ingress-tools-cache-v' + VERSION;

// 核心资产：包含你列出的核心文件
const ESSENTIAL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './rangecalc.html',
  './rangecalc.js',
  './style.css',
  ].concat(offlineURL),
  installFilesDesirable = [
    'manolo-mono.ttf'
  ];

// 1. 安装阶段
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ESSENTIAL_FILES.map((url) =>
          cache.add(url).catch((err) => console.warn('Precache failed:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// 2. 激活阶段：自动清理过期缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. 运行时策略：StaleWhileRevalidate
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      }).catch(() => { });
      const cachedResponse = await cache.match(event.request);
      return cachedResponse || fetchPromise;
    })
  );
});