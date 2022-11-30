const express = require("express")
const destinationController = require("../controllers/destinationController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const destinationRouter = express.Router()

destinationRouter.use("/:destinationid/reviews", ReviewsRouter)


destinationRouter.route("/")
    .get(destinationController.getAllDestinations)
    .post(authController.protect, authController.restrictTo("admin", "lead-guide"), destinationController.createSingleDestination)
destinationRouter.route("/:id")
    .get(destinationController.getSingleDestination)
    .patch(authController.protect, authController.restrictTo("admin", "lead-guide"), destinationController.updateSingleDestination)
    .delete(authController.protect, authController.restrictTo("admin", "lead-guide"), destinationController.deleteSingleDestination)

module.exports = destinationRouter