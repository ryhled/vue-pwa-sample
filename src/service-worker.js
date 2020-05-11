/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
if (workbox) {
  console.info('[ServiceWorker] Workbox available, initializing..');
  workbox.setConfig({
    debug: true,
  });
  console.log(JSON.stringify(self.__precacheManifest));
  // apply precaching. In the built version, the precacheManifest will
  // be imported using importScripts (as is workbox itself) and we can
  // precache this. This is all we need for precaching
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // Set default navigationroute for offline-handling of routes
  // https://developers.google.com/web/tools/workbox/modules/workbox-routing#how_to_register_a_navigation_route
  workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('index.html'));

  // Image cache strategy
  workbox.routing.registerRoute(
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
          new workbox.broadcastUpdate.Plugin(),
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    ),
  );

  // API cache strategy
  workbox.routing.registerRoute(
    workbox.routing.registerRoute(
      new RegExp('https://vue-pwa-samples-db.herokuapp.com'),
      new workbox.strategies.StaleWhileRevalidate({
        // networkfirst alt
        cacheName: 'api',
        plugins: [
          // https://developers.google.com/web/tools/workbox/modules/workbox-broadcast-update
          new workbox.broadcastUpdate.Plugin(),
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    ),
  );
} else {
  console.warn('[ServiceWorker] Workbox not available, aborting..');
}
