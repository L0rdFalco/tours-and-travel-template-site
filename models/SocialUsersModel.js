const mongoose = require("mongoose");
const validator = require("validator")
const metaDataSchema = mongoose.Schema({
    aboutme: {
        type: String,
        default: "my mind is wonderfully quiet these days. I love it"
    },
    livein: {
        type: String,
        default: "Monaco"
    },
    ispeak: {
        type: String,
        default: "Italian"
    },
    address: {
        type: String,
        default: "golden mile"
    },
    phone: {
        type: Number,
        default: 2568168964168
    },
    city: {
        type: String,
        default: "Monte Carlo"
    },
    facebookurl: {
        type: String,

    },
    twitterurl: {
        type: String,

    },
    linkedinurl: {
        type: String
    },
    pinteresturl: {
        type: String

    },
})

const socialUsersSchema = mongoose.Schema(
    {
        gplus_id: {
            type: String,
            required: [true, "social user must have a sub"]
        },
        name: {
            type: String,
            required: [true, "social user must have a name"]
        },
        given_name: {
            type: String,
            required: [true, "social user must have a given name"]
        },
        family_name: {
            type: String,
            required: [true, "social user must have a sub"]
        },
        provider: {
            type: String,
            required: [true, "social user must have a provider"]
        },
        picture: {
            type: String,
            default: "default.jpg"
        },
        isActive: {
            type: Boolean,
            default: true,
            select: false
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: [true, "social user must hava an email address"],
            validate: [validator.isEmail, "please profive a valid email address for social user"]
        },
        email_verified: {
            type: Boolean,
            required: [true, "social user email must have a given verification state"]
        },
        locale: {
            type: String,
            required: [true, "social user must have a given locale"]
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin", "guide", "lead-guide"]

        },
        metadata: metaDataSchema,

    },

    {
        //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const socialUsersModel = mongoose.model("SocialUser", socialUsersSchema);

module.exports = socialUsersModel