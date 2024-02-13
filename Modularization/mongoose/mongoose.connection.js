const mongoose = require("mongoose");
const URI = process.env.URI;

mongoose.connect(URI)
.then((response)=>{
    console.log("Mongoose is successfully connected")
})
.catch((err)=>{
    console.log("Mongoose has refused to connect")
})



module.exports = mongoose