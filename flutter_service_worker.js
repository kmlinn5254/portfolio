'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "6a032ac45d1a1f2cd81ff474a84cf53b",
"/": "6a032ac45d1a1f2cd81ff474a84cf53b",
"flutter_bootstrap.js": "30819554244e212c22384c4fc1d8f696",
"favicon.ico": "ec03902c64ec34d75397001fcd302939",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "7cff4bafd0ddea05e8b091f85ec3871a",
"assets/NOTICES": "2b6ef495df6c281995bf0fe7ada3e78b",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/certs/cert_ios_completion.pdf": "88d72a558f1a01f83c2f08ce917f8fff",
"assets/assets/certs/cert_machine_learning.pdf": "03d782736b23133f435206cf89dc10c5",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/icons/favicon.png": "efb0b2a4e3c237ab10205178a5781830",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/apple.png": "a8a9065ff85af2f971c89243eaddaa28",
"assets/assets/icons/android.png": "f55eed8a42d531b33b80cbe05cf2f19f",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/images/coforge.png": "57b0262fa5b3fb650fbccf6801f28583",
"assets/assets/images/aplus_agent.png": "6cb70e24ae6a4de699d410d1ff3bc406",
"assets/assets/images/abank.png": "5f27aaa2de937e45b20c36b1a7f4763e",
"assets/assets/images/msp.png": "351166f499ed2d1750d57035aa963f6d",
"assets/assets/images/aplus_merchant.png": "722238df03d8337558baf1b502286f23",
"assets/assets/images/unidbox.png": "bc1b4455cb3abbe676b46564ec831922",
"assets/assets/images/school.png": "5317a9c2b7968acc4fd6d8b187f121e2",
"assets/assets/images/aplus_wallet.png": "9c21e68d3fa6cbf6f92bc826dc491cce",
"assets/assets/images/logo.png": "1b385b51d24091c2b17d97bf77b7b365",
"assets/assets/images/abank_app.png": "b1e8b706489bba4848178eb27bec8cc7",
"assets/assets/images/aplus_ekyc.png": "246d3c07bdb621f8a31190356a6ab96c",
"assets/assets/images/cover_photo.png": "6ad21c7e1f0bd9c89c9d2a129b1f6032",
"assets/assets/images/splash.png": "1f39ed29251209d628a4996623b1b919",
"assets/assets/images/2c2p.png": "dddda34198b70604373d10518cb65cf9",
"assets/assets/images/ucs.png": "70a4e9bbcba68530d6aace2766856ec7",
"assets/assets/images/nearme.png": "bfcf05974825323408fc61e7631a5734",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/logo.jpg": "e305f0b727a682068ad12ddb6f4927fa",
"assets/assets/images/barcamp.png": "8eb716dc2a88e4b0c67e5e1870ede4cc",
"assets/AssetManifest.bin": "17b81b6d51540d0823adaf949d13ec45",
"assets/AssetManifest.json": "856bf09fcd15b6fcc5306846ac889a82",
"assets/AssetManifest.bin.json": "a19e4271754af04c5078742ca118257e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "22a2c1f89bfb60242ca1f6b1f184f074",
"icons/Icon-maskable-512.png": "22a2c1f89bfb60242ca1f6b1f184f074",
"icons/Icon-192.png": "b31c2e2990c64b70ceb12e13926afbc9",
"icons/Icon-maskable-192.png": "b31c2e2990c64b70ceb12e13926afbc9",
"manifest.json": "36d7d2e711772d2db20cdef6624ef569",
"version.json": "d47f405a8ec8ec10274d318882533828",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-2x.png": "f060d3be9aafaf1f3ce89e2aa3735394",
"splash/img/light-1x.png": "cdbe65527ee490db0c06da1029f9e572",
"splash/img/dark-2x.png": "f060d3be9aafaf1f3ce89e2aa3735394",
"splash/img/dark-1x.png": "cdbe65527ee490db0c06da1029f9e572",
"splash/img/light-4x.png": "a4f263f40f75a943f1f9ab153b5ec6a6",
"splash/img/dark-3x.png": "aef9ec81759e1fe26501b29d179b8e9a",
"splash/img/dark-4x.png": "a4f263f40f75a943f1f9ab153b5ec6a6",
"splash/img/light-3x.png": "aef9ec81759e1fe26501b29d179b8e9a",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"main.dart.js": "d281901c6cbb96898f82eede2be037d3"};
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
