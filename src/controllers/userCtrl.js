
// Function to return a summary of the users on the response
let usersSummary = function(req, res){
    console.log("userSummary");
    res.sendStatus(204);
}
// function to return the detail of a single user on the response
let userDetails = function(req, res){
    console.log("userDetails");
    res.sendStatus(204);
}
// function to create a new user
let createUser = function(req, res){
    console.log("createUser");
    res.sendStatus(204);
}
// function to update a user given its id
let updateUser = function(req, res){
    console.log("updateUser");
    res.sendStatus(204);
}
// function to delete a user given its id
let deleteUser = function(req, res){
    console.log("deleteUser");
    res.sendStatus(204);
}


module.exports = {
    userDetails, usersSummary, createUser, updateUser, deleteUser
}