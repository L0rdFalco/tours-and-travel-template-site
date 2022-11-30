const crypto = require("crypto");
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

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
    metadata: metaDataSchema,

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
    encrResetToken: String,
    resetTokenExpires: Date,
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
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 12)

    //so that it isn't saved in the db
    this.passwordConfirm = undefined;

    console.log(this.password);
    next()
})

//query middleware to only find active users
usersSchema.pre(/^find/, function (next) {
    this.find({ isActive: true })
    next()
})


//static method used when reseting password
usersSchema.methods.createPasswordResetToken = function () {
    const plainResetToken = crypto.randomBytes(32).toString("hex");
    this.encrResetToken = crypto.createHash("sha256").update(plainResetToken).digest("hex")
    this.resetTokenExpires = Date.now() + 600000; //expires in 10 minutes

    return plainResetToken
}

//used in login and when updating passwords
usersSchema.methods.doPasswordsMatch = async function (inputtedPW, savedPW) {
    return await bcrypt.compare(inputtedPW, savedPW)
}

//instance method used for verification in protected routes
usersSchema.methods.passwordChangedAfter = function (tokenIssueDate) {


    //return true if token was issued after password was changed
    if (this.passwordChangedAt) return parseInt(this.passwordChangedAt.getTime() / 1000, 10) > tokenIssueDate

    //returning false means that the password was never changed because the field doesn't exist
    return false;

}


const UsersModel = mongoose.model("User", usersSchema)

module.exports = UsersModel
