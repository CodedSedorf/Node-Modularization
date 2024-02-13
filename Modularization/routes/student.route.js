const express = require("express");
const router = express.Router();
const studentModel = require("../models/student.model");



router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/signup", (req, res)=>{
    res.render("student/signup")
})

router.post("/signup", (req, res) =>{
    console.log(req.body);
    let form = new studentModel(req.body);
    form.save()
})


module.exports = router;