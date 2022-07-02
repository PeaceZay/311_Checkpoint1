const express = require("express");
const PORT = 8000;
const bodyParse = require("body-parser");

let app = express();


app.use(bodyParse.json())

// get the route definitions
const userRoutes = require("./routes/usersRoutes");

// tell express app to use the routes
app.use(userRoutes)

// start the express app and log what port i'm on
app.listen(PORT, function(){
    console.log("API Server started on port", PORT);
});

