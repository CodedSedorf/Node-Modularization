const studentModel = require("../models/student.model");

const getStudentLandingPage = (req, res) =>{
    res.render("index")
}

const getStudentSignupPage = (req, res) =>{
    res.render("student/signup")
}

const registerStudentToDatabase = (req, res) =>{
    console.log(req.body);
    let form = new studentModel(req.body);
    form.save()
}



module.exports = {getStudentLandingPage, getStudentSignupPage, registerStudentToDatabase}