const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const router = require("./app/router");
const initSession = require("./app/middleware/initSession");

const app = express();

app.use(initSession);
app.use((req, res, next) => {
  if (!req.session.deck) {
    req.session.deck = [];
  }
  next();
});

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
