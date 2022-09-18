const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    tour: {
        type: mongoose.Schema.ObjectId,
        ref: "Tour",
        required: [true, "booking must belong to a tour"]

    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "booking must have a user"]

    },
    price: {
        type: Number,
        required: [true, "booking must have a price"]

    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    paid: {
        type: Boolean,
        default: true

    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const BookingsModel = mongoose.model("Booking", bookingSchema)

module.exports = BookingsModel