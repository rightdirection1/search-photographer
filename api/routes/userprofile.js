var express = require("express");
var router = express.Router();
var db = require("../db");

router.post("/userprofile", (req, res) => {
  console.log(req);

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;
  const categoryId = req.body.categoryId; 
  
  //Hardcored username for now
 // const username = "Lyubima";

  db.query(
    "INSERT INTO userprofiles (firstname, lastname , address, city, country, categoryId) VALUES  (?, ?, ? ,?, ?, ?)",
    [firstname, lastname, address, city, country, categoryId]   
  );
});

module.exports = router;
