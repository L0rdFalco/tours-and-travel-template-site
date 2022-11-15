const express = require("express")
const repliesController = require("../controllers/repliesController.js")

const repliesRouter = express.Router()

repliesRouter.route("/").post(repliesController.createNewReply)

module.exports = repliesRouter