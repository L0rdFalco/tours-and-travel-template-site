const toursModel = require("../models/toursModel.js")

exports.getAllTours = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get all tours success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get all tours fail",

        })
    }
}


exports.getSingleTour = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get single tour  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get single tour  fail",

        })
    }
}

exports.createSingleTour = (request, response, next) => {
    try {

        response.status(200).json({
            status: "create single tour  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "create single tour  fail",

        })
    }
}

exports.updateSingleTour = (request, response, next) => {
    try {

        response.status(200).json({
            status: "update single tour  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "update single tour  fail",

        })
    }
}

exports.deleteSingleTour = (request, response, next) => {
    try {

        response.status(200).json({
            status: "delete single tour  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single tour fail",

        })
    }
}

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

exports.getMontlyPlan = (request, response, next) => {
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