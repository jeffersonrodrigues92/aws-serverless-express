'use strict';

module.exports = application => {

    application.get('/user', (req, res) => {
        var connection = application.config.database();
        var userModel = application.app.models.userModel;
        userModel.findAll(connection, function(error, result){
            res.status(200).send({users: result});
        });
    });
    
    application.post('/user', (req, res) => {
        var user = req.body;
        var connection = application.config.database();
        var userModel = application.app.models.userModel;
        userModel.save(user, connection, function(error, result){    
            res.status(201).send({users: 'user created'});
        });
    });
};