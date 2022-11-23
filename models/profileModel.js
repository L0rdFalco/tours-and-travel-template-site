const mongoose = require("mongoose");
const validator = require("validator")
const profileSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "profile must have a first name"]
        },
        lastname: {
            type: String,
            required: [true, "profile must have a last name"]
        },
        email: {
            type: String,
            required: [true, "profile must have an email"],
            validate: [validator.isEmail, "please provide a valid email address"]
        },
        aboutme: {
            type: String,
            default: "this is about me section"
        },
        livein: {
            type: String,
            required: [true, "profile must have live in info"]
        },
        ispeak: {
            type: String,
            required: [true, "profile must provide spoken language info"]
        },
        phone: {
            type: Number,
            default: 2568168964168
        },
        city: {
            type: String,
            default: "Monte Carlo"
        },
        profilepic: {
            type: String,
            default: "user-1.jpg"
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
        isActive: {
            type: Boolean,
            default: true,
        },

        createdAt: {
            type: String,
            default: Date.now,
            select: false

        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    },
    {
        //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const profileModel = mongoose.model("Profile", profileSchema)

module.exports = profileModel;