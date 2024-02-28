const express = require("express");
const router = express.Router();
//Getting from user.controller.js
const {getLandingPage, registerUser, authenticateUser, getDashboard} = require("../controllers/user.controller");
router.get("/", getLandingPage)
router.post("/signUp", registerUser)
router.post("/signin", authenticateUser)
router.get("/dashboard", getDashboard)



module.exports = router;