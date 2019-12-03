const mongoose = require('mongoose'), 
    Student = require('../models/students.model'),
    util = require('util'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    keys = require("../config/config"),
    validateRegisterInput = require("../validation/register"),
    validateLoginInput = require("../validation/login");
    emailSystem = require('./email.controller');


// '/' Routes   

// Lists all student information in the database - get request
exports.list = (req, res) => {
    Student.find({}, (err, student) => {
      if(err){
        res.status(400).send(err);
      }
      else{
        res.status(200);
        res.json(student);
      }
    });
};

// STUDENT ID ROUTES

// Displays student information - get request
exports.read = (req, res) => {
    console.log(req.student);
    res.status(200);
    res.json(req.student);
};

// Displays student survey information - get request
exports.getSurveyInfo = (req, res) => {
    console.log(req.student.survey);
    res.status(200);
    res.json(req.student.survey);
}

// Updates student information - put request
exports.update = (req, res) => {
    const student = req.student;
    student.survey = req.body.survey;

    const currentDate = new Date();
    student.updated_at = currentDate;

    student.save( (err) => {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        else{
            res.json(student);
            console.log(student);
        }
    });
}

// Deletes student entry in database - delete request
exports.delete = (req, res) => {
    const student = req.student;

    Student.findByIdAndRemove(student.id, function(err){
        if(err){
            console.log(err);
            return res.status(400).send(err);
        }
        else{
            console.log(student);
            res.status(200);
            return res.json(student);
        }
    });
}

// REGISTER/LOGIN ROUTES

// Registers a new student - post request
exports.register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Checks if email is entered with valid format
    if(!isValid){
        return res.status(400).json(errors);
    }
    const studentEmail = req.body.email;
    Student.findOne({email: studentEmail}, (err, student) => {
        if(err){
            return res.status(400).send(err);          
        }
        else{
            // No match found
            if(student === null){
                console.log("Creating new student");
                const newStudent = new Student({
                    email: req.body.email
                });

                // Saving email into database
                newStudent.save( (err, savedStudent) => {
                    if(err) {
                        console.log(err);
                        return res.status(400).send(err);
                    } 
                    // If match found, returns student id and email with link to survey is sent to given email 
                    else {
                        console.log(savedStudent.id);
                        const id = savedStudent.id;
                        emailSystem.send(id, studentEmail);
                        return res.json(id);
                    }
                });
            }
            // Match found
            else if(student !== null){
                return res.status(400).json({emailFound: "Email already created"}); 
            }
        }
    })
}

// Logins student by email address - post request
exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Checks if email is entered with valid format
    if(!isValid){
        return res.status(400).json(errors);
    }
    const studentEmail = req.body.email;
    console.log(studentEmail);
    Student.findOne({email: studentEmail}, (err, student) => {
        if(err){
            return res.status(400).send(err); 
        }
        else{
            // If no match found, returns "Email not found"
            if(student === null){
                res.status(400);
                return res.json({emailNotFound: "Email not found"}); 
            }
            // If match found, returns student id and email with link to survey is sent to given email 
            else if(student !== null){
                const id = student.id;
                emailSystem.send(id, studentEmail);
                return res.json(id);
            }
        }
    })
}

// ROUTER.PARAM MIDDLEWARE

// Middleware for locating student entry in database by their id
exports.studentByID = (req, res, next, id) => {
    Student.findById(id).exec( (err, student) => {
        if(err){
            res.status(400);
            res.json({studentNotFound: "Student not found"}); 
        }
        else{
            req.student = student;
            next();
        }
    });
}

