const ToursModel = require("../models/toursModel.js")

exports.getAllTours = (request, response, next) => {
    try {
        /**
        - example endpoint for sorting 127.0.0.1:3000/api/v1/tours/?sort=-price,-ratingsAverage
        - example enpoint for filtering 127.0.0.1:3000/api/v1/tours/?duration[gte]=5&difficulty=easy&price[lte]=1500
        - example endpoint for pagination 127.0.0.1:3000/api/v1/tours/?page=2&limit=10
        - example endpoint for field limiting 127.0.0.1:3000/api/v1/tours/?fields=name,duration,difficulty,price
         
        */

        response.status(200).json({
            status: "get all tours success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get all tours fail",

        })
    }
}


exports.getSingleTour = async (request, response, next) => {
    try {
        // const singleTour = await ToursModel.findOne({ _id: request.params.id })
        const singleTour = await ToursModel.findById(request.params.id)
        response.status(200).json({
            status: "success",
            data: {
                payload: singleTour

            }
        })

    } catch (error) {

        response.status(400).json({
            status: "get single tours fail",

        })
    }
}

exports.createSingleTour = async (request, response, next) => {
    try {
        const toursDoc = await ToursModel.create(request.body)

        response.status(200).json({
            status: "success",
            data: {
                payload: toursDoc

            }
        })
    } catch (error) {

        response.status(400).json({
            status: "create single tour fail",

        })
    }
}

exports.updateSingleTour = async (request, response, next) => {
    try {
        // const updatedTour = await ToursModel.updateOne({ _id: request.params.id }, request.body)
        const updatedTour = await ToursModel.findByIdAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })

        response.status(200).json({
            status: "success",
            data: {
                payload: updatedTour
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "update single tour fail",

        })
    }
}

exports.deleteSingleTour = async (request, response, next) => {
    try {
        const deletedTour = await ToursModel.deleteOne({ _id: request.params.id })

        // const deletedTour = await ToursModel.findByIdAndDelete({ _id: request.params.id })

        response.status(204).json({
            status: "success",
            data: {
                payload: deletedTour
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "delete single tour fail",

        })
    }

}


//data aggregation methods. TODO
exports.getTourStats = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getTourStats  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getTourStats fail",

        })
    }
}

exports.getToursWithin = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getToursWithin  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getToursWithin fail",

        })
    }
}

exports.getMonthlyPlan = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getMontlyPlan  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getMontlyPlan fail",

        })
    }
}