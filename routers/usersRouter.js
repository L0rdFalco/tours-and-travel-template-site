const express = require("express")
const passport = require("passport")
const authController = require("../controllers/authController.js")
const usersController = require("../controllers/usersController.js")

const UsersRouter = express.Router();

UsersRouter.route("/gplus-login").get(authController.gplusLogin) // pops out consent screen
UsersRouter.route("/gcloud-webhook").get(passport.authenticate('google'), authController.googleCloudWebhook)// called by google cloud when user consents

UsersRouter.route("/facebookAuth").get(authController.facebookAuth)
UsersRouter.route("/fbPermissions/").get(authController.processFacebookPermissions)

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
