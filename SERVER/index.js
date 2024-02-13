const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

//Making use of the router
const usersRouter = require("./routes/user.route")
app.use("/users", usersRouter)



app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`);
})