var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/categories", (req, res) => {
 
// const name = req.body.name;
 //const description = req.body.description;

  db.query(
    "SELECT * FROM categories",(err, result) => {
      if (err) {
          console.log("There was an error in your query: " + err);
      }
      res.send(result);
      console.log("Query Executed Successfully");
      console.log(result)
    }
  );
});

module.exports = router;
