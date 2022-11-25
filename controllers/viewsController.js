const usersModel = require("../models/usersModel.js")
const reviewsModel = require("../models/reviewsModel.js")
const bookingsModel = require("../models/bookingsModel.js")
const toursModel = require("../models/toursModel.js")
const destinationModel = require("../models/destinationModel.js")
const hotelsModel = require("../models/hotelsModel.js")
const restaurantModel = require("../models/restaurantModel.js")
const messagesModel = require("../models/messagesModel.js")

const ameninitesArray = [
    "Satellite TV",
    "Coffeemaker",
    "Hair Dryer",
    "Swimming Pool",
    "Room Service",
    "Luxury Bedding",
    "Good Showers",
    "Free Parking",
    "Free Wifi",
    "Bath towel",
    "Free Coffee",
    "Pets Allow",
    "Hot Water",
    "Attached garage",
    "Elevator",
    "Spa/Sauna",
    "Indoor pool",
    "Security cameras"
]

exports.getTestPage = (request, response, next) => {
    try {
        response.status(200).render("test")

    } catch (error) {
        response.status(400).json({
            status: "getTestPage fail",

        })
    }
}

exports.getHomePage = async (request, response, next) => {
    try {
        const tourDocs = await toursModel.find()
        response.status(200).render("home", {
            tours: tourDocs

        })
    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}

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

exports.getCartPage = (request, response, next) => {
    try {

        response.status(200).render("cart")


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
exports.getEditDestinationPage = async (request, response, next) => {
    try {
        console.log("params: ", request.params);

        const destDoc = await destinationModel.findById(request.params.id)
        // console.log(destDoc);


        response.status(200).render("edit-destination-listing", {
            payload: destDoc,
            amenities: ameninitesArray
        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getEditHotelPage = async (request, response, next) => {
    try {
        const hotelDoc = await hotelsModel.findById(request.params.id)
        response.status(200).render("edit-hotel-listing", {
            payload: hotelDoc,
            amenities: ameninitesArray

        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getEditRestaurantPage = async (request, response, next) => {
    try {

        const restDoc = await restaurantModel.findById(request.params.id)

        response.status(200).render("edit-restaurant-listing", {
            payload: restDoc,
            amenities: ameninitesArray


        })


    } catch (error) {

        response.status(400).json({
            status: "getEditRestaurantPage fail",

        })
    }
}
exports.getEditTourPage = async (request, response, next) => {
    try {
        const tourDoc = await toursModel.findById(request.params.id)
        response.status(200).render("edit-tour-listing",
            {
                payload: tourDoc,
                amenities: ameninitesArray

            })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddDestinationPage = (request, response, next) => {
    try {
        response.status(200).render("add-destination")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddTourPage = (request, response, next) => {
    try {
        response.status(200).render("add-tour")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddRestaurantPage = (request, response, next) => {
    try {
        response.status(200).render("add-restaurant")


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAddHotelPage = (request, response, next) => {
    try {
        response.status(200).render("add-hotel")


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
exports.getManageDestinationsPage = async (request, response, next) => {
    try {
        const destinationDocs = await destinationModel.find().select("_id name price location imageCover slug");

        let destInfo = destinationDocs.map((doc) => {

            return { id: doc._id, address: doc.location.address, name: doc.name, price: doc.price, imageCover: doc.imageCover, slug: doc.slug }

        })

        response.status(200).render("manage-destinations", {
            payload: destInfo
        })

    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageHotelsPage = async (request, response, next) => {

    const hotelDocs = await hotelsModel.find().select("_id name price city summary imageCover")
    try {
        response.status(200).render("manage-hotels", {
            payload: hotelDocs
        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageRestaurantsPage = async (request, response, next) => {
    try {
        const restaurantDocs = await restaurantModel.find().select("_id name price city summary imageCover")

        response.status(200).render("manage-restaurants", {
            payload: restaurantDocs
        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getManageToursPage = async (request, response, next) => {
    try {
        const tourDocs = await toursModel.find().select("_id name summary startLocation price imageCover duration maxGroupSize")
        response.status(200).render("manage-tours", {
            payload: tourDocs
        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getMessagesPage = async (request, response, next) => {
    try {

        const messageDocs = await messagesModel.find().select("_id subject message")
        response.status(200).render("messages", {
            payload: messageDocs
        })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}

exports.getRepliesPage = async (request, response, next) => {
    try {
        const messageDoc = await messagesModel.findById(request.params.id).populate("user")

        response.status(200).render("repliesPage", {
            payload: messageDoc
        })


    } catch (error) {

        response.status(400).json({
            status: "getRepliesPage fail",

        })
    }
}
exports.getMyProfilePage = (request, response, next) => {
    try {

        console.log("current logged in user: ", request.user);

        response.status(200).render("my-profile", {
            user: request.user
        })

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

exports.getAllToursGridSidebarPage = async (request, response, next) => {
    try {
        const alltours = await toursModel.find().select("name duration difficulty slug ratingsAverage ratingsQuantity summary price startLocation difficulty")

        response.status(200).render("all-tours-grid-sidebar",
            {
                tours: alltours
            }
        )


    } catch (error) {

        response.status(400).json({
            status: "getAllToursGridSidebarPage fail",

        })
    }
}

exports.getAllToursGridPage = async (request, response, next) => {
    try {
        const alltours = await toursModel.find().select("name duration difficulty slug ratingsAverage ratingsQuantity summary price startLocation difficulty")

        response.status(200).render("all-tours-grid",
            {
                tours: alltours
            })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListSidebarPage = async (request, response, next) => {
    try {
        const alltours = await toursModel.find().select("name duration difficulty slug ratingsAverage ratingsQuantity summary price startLocation difficulty")

        response.status(200).render("all-tours-list-sidebar",
            {
                tours: alltours
            }
        )


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getAllToursListPage = async (request, response, next) => {
    try {
        const alltours = await toursModel.find().select("name duration difficulty slug ratingsAverage ratingsQuantity summary price startLocation difficulty")

        response.status(200).render("all-tours-list",
            {
                tours: alltours
            })


    } catch (error) {

        response.status(400).json({
            status: " fail",

        })
    }
}
exports.getSingleTourDetailPage = async (request, response, next) => {
    try {

        let singleTour = await toursModel.find({ slug: request.params.slug }).populate("reviews")

        response.status(200).render("tour-detail", {
            tour: singleTour[0]
        })


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
