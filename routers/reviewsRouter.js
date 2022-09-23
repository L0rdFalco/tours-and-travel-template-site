const express = require("express")
const reviewsController = require("../controllers/reviewsController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = express.Router({ mergeParams: true })

ReviewsRouter.route("/")
    .get(reviewsController.getAllReviews)
    .post(authController.protect, authController.restrictTo("admin", "user"), reviewsController.createSingleReview)

ReviewsRouter.route("/:review_id")
    .get(reviewsController.getSingleReview)
    .patch(authController.protect, authController.restrictTo("admin", "user"), reviewsController.updateSingleReview)
    .delete(authController.protect, authController.restrictTo("admin", "user"), reviewsController.deleteSingleReview)

module.exports = ReviewsRouter