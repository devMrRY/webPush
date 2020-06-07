console.log("Service worker loaded");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Received");
  self.registration.showNotification(data.title, {
    body: "notified by rahul",
    icon:
      "https://storage.googleapis.com/mbillbasket/images/userImages/1.png?1591465017852",
    image:'https://storage.googleapis.com/mbillbasket/images/userImages/1.png?1591465017852'
  });
});
