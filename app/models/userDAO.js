function UserDAO(connection){
    this._connection = connection;
}

UserDAO.prototype.findAll = function(callback){
    this._connection.query("SELECT * FROM user", callback);
}

UserDAO.prototype.save  = function(user, callback){
    this._connection.query("INSERT INTO user SET ? ", user,  callback);
}

module.exports = function(){
    return UserDAO;
}