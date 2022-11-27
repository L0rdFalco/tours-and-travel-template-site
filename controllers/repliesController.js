const repliesModel = require("../models/repliesModel.js")

exports.createNewReply = async (request, response, next) => {
    try {
        const payload = {
            "message": request.body.message,
            "askerId": request.body.askerId,
            "questionId": request.body.questionId
        }

        await repliesModel.create(payload)

        response.status((200)).json({
            staus: "new reply created"
        })


    } catch (error) {

        response.status(400).json({
            status: "createNewReply fail",

        })
    }

}
