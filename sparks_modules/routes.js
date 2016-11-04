// This module is for parsing form data
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

module.exports = function(app, URL) {

    // This is the method where we save the url
    app.post('/save', urlencodedParser, function(req, res) {

        /* In case some one is planning to crash my server,
         he will be forced to visit my github */
        var theRealUrl = req.body.theUrl;
        if (theRealUrl == "") {
            theRealUrl = "https://github.com/saadixl";
        }

        // Creating a new url record
        var newURL = new URL({
            handle: req.body.handle,
            theUrl: theRealUrl
        });

        // saving the new URL record
        newURL.save(function(err, doc) {
            if (err) throw err;
            console.log('URL saved successfully!' + doc._id);
            // Checking if there is no handle then setting a shortid
            var realHandle = req.body.handle;
            if (realHandle == "") {
                realHandle = doc._id;
            }
            // Sending the short url as response
            res.send('http://163.172.182.52:6600/' + realHandle);

        });

    });

    // This is the method where we try to visit a big url using short handle
    app.get('/:handle', urlencodedParser, function(req, res) {
        URL.find({
                // Checking if the short url exists in custom handle or id
                $or: [{
                    'handle': req.params.handle
                }, {
                    '_id': req.params.handle
                }]
            },
            // if exists then redirect to that url
            function(err, docs) {
                if (docs.length > 0) {
                    res.redirect(docs[0].theUrl);
                }
            });
    });

}
