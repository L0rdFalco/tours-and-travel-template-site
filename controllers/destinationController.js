const destinationModel = require("../models/destinationModel.js")

exports.getAllDestinations = async (request, response, next) => {
    try {
        /**
        - example endpoint for sorting 127.0.0.1:3000/api/v1/destination/?sort=-price,-ratingsAverage
        - example enpoint for filtering 127.0.0.1:3000/api/v1/destination/?duration[gte]=5&difficulty=easy&price[lte]=1500
        - example endpoint for pagination 127.0.0.1:3000/api/v1/destination/?page=2&limit=10
        - example endpoint for field limiting 127.0.0.1:3000/api/v1/destination/?fields=name,duration,difficulty,price

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


        let returnedQueryObj = destinationModel.find(formatedFilterObj)

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

            const numberOfdestination = await destinationModel.countDocuments()

            if (skipValue > numberOfdestination) throw new Error(" page doesn't exist!")

            returnedQueryObj = returnedQueryObj.skip(skipValue).limit(limitValue)
        }

        const destinationDocs = await returnedQueryObj

        response.status(200).json({
            status: "get all destination success",
            number: destinationDocs.length,
            data: {
                docs: destinationDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all destination fail",

        })
    }
}


exports.getSingleDestination = async (request, response, next) => {
    try {
        // const singledestination = await destinationModel.findOne({ _id: request.params.id })
        const singledestination = await destinationModel.findById(request.params.id).populate("reviews").select("-__v -secretdestination")
        response.status(200).json({
            status: "success",
            data: {
                payload: singledestination

            }
        })

    } catch (error) {

        response.status(400).json({
            status: "get single destination fail",

        })
    }
}

exports.createSingleDestination = async (request, response, next) => {
    try {
        const destinationDoc = await destinationModel.create(request.body)

        return response.status(200).json({
            status: "success",
            data: {
                payload: destinationDoc

            }
        })
    } catch (error) {
        console.log(error);

        return response.status(400).json({
            message: "create single destination fail",
            type: "fail"

        })
    }
}

exports.updateSingleDestination = async (request, response, next) => {
    try {
        // const updateddestination = await destinationModel.updateOne({ _id: request.params.id }, request.body)
        const updateddestination = await destinationModel.findByIdAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })

        response.status(200).json({
            status: "success",
            data: {
                payload: updateddestination
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "update single destination fail",

        })
    }
}

exports.deleteSingleDestination = async (request, response, next) => {
    try {
        const deleteddestination = await destinationModel.deleteOne({ _id: request.params.id })

        // const deleteddestination = await destinationModel.findByIdAndDelete({ _id: request.params.id })

        response.status(204).json({
            status: "success",
            data: {
                payload: deleteddestination
            }

        })
    } catch (error) {

        response.status(400).json({
            status: "delete single destination fail",

        })
    }

}

