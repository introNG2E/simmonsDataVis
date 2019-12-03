const should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Student = require('../models/students.model.js');

let app, agent, id;

describe('Student register,login, and CRUD tests', function(){
    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);
    
        done();
    });

    it('registers email address to database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(200)
            .end(function(err, res) {
                should.exist(res);
                id = res.body
                done();
            });
    })
    it('should not register email address already in database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.body.emailFound.should.equal('Email already created');
                done();
            });
    })
    it('should not register email address in incorrect format', function(done){
        const student = {
            email: 'test1@',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    })
    it('logins email address to database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                id = res.body;
                done();
            });
    })
    it('should not login email address not in database', function(done){
        const student = {
            email: 'fagre@test.com',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.body.emailNotFound.should.equal('Email not found');
                done();
            });
    })
    it('should not login email address already in incorrect format', function(done){
        const student = {
            email: 'test1@',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    })
    it('should retrieve all students', function(done){
        agent.get('/api/students')
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                should.exist(res);
                done();
            })
    })
    it('should be able to retrieve a single student', function(done){
        Student.findOne({email: 'test1@test.com'}, function(err, student){
            if(err){
                console.log(err);
            }
            else{
                agent.get('/api/students/' + student._id)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.email.should.equal('test1@test.com');
                        done();
                    })
            }
        })
    })
    it('should be able to update a student\'s survey', function(done){
        const updatedStudent = {
            survey: {
                age: 20,
                gender: "Female",
                phone: "1234567890"
            }
        }
        agent.put('/api/students/' + id)
            .send(updatedStudent)
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                should.exist(res.body.survey);
                res.body.survey.age.should.equal(20);
                res.body.survey.gender.should.equal('Female');
                res.body.survey.phone.should.equal("1234567890");
                done();
            });
    })
    it('should be able to delete a student', function(done){
        agent.delete('/api/students/' + id)
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                should.exist(res);
                agent.get('/api/students/' + id)
                    .expect(404)
                    .end(function(err, res){
                        id = undefined;
                        done();
                    })
            })
    })
    after(function(done) {
        console.log(id);
        if(id) {
            Student.deleteOne({ _id: id }).exec(function() {
              id = null;
              done();
            });
          } else {
            done();
          }
    })
})