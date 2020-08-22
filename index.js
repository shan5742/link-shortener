var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    type: function () {
      return true;
    },
  })
);
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(8888, () => {
  console.log("Server running on port 8888");
});

app.get("/", (req, res) => {
  res.json("hello world");
});

app.post("/post-test", (req, res) => {
  console.log("Input", JSON.stringify(req.body));
  res
    .status(200)
    .json({ status: 200, Output: Math.random().toString(36).substr(2, 5) });
});

// HTTP REDIRECTS

app.get("/old", (req, res) => {
  // Optional first param is http code, then redirect path
  // 301 indicates page has been permanently changed
  res.redirect(301, "https://www.google.com");
});

app.get("/new", (req, res) =>
  res.json("Hey you were sent here from somewhere else")
);
