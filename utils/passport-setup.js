const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const authController = require("../controllers/authController.js")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://toursandtravel.onrender.com/api/v1/users/gcloud-webhook"

}, authController.passportCallback))


passport.serializeUser(authController.passportSerialiseUserCB)

passport.deserializeUser(authController.passportDeserialiseUserCB)

