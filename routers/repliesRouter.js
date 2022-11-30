const express = require("express")
const repliesController = require("../controllers/repliesController.js")
const authController = require("../controllers/authController.js")

const repliesRouter = express.Router()

repliesRouter.route("/").post(authController.protect, authController.restrictTo("admin", "lead-guide"), repliesController.createNewReply)

module.exports = repliesRouter