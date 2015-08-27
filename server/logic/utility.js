var obj = require("../models/objects.js");

var list = new obj.ShoppingList("Sprouts");
var pb = new obj.Item("Peanut Butter", "staple");
var jelly = new obj.Item("Jelly", "staple");
var carrots = new obj.Item("Carrots", "produce")
list.addItem(pb);
list.addItem(jelly);
list.addItem(carrots);



function handlePost(itemName, itemCategory){
  newItem = new obj.Item(itemName, itemCategory)
  return list.addItem(newItem);
};
function handleDelete(id){
  return list.removeItem(parseInt(id));
};

function handleGet(){
  return list.getItems();
};

module.exports = {
  list: list,
  handleGet: handleGet,
  handleDelete: handleDelete,
  handlePost: handlePost
}