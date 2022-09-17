const ctrlTelegram = require("./telegramMsg");
const express = require("express");
const port = process.env.PORT || 3001;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server is started on port 3001`);
});

app.all("/telegram", ctrlTelegram.sendMsg);
