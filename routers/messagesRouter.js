const express = require("express");
const messagesController = require("../controllers/messagesController.js")
const authController = require("../controllers/authController.js")

const MessagesRouter = express.Router()


MessagesRouter.route("/")
    .get(messagesController.getAllMessages)
    .post(messagesController.createSingleMessage)
MessagesRouter.route("/:id")
    .get(messagesController.getSingleMessage)
    .patch(messagesController.updateSingleMessage)
    .delete(messagesController.deleteSingleMessage)

module.exports = MessagesRouter