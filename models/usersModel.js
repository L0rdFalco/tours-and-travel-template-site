const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const UsersModel = mongoose.model("User", usersSchema)

module.exports = UsersModel
