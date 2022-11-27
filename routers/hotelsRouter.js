const express = require("express")
const hotelsController = require("../controllers/hotelsController.js")
const authController = require("../controllers/authController.js")
const ReviewsRouter = require("./reviewsRouter.js")
const HotelsRouter = express.Router()

HotelsRouter.use("/:hotelid/reviews", ReviewsRouter)


HotelsRouter.route("/")
    .get(hotelsController.getAllHotels)
    .post(authController.protect, hotelsController.createSingleHotel)
HotelsRouter.route("/:id")
    .get(hotelsController.getSingleHotel)
    .patch(authController.protect, hotelsController.updateSingleHotel)
    .delete(authController.protect, hotelsController.deleteSingleHotel)

module.exports = HotelsRouter