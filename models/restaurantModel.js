const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })
const restaurantModel = mongoose.model("Restaurant", restaurantSchema)

module.exports = restaurantModel