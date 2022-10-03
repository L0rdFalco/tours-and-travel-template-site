const mongoose = require("mongoose")

const destinationSchema = mongoose.Schema({

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const destinationModel = mongoose.model("Destination", destinationSchema)

module.exports = destinationModel