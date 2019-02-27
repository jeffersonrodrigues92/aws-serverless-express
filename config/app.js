'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const consign       = require('consign');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
    .include('app/routes')
    .into(app);

module.exports = app;