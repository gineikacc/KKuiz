var express = require("express");
var router = express.Router();

let users = [
  { name: "Aaron", age: 23, score: 1200 },
  { name: "Bob", age: 37, score: 420 },
  { name: "Sam", age: 25, score: 2150 },
  { name: "Ted", age: 55, score: 8888 },
];

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.get("/u/:user", function (req, res, next) {
  let user = users.find(
    (x) => x.name.toLowerCase() == req.params.user.toLowerCase()
  );
  if (user) {
    res.send(JSON.stringify({ user, exists: true }));
  } else {
    res.send("{exists:false}");
  }
});

router.get("/q/", function (req, res, next) {});
router.get("/q/:quiz", function (req, res, next) {});
router.get("/q/:quiz/:question", function (req, res, next) {});

module.exports = router;
