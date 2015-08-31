var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema(
  {
    name : String,
    category: String,
  }
);


var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

mongoose.connect('mongodb://localhost/node-shoppingList');
