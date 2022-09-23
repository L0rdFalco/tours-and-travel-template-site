const BookingsModel = require("../models/bookingsModel.js")

exports.getAllBookings = async (request, response, next) => {
    try {

        const boookingDocs = await BookingsModel.find().select("-__v")

        response.status(200).json({
            status: "get all bookings success",
            num: boookingDocs.length,
            payload: {
                data: boookingDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all bookings fail",

        })
    }
}

exports.getSingleBooking = async (request, response, next) => {
    try {
        const singleBooking = await BookingsModel.findById(request.params.id).select("-__v")

        response.status(200).json({
            status: "get single booking success",
            data: {
                rev: singleBooking
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get single Reviews fail",

        })
    }

}

exports.createSingleBooking = (request, response, next) => {
    try {

        response.status(200).json({
            status: "create single booking success",

        })

    } catch (error) {

        response.status(400).json({
            status: "create single booking fail",

        })
    }
}

exports.updateSingleBooking = (request, response, next) => {
    try {

        response.status(200).json({
            status: "update single booking success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single booking fail",

        })
    }
}

exports.deleteSingleBooking = (request, response, next) => {
    try {

        response.status(200).json({
            status: "gdelete single booking success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single booking fail",

        })
    }
}