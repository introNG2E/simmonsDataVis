const config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
    const app = express.init();
    app.listen(config.port, () => 
        console.log(`Server now running on port `, config.port)
    );
};