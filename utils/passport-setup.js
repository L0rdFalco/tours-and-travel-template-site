const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const authController = require("../controllers/authController.js")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/v1/users/gplusPermissions"

}, authController.gplusAccountSelectCB))


