var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8800;


// Add middleware for parsing incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});