var express = require("express");
var router = express.Router();
var db = require('../db');
const bcrypt = require("bcrypt");
const validator = require("validator");



// REGISTER POST REQUEST
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email; 
  
  if(!email || !password) {
    throw Error('All fields must be filled');
   }
    
   if(!validator.isEmail(email)) {
     throw Error('Email is not valid');
   } 
  
   if(!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
   } 

   if(!validatir.isEmpty(username)) {
    throw Error("User name must be filled")
   }

 //Hashing the password
 // const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
  
  db.query(
    "INSERT INTO users (username, password, email) VALUES (?,?,?)",
    [username, password,email] 
  );
});

module.exports = router;
