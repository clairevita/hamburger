var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callB) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callB(result);
      });
    },
    createOne: function(table, cols, vals, callB) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          callB(result);
        });
      },
    updateOne: function(table, objColVals, condition, callB) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          
          callB(result);
        });
      },
}
//Exports the orm object for burger.js
module.exports = orm;