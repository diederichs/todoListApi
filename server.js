var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require ('mongoose');
var Task = require ('./api/models/todoListModel');
var bodyParser = require ('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Tododb', { useMongoClient: true } );

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });

var routes = require ('./api/routes/todoListRoutes');
    routes(app);

    app.listen(port);

    console.log('todo list RESTful API Server started on: ' + port);
