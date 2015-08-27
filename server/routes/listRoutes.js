var express = require('express');
var router = express.Router();
var obj = require("../models/objects.js");

var sprouts = new obj.ShoppingList("Sprouts");
var pb = new obj.Item("Peanut Butter", "staple");
var jelly = new obj.Item("Jelly", "staple");
var carrots = new obj.Item("Carrots", "produce")
sprouts.addItem(pb);
sprouts.addItem(jelly);
sprouts.addItem(carrots);


router.get('/list', function(req, res, next) {
  res.send(sprouts.items);
  res.render('index', { title: 'Express' });
});

module.exports = router;
