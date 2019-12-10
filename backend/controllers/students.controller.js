const mongoose = require('mongoose'), 
    Student = require('../models/students.model'),
    util = require('util'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
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
    res.status(200);
    res.json(req.student);
};

// Displays student survey information - get request
exports.getSurveyInfo = (req, res) => {
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

exports.studentsByDataSet = (req,res) => {
    /*TO TEST: in Postman: http://localhost:8080/api/students/data/
           ------- ["#1-5", "#1-6", "#1-17"] --------
           example:
     {
         "options": ["3","5","13"]
     }

     */
    //let dummyData = [];
    let act = [];
    let len1 = 0, len2 = 0, len3 = 0, len4 = 0, len5 = 0, len6 = 0, len7 = 0, len8 = 0, len9 = 0, len10 = 0, len11 = 0,
        len12 = 0, len13 = 0, len14 = 0, len15 = 0, len16 = 0, len17 = 0, len18 = 0, len19 = 0, len20 = 0;
    let skill1 = [], skill2 = [], skill3 = [], skill4 = [], skill5 = [], skill6 = [], skill7 = [], skill8 = [],
        skill9 = [], skill10 = [], skill11 = [], skill12 = [], skill13 = [], skill14 = [], skill15 = [], skill16 = [],
        skill17 = [], skill18 = [], skill19 = [], skill20 = [];
    Student.find({}, (err, student) => {
        console.log(student.length);
        let data = req.body.arr;
        console.log(data);
        //console.log(" options chosen: " + data);
        if (err) {
            res.status(400).send(err);
        }
       /*
        If we decide to switch to dummy data here, rather than populate the Database:
        here will be if students < 1 and other else if condition will be > 5
        else if (student.length > 1){
            var precision = 100; // 2 decimals
            var d = Array.from({length:8}, () => Math.floor(1 + Math.random() * (4 * precision - 1 * precision) + 1 * precision) / (1*precision));
            dummyData.push(['Design Competition Team',[[d]]]);
            console.log(dummyData);
            return res.json(dummyData);
        }*/
        else if (student.length) {
            //console.log(student.length);
            let studentsMatch = [];
            for (let b = 0, v = student.length; b < v; b++) {
                if ( Number(data[0]) !== 0 && Number(data[1]) !== 0 && Number(data[2]) !== 0 && student[b].survey.gender === data[0] && student[b].survey.raceEthnicity === data [1] && student[b].survey.major === data [2]) {
                    studentsMatch.push(student[b]);
                }
                else if (student[b].survey.gender === data[0] && Number(data[0])!== 0 && Number(data[1]) === 0 && Number(data[2]) === 0) {
                    //Sort by Gender
                    studentsMatch.push(student[b]);
                } else if (student[b].survey.raceEthnicity === data [1] && Number(data[1]) !== 0 && Number(data[0]) === 0 && Number(data[2]) === 0) {
                    //Sort by Race
                    studentsMatch.push(student[b]);
                } else if (student[b].survey.major === data [2] && Number(data[2]) !== 0 && Number(data[0]) === 0 && Number(data[1]) === 0) {
                    //Sort by Major
                    studentsMatch.push(student[b]);
                } else if (Number(data[0]) !== 0 && Number(data [1]) !== 0 && student[b].survey.gender === data[0] && student[b].survey.raceEthnicity === data[1]) {
                    //Sort by Gender and Race
                    studentsMatch.push(student[b]);
                } else if (Number(data[0]) !== 0 && Number(data [2]) !== 0 && student[b].survey.gender === data[0] && student[b].survey.major ===data[2]) {
                    //Sort by Gender and Major
                    studentsMatch.push(student[b]);
                } else if (Number(data[1]) !== 0 && Number(data [2]) !== 0 && student[b].survey.raceEthnicity === data[1] && student[b].survey.major === data[2]) {
                    //Sort by Gender and Race
                    studentsMatch.push(student[b]);
                } else if (Number(data[0]) === 0 && Number(data[1]) === 0 && Number(data[2]) === 0) {
                    //NO sort specified (ALL students in the database)
                    studentsMatch.push(student[b]);
                }
            }
            if(studentsMatch.length === 0){
                //console.log("No students fit search criteria");
                res.json(studentsMatch);
            }

            if (Array.isArray(studentsMatch) && studentsMatch.length) {
                function assign(skillNum, len, activity) {
                    /* console.log("////////////" + activity);
                     console.log("Number of students with " + activity + ": " + len);
                     console.log("Dividing the totals: [" + String(skillNum) + "] by " + len + ":");*/
                    for (let i = 0; i < skillNum[0].length; i++) {
                        (skillNum[0][i] /= (len));
                        skillNum[0][i] = +skillNum[0][i].toFixed(2).valueOf();
                    }
                    //console.log(skillNum);
                    act.push([activity, skillNum]);
                    //console.log("////////////\n")
                }
                for (let sel = 0, selLength = studentsMatch.length; sel < selLength; sel++) {
                    let outComes = [studentsMatch[sel].survey.E2, studentsMatch[sel].survey.E3,
                        studentsMatch[sel].survey.E4, studentsMatch[sel].survey.E5, studentsMatch[sel].survey.E6,
                        studentsMatch[sel].survey.E7, studentsMatch[sel].survey.E8, studentsMatch[sel].survey.E9];
                    if (Array.isArray(studentsMatch[sel].survey.activities) && studentsMatch[sel].survey.activities.length >= 1 && studentsMatch[sel].survey.activities && outComes.length === 8) {
                        //console.log("//////New Student//////");
                        let arrNum = studentsMatch[sel].survey.activities.map(Number);
                        //caused errors if the order of activities was incorrect on survey
                        arrNum.sort(function (a, b) {
                            return a - b
                        });
                        //console.log("I should match [3,7,8,16]" + arrNum); //[3,7,8,16]
                        let strArr = arrNum.map(function (e) {
                            return e.toString()
                        });
                        /*console.log(strArr); //["3","7","8","16"]
                        console.log('OUTCOMES LENGTH: ' + outComes.length);
                        console.log(outComes); //[2,4,1,2,2,4,1,1]
                        console.log(studentsMatch[sel]._id);
                        console.log("//////End Student//////\n");*/
                        for (let i = 0; i < studentsMatch[sel].survey.activities.length; i++) {
                            if (strArr[i] === "1") {
                                len1++;
                                skill1.push(outComes);
                                if (Array.isArray(skill1) && skill1.length) {
                                    for (let e1 = 0, n1 = skill1.length - 1; e1 < n1; e1++) {
                                        let arrayE11 = skill1[e1];
                                        let arrayE21 = skill1[e1 + 1];
                                        let arrayE31 = arrayE11.map((v1, m1) => v1 + arrayE21[m1]);
                                        skill1 = [];
                                        skill1.push(arrayE31);
                                    }
                                }
                            } else if (strArr[i] === "2") {
                                len2++;
                                skill2.push(outComes);
                                if (Array.isArray(skill2) && skill2.length) {
                                    for (let e2 = 0, n2 = skill2.length - 1; e2 < n2; e2++) {
                                        let arrayE12 = skill2[e2];
                                        let arrayE22 = skill2[e2 + 1];
                                        let arrayE32 = arrayE12.map((v2, m2) => v2 + arrayE22[m2]);
                                        skill2 = [];
                                        skill2.push(arrayE32);
                                    }
                                }
                            } else if (strArr[i] === "3") {
                                len3++;
                                skill3.push(outComes);
                                if (Array.isArray(skill3) && skill3.length) {
                                    for (let e3 = 0, n3 = skill3.length - 1; e3 < n3; e3++) {
                                        let arrayE13 = skill3[e3];
                                        let arrayE23 = skill3[e3 + 1];
                                        let arrayE33 = arrayE13.map((v3, m3) => v3 + arrayE23[m3]);
                                        skill3 = [];
                                        skill3.push(arrayE33);
                                    }
                                }
                            } else if (strArr[i] === "4") {
                                len4++;
                                skill4.push(outComes);
                                if (Array.isArray(skill4) && skill4.length) {
                                    for (let e4 = 0, n4 = skill4.length - 1; e4 < n4; e4++) {
                                        let arrayE14 = skill4[e4];
                                        let arrayE24 = skill4[e4 + 1];
                                        let arrayE34 = arrayE14.map((v4, m4) => v4 + arrayE24[m4]);
                                        skill4 = [];
                                        skill4.push(arrayE34);
                                    }
                                }
                            } else if (strArr[i] === "5") {
                                len5++;
                                skill5.push(outComes);
                                if (Array.isArray(skill5) && skill5.length) {
                                    for (let e5 = 0, n5 = skill5.length - 1; e5 < n5; e5++) {
                                        let arrayE15 = skill5[e5];
                                        let arrayE25 = skill5[e5 + 1];
                                        let arrayE35 = arrayE15.map((v5, m5) => v5 + arrayE25[m5]);
                                        skill5 = [];
                                        skill5.push(arrayE35);
                                    }
                                }
                            } else if (strArr[i] === "6") {
                                len6++;
                                skill6.push(outComes);
                                if (Array.isArray(skill6) && skill6.length) {
                                    for (let e6 = 0, n6 = skill6.length - 1; e6 < n6; e6++) {
                                        let arrayE16 = skill6[e6];
                                        let arrayE26 = skill6[e6 + 1];
                                        let arrayE36 = arrayE16.map((v6, m6) => v6 + arrayE26[m6]);
                                        skill6 = [];
                                        skill6.push(arrayE36);
                                    }
                                }
                            } else if (strArr[i] === "7") {
                                len7++;
                                skill7.push(outComes);
                                if (Array.isArray(skill7) && skill7.length) {
                                    for (let e7 = 0, n7 = skill7.length - 1; e7 < n7; e7++) {
                                        let arrayE17 = skill7[e7];
                                        let arrayE27 = skill7[e7 + 1];
                                        let arrayE37 = arrayE17.map((v7, m7) => v7 + arrayE27[m7]);
                                        skill7 = [];
                                        skill7.push(arrayE37);
                                    }
                                }
                            } else if (strArr[i] === "8") {
                                len8++;
                                skill8.push(outComes);
                                if (Array.isArray(skill8) && skill8.length) {
                                    for (let e8 = 0, n8 = skill8.length - 1; e8 < n8; e8++) {
                                        let arrayE18 = skill8[e8];
                                        let arrayE28 = skill8[e8 + 1];
                                        let arrayE38 = arrayE18.map((v8, m8) => v8 + arrayE28[m8]);
                                        skill8 = [];
                                        skill8.push(arrayE38);
                                    }
                                }
                            } else if (strArr[i] === "9") {
                                len9++;
                                skill9.push(outComes);
                                if (Array.isArray(skill9) && skill9.length) {
                                    for (let e9 = 0, n9 = skill9.length - 1; e9 < n9; e9++) {
                                        let arrayE19 = skill9[e9];
                                        let arrayE29 = skill9[e9 + 1];
                                        let arrayE39 = arrayE19.map((v9, m9) => v9 + arrayE29[m9]);
                                        skill9 = [];
                                        skill9.push(arrayE39);
                                    }
                                }
                            } else if (strArr[i] === "10") {
                                len10++;
                                skill10.push(outComes);
                                if (Array.isArray(skill10) && skill10.length) {
                                    for (let e10 = 0, n10 = skill10.length - 1; e10 < n10; e10++) {
                                        let arrayE110 = skill10[e10];
                                        let arrayE210 = skill10[e10 + 1];
                                        let arrayE310 = arrayE110.map((v10, m10) => v10 + arrayE210[m10]);
                                        skill10 = [];
                                        skill10.push(arrayE310);
                                    }
                                }
                            } else if (strArr[i] === "11") {
                                len11++;
                                skill11.push(outComes);
                                if (Array.isArray(skill11) && skill11.length) {
                                    for (let e11 = 0, n11 = skill11.length - 1; e11 < n11; e11++) {
                                        let arrayE111 = skill11[e11];
                                        let arrayE211 = skill11[e11 + 1];
                                        let arrayE311 = arrayE111.map((v11, m11) => v11 + arrayE211[m11]);
                                        skill11 = [];
                                        skill11.push(arrayE311);
                                    }
                                }
                            } else if (strArr[i] === "12") {
                                len12++;
                                skill12.push(outComes);
                                if (skill12.length > 1) {
                                    for (let e12 = 0, n12 = skill12.length - 1; e12 < n12; e12++) {
                                        let arrayE112 = skill12[e12];
                                        let arrayE212 = skill12[e12 + 1];
                                        let arrayE312 = arrayE112.map((v12, m12) => v12 + arrayE212[m12]);
                                        skill12 = [];
                                        skill12.push(arrayE312);
                                        console.log(arrayE312);
                                    }
                                }
                            } else if (strArr[i] === "13") {
                                len13++;
                                skill13.push(outComes);
                                if (Array.isArray(skill13) && skill13.length) {
                                    for (let e13 = 0, n13 = skill13.length - 1; e13 < n13; e13++) {
                                        let arrayE113 = skill13[e13];
                                        let arrayE213 = skill13[e13 + 1];
                                        let arrayE313 = arrayE113.map((v13, m13) => v13 + arrayE213[m13]);
                                        /*for (let x13 = 0, y13 = arrayE313.length; x13 < y13; x13++) {
                                            arrayE313[x13] = arrayE313[x13]; //the average value of the outcomes
                                        }*/
                                        skill13 = [];
                                        skill13.push(arrayE313);
                                    }
                                }
                            } else if (strArr[i] === ("14")) {
                                len14++;
                                skill14.push(outComes);
                                if (Array.isArray(skill14) && skill14.length) {
                                    for (let e14 = 0, n14 = skill14.length - 1; e14 < n14; e14++) {
                                        let arrayE114 = skill14[e14];
                                        let arrayE214 = skill14[e14 + 1];
                                        let arrayE314 = arrayE114.map((v14, m14) => v14 + arrayE214[m14]);
                                        skill14 = [];
                                        skill14.push(arrayE314);
                                    }
                                }
                            } else if (strArr[i] === "15") {
                                len15++;
                                skill15.push(outComes);
                                if (Array.isArray(skill15) && skill15.length) {
                                    for (let e15 = 0, n15 = skill15.length - 1; e15 < n15; e15++) {
                                        let arrayE115 = skill15[e15];
                                        let arrayE215 = skill15[e15 + 1];
                                        let arrayE315 = arrayE115.map((v15, m15) => v15 + arrayE215[m15]);
                                        skill15 = [];
                                        skill15.push(arrayE315);
                                    }
                                }
                            } else if (strArr[i] === "16") {
                                len16++;
                                skill16.push(outComes);
                                if (Array.isArray(skill16) && skill16.length) {
                                    for (let e16 = 0, n16 = skill16.length - 1; e16 < n16; e16++) {
                                        let arrayE116 = skill16[e16];
                                        let arrayE216 = skill16[e16 + 1];
                                        let arrayE316 = arrayE116.map((v16, m16) => v16 + arrayE216[m16]);
                                        skill16 = [];
                                        skill16.push(arrayE316);
                                    }
                                }
                            } else if (strArr[i] === "17") {
                                len17++;
                                skill17.push(outComes);
                                if (Array.isArray(skill17) && skill17.length) {
                                    for (let e17 = 0, n17 = skill17.length - 1; e17 < n17; e17++) {
                                        let arrayE117 = skill17[e17];
                                        let arrayE217 = skill17[e17 + 1];
                                        let arrayE317 = arrayE117.map((v17, m17) => v17 + arrayE217[m17]);
                                        skill17 = [];
                                        skill17.push(arrayE317);
                                    }
                                }
                            } else if (strArr[i] === "18") {
                                len18++;
                                skill18.push(outComes);
                                if (Array.isArray(skill18) && skill18.length) {
                                    for (let e18 = 0, n18 = skill18.length - 1; e18 < n18; e18++) {
                                        let arrayE118 = skill18[e18];
                                        let arrayE218 = skill18[e18 + 1];
                                        let arrayE318 = arrayE118.map((v18, m18) => v18 + arrayE218[m18]);
                                        skill18 = [];
                                        skill18.push(arrayE318);
                                    }
                                }
                            } else if (strArr[i] === "19") {
                                len19++;
                                skill19.push(outComes);
                                if (Array.isArray(skill19) && skill19.length) {
                                    for (let e19 = 0, n19 = skill19.length - 1; e19 < n19; e19++) {
                                        let arrayE119 = skill19[e19];
                                        let arrayE219 = skill19[e19 + 1];
                                        let arrayE319 = arrayE119.map((v19, m19) => v19 + arrayE219[m19]);
                                        skill19 = [];
                                        skill19.push(arrayE319);
                                    }
                                }
                            } else if (strArr[i] === "20") {
                                len20++;
                                skill20.push(outComes);
                                if (Array.isArray(skill20) && skill20.length) {
                                    for (let e20 = 0, n20 = skill20.length - 1; e20 < n20; e20++) {
                                        let arrayE120 = skill20[e20];
                                        let arrayE220 = skill20[e20 + 1];
                                        let arrayE320 = arrayE120.map((v20, m20) => v20 + arrayE220[m20]);
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
            act.push(studentsMatch.length);
            console.log(act);
            return res.json(act);
        }
        else {
            //
        }
    });
}
