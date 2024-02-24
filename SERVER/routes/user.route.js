const express = require("express");
const router = express.Router();
//Getting from user.controller.js
const {getLandingPage, registerUser} = require("../controllers/user.controller");
router.get("/", getLandingPage)
router.post("/signUp", registerUser)



module.exports = router;