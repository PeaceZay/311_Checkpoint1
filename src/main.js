const express = require("express");

const bodyParse = require("body-parser");
let dotenv = require("dotenv");
let app = express();
dotenv.config();

// get the app servers port from env, fallback on 8000 if not configured
const PORT = process.env.PORT || 8000;

app.use(bodyParse.json())

// get the route definitions
const userRoutes = require("./routes/usersRoutes");

// tell express app to use the routes
app.use(userRoutes)

// start the express app and log what port i'm on
app.listen(PORT, function(){
    console.log("API Server started on port", PORT);
});

