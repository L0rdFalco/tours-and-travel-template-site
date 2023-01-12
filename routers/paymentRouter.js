const express = require("express")
const paymentController = require("../controllers/paymentController.js")
const authController = require("../controllers/authController.js")

const PaypalRouter = express.Router()


PaypalRouter.route("/").post(paymentController.createOrder)
PaypalRouter.route("/:orderID/capture").post(paymentController.capturePayment)

module.exports = PaypalRouter