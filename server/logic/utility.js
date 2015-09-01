var Item = require("../database.js");

// need to create success or error messages

function handlePost(itemName, itemCategory){
  newItem = new Item({name: itemName, category: itemCategory})
  newItem.save(function(err) {
    if (err) throw err;
    });
  return newItem;
};

function handlePut(id, newCategory, option, cb){
  Item.findOneAndUpdate(id, newCategory, option, function(err, item){
    if (err) throw err;
    return cb(item);
  });
}

// accepts a Number
function handleDelete(currentId){
  Item.remove({_id: currentId}, function(err){
    if(err) throw err;
  });
  return {message: "Item removed."};
};


// function handleGet(){
//   var items = Item.find({})
//   return items;
// };

// function handleGet(res){
//   var items = Item.find({})
//   res.json(items);
// };

function handleGet(cb){
  Item.find({}, function(err, items) {
    if (err) throw err;
    return cb(items);
  });
};

module.exports = {
  handleGet: handleGet,
  handleDelete: handleDelete,
  handlePost: handlePost,
  handlePut: handlePut
}