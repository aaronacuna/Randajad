'use strict';

const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose');

let db = mongoose.connection,
    dburl = 'mongodb://Randajaj:aaron2323@ds115360.mlab.com:15360/randajaj',
    port = 4000;

let server = app.listen(port,_server());

mongoose.connect(dburl);

db.on('error', console.error.bind(console, 'Error de conexión: '));

db.once('open', () => {
  console.log('Base de datos conectada correctamente');
});



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const users = require('./components/users/users.route'),
      tasks = require ('./components/tasks/tasks.route.js'),
      index = require('./index');



app.use('/api', users);
app.use ('/api', tasks);
app.use('/', index);



module.exports = app;

function _server(){
  console.log('Conexión establecida en el puerto ' + port);
};