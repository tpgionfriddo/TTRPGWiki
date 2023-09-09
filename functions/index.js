const functions = require("firebase-functions");
const express = require("express");
const app = express();
const wiki = require("./bad-method");

const cors = require("cors")({ origin: true });
app.use(cors);

app.use(express.static("wikipedia-template"));


app.get("/page/:pageTitle", (req, res) => {
  const title = req.params["pageTitle"];
  console.log(wiki);
  res.send(wiki.wikiFormat(title, `blah blah <br/> more stuff about ${title}`));
});

app.get("/api", (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.json({ bongs: "BONG ".repeat(hours) });
});


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

exports.app = functions.https.onRequest(app);
