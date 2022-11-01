var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("./categories", (res, req) => {
  db.query("SELECT * FROM categories", (err, res) => {
    console.log(res);
  });
});

module.exports = router;
