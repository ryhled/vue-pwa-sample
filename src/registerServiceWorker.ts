/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('[ServiceWorker] App is being served from cache by a service worker.');
    },
    registered() {
      console.log('[ServiceWorker] Service worker has been registered.');
    },
    cached() {
      console.log('[ServiceWorker] Content has been cached for offline use.');
    },
    updatefound() {
      console.log('[ServiceWorker] New content is downloading.');
    },
    updated() {
      console.log('[ServiceWorker] New content is available; please refresh.');
    },
    offline() {
      console.log('[ServiceWorker] No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('[ServiceWorker] Error during service worker registration:', error);
    },
  });
}
