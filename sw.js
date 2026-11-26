const V="stp-scada-v1",A=["./","./index.html","./offline.html","./css/styles.css","./js/data.js","./js/app.js","./manifest.webmanifest","./favicon.svg","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(h=>{const n=fetch(e.request).then(r=>{if(r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>h||(e.request.mode==="navigate"?caches.match("./offline.html"):undefined));return h||n}))});
