// External packages
var express = require('express');
var http = require('http');

// Instance of express.
var app = express();

// This handles all the routing of the app
require('./sparks_modules/routes')(app);

app.server = http.createServer(app);
app.server.listen(6600,function(){
	console.log("Server started at port 6600!");
});