/**
 * Copyright (c) 2020-present Beng Tan
 */

const CACHE_PREFIX = 'main.'
//
const CACHE_VERSION = "20201225" + '.' + "f49b7a0"  // + '-1'
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION

const filesToCache = [
  './',
  '/favicon.ico',
  // 'index.html',
  'Loading_indicator.gif',
  'logo-192.png',
  'logo-192-maskable.png',
  'logo-192-opaque.png',
  'logo-512.png',
  'logo-512-maskable.png',
  'main.js',
  'dynamic.js',
  'vendors~dynamic.js',
  // 'main.js.map',
  'manifest.webmanifest',
  'rc-menu/index.css',
  'sql-wasm-debug.wasm',
  'style.css',
]

self.addEventListener('install', event => {
  // Cache required files
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(filesToCache)
    })
  )

  // Force service worker to change
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  // Delete old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.startsWith(CACHE_PREFIX) && cacheName != CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        // console.log(`Found ${event.request.url} in cache`)
        return response
      }

      // console.log(`Network fetch for ${event.request.url}`)
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request.url, response.clone())
          return response
        })
      })
    }).catch(e => {
      // Do nothing
    })
  )
})
