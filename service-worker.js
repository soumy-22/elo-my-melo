self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately after install
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

  // Use custom Flip 7 data as fallback if no valid payload
  const options = {
    body: data.body || "The design and build is pretty good in my opinion. The default sound signature is a little too bright for my taste, it can cause irritation when listening to some particularly bright songs that have high-frequency instruments. So, if you are going to use the default sound signature",
    image: data.image || "https://elomymelo.com/images/samsung-akg-main.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/samsung-akg-type-c-earphones-review.html" }
  };

  // Trigger update and show notification
  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "Samsung AKG Type-C Earphones review | needed to tweak with EQ",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
