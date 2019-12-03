const mongoose = require('mongoose'),  
    // config = require('./config'),  
    express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    passport = require('passport'),
    studentsRouter = require('./routes/students.routes');

const app = express();
const port = process.env.PORT || 8080;

mongoose.set('useCreateIndex', true);
mongoose.connect(/*config.db.uri*/process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

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
require("./config/passport")(passport);

app.use('/api/students', studentsRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'));
    });
}

app.listen(port, () => 
        console.log(`Server now running on port `, port)
);