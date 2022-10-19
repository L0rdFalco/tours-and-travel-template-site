const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "a restaurant must have a name"],
        trim: true
    },
    logo: {
        type: String,
        required: [true, "a restaurant must have a name"],
    },
    menu: {
        type: String,
        required: [true, "a restaurant must have a name"],
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, "rating must be above 1"],
        max: [5, "rating must be below 5"]
    },
    price: {
        type: Number,
        required: [true, "a restaurant listing must have a price"],
        trim: true
    },
    phone: {
        type: Number,
        required: [true, "a restaurant listing must have a phone number"],
        trim: true
    },
    landline: {
        type: Number,
        required: [true, "a restaurant listing must have a landline"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "a restaurant listing must have an email"],
        trim: true
    },
    fax: {
        type: Number,
        trim: true,
        default: 00000
    },
    address: {
        type: String,
        required: [true, "a restaurant listing must have an address"],
        trim: true
    },
    city: {
        type: String,
        required: [true, "a restaurant listing must have a location city"],
        trim: true
    },

    state: {
        type: String,
        required: [true, "a restaurant listing must have a location state"],
        trim: true
    },
    country: {
        type: String,
        required: [true, "a restaurant listing must have a location country"],
        trim: true
    },
    owner: {
        type: String,
        required: [true, "a restaurant listing must have a location owner"],
        trim: true
    },
    contact: {
        type: String,
        required: [true, "a restaurant listing must have a contact on file"],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "a restaurant listing must have a cover image"]
    },
    images: [
        {
            type: String,
            required: [true, "a restaurant listing must have a list of images"],
            trim: true
        }
    ],
    summary: {
        type: String,
        required: [true, "a restaurant listing must have a summary"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "a restaurant listing must have a long description"],
        trim: true
    },
    amenities: [
        {
            type: String,
            required: [true, "a restaurant listing must have a list of amenities"],
            trim: true
        }
    ],
    secretListing: {
        type: Boolean,
        required: [true, "a restaurant listing must have a location city"],
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

const restaurantModel = mongoose.model("Restaurant", restaurantSchema)

module.exports = restaurantModel