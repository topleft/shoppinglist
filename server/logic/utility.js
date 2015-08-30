var Item = require("../database.js");

// var list = new obj.ShoppingList("Sprouts");
// var pb = new obj.Item("Peanut Butter", "staple");
// var jelly = new obj.Item("Jelly", "staple");
// var carrots = new obj.Item("Carrots", "produce")
// list.addItem(pb);
// list.addItem(jelly);
// list.addItem(carrots);



function handlePost(itemName, itemCategory){
  newItem = new Item({name: itemName, category: itemCategory})

  newItem.save(function(err) {
    if (err) throw err;

    console.log('Item created!');
    });

  return newItem;
};

function handleDelete(id){
  return list.removeItem(parseInt(id));
};

function handleGet(cb){
  var itemsReturn = Item.find({}, function(err, items) {
  if (err) throw err;

  // object of all the users

  return cb(items);
});
};

module.exports = {
  // list: list,
  handleGet: handleGet,
  handleDelete: handleDelete,
  handlePost: handlePost
}