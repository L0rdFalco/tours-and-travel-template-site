const repliesModel = require("../models/repliesModel.js")

exports.createNewReply = (request, response, next) => {
    try {

    } catch (error) {

        response.status(400).json({
            status: "createNewReply fail",

        })
    }

}