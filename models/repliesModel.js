const mongoose = require("mongoose");
const repliesSchema = mongoose.Schema({}, {})

const repliesModel = mongoose.model("Replie", repliesSchema)

module.exports = repliesModel