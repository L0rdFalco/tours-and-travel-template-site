const usersModel = require("../models/usersModel.js")
const reviewsModel = require("../models/reviewsModel.js")
const bookingsModel = require("../models/bookingsModel.js")
const toursModel = require("../models/toursModel.js")


exports.getAuthWall = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: "getAuthWall fail",

        })
    }
}

exports.get404Page = (request, response, next) => {
    try {

        response.status(200).render("404.pug")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAboutUsPage = (request, response, next) => {
    try {
        response.status(200).render("about-us.pug")


    } catch (error) {

        response.status(400).json({
            status: "getAboutUsPage fail",

        })
    }
}
exports.getAddDestinationsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddToursPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getBasicSettingsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getBookingPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getComingSoonPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getContactPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDashboardPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationDetailPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationGridSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationGridPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationListSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationListPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getFAQsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getGuideDetailPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHireGuidePage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelDetailPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelGridSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelGridPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelListSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelListPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getInvoicePage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getLoginPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageDestinationsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageHotelsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageRestaurantsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageToursPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getMessagesPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getMyProfilePage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getPricingPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantDetailPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantGridSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantGridPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantListSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantListPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSignupPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSiteSettingsPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSuccessPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSingleTourDetailPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursGridSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursGridPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListSidebarPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSingleTourDetailPage = (request, response, next) => {
    try {

        response.status(200).render("tour-detail")


    } catch (error) {

        response.status(400).json({
            status: "getSingleTourDetailPage fail",

        })
    }
}
exports.getSecuritypage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: "getSecuritypage fail",

        })
    }
}
exports.getForgotPasswordPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: "getForgotPasswordPage fail",

        })
    }
}

exports.getResetPasswordPage = (request, response, next) => {
    try {


    } catch (error) {

        response.status(400).json({
            status: "getResetPasswordPage fail",

        })
    }
}
