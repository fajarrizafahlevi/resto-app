import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', () => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
});
