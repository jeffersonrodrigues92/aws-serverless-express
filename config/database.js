//var mysql = require("mysql");
const { Pool, Client } = require('pg')

var connection = function (){
    return new Pool({
        user: 'jefferson.rodrigues',
        host: '127.0.0.1',
        database: 'node',
        password: '',
        port: 5432,
        max: 3,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    });
    
    /*return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12345678',
        database : 'portal_noticias' 
    */
}

module.exports = function(){
    return connection;
}