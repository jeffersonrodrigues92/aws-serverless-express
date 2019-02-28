function UserDAO(connection){
    this._connection = connection;
}

UserDAO.prototype.findAll = function(callback){
    this._connection.query('SELECT * FROM public.user', callback);
}

UserDAO.prototype.save  = function(user, callback){
    const query = {
        text: 'INSERT INTO public.user(nome, sobrenome, cpf) VALUES($1, $2, $3)',
        values: [user.nome, user.sobrenome, user.cpf]
      }
    this._connection.query(query, (callback));
}

module.exports = function(){
    return UserDAO;
}