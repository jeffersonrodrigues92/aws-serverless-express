'use strict';

module.exports = application => {

    application.get('/user', (req, res) => {
        application.app.controllers.userController.findAll(application, req, res);
    });
    
    application.post('/user', (req, res) => {
        application.app.controllers.userController.save(application, req, res);
    });
};