const express = require("express")
const authController = require("../controllers/authController.js")
const usersController = require("../controllers/usersController.js")

const UsersRouter = express.Router();

UsersRouter.route("/")
    .get(usersController.getAllUsers)
    .post(authController.protect, authController.restrictTo("admin", "user"), usersController.createSingleUser)

UsersRouter.route("/:user-id")
    .get(usersController.getSingleUser)
    .patch(authController.protect, authController.restrictTo("admin", "user"), usersController.updateSingleUser)
    .delete(authController.protect, authController.restrictTo("admin", "user"), usersController.deleteSingleUser)

module.exports = UsersRouter
