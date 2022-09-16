const mongoose = require("mongoose")

const toursSchema = mongoose.Schema({

},
    { //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const ToursModel = mongoose.model("Tour", toursSchema)

module.exports = ToursModel
