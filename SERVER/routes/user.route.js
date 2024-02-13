const express = require("express");
const router = express.Router();
//Getting from user.controller.js
const {getLandingPage} = require("../controllers/user.controller");
router.get("/", getLandingPage)



module.exports = router;