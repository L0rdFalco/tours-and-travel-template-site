const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: `./config.env` })

const app = require("./app.js")

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("db connected!");
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`natoursD listening on port ${port}`);
})
