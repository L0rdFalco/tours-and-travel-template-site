const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "a user must have a name"],
        minLength: [5, "name must be at least 5 characters long"],
        maxLength: [40, "name cannot exceed 40 characters"]

    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "user must have a unique email address"],
        validate: [validator.isEmail, "please provide valid email address"]

    },
    photo: {
        type: String,
        default: "default.jpg"
    },
    password: {
        type: String,
        required: [true, "you must specify a password for a user"],
        minLength: [12, "password must be at least 12 characters long"],
        select: false // keeps password from being sent in response

    },
    passwordConfirm: {
        type: String,
        required: [true, "please repeat password"],
        validate: {
            //validator only works on model.create() and model.save()
            validator: function (el) {
                return this.password === el
            },
            message: "passwords do not match"
        }
    },
    passwordChangedAt: Date,
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "guide", "lead-guide"]

    },
    isActive: {
        type: Boolean,
        default: true,
        select: false
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

//pre save middleware to encrypt password
//called during signup and updating password info
usersSchema.pre("save", async function (next) {
    //skip hashing if  password isn't being modified
    if (!this.isModified) return next()
    this.password = await bcrypt.hash(this.password, 12)

    //so that it isn't saved in the db
    this.passwordConfirm = undefined;
    next()
})

const UsersModel = mongoose.model("User", usersSchema)

module.exports = UsersModel
