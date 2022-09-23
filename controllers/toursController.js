const ToursModel = require("../models/toursModel.js")

exports.getAllTours = async (request, response, next) => {
    try {
        /**
        - example endpoint for sorting 127.0.0.1:3000/api/v1/tours/?sort=-price,-ratingsAverage
        - example enpoint for filtering 127.0.0.1:3000/api/v1/tours/?duration[gte]=5&difficulty=easy&price[lte]=1500
        - example endpoint for pagination 127.0.0.1:3000/api/v1/tours/?page=2&limit=10
        - example endpoint for field limiting 127.0.0.1:3000/api/v1/tours/?fields=name,duration,difficulty,price

        1. create a hard copy of the request.query obect
        2. on this new query object remove the following k:v pairs: sort, fields, page, limit
        3. stringify the new object after step 2 and replace gte gt lte lt to $gte $gt $lte $lt
        4. do the query as you normally would with find(formatedQuery)
        4. do the various actions the returned query object and await said object to get the needed result    
        */

        const excludedFields = ["sort", "page", "limit", "fields"]

        //1.
        let queryCopy = { ...request.query }

        //2.
        for (const key in queryCopy) {
            // console.log(key, ":", queryCopy[key]);

            if (excludedFields.includes(key)) {
                delete queryCopy[key]
            }
        }

        //3.
        const formatedFilterObj = JSON.parse(JSON.stringify(queryCopy).replace(/\b(gte|gt|lte|lt)\b/g, matchedStr => `$${matchedStr}`))


        let returnedQueryObj = ToursModel.find(formatedFilterObj)

        //for sorting
        if (request.query.sort) {
            let sortBy = request.query.sort.split(",").join(" ")

            returnedQueryObj = returnedQueryObj.sort(sortBy)

        }
        else {
            returnedQueryObj.sort("-createdAt")

        }

        //for limiting fields
        if (request.query.fields) {
            let requiredFields = request.query.fields.split(",").join(" ")
            returnedQueryObj = returnedQueryObj.select(requiredFields)
        }
        else {
            returnedQueryObj.select("-__v")
        }

        //this right here is for pagination
        const pageNum = request.query.page * 1 || 1;
        const limitValue = request.query.limit * 1 || 100;
        const skipValue = (pageNum - 1) * limitValue

        if (request.query.page) {

            const numberOfTours = await ToursModel.countDocuments()

            if (skipValue > numberOfTours) throw new Error(" page doesn't exist!")

            returnedQueryObj = returnedQueryObj.skip(skipValue).limit(limitValue)
        }

        const tourDocs = await returnedQueryObj

        response.status(200).json({
            status: "get all tours success",
            number: tourDocs.length,
            data: {
                docs: tourDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all tours fail",

        })
    }
}


exports.getSingleTour = async (request, response, next) => {
    try {
        // const singleTour = await ToursModel.findOne({ _id: request.params.id })
        const singleTour = await ToursModel.findById(request.params.id).select("-__v -secretTour")
        response.status(200).json({
            status: "success",
            data: {
                payload: singleTour

            }
        })

    } catch (error) {

        response.status(400).json({
            status: "get single tours fail",

        })
    }
}

exports.createSingleTour = async (request, response, next) => {
    try {
        const toursDoc = await ToursModel.create(request.body)

        response.status(200).json({
            status: "success",
            data: {
                payload: toursDoc

            }
        })
    } catch (error) {

        response.status(400).json({
            status: "create single tour fail",

        })
    }
}

exports.updateSingleTour = async (request, response, next) => {
    try {
        // const updatedTour = await ToursModel.updateOne({ _id: request.params.id }, request.body)
        const updatedTour = await ToursModel.findByIdAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })

        response.status(200).json({
            status: "success",
            data: {
                payload: updatedTour
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "update single tour fail",

        })
    }
}

exports.deleteSingleTour = async (request, response, next) => {
    try {
        const deletedTour = await ToursModel.deleteOne({ _id: request.params.id })

        // const deletedTour = await ToursModel.findByIdAndDelete({ _id: request.params.id })

        response.status(204).json({
            status: "success",
            data: {
                payload: deletedTour
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "delete single tour fail",

        })
    }

}


//data aggregation methods. TODO
exports.getTourStats = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getTourStats  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getTourStats fail",

        })
    }
}

exports.getToursWithin = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getToursWithin  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getToursWithin fail",

        })
    }
}

exports.getMonthlyPlan = (request, response, next) => {
    try {

        response.status(200).json({
            status: "getMontlyPlan  success",

        })

    } catch (error) {

        response.status(400).json({
            status: "getMontlyPlan fail",

        })
    }
}