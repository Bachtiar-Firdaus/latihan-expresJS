const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.listen(port, () => {
  console.log(`Server Runing at http://${hostname}:${port}`);
});
