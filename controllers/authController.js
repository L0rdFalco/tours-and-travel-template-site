const jwt = require("jsonwebtoken")
const UsersModel = require("../models/usersModel.js")
const Email = require("../utils/Email.js")
function cookieOptions() {
    let cookieOptions =
    {
        expires: new Date(Date.now() + (process.env.EXP_IN * 24 * 60 * 60 * 1000)),
        secure: false,
        httpOnly: true
    }
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true

    return cookieOptions
}


exports.signup = async (request, response, next) => {
    try {
        /**
         * 1. extract all required fields from request.body
         * 2. use usermodel.create() to create a user doc in the db
         * 3. set special fields to null do that they dont appear in the response
         * 4. generate a jwt encoded with the id of the returned user
         * 5. automatically log in user by sending said jwt in the response
         */

        //1.
        const userData = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            passwordConfirm: request.body.passwordConfirm
        }

        //2.
        const newUser = await UsersModel.create(userData)

        //3.
        newUser.password = undefined
        newUser.role = undefined
        newUser.isActive = undefined
        newUser.__v = undefined

        //4.
        let authToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.EXP_IN + "d" })

        //5.
        response.cookie(process.env.cookie_name, authToken, cookieOptions())
        response.status(200).json({
            status: "signup  success",
            token: authToken,
            payload: {
                userdata: newUser
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "signup fail",

        })
    }
}

exports.login = async (request, response, next) => {
    try {
        /**
         * 1. check if both email and password are provided in the request.body
         * 2. find out if user with said credentials exists in the db
         * 3. check if provided credentials match those in the queried user
         * 4. if the above checks pass, sign a jwt and send it back as a response
         * 
         */

        const email = request.body.email;
        const password = request.body.password;

        //1. 
        if (!email || !password) return response.status(400).json({ message: "please provide required information!" })

        //2.
        const queriedUser = await UsersModel.findOne({ email: email }).select("+password")

        //3.
        if (!queriedUser) return response.status(400).json({ message: "user does not exist in the db" });

        //4.
        const authToken = jwt.sign({ id: queriedUser._id }, process.env.JWT_SECRET, { expiresIn: 90 + "d" });

        response.cookie(process.env.cookie_name, authToken, cookieOptions());
        response.status(200).json({
            status: "login  success",
            token: authToken

        })



    } catch (error) {

        response.status(400).json({
            status: "login fail",

        })
    }
}



exports.logout = (request, response, next) => {
    try {
        /**
         * send auth_cookie as null to overwrite the preexisting cookie in the client
         * give new cookie very short expiration time
         */

        response.cookie(process.env.cookie_name, "", {
            expires: new Date(Date.now() + (10 * 1000)),
            secure: false,
            httpOnly: true
        })

        response.status(200).json({ message: "you have been logged out!" })


    } catch (error) {

        response.status(400).json({
            status: "logout fail",

        })
    }
}

exports.forgotpassword = async (request, response, next) => {
    try {
        /**
         * 1. find user with provided email
         * 2. generate reset token, save encrypted version and time remaining to expire
         * 3. save the ecrypted token to the db
         * 4. generate endpoint with appended endpoint and send it to said email
         */

        const queriedUser = await UsersModel.findOne({ email: request.body.email })

        if (!queriedUser) return response.status(400).json({ message: "user does not exist" })

        const plainResetToken = queriedUser.createPasswordResetToken();

        queriedUser.save({ validateBeforeSave: false })//prevents from checking passwords, name and email validity

        const resetURL = `${request.protocol}://${request.get("host")}/api/v1/users/reset-password/${plainResetToken}`

        await new Email(queriedUser, resetURL).sendPWResetEmail()

        response.status(200).json({
            status: "forgotpassword  success",

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "forgotpassword fail",

        })
    }
}

exports.resetpassword = (request, response, next) => {
    try {

        response.status(200).json({
            status: "reset  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "reset fail",

        })
    }
}

exports.updatepassword = (request, response, next) => {
    try {

        response.status(200).json({
            status: "updatepassword  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "updatepassword fail",

        })
    }
}

exports.isLoggedIn = (request, response, next) => {
    try {

        response.status(200).json({
            status: "isLoggedIn  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "isLoggedIn fail",

        })
    }
}

exports.protect = (request, response, next) => {
    try {

        response.status(200).json({
            status: "protect  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "protect fail",

        })
    }
}

exports.restrictTo = (...roles) => {
    return (request, response, next) => {
        try {

            if (!roles.includes(request.user)) return response.status(400).json({ message: "inadequate permissions" })

        } catch (error) {

            console.log("restrictTo failed");

        }
    }
}