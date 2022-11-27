const express = require("express")
const toursController = require("../controllers/toursController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const ToursRouter = express.Router()

ToursRouter.use("/:tourid/reviews", ReviewsRouter)


ToursRouter.route("/get-tours-in/:distance/center/:latlong/unit/:unit").get(toursController.getToursWithin)
ToursRouter.route("/get-monthly-plan/:year").get(toursController.getMonthlyPlan)


ToursRouter.route("/")
    .get(toursController.getAllTours)
    .post(authController.protect, toursController.createSingleTour)
ToursRouter.route("/:id")
    .get(toursController.getSingleTour)
    .patch(authController.protect, toursController.updateSingleTour)
    .delete(authController.protect, toursController.deleteSingleTour)

module.exports = ToursRouter