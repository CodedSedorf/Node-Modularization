// const express = require("express");
// const router = express.Router()
// const {adminSignup} = require("../controllers/admin.controller");





// router.post("/signup", adminSignup);


const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.post("/signup", adminController.adminSignup);

module.exports = router;
