const express = require("express");

const ruanganRoute = require("./router/daftar_ruangan");

const app = express();

const port = 3000;

const connectDB = require("./config/db");
const { connect } = require("mongoose");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(ruanganRoute);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
