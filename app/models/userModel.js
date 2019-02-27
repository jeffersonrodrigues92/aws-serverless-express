module.exports = function(){
    
    this.findAll = function(connection, callback){
        connection.query("SELECT * FROM user", callback);
    }

    this.save = function(user, connection, callback){
        connection.query("INSERT INTO user SET ? ", user,  callback);
    }
    return this;
}