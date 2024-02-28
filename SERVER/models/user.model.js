const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")



const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
})

//Hashing Password before saving to databas
let saltRound = 10;
userSchema.pre("save", function(next){
    // console.log(this.password)
    bcryptjs.hash(this.password, saltRound, (err, hashedPassword)=>{
        // console.log(hashedPassword);
        if (err) {
            console.log("Password could not be hashed");
        }else{
            this.password = hashedPassword
            console.log(hashedPassword);
            next()
        }
    })
})

//Checking whether password exist
userSchema.methods.validatePassword = function(password, callback){
    console.log(password);
    bcryptjs.compare(password, this.password, (err, same)=>{
        if (!err) {
           callback(err, same)
        }else{
            next
        }
    })
}



let userModel = mongoose.model("new_backend2", userSchema);





module.exports = userModel;