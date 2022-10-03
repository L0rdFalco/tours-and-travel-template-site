const mongoose = require("mongoose")

const hotelSchema = mongoose.Schema({

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const hotelsModel = mongoose.model("Hotel", hotelSchema)

module.exports = hotelsModel;