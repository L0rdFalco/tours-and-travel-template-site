const express = require("express")
const bookingsController = require("../controllers/bookingsController.js")
const authController = require("../controllers/authController.js")

const BookingsRouter = express.Router()

BookingsRouter.route("book-now").post(bookingsController.createSingleBooking)

module.exports = BookingsRouter