const express = require("express");
const messagesController = require("../controllers/messagesController.js")
const authController = require("../controllers/authController.js")

const MessagesRouter = express.Router()


MessagesRouter.route("/")
    .get(authController.protect, messagesController.getAllMessages)
    .post(authController.protect, messagesController.createSingleMessage)
MessagesRouter.route("/:id")
    .get(authController.protect, messagesController.getSingleMessage)
    .patch(authController.protect, messagesController.updateSingleMessage)
    .delete(authController.protect, messagesController.deleteSingleMessage)

module.exports = MessagesRouter