exports.surveysArray = (req, res) => {
    function assign(skillNum, len, activity) {
        console.log("////////////");
        console.log(skillNum);
        console.log("Number of students with " + activity + ": " + len);
        for (let i = 0; i < skillNum[0].length; i++) {
            (skillNum[0][i] /= (len));
            skillNum[0][i] = +skillNum[0][i].toFixed(2).valueOf();
        }
        console.log("Dividing the totals by: " + len + ":");
        console.log(skillNum);
        act.push([activity, skillNum]);
    }

    /*dataWill eventually add add a function to replace the excessive function calls
    had issues setting closures. Need to add functionality to sort by group attributes*/
    var act = [];
    let len1 = 0, len2 = 0, len3 = 0, len4 = 0, len5 = 0, len6 = 0, len7 = 0, len8 = 0, len9 = 0, len10 = 0, len11 = 0,
        len12 = 0, len13 = 0, len14 = 0, len15 = 0, len16 = 0, len17 = 0, len18 = 0, len19 = 0, len20 = 0;
    var skill1 = [], skill2 = [], skill3 = [], skill4 = [], skill5 = [], skill6 = [], skill7 = [], skill8 = [],
        skill9 = [], skill10 = [], skill11 = [], skill12 = [], skill13 = [], skill14 = [], skill15 = [], skill16 = [],
        skill17 = [], skill18 = [], skill19 = [], skill20 = [];
    Student.find({}, (err, student) => {
        if (err) {
            res.status(400).send(err);
        }
        //only parse through students who completed activities page and E2020 outcomes
        else if (student.length) {
            console.log(student.length);
            for (var b = 0, v = student.length; b < v; b++) {
                var outComes = [student[b].survey.E2, student[b].survey.E3,
                    student[b].survey.E4, student[b].survey.E5, student[b].survey.E6,
                    student[b].survey.E7, student[b].survey.E8, student[b].survey.E9];
                if (Array.isArray(student[b].survey.activities)&& student[b].survey.activities.length >= 1 && student[b].survey.activities && outComes.length === 8) {
                    var arrNum = student[b].survey.activities.map(Number);
                    //caused errors if the order of activities was incorrect on survey
                    arrNum.sort(function (a, b) {
                        return a - b
                    });
                    console.log(arrNum);
                    var dd = arrNum.map(String);
                    var strArr = arrNum.map(function (e) {
                        return e.toString()
                    });
                    console.log(strArr);
                    console.log('OUTCOMES LENGTH: ' + outComes.length);
                    console.log(outComes);
                    console.log(student[b]._id);
                    console.log(student[b].survey.activities);
                    for (var i = 0; i < student[b].survey.activities.length; i++) {
                        if (strArr[i] === "1") {
                            len1++;
                            skill1.push(outComes);
                            if (Array.isArray(skill1) && skill1.length) {
                                for (var e1 = 0, n1 = skill1.length - 1; e1 < n1; e1++) {
                                    var arrayE11 = skill1[e1];
                                    var arrayE21 = skill1[e1 + 1];
                                    var arrayE31 = arrayE11.map((v1, m1) => v1 + arrayE21[m1]);
                                    for (var x1 = 0, y1 = arrayE31.length; x1 < y1; x1++) {
                                        arrayE31[x1] = arrayE31[x1]; //the average value of the outcomes
                                    }
                                    skill1 = [];
                                    skill1.push(arrayE31);
                                }
                            }
                        } else if (strArr[i] === "2") {
                            len2++;
                            skill2.push(outComes);
                            if (Array.isArray(skill2) && skill2.length) {
                                for (var e2 = 0, n2 = skill2.length - 1; e2 < n2; e2++) {
                                    var arrayE12 = skill2[e2];
                                    var arrayE22 = skill2[e2 + 1];
                                    var arrayE32 = arrayE12.map((v2, m2) => v2 + arrayE22[m2]);
                                    for (var x2 = 0, y2 = arrayE32.length; x2 < y2; x2++) {
                                        arrayE32[x2] = arrayE32[x2]; //the average value of the outcomes
                                    }
                                    skill2 = [];
                                    skill2.push(arrayE32);
                                }
                            }
                        } else if (strArr[i] === "3") {
                            len3++;
                            skill3.push(outComes);
                            if (Array.isArray(skill3) && skill3.length) {
                                for (var e3 = 0, n3 = skill3.length - 1; e3 < n3; e3++) {
                                    var arrayE13 = skill3[e3];
                                    var arrayE23 = skill3[e3 + 1];
                                    var arrayE33 = arrayE13.map((v3, m3) => v3 + arrayE23[m3]);
                                    for (var x3 = 0, y3 = arrayE33.length; x3 < y3; x3++) {
                                        arrayE33[x3] = arrayE33[x3]; //the average value of the outcomes
                                    }
                                    skill3 = [];
                                    skill3.push(arrayE33);
                                }
                            }
                        } else if (strArr[i] === "4") {
                            len4++;
                            skill4.push(outComes);
                            if (Array.isArray(skill4) && skill4.length) {
                                for (var e4 = 0, n4 = skill4.length - 1; e4 < n4; e4++) {
                                    var arrayE14 = skill4[e4];
                                    var arrayE24 = skill4[e4 + 1];
                                    var arrayE34 = arrayE14.map((v4, m4) => v4 + arrayE24[m4]);
                                    for (var x4 = 0, y4 = arrayE34.length; x4 < y4; x4++) {
                                        arrayE34[x4] = arrayE34[x4]; //the average value of the outcomes
                                    }
                                    skill4 = [];
                                    skill4.push(arrayE34);
                                }
                            }
                        } else if (strArr[i] === "5") {
                            len5++;
                            skill5.push(outComes);
                            if (Array.isArray(skill5) && skill5.length) {
                                for (var e5 = 0, n5 = skill5.length - 1; e5 < n5; e5++) {
                                    var arrayE15 = skill5[e5];
                                    var arrayE25 = skill5[e5 + 1];
                                    var arrayE35 = arrayE15.map((v5, m5) => v5 + arrayE25[m5]);
                                    for (var x5 = 0, y5 = arrayE35.length; x5 < y5; x5++) {
                                        arrayE35[x5] = arrayE35[x5]; //the average value of the outcomes
                                    }
                                    skill5 = [];
                                    skill5.push(arrayE35);
                                }
                            }
                        } else if (strArr[i] === "6") {
                            len6++;
                            skill6.push(outComes);
                            if (Array.isArray(skill6) && skill6.length) {
                                for (var e6 = 0, n6 = skill6.length - 1; e6 < n6; e6++) {
                                    var arrayE16 = skill6[e6];
                                    var arrayE26 = skill6[e6 + 1];
                                    var arrayE36 = arrayE16.map((v6, m6) => v6 + arrayE26[m6]);
                                    for (var x6 = 0, y6 = arrayE36.length; x6 < y6; x6++) {
                                        arrayE36[x6] = arrayE36[x6]; //the average value of the outcomes
                                    }
                                    skill6 = [];
                                    skill6.push(arrayE36);
                                }
                            }
                        } else if (strArr[i] === "7") {
                            len7++;
                            skill7.push(outComes);
                            if (Array.isArray(skill7) && skill7.length) {
                                for (var e7 = 0, n7 = skill7.length - 1; e7 < n7; e7++) {
                                    var arrayE17 = skill7[e7];
                                    var arrayE27 = skill7[e7 + 1];
                                    var arrayE37 = arrayE17.map((v7, m7) => v7 + arrayE27[m7]);
                                    for (var x7 = 0, y7 = arrayE37.length; x7 < y7; x7++) {
                                        arrayE37[x7] = arrayE37[x7]; //the average value of the outcomes
                                    }
                                    skill7 = [];
                                    skill7.push(arrayE37);
                                }
                            }
                        } else if (strArr[i] === "8") {
                            len8++;
                            skill8.push(outComes);
                            if (Array.isArray(skill8) && skill8.length) {
                                for (var e8 = 0, n8 = skill8.length - 1; e8 < n8; e8++) {
                                    var arrayE18 = skill8[e8];
                                    var arrayE28 = skill8[e8 + 1];
                                    var arrayE38 = arrayE18.map((v8, m8) => v8 + arrayE28[m8]);
                                    for (var x8 = 0, y8 = arrayE38.length; x8 < y8; x8++) {
                                        arrayE38[x8] = arrayE38[x8]; //the average value of the outcomes
                                    }
                                    skill8 = [];
                                    skill8.push(arrayE38);
                                }
                            }
                        } else if (strArr[i] === "9") {
                            len9++;
                            skill9.push(outComes);
                            if (Array.isArray(skill9) && skill9.length) {
                                for (var e9 = 0, n9 = skill9.length - 1; e9 < n9; e9++) {
                                    var arrayE19 = skill9[e9];
                                    var arrayE29 = skill9[e9 + 1];
                                    var arrayE39 = arrayE19.map((v9, m9) => v9 + arrayE29[m9]);
                                    for (var x9 = 0, y9 = arrayE39.length; x9 < y9; x9++) {
                                        arrayE39[x9] = arrayE39[x9]; //the average value of the outcomes
                                    }
                                    skill9 = [];
                                    skill9.push(arrayE39);
                                }
                            }
                        } else if (strArr[i] === "10") {
                            len10++;
                            skill10.push(outComes);
                            if (Array.isArray(skill10) && skill10.length) {
                                for (var e10 = 0, n10 = skill10.length - 1; e10 < n10; e10++) {
                                    var arrayE110 = skill10[e10];
                                    var arrayE210 = skill10[e10 + 1];
                                    var arrayE310 = arrayE110.map((v10, m10) => v10 + arrayE210[m10]);
                                    for (var x10 = 0, y10 = arrayE310.length; x10 < y10; x10++) {
                                        arrayE310[x10] = arrayE310[x10]; //the average value of the outcomes
                                    }
                                    skill10 = [];
                                    skill10.push(arrayE310);
                                }
                            }
                        } else if (strArr[i] === "11") {
                            len11++;
                            skill11.push(outComes);
                            if (Array.isArray(skill11) && skill11.length) {
                                for (var e11 = 0, n11 = skill11.length - 1; e11 < n11; e11++) {
                                    var arrayE111 = skill11[e11];
                                    var arrayE211 = skill11[e11 + 1];
                                    var arrayE311 = arrayE111.map((v11, m11) => v11 + arrayE211[m11]);
                                    for (var x11 = 0, y11 = arrayE311.length; x11 < y11; x11++) {
                                        arrayE311[x11] = arrayE311[x11]; //the average value of the outcomes
                                    }
                                    skill11 = [];
                                    skill11.push(arrayE311);
                                }
                            }
                        } else if (strArr[i] === "12") {
                            len12++;
                            skill12.push(outComes);
                            if (skill12.length > 1) {
                                for (var e12 = 0, n12 = skill12.length - 1; e12 < n12; e12++) {
                                    var arrayE112 = skill12[e12];
                                    var arrayE212 = skill12[e12 + 1];
                                    var arrayE312 = arrayE112.map((v12, m12) => v12 + arrayE212[m12]);
                                    for (var x12 = 0, y12 = arrayE312.length; x12 < y12; x12++) {
                                        arrayE312[x12] = arrayE312[x12]; //the average value of the outcomes
                                    }
                                    skill12 = [];
                                    skill12.push(arrayE312);
                                    console.log(arrayE312);
                                }
                            }
                        } else if (strArr[i] === "13") {
                            len13++;
                            skill13.push(outComes);
                            if (Array.isArray(skill13) && skill13.length) {
                                for (var e13 = 0, n13 = skill13.length - 1; e13 < n13; e13++) {
                                    var arrayE113 = skill13[e13];
                                    var arrayE213 = skill13[e13 + 1];
                                    var arrayE313 = arrayE113.map((v13, m13) => v13 + arrayE213[m13]);
                                    for (var x13 = 0, y13 = arrayE313.length; x13 < y13; x13++) {
                                        arrayE313[x13] = arrayE313[x13]; //the average value of the outcomes
                                    }
                                    skill13 = [];
                                    skill13.push(arrayE313);
                                }
                            }
                        } else if (strArr[i] === ("14")) {
                            len14++;
                            skill14.push(outComes);
                            if (Array.isArray(skill14) && skill14.length) {
                                for (var e14 = 0, n14 = skill14.length - 1; e14 < n14; e14++) {
                                    var arrayE114 = skill14[e14];
                                    var arrayE214 = skill14[e14 + 1];
                                    var arrayE314 = arrayE114.map((v14, m14) => v14 + arrayE214[m14]);
                                    for (var x14 = 0, y14 = arrayE314.length; x14 < y14; x14++) {
                                        arrayE314[x14] = arrayE314[x14]; //the average value of the outcomes
                                    }
                                    skill14 = [];
                                    skill14.push(arrayE314);
                                }
                            }
                        } else if (strArr[i] === "15") {
                            len15++;
                            skill15.push(outComes);
                            if (Array.isArray(skill15) && skill15.length) {
                                for (var e15 = 0, n15 = skill15.length - 1; e15 < n15; e15++) {
                                    var arrayE115 = skill15[e15];
                                    var arrayE215 = skill15[e15 + 1];
                                    var arrayE315 = arrayE115.map((v15, m15) => v15 + arrayE215[m15]);
                                    for (var x15 = 0, y15 = arrayE315.length; x15 < y15; x15++) {
                                        arrayE315[x15] = arrayE315[x15]; //the average value of the outcomes
                                    }
                                    skill15 = [];
                                    skill15.push(arrayE315);
                                }
                            }
                        } else if (strArr[i] === "16") {
                            len16++;
                            skill16.push(outComes);
                            if (Array.isArray(skill16) && skill16.length) {
                                for (var e16 = 0, n16 = skill16.length - 1; e16 < n16; e16++) {
                                    var arrayE116 = skill16[e16];
                                    var arrayE216 = skill16[e16 + 1];
                                    var arrayE316 = arrayE116.map((v16, m16) => v16 + arrayE216[m16]);
                                    for (var x16 = 0, y16 = arrayE316.length; x16 < y16; x16++) {
                                        arrayE316[x16] = arrayE316[x16]; //the average value of the outcomes
                                    }
                                    skill16 = [];
                                    skill16.push(arrayE316);
                                }
                            }
                        } else if (strArr[i] === "17") {
                            len17++;
                            skill17.push(outComes);
                            if (Array.isArray(skill17) && skill17.length) {
                                for (var e17 = 0, n17 = skill17.length - 1; e17 < n17; e17++) {
                                    var arrayE117 = skill17[e17];
                                    var arrayE217 = skill17[e17 + 1];
                                    var arrayE317 = arrayE117.map((v17, m17) => v17 + arrayE217[m17]);
                                    for (var x17 = 0, y17 = arrayE317.length; x17 < y17; x17++) {
                                        arrayE317[x17] = arrayE317[x17]; //the average value of the outcomes
                                    }
                                    skill17 = [];
                                    skill17.push(arrayE317);
                                }
                            }
                        } else if (strArr[i] === "18") {
                            len18++;
                            skill18.push(outComes);
                            if (Array.isArray(skill18) && skill18.length) {
                                for (var e18 = 0, n18 = skill18.length - 1; e18 < n18; e18++) {
                                    var arrayE118 = skill18[e18];
                                    var arrayE218 = skill18[e18 + 1];
                                    var arrayE318 = arrayE118.map((v18, m18) => v18 + arrayE218[m18]);
                                    for (var x18 = 0, y18 = arrayE318.length; x18 < y18; x18++) {
                                        arrayE318[x18] = arrayE318[x18]; //the average value of the outcomes
                                    }
                                    skill18 = [];
                                    skill18.push(arrayE318);
                                }
                            }
                        } else if (strArr[i] === "19") {
                            len19++;
                            skill19.push(outComes);
                            if (Array.isArray(skill19) && skill19.length) {
                                for (var e19 = 0, n19 = skill19.length - 1; e19 < n19; e19++) {
                                    var arrayE119 = skill19[e19];
                                    var arrayE219 = skill19[e19 + 1];
                                    var arrayE319 = arrayE119.map((v19, m19) => v19 + arrayE219[m19]);
                                    for (var x19 = 0, y19 = arrayE319.length; x19 < y19; x19++) {
                                        arrayE319[x19] = arrayE319[x19]; //the average value of the outcomes
                                    }
                                    skill19 = [];
                                    skill19.push(arrayE319);
                                }
                            }
                        } else if (strArr[i] === "20") {
                            len20++;
                            skill20.push(outComes);
                            if (Array.isArray(skill20) && skill20.length) {
                                for (var e20 = 0, n20 = skill20.length - 1; e20 < n20; e20++) {
                                    var arrayE120 = skill20[e20];
                                    var arrayE220 = skill20[e20 + 1];
                                    var arrayE320 = arrayE120.map((v20, m20) => v20 + arrayE220[m20]);
                                    for (var x20 = 0, y20 = arrayE320.length; x20 < y20; x20++) {
                                        arrayE320[x20] = arrayE320[x20]; //the average value of the outcomes
                                    }
                                    skill20 = [];
                                    skill20.push(arrayE320);
                                }
                            }
                        }
                    }
                }
            }
            if (Array.isArray(skill1) && skill1.length) {
                assign(skill1, len1, "Design Competition Team");
            }
            if (Array.isArray(skill2) && skill2.length) {
                assign(skill2, len2, "Culture, Faith, Gender, Identity");
            }
            if (Array.isArray(skill3) && skill3.length) {
                assign(skill3, len3, "Engineering Outreach Support");
            }
            if (Array.isArray(skill4) && skill4.length) {
                assign(skill4, len4, "Environmental");
            }
            if (Array.isArray(skill5) && skill5.length) {
                assign(skill5, len5, "Film, Theatre, Visual Arts");
            }
            if (Array.isArray(skill6) && skill6.length) {
                assign(skill6, len6, "Fraternity or Sorority - Social");
            }
            if (Array.isArray(skill7) && skill7.length) {
                assign(skill7, len7, "Fraternity or Sorority - Coeducation");
            }
            if (Array.isArray(skill8) && skill8.length) {
                assign(skill8, len8, "International Experiences");
            }
            if (Array.isArray(skill9) && skill9.length) {
                assign(skill9, len9, "Job");
            }
            if (Array.isArray(skill10) && skill10.length) {
                assign(skill10, len10, "Living Learning Community");
            }
            if (Array.isArray(skill11) && skill11.length) {
                assign(skill11, len11, "Media Publications Journalism");
            }
            if (Array.isArray(skill12) && skill12.length) {
                assign(skill12, len12, "Military");
            }
            if (Array.isArray(skill13) && skill13.length) {
                assign(skill13, len13, "Music/Dance");
            }
            if (Array.isArray(skill14) && skill14.length) {
                assign(skill14, len14, "Pre Professional");
            }
            if (Array.isArray(skill15) && skill15.length) {
                assign(skill15, len15, "Professional Experiences");
            }
            if (Array.isArray(skill16) && skill16.length) {
                assign(skill16, len16, "Research");
            }
            if (Array.isArray(skill17) && skill17.length) {
                assign(skill17, len17, "Service, Public Service");
            }
            if (Array.isArray(skill18) && skill18.length) {
                assign(skill18, len18, "Sports");
            }
            if (Array.isArray(skill19) && skill19.length) {
                assign(skill19, len19, "Student Government");
            }
            if (Array.isArray(skill20) && skill20.length) {
                assign(skill20, len20, "Other Student Clubs & Organizations");
            }
        }

        return res.json(act);
    });
};





