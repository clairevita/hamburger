const orm = require("../config/orm.js");
//This burger object defines our orm routes in the `burgers_controller.js` script 
const burger = {
    //Here we define burger.selectAll to expect a call back function in order to render the main page.
    selectAll: function (callB) {
        orm.selectAll("burgers", function (results) {
            callB(results);
        });
    },
    //burger.createOne takes in columns, values, and a callback to complete the MySQL INSERT query.
    createOne: function (cols, vals, callB) {
        orm.createOne("burgers", cols, vals, function (results) {
            callB(results);
        });
    },
    //burger.updateOne takes in an object with column and value elements, a particular condition, and then a callback to complete MySQL UPDATE query.
    updateOne: function (objColVals, condition, callB) {
        orm.updateOne("burgers", objColVals, condition, function (results) {
            callB(results);
        });
    }
}

module.exports = burger;