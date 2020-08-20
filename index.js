var express = require("express");
var app = express();
app.listen(8888, () => {
  console.log("Server running on port 8888");
});

app.get("/", (req, res) => {
  res.json("hello world");
});
