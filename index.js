const express = require("express");
const app = express();

const port = 8000;

const path = require("path");

const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App listening on port : ${port}`);
});
