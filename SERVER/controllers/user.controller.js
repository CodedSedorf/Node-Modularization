const userModel = require("../models/user.model");

const getLandingPage = (req, res)=>{
    console.log("Frontend connected successfully")
    res.send(
        // [
        // {firstName: "Olamoyegun", lastName: "Saheed", food: "Jollf-rice"},
        // {firstName: "Dev", lastName: "Sedorf", food: "Amala"},
        // {firstName: "Akinniyi", lastName: "Damilola", food: "Beans"}
        // ]
        ({message: "Welcome to Dev Sedorf Full-Stack Landing page", status: true})
    )
}
const registerUser = (req, res)=>{
    console.log(req.body);
    let form = new userModel(req.body);
    form.save()
    res.send({message: "User signed up successfully", status: true})
}

module.exports = {getLandingPage, registerUser}