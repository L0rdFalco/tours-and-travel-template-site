const reviewsModel = require("../models/reviewsModel.js")
exports.getAllReviews = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get all reviews success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get all reviews fail",

        })
    }
}


exports.getSingleReview = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get single review success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get single review fail",

        })
    }
}

exports.createSingleReview = (request, response, next) => {
    try {

        response.status(200).json({
            status: "create single review success",

        })

    } catch (error) {

        response.status(400).json({
            status: "create single review fail",

        })
    }
}

exports.updateSingleReview = (request, response, next) => {
    try {

        response.status(200).json({
            status: "update single review success",

        })

    } catch (error) {

        response.status(400).json({
            status: "update single review fail",

        })
    }
}

exports.deleteSingleReview = (request, response, next) => {
    try {

        response.status(200).json({
            status: "delete single review success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single review fail",

        })
    }
}