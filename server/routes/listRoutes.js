var express = require('express');
var router = express.Router();
var ute = require("../logic/utility.js");

router.get("/", function(req, res){
  console.log("stuff")
  res.render("index");
});

router.get('/list', function(req, res, next) {
  ute.handleGet(function(data){
    res.json(data);
  });
});

router.post("/list", function(req, res){
  var response = ute.handlePost(req.body.name, req.body.category);
  console.log("Post: "+response)
  res.json(response)
});

router.delete("/list/:id", function(req, res){
  var response = ute.handleDelete(req.params.id);
  res.json(response)
});



module.exports = router;
