##Callbacks on Refactor

###Quick breakdown

####get request inside the router

`
router.get('/superheros', function(req, res) {
  Superhero.find(function(err, superheros){
    // console.log(superheros);
    res.json(superheros);
  });
});
`

* CRUD functions are called within the routes with info passed from the Client
* $ajax sends info from the client side to the server side
* our crud operations happen on the server side becausethe database must be accessed from the backend
* Via the res.json, $ajax retrieves info from the server side and gats it back to the client side


1. CRUD operations in a different folder
1. These functions didn't have access to the req and res objects
1. the res object, when retreiving data from the data base is slow
1. if I called the res.json after the handleGet(), the res.json is evaluated before handleGet can retrieve the information from the data base
1. if I passed in the res object when I call the handleGet function, the same thing happens
1. consclusion: synchronous code won't work.

###I need a callback

`
function handleGet(cb){
  Item.find({}, function(err, items) {
    if (err) throw err;
    return cb(items);
  });
};
`

* many functions in javascript take an optional callback
* after we find the items from the DB, we want to do something with them, thats all we need to know right now

`
router.get('/list', function(req, res, next) {
  ute.handleGet(cb);
});
`
* we call this utility function, and we need to specify another function as a parameter

`
router.get('/list', function(req, res, next) {
  ute.handleGet( function(data) {res.json(data)} );
});
`

`
router.get('/list', function(req, res, next) {
  ute.handleGet( function(data) {res.json(data)} );

  ...Item.find({}, function(err, items) {
      if (err) throw err;
      return cb(items);
    });...
});
`




