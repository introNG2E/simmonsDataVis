const express = require('express'),
    mongoose = require('mongoose'),   
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    passport = require('passport'),
    studentsRouter = require('../routes/students.routes');

module.exports.init = function() {
    mongoose.set('useCreateIndex', true);
    // Connecting to database
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

    // If web app is in production, serves build folder
    if(process.env.NODE_ENV === 'production'){
      app.use(express.static(path.join(__dirname, '../../client/build')));
  
      // Routes all other requests to react application
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
      });
  }

   return app;
}