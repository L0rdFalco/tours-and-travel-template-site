const express = require("express")
const profileController = require("../controllers/profileController.js")
const authController = require("../controllers/authController.js")
const profileRouter = express.Router()

profileRouter.route("/").post(authController.protect, authController.restrictTo("admin", "user"), profileController.createProfileInfo)
profileRouter.route("/:userid").patch(authController.protect, authController.restrictTo("admin", "user"), profileController.updateProfileInfo)

module.exports = profileRouter

