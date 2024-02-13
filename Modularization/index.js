const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");
const URI = process.env.URI;

mongoose.connect(URI)
.then((response)=>{
    console.log("Mongoose is successfully connected")
})
.catch((err)=>{
    console.log("Mongoose has refused to connect")
    console.log(err);
})
const userRouter = require("./routes/student.route");
const router = require("./routes/student.route");

//Middle-Ware
app.use(express.urlencoded({extended: true}));
app.use("/student", userRouter)

app.get("/", (req, res)=>{
    res.render("student/landing")
}) 

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`);
})