const express = require("express")
const destinationController = require("../controllers/destinationController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const destinationRouter = express.Router()

destinationRouter.use("/:destinationid/reviews", ReviewsRouter)


destinationRouter.route("/")
    .get(destinationController.getAllDestinations)
    .post(destinationController.createSingleDestination)
destinationRouter.route("/:id")
    .get(destinationController.getSingleDestination)
    .patch(destinationController.updateSingleDestination)
    .delete(destinationController.deleteSingleDestination)

module.exports = destinationRouter