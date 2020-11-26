const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const hbObject = {
        burgers: data
      };
      console.log(hbObject);
      res.render("index", hbObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.createOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
  });

//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update(
//       {
//         sleepy: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
  
//       }
//     );
//   });

module.exports = router;