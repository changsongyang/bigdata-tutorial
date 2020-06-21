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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d796842e0526b9fdd12704fbac91c336"
  },
  {
    "url": "assets/css/0.styles.9b6772c9.css",
    "revision": "7690a297af4162c4e92a5c3dd5ea951c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a748ca2a.js",
    "revision": "6df765fab7fa09a8a220c4a377290784"
  },
  {
    "url": "assets/js/11.08025590.js",
    "revision": "61ec9bb2fddc8d15f84f161b8916fd33"
  },
  {
    "url": "assets/js/12.08b453a9.js",
    "revision": "34325b4b62e53c18f135bfc5abc92fa3"
  },
  {
    "url": "assets/js/13.070c7341.js",
    "revision": "9bc613f966c6be4c7028575320392bf8"
  },
  {
    "url": "assets/js/14.f9ba6e81.js",
    "revision": "4df8318853629c1e675f25b44fac4a8b"
  },
  {
    "url": "assets/js/15.92fa8d15.js",
    "revision": "b600e8462394de3cded30bf9e26edf32"
  },
  {
    "url": "assets/js/16.fd1e85cb.js",
    "revision": "da536470c06eceba730740a72b152a11"
  },
  {
    "url": "assets/js/17.4240ccc4.js",
    "revision": "027151b350e0c47ed5bbac2195a78575"
  },
  {
    "url": "assets/js/18.47724a3c.js",
    "revision": "48222fb1540a4e0e2a53933f0f6b6ec6"
  },
  {
    "url": "assets/js/19.893cd0e1.js",
    "revision": "8f5dc2c0799355c6e8eceb2ea31aa294"
  },
  {
    "url": "assets/js/20.0f9c85d2.js",
    "revision": "e17b1bc26d3c675c975da0b5f720c7ed"
  },
  {
    "url": "assets/js/21.acc7f149.js",
    "revision": "e90420ec83fcf396d2d0a9f838ce3b8f"
  },
  {
    "url": "assets/js/22.661a4c0a.js",
    "revision": "59934e0c7e9f45f8221fea8e37ad1214"
  },
  {
    "url": "assets/js/23.81ddc809.js",
    "revision": "13190468fdd42d3755a9e4abb0d8d9d0"
  },
  {
    "url": "assets/js/24.86cf02b7.js",
    "revision": "f682789917e3cd1b1ead6adf058b5223"
  },
  {
    "url": "assets/js/25.1a925ec5.js",
    "revision": "f17401ca7680bffec043d1db4ffa8643"
  },
  {
    "url": "assets/js/26.44a7e88b.js",
    "revision": "abf010b9523faee702014419feb6733c"
  },
  {
    "url": "assets/js/27.02160541.js",
    "revision": "e279eae924a2c994facabba0aad726f2"
  },
  {
    "url": "assets/js/28.f81d3aba.js",
    "revision": "66a8567ecd7c407007a33a7995fa66af"
  },
  {
    "url": "assets/js/29.dd6ef06f.js",
    "revision": "06a72d41cda5c96c084bec5c037bc038"
  },
  {
    "url": "assets/js/30.aee56094.js",
    "revision": "f70bcdaebc51c86c824c587bb0af74ca"
  },
  {
    "url": "assets/js/31.26f73262.js",
    "revision": "1d8879767fdd03a85795bf3ac0e4f37a"
  },
  {
    "url": "assets/js/32.dd0dc900.js",
    "revision": "a1f96c3ad660f5f5cee076736402d0a2"
  },
  {
    "url": "assets/js/33.8fc80a81.js",
    "revision": "1f22ed9947538092b680927fdd39e475"
  },
  {
    "url": "assets/js/34.f424894a.js",
    "revision": "abb929bd121d48c17b18b36b55c97a3e"
  },
  {
    "url": "assets/js/35.a543c369.js",
    "revision": "60a5589334e862f80eca5af30e3df2ff"
  },
  {
    "url": "assets/js/36.08dc5492.js",
    "revision": "34eea23b438d923a977b750d2ca2700e"
  },
  {
    "url": "assets/js/37.61962cdb.js",
    "revision": "706525e70f257d9d9324759b7dfdefc7"
  },
  {
    "url": "assets/js/38.d2e46a0b.js",
    "revision": "0943554057682f0b05e2361797045b23"
  },
  {
    "url": "assets/js/39.26d2a48b.js",
    "revision": "9ab95ab640f06a33577ac98c7b2ec8e1"
  },
  {
    "url": "assets/js/4.6e5a58a7.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.3636bb7c.js",
    "revision": "72aac07b01240adc1bf88030726a531f"
  },
  {
    "url": "assets/js/41.fe8dd60e.js",
    "revision": "a5c6b72b386009e0ddf1fc6695695d3b"
  },
  {
    "url": "assets/js/42.743425f8.js",
    "revision": "50f23a58cdbd51b423fe1e16b9d34ae6"
  },
  {
    "url": "assets/js/43.36518903.js",
    "revision": "35499fa1f42f60b2ddb43655704fdddd"
  },
  {
    "url": "assets/js/44.8b2dd2a5.js",
    "revision": "622ae4a89929c12444bcee629806a15e"
  },
  {
    "url": "assets/js/45.45d69930.js",
    "revision": "81a7c2583f2fdd7ec065e66443e69d22"
  },
  {
    "url": "assets/js/46.906a664e.js",
    "revision": "c20ecee6e4c392a06e673d5b0eb05a14"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/6.2aef4fc6.js",
    "revision": "f4791bfcef2cacfb7c8c07dfb7eb8270"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.23fa6b51.js",
    "revision": "1f7c17e041eb814290c449ecef658f81"
  },
  {
    "url": "assets/js/9.05e23495.js",
    "revision": "f76d6297ad58d76161a364534bb7bca4"
  },
  {
    "url": "assets/js/app.94411d1f.js",
    "revision": "9ea9ba112900588017c4e10dcaa5e384"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "bigdata-study.html",
    "revision": "1ee27bc735ee4f06c9342a97f68f6876"
  },
  {
    "url": "flink/flink.html",
    "revision": "f3ef01b89326b7d5d42df22c8f76d8d3"
  },
  {
    "url": "flume.html",
    "revision": "37b7327a2f771f7167670922b373ed55"
  },
  {
    "url": "hbase/hbase-api.html",
    "revision": "aad76fe8596d4854c3872639ff844fb3"
  },
  {
    "url": "hbase/hbase-cli.html",
    "revision": "73b4f7d71dc1ea67d1984dd8a4d5f5bb"
  },
  {
    "url": "hbase/hbase-ops.html",
    "revision": "862d83e4b441c391c3e0b2b279ef3e92"
  },
  {
    "url": "hbase/hbase-quickstart.html",
    "revision": "81cfc1b3553159dc56dcbd40c5887602"
  },
  {
    "url": "hbase/index.html",
    "revision": "7e4e30a789b2174fbb27a4aa216efa86"
  },
  {
    "url": "hdfs/hdfs-java-api.html",
    "revision": "f18c21194962a2991a4178b763d78338"
  },
  {
    "url": "hdfs/hdfs-ops.html",
    "revision": "d82fb8671757d4e71f4ce763b65564b0"
  },
  {
    "url": "hdfs/hdfs-quickstart.html",
    "revision": "d507f0acf9fff085a2252fa3ea2020f3"
  },
  {
    "url": "hdfs/index.html",
    "revision": "dd66436afb837dc23438b969eb314cd6"
  },
  {
    "url": "hive/hive-ddl.html",
    "revision": "d2565b53420e9bf2df1e95889b5fa131"
  },
  {
    "url": "hive/hive-dml.html",
    "revision": "41fbe693e07a26ed7109fd83b053a9f1"
  },
  {
    "url": "hive/hive-index-and-view.html",
    "revision": "811e164447fa1a1998a721c00d8b07b7"
  },
  {
    "url": "hive/hive-ops.html",
    "revision": "24916ef40b448ba50835c1c846879569"
  },
  {
    "url": "hive/hive-query.html",
    "revision": "4aade19135bc4bf9867b16a3f80e31ec"
  },
  {
    "url": "hive/hive-quickstart.html",
    "revision": "61f18827394d7618cf86d6efa5c44094"
  },
  {
    "url": "hive/hive-table.html",
    "revision": "d39169ae6a0938c45023c42e0096330f"
  },
  {
    "url": "hive/index.html",
    "revision": "7c92a7d5ab45b5e3e807e3b66871839e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "f72257239245fe57f841b3e3af42ca87"
  },
  {
    "url": "kafka/index.html",
    "revision": "deb2eefd2a3cb715d36c029d60fa50f6"
  },
  {
    "url": "kafka/kafka-advance.html",
    "revision": "c6a99829544aa1ef73e61e3f7437e5b1"
  },
  {
    "url": "kafka/kafka-basic.html",
    "revision": "7cf2fc10339fcfd1d1f27652667828d1"
  },
  {
    "url": "kafka/kafka-cluster.html",
    "revision": "5cb6445a371fb69c29709d6915032ff2"
  },
  {
    "url": "kafka/kafka-consumer.html",
    "revision": "d663378e0dbd18fc3d72d694f9701570"
  },
  {
    "url": "kafka/kafka-ops.html",
    "revision": "8cbe9ee421b6e407901b210d9e95109c"
  },
  {
    "url": "kafka/kafka-producer.html",
    "revision": "40bd405285a206b1545b8d9c2e71f042"
  },
  {
    "url": "kafka/kafka-reliable-transmission.html",
    "revision": "d2ee2146ca3a313a50e41ec37023333f"
  },
  {
    "url": "mapreduce/mapreduce.html",
    "revision": "f19f2fabe1f2ff530f7b3831baaf0888"
  },
  {
    "url": "overview.html",
    "revision": "efde72914e646cf007819466ffa364da"
  },
  {
    "url": "spark.html",
    "revision": "869973f59c615f55273182f708d81394"
  },
  {
    "url": "sqoop.html",
    "revision": "92cfa0220ca00a3b1008c86df74cf10c"
  },
  {
    "url": "yarn.html",
    "revision": "cbb679246f8abcba9c968a19839ab17b"
  },
  {
    "url": "zookeeper/index.html",
    "revision": "7b5374a51245746434569138c8577705"
  },
  {
    "url": "zookeeper/zookeeper-api.html",
    "revision": "a61a77a591098253617dc7cc5f766660"
  },
  {
    "url": "zookeeper/zookeeper-ops.html",
    "revision": "31c9fe2dba9914eb23e20b0d9f2358cd"
  },
  {
    "url": "zookeeper/zookeeper-quickstart.html",
    "revision": "3d3a28a9ee8188614d69fdf774e60ed0"
  }
].concat(self.__precacheManifest || []);
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
