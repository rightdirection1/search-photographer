var express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "photographers",
});

connection.connect((err) => {
  if (err) {
      console.log("There was an error connecting to the database: " + err);
  }
  console.log("Connected to the database");
})

module.exports = connection;