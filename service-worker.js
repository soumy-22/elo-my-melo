
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
    body: data.body || "This story compares the JBL Charge 6 and Flip 7 speakers! Explore their IP68 waterproof rating, powerful sound, 7-band EQ, and unique features like the Charge 6's power bank support and Flip 7's Auracast button. Find out which suits you best!",
    image: data.image || "https://elomymelo.com/story-images/jbl-charge-6vf7/charge-6vf7-01.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/web-stories/charge-6vf7-story.html" },
    tag: Date.now().toString() // Unique tag for each noti 
  };

  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "JBL Charge 6 vs Flip 7 | Comparing top 5 features",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

