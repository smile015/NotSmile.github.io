// sw.js
self.addEventListener("install", () => {
  console.log("Service Worker installed.");
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated.");
});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.text() : "Smile reminder!";
  event.waitUntil(
    self.registration.showNotification("Smile 🦊", {
      body: data,
      icon: "logo.png",
    })
  );
});
