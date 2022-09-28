const express = require("express")
const paypalController = require("../controllers/paypalController.js")
const authController = require("../controllers/authController.js")

const PaypalRouter = express.Router()


PaypalRouter.route("/").post(paypalController.createOrder)
PaypalRouter.route("/:orderID/capture").post(paypalController.capturePayment)

module.exports = PaypalRouter