const repliesModel = require("../models/repliesModel.js")

exports.createNewReply = async (request, response, next) => {
    try {

        console.log("reply object: ", request.body);

    } catch (error) {

        response.status(400).json({
            status: "createNewReply fail",

        })
    }

}
