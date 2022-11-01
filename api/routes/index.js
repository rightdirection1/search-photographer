// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });


// // REGISTER POST REQUEST
// //router.post('/register', (req, res) => {
// // const username = req.body.username;
// // const password = req.body.password;
// // db.query("INSERT INTO users (username, password) VALUES (?,?)",[username,password])
// //})

// //GET REGISTERED USERS
// router.get("/login", (req, res,next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   db.query(
//     "SELECT * FROM users WHERE username = ? AND password = ?",
//     [username, password],
//     (error, res) => {
//       if (error) {
//         console.log(error);
//       } else {
//         if (result) {
//           res.send(result);
//         } else {
//           res.send("Not found users");
//         }
//       }
//     }
//   );
// });

// module.exports = router;
