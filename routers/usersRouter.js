const express = require("express")
const authController = require("../controllers/authController.js")
const usersController = require("../controllers/usersController.js")

const UsersRouter = express.Router();

UsersRouter.route("/signup").post(authController.signup)
UsersRouter.route("/login").post(authController.login)
UsersRouter.route("/logout").get(authController.protect, authController.logout)
UsersRouter.route("/forgotpassword").post(authController.forgotpassword)
UsersRouter.route("/resetpassword/:token").post(authController.protect, authController.restrictTo("admin", "user"), authController.resetpassword)
UsersRouter.route("/updatemydata").patch(authController.protect, authController.restrictTo("admin", "user"), usersController.updateMyData)

UsersRouter.route("/updatepassword")
    .patch(authController.protect,
        authController.restrictTo("admin", "user"),
        authController.updatepassword)


UsersRouter.route("/")
    .get(usersController.getAllUsers)
    .post(authController.protect, authController.restrictTo("admin", "user"), usersController.createSingleUser)

UsersRouter.route("/:user-id")
    .get(usersController.getSingleUser)
    .patch(authController.protect, authController.restrictTo("admin", "user"), usersController.updateSingleUser)
    .delete(authController.protect, authController.restrictTo("admin", "user"), usersController.deleteSingleUser)

module.exports = UsersRouter
