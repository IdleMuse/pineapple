module.exports = function(app){

    // app.get('/api/posts', function(req, res){
    //     return {"test":true};
    // });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
