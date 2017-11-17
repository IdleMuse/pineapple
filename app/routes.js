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

    app.get('/api/test', function(req, res){
        var connection = database_connect();
        res.send(connection.threadId);
        connection.end();
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
