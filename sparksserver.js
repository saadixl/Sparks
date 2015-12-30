// External packages
var express = require('express');

// Instance of express.
var app = express();

// MongoDB using Mongoose
var URL = require('./sparks_modules/mong');

// This handles all the routing of the app
require('./sparks_modules/routes')(app,URL);

// Pointing the public directory
app.use(express.static(__dirname + '/public'));

// Starting the server at port 6600
app.listen(6600,function(){
	console.log("Server started at port 6600!");
});