const functions = require("firebase-functions");
const express = require("express");
const wiki = require("./bad-method");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();
const app = express();

app.use(express.static("wikipedia-template"));


app.get("/page/:pageTitle", async (req, res) => {
  const title = req.params["pageTitle"];

  const page = await db.collection("Pages").doc(title).get();
  const pageData = page.data();

  console.log(pageData);

  res.send(wiki.wikiFormat(pageData["title"], pageData["body"]));
});


app.get("/api", async (req, res) => {
  const snapshot = await db.collection("Pages").get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
  res.json({ snapshot });
});


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

exports.app = functions.https.onRequest(app);
