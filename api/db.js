var express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "photographers",
});

connection.connect();

module.exports = connection;