const express = require("express")
const profileController = require("../controllers/profileController.js")
const authController = require("../controllers/authController.js")
const profileRouter = express.Router()

profileRouter.route("/").post(profileController.createProfileInfo)
profileRouter.route("/:userid").patch(profileController.updateProfileInfo)

module.exports = profileRouter

