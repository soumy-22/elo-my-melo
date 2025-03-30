
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting()); // Activate immediately after install
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // Take control of clients immediately
});

self.addEventListener('push', event => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json(); // Try to parse encrypted payload
    } catch (e) {
      console.log('Failed to parse push data:', e);
    }
  }

  const options = {
    body: data.body || "Xtreme 4's 68 Wh battery is the biggest upgrade vs smaller 36 Wh on the X3. Xtreme 3 sounds fuller with more upper bass at lower volumes, but the Xtreme 4 starts to sound fuller at higher volumes. At max volume, the X4 is around 1.5 dB louder on average loudness measurement. This is not a big difference but the X4 is a bit better and less screamy for moderate to higher level listening. I think you should not upgrade",
    image: data.image || "https://elomymelo.com/docs-images/x4-vs-x3-main.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/jbl-xtreme-4-vs-xtreme-3.html" },
    tag: Date.now().toString() // Unique tag for each noti 
  };

  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "JBL Xtreme 4 isn't worth upgrading from Xtreme 3",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

