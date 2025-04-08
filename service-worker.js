
  // immediate install and take control 
  self.addEventListener('install', event => { event.waitUntil(self.skipWaiting()); });
  self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
  self.addEventListener('push', event => {
    let data = {};
    if (event.data) 
    {
      try {
        data = event.data.json(); // Try to parse encrypted payload
      } catch (e) {
        console.log('Failed to parse push data:', e);
      }
    }

    const options = {
    body: data.body || "From my passion and love for technology, I built this website to share my opinion with the world. My website is unique and special in its own way. You will get a clean, refined and modern user experience while visiting this website.",
    image: data.image || "https://elomymelo.com/docs-images/x4-vs-x3-main.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    requireInteraction: true, tag: Date.now().toString(), // unique 
    data: { url: data.url || "https://elomymelo.com" } };

    event.waitUntil(
    self.registration.showNotification(
    data.title || "Elo My Melo | Tech & Education",
    options )); }); // main noTi 

  self.addEventListener('notificationclick', event => { event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url)); });
  // end of simple service worker code 

