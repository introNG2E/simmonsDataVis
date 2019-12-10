const Validator = require("validator"),
    isEmpty = require("is-empty");

//function validateLoginInput??????? Was set to validateRegisterInput

module.exports = function validateLoginInput(data) {
    // Holds any email validation errors
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";

    // Checking if email is entered and valid
    if (Validator.isEmpty(data.email)) {
        errors.email = "Error: Email Field is Required";
    }
    /*
    Checks if the email is a valid email*/
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Error: Invalid Email";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};