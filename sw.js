const CACHE='financas-v1.2';
const ARQUIVOS=['./','./index.html','./manifest.json','./icone-192.png','./icone-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
/* rede primeiro (pra pegar versão nova); se estiver sem internet, usa o cache */
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return; // Firebase e fontes: deixa passar direto
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(k=>k.put(e.request,c));return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
