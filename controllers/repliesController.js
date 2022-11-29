const repliesModel = require("../models/repliesModel.js")
const messagesModel = require("../models/messagesModel.js")

exports.createNewReply = async (request, response, next) => {
    try {
        const payload = {
            "message": request.body.message,
            "askerId": request.body.askerId,
            "questionId": request.body.questionId
        }

        await repliesModel.create(payload)

        //update the related message state property to read

        await messagesModel.findByIdAndUpdate(request.body.questionId, { state: "read", updatedAt: new Date(0) })

        response.status((200)).json({
            status: "new reply created success"
        })


    } catch (error) {

        response.status(400).json({
            status: "createNewReply fail",

        })
    }

}


exports.deleteReplies = async (request, response, next) => {
    try {


        response.status(200).json({
            status: "replies successfully deleted",

        })

    } catch (error) {
        response.status(400).json({
            status: "deleteReplies fail",

        })
    }
}