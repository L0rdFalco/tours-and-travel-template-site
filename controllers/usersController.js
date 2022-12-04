const UsersModel = require("../models/usersModel.js")
const SocialUsersModel = require("../models/socialUserModel.js")

exports.getAllUsers = async (request, response, next) => {
    try {

        const userDocs = await UsersModel.find().select("-__v")

        response.status(200).json({
            status: "get all users success",
            payload: {
                data: userDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all users fail",

        })
    }
}


exports.getSingleUser = async (request, response, next) => {
    try {

        const userDoc = await UsersModel.findById(request.user._id).select("__v")

        response.status(200).json({
            status: "get single user  success",

            payload: {
                data: userDoc
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get single user  fail",

        })
    }
}

exports.createSingleUser = async (request, response, next) => {
    try {

        const userData = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            passwordConfirm: request.body.passwordConfirm,
            role: request.body.role
        }

        const newUser = await UsersModel.create(userData)

        //so that they dont show up in the json response object
        newUser.password = undefined
        newUser.isActive = undefined
        newUser.role = undefined
        newUser.__v = undefined
        response.status(200).json({
            status: "create single User success",
            data: {
                user: newUser
            }

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "create single User fail",

        })
    }

}

exports.updateSingleUser = async (request, response, next) => {
    try {
        const userData = {
            name: request.body.name,
            email: request.body.email
        }
        const updatedUser = await UsersModel.findByIdAndUpdate(request.user.id, userData, { runValidators: true, new: true, select: "name email photo id" })

        response.status(200).json({
            status: "update single User success",
            data: {
                user: updatedUser
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "update single User fail",

        })
    }
}

exports.deleteSingleUser = async (request, response, next) => {
    try {
        const deletedUser = await UsersModel.findByIdAndDelete(request.user.id)
        response.status(200).json({
            status: "delete single User success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single User fail",

        })
    }

}

exports.getMyData = async (request, response, next) => {
    try {
        const singleUser = await UsersModel.findById(request.params.id)

        response.status(200).json({
            status: "getMyData success",
            data: {
                user: singleUser
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "getMyData fail",

        })
    }
}

exports.updateMyData = async (request, response, next) => {
    try {

        const userData = {
            "name": request.body.name ? request.body.name : null,
            "email": request.body.email ? request.body.email : null,
            "metadata.aboutme": request.body.aboutme ? request.body.aboutme : null,
            "metadata.livein": request.body.livein ? request.body.livein : null,
            "metadata.ispeak": request.body.ispeak ? request.body.ispeak : null,
            "metadata.address": request.body.address ? request.body.address : null,
            "metadata.phone": request.body.phone ? request.body.phone : null,
            "metadata.city": request.body.city ? request.body.city : null,
            "metadata.facebookurl": request.body.facebookurl ? request.body.facebookurl : null,
            "metadata.twitterurl": request.body.twitterurl ? request.body.twitterurl : null,
            "metadata.linkedinurl": request.body.linkedinurl ? request.body.linkedinurl : null,
            "metadata.pinteresturl": request.body.pinteresturl ? request.body.pinteresturl : null,
        }

        let updatedUser = null;
        if (request.user.provider === "manual") {

            updatedUser = await UsersModel.findByIdAndUpdate(request.user.id, userData, { runValidators: true, new: true })
        }

        else if (request.user.provider === "google") {
            updatedUser = await SocialUsersModel.findByIdAndUpdate(request.user.id, userData, { runValidators: true, new: true })
        }

        response.status(200).json({
            status: "updateMyData success",
            data: updatedUser

        })

    } catch (error) {

        response.status(400).json({
            status: "updateMyData fail",

        })
    }
}

exports.deactivateAccount = async (request, response, next) => {
    try {
        await UsersModel.findByIdAndUpdate(request.user.id, { isActive: false }, { runValidators: true, new: true })

        response.status(200).json({
            status: "deactivate Account successfully",

        })

    } catch (error) {

        response.status(400).json({
            status: "deactivateMyAccount fail",

        })
    }
}