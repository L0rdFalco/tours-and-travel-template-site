const express = require("express")
const viewsController = require("../controllers/viewsController.js")
const authController = require("../controllers/authController.js")
const ViewsRouter = express.Router()

ViewsRouter.route("/").get(viewsController.getOverviewPage)
ViewsRouter.route("/tour/:slug").get(viewsController.getSingleTourPage)
ViewsRouter.route("/auth-wall").get(viewsController.getAuthWall)
ViewsRouter.route("/forgotpassword").get(viewsController.getForgotPasswordPage)
ViewsRouter.route("/my-dashboard").get(authController.protect, authController.isLoggedIn, viewsController.getDashboardPage)
ViewsRouter.route("/bookings-panel").get(authController.protect, authController.isLoggedIn, viewsController.getBookingsPanel)
ViewsRouter.route("/reviews-panel").get(authController.protect, authController.isLoggedIn, viewsController.getReviewsPanel)
ViewsRouter.route("/users-panel").get(authController.protect, authController.isLoggedIn, viewsController.getUsersPanel)
ViewsRouter.route("/security").get(authController.protect, authController.isLoggedIn, viewsController.getSecuritypage)


module.exports = ViewsRouter