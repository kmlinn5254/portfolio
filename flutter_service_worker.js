'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4d5a172d44db557fe6fec1a4beff1de8",
"version.json": "d47f405a8ec8ec10274d318882533828",
"splash/img/light-2x.png": "f060d3be9aafaf1f3ce89e2aa3735394",
"splash/img/dark-4x.png": "a4f263f40f75a943f1f9ab153b5ec6a6",
"splash/img/light-3x.png": "aef9ec81759e1fe26501b29d179b8e9a",
"splash/img/dark-3x.png": "aef9ec81759e1fe26501b29d179b8e9a",
"splash/img/light-4x.png": "a4f263f40f75a943f1f9ab153b5ec6a6",
"splash/img/dark-2x.png": "f060d3be9aafaf1f3ce89e2aa3735394",
"splash/img/dark-1x.png": "cdbe65527ee490db0c06da1029f9e572",
"splash/img/light-1x.png": "cdbe65527ee490db0c06da1029f9e572",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"favicon.ico": "ec03902c64ec34d75397001fcd302939",
"index.html": "1fe248aed3a6ef306fe0f331e5d52651",
"/": "1fe248aed3a6ef306fe0f331e5d52651",
"main.dart.js": "9339087b5afcb0dee4b3ac507fd3abee",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "b31c2e2990c64b70ceb12e13926afbc9",
"icons/Icon-maskable-192.png": "b31c2e2990c64b70ceb12e13926afbc9",
"icons/Icon-maskable-512.png": "22a2c1f89bfb60242ca1f6b1f184f074",
"icons/Icon-512.png": "22a2c1f89bfb60242ca1f6b1f184f074",
"manifest.json": "36d7d2e711772d2db20cdef6624ef569",
"assets/AssetManifest.json": "23ed5542ead6a5b06ee3b5b7e50a8ada",
"assets/NOTICES": "651d5431f6c1e7507014f8c4db176478",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/AssetManifest.bin.json": "6ceaa20881ebd2abe909dd6d846decd0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fe334bea50f942c93cc7eadb29c8b6e1",
"assets/fonts/MaterialIcons-Regular.otf": "b9dd810b4b5ea9fca3cca5aebdfe0bcd",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/abank.png": "5412d7ddb4e64aa56c0e605ead8f3351",
"assets/assets/images/school.png": "5317a9c2b7968acc4fd6d8b187f121e2",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/2c2p.png": "b8d613b6a8c390c37b987218d1b80707",
"assets/assets/images/splash.png": "1f39ed29251209d628a4996623b1b919",
"assets/assets/images/logo.jpg": "4f892cb2f0ab67fe939ea088fe2807a7",
"assets/assets/images/logo.png": "fcedc5fb926a834689ea34595064c78a",
"assets/assets/images/barcamp.png": "8eb716dc2a88e4b0c67e5e1870ede4cc",
"assets/assets/images/ucs.png": "70a4e9bbcba68530d6aace2766856ec7",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/favicon.png": "efb0b2a4e3c237ab10205178a5781830",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
