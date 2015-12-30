module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile('../views/index.html');
    });

}
