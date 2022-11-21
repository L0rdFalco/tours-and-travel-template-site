const mongoose = require("mongoose");
const profileSchema = mongoose.Schema(
    {

    },
    {
        //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const profileModel = mongoose.model("Profile", profileSchema)

module.exports = profileModel;