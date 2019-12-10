const students = require('../controllers/students.controller.js'), 
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js

router.route('/')
    .get(students.list);

router.route('/data')
    .post(students.studentsByDataSet);

router.route('/:studentId')
    .get(students.read)
    .put(students.update)
    .delete(students.delete);

router.route('/survey/:studentId')
    .get(students.getSurveyInfo);

router.route('/register')
    .post(students.register);

router.route('/login')
    .post(students.login);

router.param('studentId', students.studentByID);

module.exports = router;