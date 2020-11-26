// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,//"localhost"
  port: process.env.DB_PORT,//3306,
  user: proces.env.DB_USER,//"root",
  password: process.env.DB_PASS,//"Oakmage228!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
