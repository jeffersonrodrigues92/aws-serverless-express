'use strict';

module.exports = app => {

    app.get('/users', (req, res) => {
        res.status(200).send({message: 'listing users'});
    });
    
    app.post('/users', (req, res) => {
        res.status(201).send({message: 'creating a users'});
    });
    
    app.put('/users/:id', (req, res) => {
        const id = req.params.id;
        res.status(200).send({message: `update users ${id}`});
    });
    
    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        res.status(204).send({message: `delete users ${id}`});
    });

};