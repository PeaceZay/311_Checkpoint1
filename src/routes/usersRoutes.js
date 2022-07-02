const express = require("express");
let router = new express.Router()
let controller = require("../controllers/userCtrl");

// get summary of users
router.get("/users",controller.usersSummary)

// get details of a single user given its id
router.get("/users/:id", controller.userDetails)

// create a new user
router.post("/users/", controller.createUser)

// update a user, given its id
router.put("/users/:id", controller.updateUser)

// delete a user, given its id
router.delete("/users/:id", controller.deleteUser)

module.exports = router;