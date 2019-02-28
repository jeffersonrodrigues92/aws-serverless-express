module.exports.findAll = function(application, req, res){
    var connection = application.config.database();
    var userModel = new application.app.models.userDAO(connection);
    userModel.findAll(function(error, result){
        if(error)
            throw new Error(error);

        res.status(200).send({users: result.rows});
    });
}

module.exports.save = function(application, req, res){
    var user = req.body;
    var connection = application.config.database();
    var userModel = new application.app.models.userDAO(connection);
    userModel.save(user, function(error, result){  
        if(error)
            throw new Error(error);
        
        res.status(201).send({users: 'user created'});
    });
}