var connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
//Under the `orm` object, we are defining all of our MySQL queries
var orm = {
    //selectAll will simply display all of our data. This will be called by default when the page is opened
    selectAll: function (table, callB) {
        //This string establishes the MySQL query for this function.
        var queryString = "SELECT * FROM " + table + ";";
        //Now that our queryString is defined, we send it to our database connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callB(result);
        });
    },
    //createOne is a predefined query that inserts a new element into our database.
    createOne: function (table, cols, vals, callB) {
        var queryString = "INSERT INTO " + table;
        //These lines are to simplify our queryString for readability and further editing purposes, as necessary.
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        //Once our queryString is defined, we send it to our database connection
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            callB(result);
        });
    },
    //updateOne changes a defined value of an row in our database, enabling it to be represented differently on the front end.
    updateOne: function (table, condition, callB) {
        var queryString = "UPDATE " + table;
        //These lines are to simplify our queryString for readability and further editing purposes, as necessary.
        queryString += " SET ";
        queryString += "devoured = 1";
        queryString += " WHERE ";
        queryString += condition;
        //Once our queryString is defined, we send it to our database connection
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            callB(result);
        });
    },
}
//Exports the orm object for burger.js
module.exports = orm;