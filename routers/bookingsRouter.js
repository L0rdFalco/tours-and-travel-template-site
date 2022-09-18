const express = require("express")
const bookingsController = require("../controllers/bookingsController.js")
const authController = require("../controllers/authController.js")

const BookingsRouter = express.Router()

BookingsRouter.use(authController.protect) //protects all tours

BookingsRouter.route("/").get(authController.restrictTo("admin"), bookingsController.getAllBookings)
BookingsRouter.route("/:userid")
    .get(authController.restrictTo("admin", "user"),
        bookingsController.getAllBookings)

BookingsRouter.route("/b/:bookingid")
    .get(authController.restrictTo("admin", "user"), bookingsController.getSingleBooking)
    .delete(authController.restrictTo("admin"), bookingsController.deleteSingleBooking)

BookingsRouter.route("book-now").post(
    authController.restrictTo("admin", "user"),
    bookingsController.createSingleBooking)


module.exports = BookingsRouter