const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({
    review: {
        type: String,
        required: [true, "review section cannot be empty"]

    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "review must have a rating"]

    },
    createdAt: {
        type: String,
        default: Date.now

    },
    tour: {
        type: mongoose.Schema.ObjectId,
        ref: "Tour"
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })


const ReviewsModel = mongoose.model("Review", reviewsSchema)