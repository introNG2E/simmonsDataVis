const Validator = require("validator"),
    isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data) {
    // Holds any email validation errors
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";

    // Checking if email is entered and valid
    if (Validator.isEmpty(data.email)) {
        errors.email = "Error: Email Field is Required";
    }

    //Checks if the email is invalid (ex: @test@tester.c)
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Error: Invalid Email Format";
    }
//Pre-existing emails are already checked in EmailEntry.js

    return {
        errors,
        isValid: isEmpty(errors),
    };

};
  