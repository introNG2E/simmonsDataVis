const express = require('express'),
    mongoose = require('mongoose'),   
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    config = require('./config'), 
    studentsRouter = require('../routes/students.routes');

module.exports.init = function() {
    mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

    //Initialize app
    const app = express();

    //Enable request logging for development debugging
    app.use(morgan('dev'));

    //Body parsing middleware 
    app.use(bodyParser.json());

    app.use('/api/students', studentsRouter);

   /* 
   Request Handeler for all other routes
   Sends a response (res) to go to the homepage for all 
   routes not specified 
   */ 
  app.all('/*', function(req, res) {
   
    /*  
    The path.resolve() method returns a string and resolves a 
    sequence of paths or path segments into an absolute path.
    If no path segments are passed, path.resolve() will return 
    the absolute path of the current working directory.
    */
    res.sendFile(path.resolve(''));
   });

   return app;
}
  