const express = require('express'),
    mongoose = require('mongoose'),   
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    passport = require('passport'),
    studentsRouter = require('../routes/students.routes');

module.exports.init = function() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.MONGODB_URI || require('./config').db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

    //Initialize app
    const app = express();

    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    const cors = require('cors');
    app.use(cors());

    //Enable request logging for development debugging
    app.use(morgan('dev'));

    //Body parsing middleware 
    app.use(bodyParser.json());

    //Passport middleware
    app.use(passport.initialize());

    //Requires and calls passport function in passport.js
    require("./passport")(passport);

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
    res.sendFile(path.resolve('../frontend/public/index.html'));
   });

   return app;
}
  