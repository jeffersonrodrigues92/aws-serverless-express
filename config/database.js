var mysql = require("mysql");

var connection = function (){
    return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '12345678',
            database : 'portal_noticias' 
        });
}

module.exports = function(){
    return connection;
}