
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

  // Handle notification click
  self.addEventListener('notificationclick', event => {
  event.notification.close(); event.waitUntil(clients.openWindow(event.notification.data.url));

  const notificationData = event.notification.data || {};
  const baseUrl = notificationData.url || "https://elomymelo.com";
  const timestamp = new Date().toISOString();

  // Send to Apps Script using FormData
  const formData = new FormData(); formData.append('timestamp', timestamp || '');
  formData.append('notificationurl', baseUrl || '');

  event.waitUntil(fetch('https://script.google.com/macros/s/AKfycbz5_cu4YWF1G4Vq3Q0iYHYEHEVBmK7nlUrME_VEcx-Yi1t_9TUIIYsLclGf96erbV2jIg/exec', {
  method: 'POST', body: formData, }).catch(error => { console.error('Failed to send tracking data:', error);
  throw error; })); }); // end of service worker

