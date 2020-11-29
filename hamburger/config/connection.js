// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

  var connection = mysql.createConnection({
    host: process.env.JAWSDB_HOST,
    port: process.env.JAWSDB_PORT,
    user: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASSW,
    database: JAWSDB_DB
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSW,
    // database: "burgers_db"
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