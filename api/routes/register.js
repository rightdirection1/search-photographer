var express = require("express");
var router = express.Router();
var db = require('../db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

// REGISTER POST REQUEST
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password; 
  
 //Hashing the password
 // const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

  
  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password] 
  );
});

module.exports = router;
