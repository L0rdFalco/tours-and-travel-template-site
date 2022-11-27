const express = require("express")
const paymentController = require("../controllers/paymentController.js")
const authController = require("../controllers/authController.js")

const PaypalRouter = express.Router()


PaypalRouter.route("/").post(authController.protect, paymentController.createOrder)
PaypalRouter.route("/:orderID/capture").post(authController.protect, paymentController.capturePayment)

module.exports = PaypalRouter