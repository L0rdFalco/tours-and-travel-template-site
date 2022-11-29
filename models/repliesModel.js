const mongoose = require("mongoose");
const repliesSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: [true, "a message must have a reply"],
            trim: true
        },
        askerId:  // parent referencing tour guides
        {
            required: [true, "reply must have an asker id"],
            type: mongoose.Schema.ObjectId,
            ref: "User" // collection name

        }
        ,
        questionId:  // parent referencing tour guides
        {
            required: [true, "reply must have a question id"],
            type: mongoose.Schema.ObjectId,
            ref: "Message" // collection name

        }
        ,
        createdAt: {
            type: String,
            default: Date.now
        },
    },
    {
        //allows virtual fields to show up in responses
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

//don't correct the Replie typo
const repliesModel = mongoose.model("Replie", repliesSchema)

module.exports = repliesModel