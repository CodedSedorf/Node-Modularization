const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
//Cross Origin Resource Sharing is responsible for blocking resources from different origins. Our frontend is from port3000 while backend is port3500, CORS will block them from connecting. Here I import the CORS
const cors = require("cors");
const mongoose = require("mongoose");
const URI = process.env.URI;

mongoose.connect(URI)
.then((response)=>{
    console.log("Mongoose eyah connected successfully")
})
.catch((err)=>{
    console.log(err)
})

//In this line of code, I set the CORS as a middleware. Any request that is coming to this server, pass through CORS.CORS will not block frontend from connecting to our server again.
app.use(cors())

//To get req.body you need urlencoded (This is to get req.body)
app.use(express.urlencoded({extended: true}))

//when I ran app.use(express.urlencoded({extended: true})), I am getting an empty object because it's getting from external source. To get real value from frontend, run the below
app.use(express.json())

//Making use of the router
const usersRouter = require("./routes/user.route")
app.use("/users", usersRouter)

const adminRouter = require("./routes/admin.routes")
app.use("/admin", adminRouter)



app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`);
})