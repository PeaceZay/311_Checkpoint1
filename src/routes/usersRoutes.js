const express = require("express");
let router = new express.Router()
let controller = require("../controllers/userCtrl");

// get summary of users
router.get("/users2", controller.usersSummary)

// get details of a single user given its id
router.get("/users2/:id", controller.userDetails)

// create a new user
router.post("/users2/", controller.createUser)

// update a user, given its id
router.put("/users2/:id", controller.updateUser)

// delete a user, given its id
router.delete("/users2/:id", controller.deleteUser)

module.exports = router;