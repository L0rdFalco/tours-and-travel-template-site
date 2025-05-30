const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const authController = require("../controllers/authController.js")

 if (process.env.NODE_ENV === "development") {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/users/googlecloud-webhook",
    
    }, authController.passportCallback))
    
 }
else if (process.env.NODE_ENV === "production") {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://toursandtravel.onrender.com/api/v1/users/gcloud-webhook"
    
    }, authController.passportCallback))
    
}

passport.serializeUser(authController.passportSerialiseUserCB)

passport.deserializeUser(authController.passportDeserialiseUserCB)

