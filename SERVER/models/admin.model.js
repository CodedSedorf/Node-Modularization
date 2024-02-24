const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const adminSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
})
adminSchema.pre("save", async function (next){
    try {
       if (!this.isModified("password")) {
        return next();
       }
       const hashedPassword = await bcrypt.hash(this.password, 10);
       this.password = hashedPassword;
       next();
    } catch (err) {
        next(err)
    }
})
let adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel