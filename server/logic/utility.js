var Item = require("../database.js");

// need to create success or error messages

function handlePost(itemName, itemCategory){
  newItem = new Item({name: itemName, category: itemCategory})
  newItem.save(function(err) {
    if (err) throw err;
    });
  return newItem;
};

function handlePut(id, newCategory, cb){
  var query = {_id: id};
  var update = {category: newCategory}
  var option = {new: true};
  Item.findOneAndUpdate(query, update, option, function(err, item){
    if (err) throw err;
    return cb(item);
  });
}

// accepts a Number
function handleDelete(currentId){
  Item.remove({_id: currentId}, function(err){
    if(err) return handleError(err);
  });
  return {message: "Item removed."};
};

function handleGet(cb){
  Item.find({}, function(err, items) {
  if (err) throw err;
  return cb(items);
});
};

module.exports = {
  handleGet: handleGet,
  handleDelete: handleDelete,
  handlePost: handlePost
}