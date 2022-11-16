var express = require("express");
const { DatabaseError } = require("../bin/exceptions");
var router = express.Router();
var db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 


const createToken = (id) => {
  jwt.sign({id: id}, process.env.SECRET);
}

router.post("/login", (req, res) => {
  console.log(req);
  //   const username = req.body.username;
  const username = req.body.username;
  const password = req.body.password;

 // const salt = bcrypt.genSalt(10);
 // const hash = bcrypt.hash(password, salt); 
  


  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      console.log(result);
      // throw new DatabaseError(err)
      
      // const doesPasswordMatch = bcrypt.compare(password, result.data.password);
      //if the password match sending back the client JWT

      if (result) {
        //TODO: should pass jwt 

        res.send(result);
      } else {
        res.send("Message: Wrong username/password combination");
      }
    }
  );
});

module.exports = router;
