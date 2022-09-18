const usersModel = require("../models/usersModel.js")

exports.getAllUsers = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get all review s success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get all review s fail",

        })
    }
}


exports.getSingleUser = (request, response, next) => {
    try {

        response.status(200).json({
            status: "get single review  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "get single review  fail",

        })
    }
}

exports.createSingleUser = (request, response, next) => {
    try {

        response.status(200).json({
            status: "create single review  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "create single review  fail",

        })
    }
}

exports.updateSingleUser = (request, response, next) => {
    try {

        response.status(200).json({
            status: "update single review  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "update single review  fail",

        })
    }
}

exports.deleteSingleUser = (request, response, next) => {
    try {

        response.status(200).json({
            status: "delete single review  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single review fail",

        })
    }
}

exports.getMyData = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getMyData  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getMyData fail",

        })
    }
}

exports.updateMyData = (request, response, next) => {
    try {

        response.status(200).json({
            status: "updateMyData  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "updateMyData fail",

        })
    }
}

exports.deactivateAccount = (request, response, next) => {
    try {

        response.status(200).json({
            status: "deactivateAccount success",

        })

    } catch (error) {

        response.status(400).json({
            status: "deactivateAccount fail",

        })
    }
}