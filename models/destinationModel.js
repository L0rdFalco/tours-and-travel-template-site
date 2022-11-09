const mongoose = require("mongoose")
const slugify = require("slugify")
const destinationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "a destination must have a name"],
        trim: true
    },
    itenerary: {
        type: String,
        required: [true, "a destination must have a itenerary"]
    },
    startDate: {
        type: Date,
        required: [true, "a destination must have a start date"],
        trim: true
    },
    endDate: {
        type: Date,
        required: [true, "a destination must have an end date"],
        trim: true
    },
    location: {
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        address: String,
        description: String
    },
    guide: {
        type: String,
        required: [true, "a destination must have a guide"],
        trim: true
    },
    difficulty: {
        type: String,
        required: [true, "a destination must have a difficulty"],
        trim: true
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, "rating must be above 1"],
        max: [5, "rating must be below 5"]
    },
    price: {
        type: Number,
        required: [true, "a destination must have a price"],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, "a destination must have a duration"],
        trim: true

    },
    maxGroupSize: {
        type: String,
        required: [true, "a destination must have a maximum group size value"],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "a destination must have an image cover"],
    },
    images: [{
        type: String,
        required: [true, "a destination must have a list of images"],
        trim: true
    }],
    summary: {
        type: String,
        required: [true, "a destination must have a summary"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "a destination must have a long description"],
        trim: true
    },
    amenities: [
        {
            type: String,
            required: [true, "a hotel listing must have a list of amenities"],
            trim: true
        }
    ],
    secretListing: {
        type: Boolean,
        required: [true, "a hotel listing must have a location city"],
        default: false
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, "rating must be above 1"],
        max: [5, "rating must be below 5"]

    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    slug: String

},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

destinationSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true, trim: true })
    next()
})

const destinationModel = mongoose.model("Destination", destinationSchema)

module.exports = destinationModel