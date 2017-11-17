module.exports = function(app){

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());

    function database_connect(){
        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host     : 'bwdbinstance-cluster.cluster-cidljrammxel.eu-west-1.rds.amazonaws.com',
            user     : 'hckthn_team2',
            password : '3917906429',
            database : 'hckthn_team2_pineapple'
        });

        return connection;
        connection.connect()
    }

    app.get('/api/items', function(req, res){
        var connect = database_connect();
        connect.query('SELECT * FROM `items`',function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.get('/api/destinations', function(req, res){
        var connect = database_connect();
        connect.query('SELECT * FROM `destinations`',function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.get('/api/routes', function(req, res){
        var connect = database_connect();
        connect.query('SELECT * FROM `routes`',function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.post('/api/items', function(req, res){
        var connect = database_connect();
        var item = req.body;
        connect.query('INSERT INTO `items` SET ?',item,function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.post('/api/destinations', function(req, res){
        var connect = database_connect();
        var item = req.body;
        connect.query('INSERT INTO `destinations` SET ?',item,function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.post('/api/routes', function(req, res){
        var connect = database_connect();
        var item = req.body;
        connect.query('INSERT INTO `routes` SET ?',item,function (error, results, fields){
            res.send(results);
        });
        connect.end();
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
