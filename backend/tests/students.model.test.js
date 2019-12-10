const should = require('should'), 
    mongoose = require('mongoose'), 
    assert =  require('chai').assert;
    Student = require('../models/students.model');

const student = {
    email: "asdf@ufl.com",
    survey: {
        age: 20,
        gender: "Male",
        activities: [1, 10]
    }
}
let id;
describe('Student Schema Unit Tests', function(){
    before(function(done) {
        mongoose.connect(process.env.MONGODB_URI || require('../config/config').db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        done();
      });
    
    describe('Using the database', function(){
        this.timeout(10000);

        it('saves properly when email is provided', function(done){
            new Student({
                email: student.email,
                survey: student.survey
            }).save(function(err, student){
                should.not.exist(err);
                id = student._id;
                done();
            });
        });

        it('throws an error when same email provided', function(done){
            new Student({
                email: student.email
            }).save(function(err){
                should.exist(err);
                done();
            });
        });
        it('throws an error when no email provided', function(done){
            new Student({
                survey: student.survey
            }).save(function(err){
                should.exist(err);
                done();
            });
        });
        it('selects correct student', function(done){
            Student.findOne({email: 'asdf@ufl.com'})
                .then((foundStudent) => {
                    assert(foundStudent.email === student.email);
                    done();
                })
                .catch((err) =>{
                    console.log(err);
                })
        })
    });

    after(function(done) {
        if(id) {
          Student.deleteOne({ _id: id }).exec(function() {
            id = null;
            done();
          });
        } else {
          done();
        }
    });
    
});