exports.studentsByDataSet = (req,res) => {
/*in http://localhost:8080/api/students/data/set------- */
   /* {
        "options": ["3","5","13"]
    }*/

    /*
    Cases:
    1:Race and Major ---2/3
    2: Race and Gender ---1/2
    3: Race,major and gender --1/2/3
    4: major and gender ----1/3
    5: major ---3
    6: gender -- 1
    7: race --2
     */
    /*var data = req.body.options;
    console.log(" options chosen: " + data);
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);*/
    Student.find({}, (err, student) => {
        var data = req.body.options;
        console.log(" options chosen: " + data);
        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
        console.log(Number(data[2]));
        if (err) {
            res.status(400).send(err);
        }
        //only parse through students who fit data criteria
        else if (student.length) {
            console.log(student.length);
            var studentsMatch = [];
            for (var b = 0, v = student.length; b < v; b++) {
                //console.log(student[b].survey.gender.toString() + student[b].survey.raceEthnicity + student[b].survey.major);
                if ((student[b].survey.gender  === data[0])&& (student[b].survey.raceEthnicity === data[1]) &&  (student[b].survey.major == data[2])){
                    console.log(student[b].survey.gender);
                    console.log(student[b].survey.raceEthnicity);
                    console.log(student[b].survey.major);
                    studentsMatch.push(student[b].id);
                    console.log(student[b].id);
                }
                else {
                    ///
                }
            }
            return res.json(studentsMatch)
        }
    })};
