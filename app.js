const express = require("express")
const ViewsRouter = require("./routers/viewsRouter.js")
const BookingsRouter = require("./routers/bookingsRouter.js")
const ReviewsRouter = require("./routers/reviewsRouter.js")
const ToursRouter = require("./routers/toursRouter.js")
const UsersRouter = require("./routers/usersRouter.js")

const app = express()
//set up global middlare here

app.use("/", ViewsRouter)
app.use("/api/v1/booking", BookingsRouter)
app.use("/api/v1/reviews", ReviewsRouter)
app.use("/api/v1/tours", ToursRouter)
app.use("/api/v1/users", UsersRouter)

module.exports = app