const Validator = require("validator"),
  isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  // Holds any email validation errors
  let errors = {};
  
  data.email = !isEmpty(data.email) ? data.email : "";

  // Checking if email is entered and valid
  if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required";
  }
  else if(!Validator.isEmail(data.email)){
    errors.email = "Invalid email";
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };

};
  