const nodemailer = require('nodemailer');
// const creds = require('../config/config.js');

function body(userId){
  const link = 'https://simmons-data-vis.herokuapp.com/homepage/' + userId ;

  return "Hi, to conduct your survey please follow this link: " + link;
}

function establishTransport() {
  var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.CREDS_EMAIL_USERNAME,
      pass: process.env.CREDS_EMAIL_PASSWORD
    }
  }

  var transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email Transporter operational');
    }
  });

  return transporter;
}

function send (userId, email) {

  const message = body(userId);

  var mail = {
    from: 'Simmons Lab',
    to: email,  
    subject: 'Access your survey',

    html: message
  }

  var transporter = establishTransport();
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log('failure')
    } else {
      console.log('success')
    }
  })
}

module.exports = {
  send: send
}