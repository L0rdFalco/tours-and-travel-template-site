const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const authController = require("../controllers/authController.js")
const SocialUsersModel = require("../models/socialUserModel.js")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {

        const socialUser = await SocialUsersModel.findById(id)

        if (socialUser) done(null, socialUser)

    } catch (error) {
        console.log(error);
    }

})
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://toursandtravel.onrender.com/api/v1/users/gplusPermissions"

}, authController.gplusAccountSelectCB))


