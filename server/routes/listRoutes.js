var express = require('express');
var router = express.Router();
var ute = require("../logic/utility.js");

router.get("/", function(req, res){
  res.render("index");
});

router.get('/list', function(req, res, next) {
  ute.handleGet(function(data){
    res.json(data);
  });
});

router.post("/list", function(req, res){
  var response = ute.handlePost(req.body.name, req.body.category);
  // response.message = "Success!"; -- this has no effect
  console.log("Post: "+response)
  res.json(response)
});

router.put("/list/:id", function(req, res){
  var query = {"_id": req.params.id};
  var update = {category: req.body.category}
  var option = {new: true};
  Item.findOneAndUpdate(query, update, option, function(err, item){
    if (err) throw err;
    return res.json(item);
  });
});


router.delete("/list/:id", function(req, res){
  var response = ute.handleDelete(req.params.id);
  console.log(response)
  res.json(response)
});

module.exports = router;
