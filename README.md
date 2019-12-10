# simmonsDataVis

## How to start

cd into 'frontend' and run 'yarn start'

For backend, cd into 'backend' and run 'node server.js' or 'npx nodemon server.js'  

## Using Postman to Test Backend API
  
Using postman, http://localhost:8080/api/students/<Insert_email_here> is used for get requests to get the information of a specific student by their email. You can ommit the <Insert_email_here> to receive information on all of the students currently in the database.    
  
Register and login uses a post request with http://localhost:8080/api/students/register/ and http://localhost:8080/api/students/login respectively. To register/login an email, select Body > raw and change the Text option to JSON then insert the email like so 
```
{
    "email" : "test@test.com"
} 
```
After hitting send, a hashed version of the email should be in the response if no issues arise.