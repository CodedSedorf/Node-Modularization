const express = require("express");
const router = express.Router();


// const studentController = require("../controllers/student.controller")
const {getStudentLandingPage, getStudentSignupPage, registerStudentToDatabase} = require("../controllers/student.controller")
// router.get("/", studentController.getStudentLandingPage)

// router.get("/signup", studentController.getStudentSignupPage)

//Using destructuring (Instead of the commented codes but both works perfectly.)
router.get("/", getStudentLandingPage)

router.get("/signup", getStudentSignupPage)

router.post("/signup", registerStudentToDatabase)


module.exports = router;