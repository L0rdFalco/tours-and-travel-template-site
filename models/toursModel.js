const mongoose = require("mongoose")
const slugify = require("slugify")

const toursSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "a tour must have a name"],
        unique: true,
        trim: true,
        maxLength: [40, "name has exceed maximum length (40)"],
        minLength: [10, "name length should be increased"]
    },
    duration: {
        type: Number,
        required: [true, "a tour must have a duration"],

    },
    maxGroupSize: {
        type: Number,
        required: [true, "a tour must have a group size"],
    },
    difficulty: {
        type: String,
        required: [true, "a tour must have a difficulty"],
        trim: true,
        enum: {
            values: ["easy", "medium", "difficult"],
            message: "wrong difficulty setting"
        }
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
    price: {
        type: Number,
        required: [true, "a tour must have a price"],
    },

    summary: {
        type: String,
        required: [true, "a tour must have a summary"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "a tour must have a description"],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "a tour must have a Cover image"],
    },
    images: [String],
    startDates: [Date],
    slug: String,
    secretTour: {
        type: Boolean,
        default: false
    },
    startLocation: {
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        address: String,
        description: String

    },
    locations: [ // embedding location data
        {
            type: {
                type: String,
                default: "Point",
                enum: ["Point"]
            },
            coordinates: [Number],
            address: String,
            description: String,
            day: Number

        }

    ],
    guides: [ // parent referencing tour guides
        {
            type: mongoose.Schema.ObjectId,
            ref: "User" // collection name

        }
    ]

},
    { //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

//document middleware that runs before the save event
//runs on .save() and .create() not on insertMany(), findIdAndUpdate() etc.
toursSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true, trim: true })
    next()

})

//creates said virtual property in each query
toursSchema.virtual("durationWeeks").get(function () {
    return Math.round(this.duration / 7 * 100) / 100

})

//child referencing to populate the guides field. alternative is calling populate on the query object
toursSchema.pre(/^find/, function (next) {
    this.populate({
        path: "guides",
        select: "name photo role"

    })

    next()

})

/**
 * middleware to populate parent referenced reviews
 * to get all reviews per tour, we can
 * 1. (antipattern ) do child referencing of reviews in tour schema and use pre find midleware to populate in query
 * 2. (cumbersome, slow, resource intensive) query for all reviews with the tour id we need
 * 3. use virtual populate as below
 * NB: AFTER THE BELOW, DO THE POPULATE IN THE TOURSCONTROLLER with populate("name of field ie reviews")
 */
toursSchema.virtual("reviews", {
    ref: "Review",
    foreignField: "tour",
    localField: "_id"

})

const ToursModel = mongoose.model("Tour", toursSchema)

module.exports = ToursModel
