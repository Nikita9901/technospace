const express = require("express");
const ctrlTelegram = require("./telegramMsg");
const createError = require("http-errors");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server is started on port ${PORT}`);
});

app.post("/telegram", ctrlTelegram.sendMsg);
