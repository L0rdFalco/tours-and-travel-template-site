const messagesModel = require("../models/messagesModel.js")
exports.getAllMessages = async (request, response, next) => {
    try {

        //get all riews for all tours or all messages for single tour depending on the endpoint supplied
        const messages = await messagesModel.find().select("-__v")


        response.status(200).json({
            status: "get all messages success",
            number: messages.length,
            data: {
                revs: messages
            }

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "get all messages fail",

        })
    }

}


exports.getSingleMessage = async (request, response, next) => {
    try {
        const singlemessage = await messagesModel.findById(request.params.message_id).select("-__v")

        response.status(200).json({
            status: "get single messages success",
            data: {
                rev: singlemessage
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get single messages fail",

        })
    }
}

exports.createSingleMessage = async (request, response, next) => {
    try {

        const messageData = {
            message: request.body.message,
            user: "5c8a1dfa2f8fb814b56fa181",
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            subject: request.body.subject

        }

        const newmessage = await messagesModel.create(messageData)

        response.status(200).json({
            status: "create single message success",
            data: {
                message: newmessage
            }

        })

    } catch (error) {

        console.log(error);

        response.status(400).json({
            status: "create single message fail",

        })
    }

}

exports.updateSingleMessage = async (request, response, next) => {
    try {
        const messageData = {
            message: request.body.message,
            rating: request.body.rating
        }
        const updatedmessage = await messagesModel.findByIdAndUpdate(request.params.id, messageData, { runValidators: true, new: true })

        response.status(200).json({
            status: "update single message success",
            data: {
                rev: updatedmessage
            }

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "update single message fail",

        })
    }
}

exports.deleteSingleMessage = async (request, response, next) => {
    try {
        console.log("message id: ", request.params.id);
        // const deletedmessage = await messagesModel.findByIdAndDelete(request.params.id)

        response.status(200).json({
            status: "delete single message success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single message fail",

        })
    }

}