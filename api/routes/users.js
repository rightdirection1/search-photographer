var express = require("express");
var router = express.Router();
var db = require("../db");

/* GET users listing. */
router.get("/users", function (req, res) {

// const firstResult  = `SELECT users.username, portfolios.description, photos.name, photos.description from users
  //  INNER JOIN portfolios
 //   ON users.username = portfolios.Id
 //   INNER JOIN photos
  // ON portfolios.Id = photos.Id`

  // getResultQuery(firstResult, res);

 const secondResult = `SELECT name ,users.username ,firstname, lastname, city, address, country from users 
INNER JOIN userprofiles ON users.username  = userprofiles.username
  INNER JOIN categories ON userprofiles.categoryId = categories.Id;`
   
   getResultQuery(secondResult, res);

});

const getResultQuery = (selectStatement, res) =>  { 
  db.query(
    selectStatement,
    (err, result) => {
      console.log(result);

      if (result) {
        res.send(result);
      } else {
        res.send("Message: Error");
      }
    }
  );
} 

module.exports = router;
