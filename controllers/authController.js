exports.signup = (request, response, next) => {
    try {

        response.status(200).json({
            status: "signup  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "signup fail",

        })
    }
}

exports.login = (request, response, next) => {
    try {

        response.status(200).json({
            status: "login  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "login fail",

        })
    }
}

exports.logout = (request, response, next) => {
    try {

        response.status(200).json({
            status: "logout  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "logout fail",

        })
    }
}

exports.forgotpassword = (request, response, next) => {
    try {

        response.status(200).json({
            status: "forgotpassword  success",

        })

    } catch (error) {

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