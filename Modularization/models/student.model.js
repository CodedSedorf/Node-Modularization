const mongoose = require("mongoose");


const studentShema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}
})

const studentModel = mongoose.model("student_collection", studentShema)


module.exports = studentModel;