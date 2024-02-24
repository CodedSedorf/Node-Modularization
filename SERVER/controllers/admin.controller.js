// const adminModel = require("../models/admin.model");

// const adminSignup = (req, res) =>{
//     console.log(req.body);
//     let form = new adminModel(req.body);
//     form.save()
//     res.send({message: "User signed up successfully", status: true})
// }



// module.exports = { adminSignup };



const adminModel = require("../models/admin.model");

const adminSignup = (req, res) => {
    console.log(req.body);
    let form = new adminModel(req.body);
    form.save()
    res.send({ message: "User signed up successfully", status: true })
}

module.exports = { adminSignup };
