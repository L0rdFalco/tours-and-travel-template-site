const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })


const ReviewsModel = mongoose.model("Review", reviewsSchema)