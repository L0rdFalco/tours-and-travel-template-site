const multer = require("multer");
const sharp = require("sharp")

const restaurantModel = require("../models/restaurantModel.js")

//this stores the image as a buffer in memory
const multerStorage = multer.memoryStorage()
//tests if uploaded file is an image
const multerFilter = (request, file, callback) => {

    file.mimetype.split("/")[0] === "image" ? callback(null, true) : callback(new Error("not an image"), false);

}

const upload = multer({ storage: multerStorage, fileFilter: multerFilter })

exports.uploadRestaurantImages = upload.fields([
    {
        name: "imageCover",
        maxCount: 1
    },
    {
        name: "images",
        maxCount: 5

    }
])

exports.resizeRestaurantImages = async (request, response, next) => {

    try {
        request.files.imageCover || request.files.images ? null : next()

        console.log("num of images: ", request.files.images.length);

        const imageCoverName = `${request.user.id}-${request.files.imageCover[0].originalname}.jpeg`

        const imageRes = await sharp(request.files.imageCover[0].buffer)
            .resize(2000, 1330)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(`public/assets/img/res/${imageCoverName}`)


        request.body.imageCover = imageCoverName

        request.body.images = []
        request.files.images.forEach(async (image, i) => {
            const filename = `${request.user.id}-${image.originalname}-${i + 1}.jpeg`

            await sharp(image.buffer)
                .resize(800, 500)
                .toFormat("jpeg")
                .jpeg({ quality: 90 })
                .toFile(`public/assets/img/res/${filename}`)

            request.body.images.push(filename)


        })

        next()
    } catch (error) {
        console.log(error);
        response.status(400).json({
            status: "resizeRestaurantImage fail",

        })
    }
}

exports.getAllRestaurants = async (request, response, next) => {
    try {
        /**
        - example endpoint for sorting 127.0.0.1:3000/api/v1/restaurants/?sort=-price,-ratingsAverage
        - example enpoint for filtering 127.0.0.1:3000/api/v1/restaurants/?duration[gte]=5&difficulty=easy&price[lte]=1500
        - example endpoint for pagination 127.0.0.1:3000/api/v1/restaurants/?page=2&limit=10
        - example endpoint for field limiting 127.0.0.1:3000/api/v1/restaurants/?fields=name,duration,difficulty,price

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


        let returnedQueryObj = restaurantModel.find(formatedFilterObj)

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

            const numberOfrestaurant = await restaurantModel.countDocuments()

            if (skipValue > numberOfrestaurant) throw new Error(" page doesn't exist!")

            returnedQueryObj = returnedQueryObj.skip(skipValue).limit(limitValue)
        }

        const restaurantDocs = await returnedQueryObj

        response.status(200).json({
            status: "get all restaurant success",
            number: restaurantDocs.length,
            data: {
                docs: restaurantDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all restaurant fail",

        })
    }
}


exports.getSingleRestaurant = async (request, response, next) => {
    try {
        // const singlerestaurant = await restaurantModel.findOne({ _id: request.params.id })
        const singlerestaurant = await restaurantModel.findById(request.params.id).populate("reviews").select("-__v -secretrestaurant")
        response.status(200).json({
            status: "success",
            data: {
                payload: singlerestaurant

            }
        })

    } catch (error) {

        response.status(400).json({
            status: "get single restaurant fail",

        })
    }
}

exports.createSingleRestaurant = async (request, response, next) => {
    try {
        const restaurantDoc = await restaurantModel.create(request.body)

        return response.status(200).json({
            status: "success",
            data: {
                payload: restaurantDoc

            }
        })
    } catch (error) {
        console.log(error);

        return response.status(400).json({
            message: "create single restaurant fail",
            type: "fail"

        })
    }
}

exports.updateSingleRestaurant = async (request, response, next) => {
    try {
        // const updatedrestaurant = await restaurantModel.updateOne({ _id: request.params.id }, request.body)
        // const updatedrestaurant = await restaurantModel.findByIdAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })

        // response.status(200).json({
        //     status: "success",
        //     data: {
        //         payload: updatedrestaurant
        //     }

        // })
    } catch (error) {

        response.status(400).json({
            status: "update single restaurant fail",

        })
    }
}

exports.deleteSingleRestaurant = async (request, response, next) => {
    try {
        console.log("delete restaurant with id: ", request.params.id);
        // const deletedrestaurant = await restaurantModel.deleteOne({ _id: request.params.id })

        // // const deletedrestaurant = await restaurantModel.findByIdAndDelete({ _id: request.params.id })

        // response.status(204).json({
        //     status: "success",
        //     data: {
        //         payload: deletedrestaurant
        //     }

        // })
    } catch (error) {

        response.status(400).json({
            status: "delete single restaurant fail",

        })
    }

}

