const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
})

let userModel = mongoose.model("new_backend2", userSchema);





module.exports = userModel;