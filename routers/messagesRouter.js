const express = require("express");
const messagesController = require("../controllers/messagesController.js")
const authController = require("../controllers/authController.js")

const MessagesRouter = express.Router()


MessagesRouter.route("/")
    .get(messagesController.getAllMessages)
    .post(messagesController.createSingleMessage)
MessagesRouter.route("/:id")
    .get(messagesController.getSingleMessage)
    .patch(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.updateSingleMessage)
    .delete(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.deleteSingleMessage)

module.exports = MessagesRouter