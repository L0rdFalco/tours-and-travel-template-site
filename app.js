const express = require("express")
const rateLimit = require("express-rate-limit")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const path = require("path")
const hpp = require("hpp")
const cookieParser = require("cookie-parser")

const ViewsRouter = require("./routers/viewsRouter.js")
const BookingsRouter = require("./routers/bookingsRouter.js")
const ReviewsRouter = require("./routers/reviewsRouter.js")
const ToursRouter = require("./routers/toursRouter.js")
const UsersRouter = require("./routers/usersRouter.js")
const PaymentRouter = require("./routers/paymentRouter.js")
const DestinationRouter = require("./routers/destinationRouter.js")
const RestaurantRouter = require("./routers/restaurantRouter.js")
const HotelsRouter = require("./routers/hotelsRouter.js")

const app = express()
//set up pug templating engine
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

//global rate limiting middleware
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "too many requests from this IP. Try again in an hour"

})

app.use("/api", limiter)

//global middleware for setting security headers
// app.use(helmet())

// //this content security allows for axios to work from the cdn
// app.use(
//     helmet.contentSecurityPolicy({
//         useDefaults: true,
//         directives: {
//             scriptSrcElem: ["'self'", 'https:', '*', "'unsafe-inline'"],
//         },
//     })
// );

//glonal middlware for logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"))
//global middleware for data sanitization against nosql query injection
app.use(mongoSanitize())

//global middleware for data sanitization against xss
app.use(xss())



//global middlware to prevent parameter pollution
app.use(hpp({
    whitelist: [
        "duration",
        "ratingsQuantity",
        "ratingsAverage",
        "maxGroupSize",
        "difficulty",
        "price"

    ]
}))

//global middleware for adding body data to request object
//also called BODY PARSER
app.use(express.json({
    limit: "300kb"// limits the size of request data
}))

//global middleware for serving up static files from public folder
app.use(express.static(path.join(__dirname, "public")))

//global middleware for adding cookie data to request object
app.use(cookieParser())


app.use(express.urlencoded({ extended: true, limit: '10kb' }))


app.use((request, response, next) => {
    console.log("my custom middleware", request.originalUrl);
    request.reqTime = Date.now()
    next()
})


app.use("/", ViewsRouter)
app.use("/orders", PaymentRouter)

app.use("/api/v1/booking", BookingsRouter)
app.use("/api/v1/reviews", ReviewsRouter)
app.use("/api/v1/tours", ToursRouter)
app.use("/api/v1/users", UsersRouter)
app.use("/api/v1/destination", DestinationRouter)
app.use("/api/v1/hotels", HotelsRouter)
app.use("/api/v1/restaurants", RestaurantRouter)


//this handles unknown routes
app.all("*", (request, response, next) => {
    //one way of handling errors
    response.status(400).json({
        status: "fail",
        message: `cannot find the path: ${request.originalUrl} on this server`
    })

    //second way of handling errors
    // const err = new Error(`Sorry. cannot find the resource: ${request.originalUrl} on this server`)
    // err.status = "fail";
    // err.statusCode = 404;
    // next(err)
    next()
})
module.exports = app