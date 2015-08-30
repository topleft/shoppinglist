var Item = require("../database.js");


function handlePost(itemName, itemCategory){
  newItem = new Item({name: itemName, category: itemCategory})

  newItem.save(function(err) {
    if (err) throw err;

    console.log('Item created!');
    });

  return newItem;
};

// before this works, need to access id's (mongo generated)
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
  handleGet: handleGet,
  handleDelete: handleDelete,
  handlePost: handlePost
}