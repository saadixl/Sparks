// Including Mongoose Package
var mongoose = require('mongoose');

// Connecting mongoose
mongoose.connect('mongodb://localhost/sparks');

// Creating a Schema for MongoDB
var urlSchema = new mongoose.Schema({
    handle: {
        type: String,
        required: true
    },
    theUrl: {
        type: String,
        required: true
    }
});

// Creating a new model using the schema
var URL = mongoose.model('URL', urlSchema);

// Exporting the model
module.exports = URL;