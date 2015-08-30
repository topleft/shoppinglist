var Item = require("../database.js");


function handlePost(itemName, itemCategory){
  newItem = new Item({name: itemName, category: itemCategory})

  newItem.save(function(err) {
    if (err) throw err;

    console.log('Item created!');
    });

  return newItem;
};

// accepts a Number
function handleDelete(currentId){
  Item.remove({_id: currentId}, function(err){
    if(err) return handleError(err);
  });
  // return list.removeItem(parseInt(id));
};

function handleGet(cb){
  Item.find({}, function(err, items) {
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