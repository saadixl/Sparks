// This module is for parsing form data
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

module.exports = function(app, URL) {

    // This is the method where we save the url
    app.post('/save', urlencodedParser, function(req, res) {

        // Creating a new url record
        var newURL = new URL({
            handle: req.body.handle,
            theUrl: req.body.theUrl
        });

        // saving the new URL record
        newURL.save(function(err) {
            if (err) throw err;
            console.log('URL saved successfully!');
        });

        // Sending the short url as response
        res.send('http://saadixl.pw/sparks/' + req.body.handle);
    });

    // This is the method where we try to visit a big url using short handle
     app.get('/:handle', urlencodedParser, function(req, res) {
     		URL.find({handle:req.params.handle},function(err, docs){
     			if(docs.length==1){
     				res.redirect(docs[0].theUrl);
     			}
     		});
     });

}