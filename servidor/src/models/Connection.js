const mysql = require('mysql');

var connection = {};

connection =  
    mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : null,
        database : 'bdestudiantes'
    })
;

connection.connect();

module.exports = connection;