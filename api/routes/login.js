var express = require("express");
const { DatabaseError } = require("../bin/exceptions");
var router = express.Router();
var db = require("../db");
const bcrypt = require("bcrypt");

// REGISTER POST REQUEST
router.post("/login", (req, res) => {
  console.log(req);
  //   const username = req.body.username;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      console.log(result);
      // throw new DatabaseError(err)

      // const doesPasswordMatch = bcrypt.compareSync(password, existingUser.hashedPassword);
      if (result) {
        res.send(result);
      } else {
        res.send("Message: Wrong username/password combination");
      }
    }
  );
});

module.exports = router;
