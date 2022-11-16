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
  const username = req.body.username;
  
  //Hardcored username for now
 // const username = "Lyubima";
 const result = db.query("select 1 from userprofiles where username = ?", username);

 if(!result) {
  db.query(
    "INSERT INTO userprofiles (username, firstname, lastname , address, city, country, categoryId) VALUES  (? ,?, ?, ? ,?, ?, ?)",
    [username,firstname, lastname, address, city, country, categoryId]   
  );
 } else {
   db.query("UPDATE userprofiles SET firstname = ?,  lastname = ?, address = ?,  city = ?, country = ?, categoryId = ? where username = ?",
   [firstname, lastname, address, city, country, categoryId, username])
 }
 
});

module.exports = router;
