const express = require("express")
const restaurantController = require("../controllers/restaurantController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const restaurantRouter = express.Router()

restaurantRouter.use("/:restaurantid/reviews", ReviewsRouter)


restaurantRouter.route("/")
    .get(restaurantController.getAllRestaurants)
    .post(restaurantController.createSingleRestaurant)
restaurantRouter.route("/:id")
    .get(restaurantController.getSingleRestaurant)
    .patch(authController.protect, authController.restrictTo("admin", "lead-guide"), restaurantController.updateSingleRestaurant)
    .delete(authController.protect, authController.restrictTo("admin", "lead-guide"), restaurantController.deleteSingleRestaurant)

module.exports = restaurantRouter