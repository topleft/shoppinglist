var express = require('express');
var router = express.Router();
var ute = require("../logic/utility.js");



router.get('/list', function(req, res, next) {
  var response = ute.handleGet();
  console.log(response)
  res.json(response);
  // res.render('index', { title: 'Express' });
});

router.post("/list", function(req, res){
  var response = ute.handlePost(req.body.item, req.body.category);
  res.json(response)
});

router.delete("/list/:id", function(req, res){
  var   response = ute.handleDelete(req.params.id);
  res.json(response)
});


// need to test these routes in the terminal with httpie

module.exports = router;
