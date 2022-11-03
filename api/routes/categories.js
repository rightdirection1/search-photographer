var express = require("express");
var router = express.Router();
var db = require("../db");

router.post("/categories", (req, res) => {
 
 const name = req.body.name;
 const description = req.body.description;

  db.query(
    "INSERT INTO categories (description,name) VALUES  (?,?)",
     [description, name]
  );

});

module.exports = router;
