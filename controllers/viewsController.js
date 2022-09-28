const usersModel = require("../models/usersModel.js")
const reviewsModel = require("../models/reviewsModel.js")
const bookingsModel = require("../models/bookingsModel.js")
const toursModel = require("../models/toursModel.js")

exports.getOrderPage = (request, response, next) => {
    try {
        response.status(200).render("onetime-payment")

    } catch (error) {
        response.status(400).json({
            status: "getAuthWall fail",

        })
    }
}

exports.getAdminLoginPage = (request, response, next) => {
    try {
        response.status(200).render("admin-login")


    } catch (error) {

        response.status(400).json({
            status: "getAuthWall fail",

        })
    }
}

exports.get404Page = (request, response, next) => {
    try {

        response.status(200).render("404")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAboutUsPage = (request, response, next) => {
    try {
        response.status(200).render("about-us")


    } catch (error) {

        response.status(400).json({
            status: "getAboutUsPage fail",

        })
    }
}
exports.getAddDestinationsPage = (request, response, next) => {
    try {
        response.status(200).render("add-destinations")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddToursPage = (request, response, next) => {
    try {
        response.status(200).render("add-tours")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getBasicSettingsPage = (request, response, next) => {
    try {
        response.status(200).render("basic-settings")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getBookingPage = (request, response, next) => {
    try {

        response.status(200).render("bookings")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getComingSoonPage = (request, response, next) => {
    try {
        response.status(200).render("coming-soon")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getContactPage = (request, response, next) => {
    try {
        response.status(200).render("contact")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDashboardPage = (request, response, next) => {
    try {
        response.status(200).render("dashboard")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationDetailPage = (request, response, next) => {
    try {
        response.status(200).render("destination-detail")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationGridSidebarPage = (request, response, next) => {
    try {

        response.status(200).render("destination-grid-sidebar")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationGridPage = (request, response, next) => {
    try {
        response.status(200).render("destination-grid")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationListSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("destination-list-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getDestinationListPage = (request, response, next) => {
    try {
        response.status(200).render("destination-list")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getFAQsPage = (request, response, next) => {
    try {
        response.status(200).render("faqs")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getGuideDetailPage = (request, response, next) => {
    try {
        response.status(200).render("guide-detail")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHireGuidePage = (request, response, next) => {
    try {
        response.status(200).render("hire-guide")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelDetailPage = (request, response, next) => {
    try {
        response.status(200).render("hotel-detail")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelGridSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("hotel-grid-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelGridPage = (request, response, next) => {
    try {
        response.status(200).render("hotel-grid")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelListSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("hotel-list-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getHotelListPage = (request, response, next) => {
    try {
        response.status(200).render("hotel-list")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getInvoicePage = (request, response, next) => {
    try {
        response.status(200).render("invoice")


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

        response.status(200).render("manage-destinations")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageHotelsPage = (request, response, next) => {
    try {
        response.status(200).render("manage-hotels")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageRestaurantsPage = (request, response, next) => {
    try {
        response.status(200).render("manage-restaurants")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageToursPage = (request, response, next) => {
    try {
        response.status(200).render("manage-tours")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getMessagesPage = (request, response, next) => {
    try {
        response.status(200).render("messages")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getMyProfilePage = (request, response, next) => {
    try {

        response.status(200).render("my-profile")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getPricingPage = (request, response, next) => {
    try {
        response.status(200).render("pricing")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantDetailPage = (request, response, next) => {
    try {
        response.status(200).render("restaurant-detail")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantGridSidebarPage = (request, response, next) => {
    try {

        response.status(200).render("restaurant-grid-sidebar")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantGridPage = (request, response, next) => {
    try {

        response.status(200).render("restaurant-grid")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantListSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("restaurant-list-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getRestaurantListPage = (request, response, next) => {
    try {

        response.status(200).render("restaurant-list")

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSignupPage = (request, response, next) => {
    try {
        response.status(200).render("signup")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSiteSettingsPage = (request, response, next) => {
    try {
        response.status(200).render("site-settings")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSuccessPage = (request, response, next) => {
    try {
        response.status(200).render("success-page")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}

exports.getAllToursGridSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("all-tours-grid-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursGridPage = (request, response, next) => {
    try {
        response.status(200).render("all-tours-grid")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListSidebarPage = (request, response, next) => {
    try {
        response.status(200).render("all-tours-list-sidebar")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListPage = (request, response, next) => {
    try {
        response.status(200).render("all-tours-list")


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
        response.status(200).render("forgot-password")


    } catch (error) {

        response.status(400).json({
            status: "getForgotPasswordPage fail",

        })
    }
}

exports.getResetPasswordPage = (request, response, next) => {
    try {
        response.status(200).render("password-reset")


    } catch (error) {

        response.status(400).json({
            status: "getResetPasswordPage fail",

        })
    }
}
