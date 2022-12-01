const crypto = require("crypto")
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

exports.gplusAuth = async (request, response, next) => {
    try {

    } catch (error) {

    }
}

exports.facebookAuth = async (request, response, next) => {
    try {

    } catch (error) {

    }
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

        const matches = await queriedUser.doPasswordsMatch(password, queriedUser.password)

        if (!matches) return response.status(400).json({ message: "please enter correct password" });

        //4.
        const authToken = jwt.sign({ id: queriedUser._id }, process.env.JWT_SECRET, { expiresIn: 90 + "d" });

        response.cookie(process.env.cookie_name, authToken, cookieOptions());
        response.status(200).json({
            status: "login  success",
            token: authToken

        })



    } catch (error) {
        console.log(error);

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

        //this aupdates the document with the newly created fields
        //turning off validation keeps node from looking for required fields for user b4 saving
        queriedUser.save({ validateBeforeSave: false })

        const resetURL = `${request.protocol}://${request.get("host")}/api/v1/users/reset-password/${plainResetToken}`

        await new Email(queriedUser, resetURL).sendPWResetEmail()

        response.status(200).json({
            status: "forgotpassword  success",

        })

    } catch (error) {
        response.status(400).json({
            status: "forgotpassword fail",

        })
    }
}

exports.resetpassword = async (request, response, next) => {
    try {
        /**
         * 1. extract plain reset token from request.params
         * 2. query the db for a user with the hashed version of the above token
         * 3. check if token is valid and whether it has expired
         * 4. overwrite the password field in the db with the new on in request.body
         * 5. automatically log in user by signing and sending a JWT
         */

        //1.
        const plainResetToken = request.params.token;

        const hashedToken = crypto.createHash("sha256").update(plainResetToken).digest("hex")

        //2. and 3.
        const queriedUser = await UsersModel.findOne(
            {
                encrResetToken: hashedToken,
                resetTokenExpires: { $gt: Date.now() }

            })

        if (!queriedUser) return response.status(400).json({ message: "user does not exist or token has expired" })

        //4.
        queriedUser.password = request.body.password;
        queriedUser.passwordConfirm = request.body.passwordConfirm;
        queriedUser.encrResetToken = undefined;
        queriedUser.resetTokenExpires = undefined;

        await queriedUser.save() //input validation is turned on


        //5.
        const authToken = jwt.sign({ id: queriedUser._id }, process.env.JWT_SECRET, { expiresIn: 90 + "d" });

        response.cookie(process.env.cookie_name, authToken, cookieOptions());
        response.status(200).json({
            status: "resetpassword success",
            token: authToken

        })


    } catch (error) {

        response.status(400).json({
            status: "reset fail",

        })
    }
}

exports.updatepassword = async (request, response, next) => {
    try {
        /**
         *1. check of provided password match
         *2. query db for user from request.user.id
         *3. find out if provided password matches the stored pw using a static method in the schema
         *4. overwrite password using usermdel.save()
            [runs automatically when save() is called] presave middleware to update passwordChangedAt field
         *5. automatically log in user by sending a newly generated jwt
         * 
         */

        const oldPassword = request.body.oldPassword
        const newPassword = request.body.newPassword
        const passwordConfirm = request.body.passwordConfirm

        //1.
        if (newPassword !== passwordConfirm) return response.status(400).json({ message: "provided passwords dont match!" })

        //2.
        const queriedUser = await UsersModel.findById(request.user._id).select("+password")

        //3.
        const matches = await queriedUser.doPasswordsMatch(oldPassword, queriedUser.password)

        if (!matches) return response.status(400).json({ message: "no user with THE provided password." })

        queriedUser.password = newPassword;
        queriedUser.passwordConfirm = passwordConfirm;

        //4.
        await queriedUser.save()

        //5.
        const authToken = jwt.sign({ id: queriedUser._id }, process.env.JWT_SECRET, { expiresIn: 90 + "d" });

        response.cookie(process.env.cookie_name, authToken, cookieOptions());
        response.status(200).json({
            status: "updatepassword success",
            token: authToken

        })


    } catch (error) {

        console.log(error);
        response.status(400).json({
            status: "updatepassword fail",

        })
    }
}

exports.isLoggedIn = (request, response, next) => {
    try {

        next()



        // response.status(200).json({
        //     status: "isLoggedIn  success",

        // })

    } catch (error) {

        response.status(400).json({
            status: "isLoggedIn fail",

        })
    }
}

exports.protect = async (request, response, next) => {
    try {
        /**
         *1. check if jwt has been sent in th header or cookie
         *2. verify the token
         *3. check if econded user is in the db
         *4. check of user changed passwords after token was issued
         *5. asign said user to request.user()
         *6. call next() if all abiove checks pass
         */

        let token = null;

        const authHeader = request.headers.authrization

        if (authHeader && authHeader.startsWith("Bearer")) token = authHeader.split(" ")[1]
        else if (request.cookies?.auth_cookie) token = request.cookies.auth_cookie

        if (!token) return response.status(400).json({ message: "please log in" })

        let verifyPromise = new Promise(function (resolve, reject) {

            return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) reject(err)
                else if (decoded) resolve(decoded)
            })

        })

        //2.
        let decoded = await verifyPromise

        let currentUser = await UsersModel.findById(decoded.id)
        if (!currentUser) return response.status(400).json({ message: "sorry but user does not exist in db" })

        //4.
        if (currentUser.passwordChangedAfter(decoded.iat)) return response.status(401).json({ message: "sorry! password mismatch!" })

        //5.
        request.user = currentUser

        response.locals.user = currentUser

        //6.
        next()
    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "protect fail",

        })
    }
}

exports.restrictTo = (...roles) => {
    return (request, response, next) => {
        try {

            if (!roles.includes(request.user.role)) return response.status(400).json({ message: "inadequate permissions" })

            next()
        } catch (error) {

            console.log("restrictTo failed");
            response.status(400).json({
                status: "restrictTo fail",

            })
        }
    }
}