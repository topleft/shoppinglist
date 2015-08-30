converting from an no database OOP app, to a mongoose App

1. re-configure scaffolding
*   add `"mongoose": "^4.1.3"` to package.json dependencies
*   create `database.js` is the "server" directory
*   in app.js at the very top include `require("./database.js")`
*   in the new database.js file add this code:

`
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema(
  {
    name : String,
    category: String,
    // any other key value pairs
  }
);


var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

mongoose.connect('mongodb://localhost/item-database');
`
*   include `var Item = require("../database.js");` at the top of your utilties file

2. modify CRUD utilities to use mongoose functions, be sure to use callbacks where necesarry

3. modify routes to use your new utility functions