const mongoose = require("mongoose")
const slugify = require("slugify")

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "hotel listing must have a name"],
        trim: true,
        maxLength: [40, "hotel name has exceed maximum length (40)"],
        minLength: [10, "hotel name length should be increased"]

    },
    price: {
        type: Number,
        required: [true, "a hotel listing must have a price"],
        trim: true
    },
    phone: {
        type: Number,
        required: [true, "a hotel listing must have a phone number"],
        trim: true
    },
    landline: {
        type: Number,
        required: [true, "a hotel listing must have a landline"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "a hotel listing must have an email"],
        trim: true
    },
    fax: {
        type: Number,
        trim: true,
        default: 00000
    },
    address: {
        type: String,
        required: [true, "a hotel listing must have an address"],
        trim: true
    },
    city: {
        type: String,
        required: [true, "a hotel listing must have a location city"],
        trim: true
    },

    state: {
        type: String,
        required: [true, "a hotel listing must have a location state"],
        trim: true
    },
    country: {
        type: String,
        required: [true, "a hotel listing must have a location country"],
        trim: true
    },
    owner: {
        type: String,
        required: [true, "a hotel listing must have a location owner"],
        trim: true
    },
    contact: {
        type: String,
        required: [true, "a hotel listing must have a contact on file"],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "a hotel listing must have a cover image"]
    },
    images: [
        {
            type: String,
            required: [true, "a hotel listing must have a list of images"],
            trim: true
        }
    ],
    summary: {
        type: String,
        required: [true, "a hotel listing must have a summary"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "a hotel listing must have a long description"],
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

const hotelsModel = mongoose.model("Hotel", hotelSchema)

module.exports = hotelsModel;