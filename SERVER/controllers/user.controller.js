const { response } = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")

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
    .then((response)=>{
        console.log("user signed up");
        res.send({message: "User signed up successfully", status: true})
    })
    .catch((err)=>{
        res.send({message: "an error occured", status: false})
    })  
}
//Verifying Email and Password for sign in
const authenticateUser = (req, res) => {
    let { password } = req.body;

    userModel.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                user.validatePassword(password, (err, same) => {
                //(err, same) we passed as function in our model.js is received here
                    if (!same) {
                        res.send({ status: false, message: "Email or Password is incorrect" });
                    } else {
                        let token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET, {expiresIn: "1h"})
                        console.log(token);
                        res.send({ status: true, message: "Login is successful", token });
                    }
                });
            } else {
                console.log("User does not exist");
                res.send({ status: false, message: "Email or password is incorrect" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({ status: false, message: "An error occurred" });
        });
};

const getDashboard = (req, res)=>{
    let token = req.headers.authorization.split(" ") [1];
    jwt.verify(token, process.env.JWT_SECRET, (err, result)=>{
        if (err) {
            console.log(err);
            res.send({status: false, message: "token is invalid"})
        }else{
            console.log(result.email);
            // userModel.findOne({fullName: result.fullName})
            res.send({status:true, message: "Token is valid"})
        }
    })
}


module.exports = {getLandingPage, registerUser,authenticateUser, getDashboard}
