const mongoose = require("mongoose")
const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name section cannot be empty"]

    },
    email: {
        type: String,
        required: [true, "email section cannot be empty"]

    },
    phone: {
        type: String,
        required: [true, "phone section cannot be empty"]

    },
    subject: {
        type: String,
        required: [true, "subject section cannot be empty"]

    },
    message: {
        type: String,
        required: [true, "message section cannot be empty"]

    },

    state: {
        type: String,
        trim: true,
        default: "unread",
        enum: {
            values: ["read", "unread"],
            message: "wrong state setting"
        }
    },

    createdAt: {
        type: String,
        default: Date.now,
        select: false

    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }


},
    { //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

const messagesModel = mongoose.model("Message", messageSchema)

module.exports = messagesModel