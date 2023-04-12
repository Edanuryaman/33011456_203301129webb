'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "075eadc96d8d4e6e498c307ce4721c26",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "77089072cb7dc5772056e8aa7a35bc50",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d34173279e2dac9f5478b6ef6ebd05d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b94d0414d0e98e2b0360302c5ac1a476",
".git/logs/refs/heads/main": "f6ae3ec8f55bdc9322f299110eb34b57",
".git/logs/refs/remotes/origin/main": "2dd87f93123aadd90138fb11fd9150dd",
".git/objects/07/0a25f200b932858101e512448659b96f12a079": "433339fa20039d7f56891ac52843f548",
".git/objects/13/e8e4854765e5556cac5c9092b6d1a4d032c9db": "c1dd8466c4777260f4352f7b8e312120",
".git/objects/14/2c9ee5db268c393e5f0548747aa0b2fe157e33": "52ba96fb4f523140c87e6099faa2dfdb",
".git/objects/1a/2a476687e8bdbdab97e93e6ff461d9a40aac05": "efbbaf3b205ce9631fcbeb623d19bf4f",
".git/objects/3a/2fa1cd95954135091c4fb03bfa51963711df3e": "ca63e4bedb88890d545d3e85613e7443",
".git/objects/4b/1c098fc451aa039979e323d7e88a88bca6506d": "bef61130fec31db57682cec6e213a6b2",
".git/objects/5c/59ba67860ad51db966d0abd30b0770ac6b6e08": "dd709bb2c0843eb071ee1f2072868003",
".git/objects/72/ce90f042b92b5872c3db5fbfa2a27110501388": "31100de2377c1c52ec230a112d10f85b",
".git/objects/86/dd331cd88139ec31127ecb0e13147bea38f0f9": "ba8bd3a92c6c32a94aeca417d52eb204",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7d8642070db235270c100b31ea0441b8ece273": "859e450415b6dbb9a94faf96791b893f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/0ecd47263f2a304bc4a3244e65ca06508d9769": "93873650ccfdd7e2cb2430dc5b92ff7d",
".git/objects/a9/f6ba28a922335a69424f6560f3f8d8d33769ca": "c05f24a5a63785b3ab64985d27666199",
".git/objects/af/6e4bf6cfe0a189dd9ac83e4333d81eb56465e7": "b3a256f9010aaa1fc043fdefedc6b048",
".git/objects/b0/e29e9e74900fc04427c2cad73a6cf457db55d4": "0c071baebc4a0415cff876d994e28fa6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a4118ff4cc25617575838e27680a985f5e67b0": "ac113ea3c25db782a9a8f55e7d3875ee",
".git/objects/c0/4544580f2f8d91689f2374abdd250727e9fdc3": "f1ef3c3331f425e85f3ac72510b666ef",
".git/objects/c1/7a52e2e9b3fd1186d995987861424cfc9a45ca": "30f025d43c508c42d2850cbe8a1bf9ca",
".git/objects/d3/b1258c0be867c0d1946122ee7ecbb5031a4ffe": "5d95a2ca67bc4fe594a10080db3d5f44",
".git/objects/d4/61eb1497fc373d7b7c51fefc6316c7b912b267": "67d955220368f1251f7db5b157b43520",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/ORIG_HEAD": "6720c7389424b1c3d3eaeccbf04e840f",
".git/refs/heads/main": "b8bc82edb1fb7b2a18a248f575b82e07",
".git/refs/remotes/origin/main": "b8bc82edb1fb7b2a18a248f575b82e07",
"assets/AssetManifest.json": "2a3fef6db3010e4dce9ad42b6bdd4f09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"assets/NOTICES": "5e794df9b8189d204159412d3aa51cba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e2ccb867f6585642a12a07b5f2b720c",
"/": "5e2ccb867f6585642a12a07b5f2b720c",
"main.dart.js": "229231e8131c47429c63295a37639105",
"manifest.json": "ee2516773397dee59d2c195d18eb69ab",
"version.json": "fa61c4d771d6c3244a7a24a6bc841025"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
