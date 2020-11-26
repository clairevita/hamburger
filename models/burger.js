const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callB){
        orm.selectAll("burgers", function(results){
            callB(results);
        });
    },
    createOne: function(cols, vals, callB){
        orm.createOne("burgers", cols, vals, function(results){
            callB(results);
        });
    },
    updateOne: function(objColVals, condition, callB){
        orm.updateOne("burgers", objColVals, condition, function(results){
            callB(results);
        });
    }
}

module.exports = burger;