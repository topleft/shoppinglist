
// global id num
var itemId = 0;

// add quantity in the future
var Item = function(name, category){
  this.name = name;
  itemId++;
  this.id = itemId;
  this.category = category;
}

var ShoppingList = function(name){
  this.name = name;
  this.items = [];
}

ShoppingList.prototype.addItem = function(item){
  var test = this.items.filter(function(listItem){
    return listItem.name === item.name;
  })
  if (test.length === 0) {
    this.items.push(item);
    return {message: "Success! Item added to shopping list.", list: this.items};
  }
  else {
    return {error: "Item already in shopping list.", list: this.items};
  }
}

ShoppingList.prototype.removeItem = function(item){
  var message = "Success! Item added to shopping list."
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].id === id){
      this.items.splice(i, 1);
      return {message: message, list: this.items};
    }
  }
  return {error: "Item not in list", list: this.items};
}

module.exports = {
  ShoppingList: ShoppingList,
  Item: Item
}

