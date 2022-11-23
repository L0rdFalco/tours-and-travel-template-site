const mongoose = require("mongoose");
const repliesSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: [true, "a message must have a reply"],
            trim: true
        },
        askerId: [ // parent referencing tour guides
            {
                type: mongoose.Schema.ObjectId,
                ref: "User" // collection name

            }
        ],
        qestionId: [ // parent referencing tour guides
            {
                type: mongoose.Schema.ObjectId,
                ref: "Message" // collection name

            }
        ],

    },
    {})

const repliesModel = mongoose.model("Replie", repliesSchema)

module.exports = repliesModel