'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b21739c255f65fbc6c6d9e7b74f98308",
"assets/AssetManifest.json": "2a3fef6db3010e4dce9ad42b6bdd4f09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c968ee7ef69a8f8cb8db7ee87f1e20f3",
"assets/images/airp.png": "ce512beb5de1469a2321e96c782c233c",
"assets/images/airp2.png": "88a7cc9b5138c2e20eca607b1ae8da68",
"assets/images/aksesuar.png": "ffe24113264a522753969e9984a1960c",
"assets/images/aksesuar2.png": "6d1371a654ea17167e507de12ba4d053",
"assets/images/aksesuarklavye.png": "8d59ec0bc65e003162a3c4b271e35858",
"assets/images/aksesuarklavye2.png": "effa589942f3ad2cac91c4e12dd74430",
"assets/images/aksesuarspeaker.png": "d5e68c7594afa390443c136e16971204",
"assets/images/aksesuarspeaker2.png": "1735ec52d95f3241438010dff7930e25",
"assets/images/applee.png": "afcee1b6925f3f1ba3f83347b4bdecd2",
"assets/images/bacer.png": "33ca166e0d76ee2dfeba325ee1ac006d",
"assets/images/bacer2.png": "6102eb37038fe699ea0cbcaf2a2bd6bb",
"assets/images/bapple.png": "75b930530626bc41d55cc7b4c174a9ee",
"assets/images/bapple2.png": "8272eaa9700b66b94018ce493883e688",
"assets/images/bhuawei.png": "d6c4e49463e4634ae7344d25ee61a110",
"assets/images/bhuawei2.png": "265ecbaf0739849dab9803083a87874c",
"assets/images/bmonster.png": "e4ac1b74b373534d2976372cb26b4369",
"assets/images/bmonster2.png": "b0e3198cfcf50284d84becf6cfe4388c",
"assets/images/samsung.png": "02d01d5f30bd5171e619c1042081f007",
"assets/images/tabapple.png": "14232b9a4d87f6590e25ab6ead5f9e54",
"assets/images/tabapple2.png": "14dd07b2358c6643215c26312a5df911",
"assets/images/tabhuawei.png": "93efec4562cd6433cad0934551f53bce",
"assets/images/tabhuawei2.png": "a3e4192cfda3fa928754c0c7f953b2df",
"assets/images/tablet.png": "4939187b2f92b5bd68fab3f18351d259",
"assets/images/tabsamsung.png": "c8c34f7fc73c2cf67497bd61bcb91d2e",
"assets/images/tabsamsung2.png": "49b88aa41351c0cb8315ac4d7d8dc1d5",
"assets/images/tabxiaomi.png": "ec8596f6b60acb834c7affc1c262cb12",
"assets/images/tabxiaomi2.png": "55f96d8e92105637a55f5adfbd9a960f",
"assets/images/tapple.jpg": "9ee697c056870c7c0a6ce5ce7ef479c0",
"assets/images/tapple.png": "655bb4ec90c27adf20e6be562dcc374a",
"assets/images/tapple2.png": "076b832827e1989fa4eafae4bf93b74a",
"assets/images/toppo.png": "12c6496ac43bcc00199a094bfe7351c4",
"assets/images/toppo2.png": "130c1df32e97e959f84613efb8b0ae08",
"assets/images/tsamsung.png": "4c21827930f920110579939ae39986dd",
"assets/images/tsamsung2.png": "87ddabfb07b0b532f92eadc3ab14080b",
"assets/images/tvarcelik.png": "06748f8d7c02a737b419e95167832cb0",
"assets/images/tvarcelik2.png": "8427f6879e45e3e0d89ce2e8a9d1aaca",
"assets/images/tvlg.png": "f3533fdc2b76413923a18e30faf1c90f",
"assets/images/tvlg2.png": "8c1931cd338c23258dad695324f8238e",
"assets/images/tvphilip.png": "c86e487ca05ce3b963225fe12a652dbe",
"assets/images/tvphilip2.png": "43d7a76e68bc287cdeaae60db71810ad",
"assets/images/tvsamsung.png": "11f5b74225cf98a226bf103b16914faf",
"assets/images/tvsamsung2.png": "68920394d8cb7b6f00aaa3f6fd350a80",
"assets/images/txaomi.png": "5deacdcf6645191d2459fa978cb5f64f",
"assets/images/txaomi2.png": "f4b453079769c8fd22b4b9a26caed67a",
"assets/NOTICES": "552547d6b7a49ed2c176ee2fbc73a837",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b95ace87609e9ab788c0dee615242676",
"/": "b95ace87609e9ab788c0dee615242676",
"main.dart.js": "a1211012bd416600263beda7645bd193",
"manifest.json": "3ffd0eb1c219c58ad473c11346ee7ef8",
"version.json": "9afe24c16352eb1de24f6df78d304104"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
