var connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
var orm = {
    selectAll: function (table, callB) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callB(result);
        });
    },
    createOne: function (table, cols, vals, callB) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            callB(result);
        });
    },
    updateOne: function (table, condition, callB) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured = 1";
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            callB(result);
        });
    },
}
//Exports the orm object for burger.js
module.exports = orm;