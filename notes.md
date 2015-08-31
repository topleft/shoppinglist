##converting from an no database OOP app, to a mongoose App

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


## Questions about res.json and database CRUD operations
  1. Error or success messages, where do they come from?
  *    when passing them through the route back to the jQuery, i never get what I expect

  example:

  On deleting an item I would like a message to pop up saying "Item removed." In my utility.js file, if the delete from the database was successful, I am returning an object `{message: "Item removed."}`. In my route where I call the utility delete, I `res.json()` this object. If I throw a console log into my jQuery/ajax response on the client side, i get "success" in the console. This "success" is not something i coded...i don't think.

##### What have i tried?
  * adding the message to the object (`object.message = "message"`) inside the route as well as in the utitily function.
  * console logs both server side and client side, server side yeilds information, client is undefined

## Question about "put" request, keep getting a 500 call, how to test to get  to the next level, have no idea what to try next


