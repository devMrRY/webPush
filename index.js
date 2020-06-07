const express = require("express"),
  webPush = require("web-push"),
  bodyParser = require("body-parser"),
  path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")));

// vapidKeys should be generated only once
const vapidKeys = webPush.generateVAPIDKeys();

const publicKey = vapidKeys.publicKey
const privateKey = vapidKeys.privateKey

webPush.setVapidDetails("mailto:http//:localhost:3000", publicKey, privateKey);

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  const payload = JSON.stringify({ title: "hi this is push text" });
  webPush.sendNotification(subscription, payload).catch((err) => {
    console.log("error : ", err);
  });
  res.send("notfication send");
});

app.listen(5000, () => {
  console.log("server is listening on 5000");
});
