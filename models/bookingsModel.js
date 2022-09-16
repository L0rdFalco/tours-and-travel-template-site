const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const BookingsModel = mongoose.model("Booking", bookingSchema)

module.exports = BookingsModel