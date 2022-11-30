const express = require("express");
const messagesController = require("../controllers/messagesController.js")
const authController = require("../controllers/authController.js")

const MessagesRouter = express.Router()


MessagesRouter.route("/")
    .get(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.getAllMessages)
    .post(authController.protect, authController.restrictTo("user"), messagesController.createSingleMessage)
MessagesRouter.route("/:id")
    .get(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.getSingleMessage)
    .patch(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.updateSingleMessage)
    .delete(authController.protect, authController.restrictTo("admin", "lead-guide"), messagesController.deleteSingleMessage)

module.exports = MessagesRouter