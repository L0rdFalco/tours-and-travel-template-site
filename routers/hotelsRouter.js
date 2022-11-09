const express = require("express")
const hotelsController = require("../controllers/hotelsController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const HotelsRouter = express.Router()

HotelsRouter.use("/:hotelid/reviews", ReviewsRouter)


HotelsRouter.route("/")
    .get(hotelsController.getAllHotels)
    .post(hotelsController.createSingleHotel)
HotelsRouter.route("/:id")
    .get(hotelsController.getSingleHotel)
    .patch(authController.protect, authController.restrictTo("admin", "lead-guide"), hotelsController.updateSingleHotel)
    .delete(authController.protect, authController.restrictTo("admin", "lead-guide"), hotelsController.deleteSingleHotel)

module.exports = HotelsRouter