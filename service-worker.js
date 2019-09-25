/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5ad74dc78c353ac253f27c6185e0f63"
  },
  {
    "url": "assets/css/0.styles.4588f9ae.css",
    "revision": "9c063cd120247bb0a9d44b4b9d52d059"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.2930227b.js",
    "revision": "35954ade4f215e86c3a2ae8294ebb6e7"
  },
  {
    "url": "assets/js/11.30a1b527.js",
    "revision": "38600e33277f2a1a665855db29e9e87c"
  },
  {
    "url": "assets/js/12.1339bfd4.js",
    "revision": "722751467d665cc4a4be81823119e9d7"
  },
  {
    "url": "assets/js/13.6a79409e.js",
    "revision": "f69f9bc1d46ab2e33438f024844af097"
  },
  {
    "url": "assets/js/14.e71258d6.js",
    "revision": "e761d5482a9dac84dedf0e433673a152"
  },
  {
    "url": "assets/js/15.c1a93ac1.js",
    "revision": "f56a1a7b7a65fd5ba797b241306961f6"
  },
  {
    "url": "assets/js/16.0188492a.js",
    "revision": "11805cbf7db8f684af04b8355bd421c9"
  },
  {
    "url": "assets/js/17.f9c91a4c.js",
    "revision": "ccafeff76d8f8c65ac1f5244cab73822"
  },
  {
    "url": "assets/js/18.3d8f678e.js",
    "revision": "a9fd7baaa45aa643e8fca7977505c9ed"
  },
  {
    "url": "assets/js/19.e0453259.js",
    "revision": "ee7d5c606b0df765ffd09dfe22ef3a36"
  },
  {
    "url": "assets/js/2.78e0f349.js",
    "revision": "d94eb1567c8d70d18138816a5b34a466"
  },
  {
    "url": "assets/js/3.45c926dc.js",
    "revision": "bea30a1b4dee6f4951be8d16668dafe4"
  },
  {
    "url": "assets/js/4.14bc4fbf.js",
    "revision": "6a62009aa765804ce829d87da42db9b3"
  },
  {
    "url": "assets/js/5.9b493b68.js",
    "revision": "a8e10f63cfad6830599fcbec15f847bf"
  },
  {
    "url": "assets/js/6.dbd10c3e.js",
    "revision": "da0950d89b1cad46630971b5c00bd933"
  },
  {
    "url": "assets/js/7.1c253e80.js",
    "revision": "376700f089df850c2c2ac6be2353e10b"
  },
  {
    "url": "assets/js/8.faf3d138.js",
    "revision": "9f86aa4cfc1d93884ed3fc51814add87"
  },
  {
    "url": "assets/js/9.707287fe.js",
    "revision": "c961a72dd7150913e95bada20191b04f"
  },
  {
    "url": "assets/js/app.f0ac0883.js",
    "revision": "615a645db915ff9d5ad54f74127c0bae"
  },
  {
    "url": "config/index.html",
    "revision": "4f5e957ec47a6ed82dbaaf7c5f69545d"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f4950f2c4b3247cdb2e993ccc944db84"
  },
  {
    "url": "guide/assets.html",
    "revision": "175ad1fc437f52bcd2b5be91a7a9fd5f"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9f04662d2571a81a39cf013d65fc14a8"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "63172a66858acbbcd4cc5a5280f0925a"
  },
  {
    "url": "guide/deploy.html",
    "revision": "bd34b4fcb8acd0bfeba8d6b61d91c7ad"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "199179b9e32291013c50ea7797da47c3"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4c669ff94454319e64de7a94064c7bcb"
  },
  {
    "url": "guide/index.html",
    "revision": "1c69d11681a4be4290986de42924c5d8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "2ea277d4a86cb2ab4cb4129318cfd831"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "659d0fdf701551c9e38ff222d1b6ef9d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "3f8106a17d312a85fc67a5200e30ce84"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
