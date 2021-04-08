var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  var name = req.body.name;
  var email = req.body.emailAddress;

  res.send(`Submission Received from ${email.trim()}`);
});

module.exports = router;
