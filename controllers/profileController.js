const profileModel = require("../models/profileModel.js")

//

exports.createProfileInfo = async (request, response, next) => {
    try {

        console.log("profile create INFO", request.body);

    } catch (error) {

        response.status(400).json({
            status: "createProfileInfo fail",

        })
    }
}

exports.updateProfileInfo = async (request, response, next) => {
    try {
        console.log("user? ", request.params.userid);
        console.log("profile update INFO", request.body);


    } catch (error) {

        response.status(400).json({
            status: "updateProfileInfo fail",

        })
    }
}

