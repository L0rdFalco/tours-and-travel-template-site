const express = require("express")
const authController = require("../controllers/authController.js")
const usersController = require("../controllers/usersController.js")

const UsersRouter = express.Router()

module.exports = UsersRouter