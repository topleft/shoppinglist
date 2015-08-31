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
  // console.log(id);
  // var query = {_id: };
  // var update = {category: newCategory};
  // console.log(update);
  var option = {new: true};
  Item.findOneAndUpdate(id, newCategory, option, function(err, item){
    // console.log("test")
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