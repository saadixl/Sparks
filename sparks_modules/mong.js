// Including Mongoose Package & shortid
var mongoose = require('mongoose');
var shortid = require('shortid');

// Connecting mongoose
mongoose.connect('mongodb://localhost/sparks');

// Creating a Schema for MongoDB
var urlSchema = new mongoose.Schema({
    handle: {
        type: String
    },
    theUrl: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    }
});

// Creating a new model using the schema
var URL = mongoose.model('URL', urlSchema);

// Exporting the model
module.exports = URL;
