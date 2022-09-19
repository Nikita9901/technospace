const ctrlTelegram = require("./telegramMsg");
const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res) => {
//   return res.end(renderHTML());
// });
//
// const assetUrl =
//   process.env.NODE_ENV !== "production" ? "http://localhost:8050" : "/";
//
// function renderHTML() {
//   return `
//     <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Hello React</title>
//           <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
//       </head>
//       <body>
//         <div id="react-view"></div>
//         <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
//       </body>
//     </html>
//   `;
// }

app.use("/", express.static("./backend/public"));

app.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server is started on port ${port}`);
});

app.all("/telegram", ctrlTelegram.sendMsg);
