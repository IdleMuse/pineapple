module.exports = function(app){

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

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
