module.exports = function(app){

    app.get('/api/posts', function(req, res){
        res.send('hi');
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
