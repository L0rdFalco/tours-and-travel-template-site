const multer = require("multer")
const sharp = require("sharp")

const hotelsModel = require("../models/hotelsModel.js")

/**
 * these configurations dont resize the image
  
 const multerStorage = multer.diskStorage({
     destination: (request, file, callback) => {
 
         callback(null, "public/img/hotel")
 
     },
     filename: (request, file, callback) => {
 
         const userid = request.user.id
         const ext = file.mimetype.split("/")[1]
 
 
         callback(null, `hotel-${userid}.${ext}`)
 
 
     }
 })
 */

//this stores the image as a buffer in memory
const multerStorage = multer.memoryStorage()
//tests if uploaded file is an image
const multerFilter = (request, file, callback) => {

    file.mimetype.split("/")[0] === "image" ? callback(null, true) : callback(new Error("not an image"), false);

}

const upload = multer({ storage: multerStorage, fileFilter: multerFilter })

exports.uploadFeaturedImage = upload.single("hotel_featured-image")

exports.resizePhoto = async (request, response, next) => {
    try {
        const userid = request.user.id

        if (!request.file) return next()

        request.file.filename = `hotel-${userid}.jpeg`
        const imageRes = await sharp(request.file.buffer).resize(500, 1200).toFormat("jpeg").jpeg({ quality: 90 }).toFile(`public/assets/img/hotel/${request.file.filename}`)

        next()

    } catch (error) {

        console.log(error);

        response.status(400).json({
            status: "resize photo fail",

        })
    }
}



/**
 upload.array is used with one field accepting multiple files
 eg. upload.array("name of field", maxCount as number)

 upload.single("name of field") is used when uploading a single file

 upload.fields({name:"name of field1", maxCount},{name:"name of field2", maxCount}) used for multiple uplaods from multiple fields
*/


exports.getAllHotels = async (request, response, next) => {
    try {
        /**
        - example endpoint for sorting 127.0.0.1:3000/api/v1/hotels/?sort=-price,-ratingsAverage
        - example enpoint for filtering 127.0.0.1:3000/api/v1/hotels/?duration[gte]=5&difficulty=easy&price[lte]=1500
        - example endpoint for pagination 127.0.0.1:3000/api/v1/hotels/?page=2&limit=10
        - example endpoint for field limiting 127.0.0.1:3000/api/v1/hotels/?fields=name,duration,difficulty,price

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


        let returnedQueryObj = hotelsModel.find(formatedFilterObj)

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

            const numberOfhotels = await hotelsModel.countDocuments()

            if (skipValue > numberOfhotels) throw new Error(" page doesn't exist!")

            returnedQueryObj = returnedQueryObj.skip(skipValue).limit(limitValue)
        }

        const hotelDocs = await returnedQueryObj

        response.status(200).json({
            status: "get all hotels success",
            number: hotelDocs.length,
            data: {
                docs: hotelDocs
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get all hotels fail",

        })
    }
}


exports.getSingleHotel = async (request, response, next) => {
    try {
        // const singlehotel = await hotelsModel.findOne({ _id: request.params.id })
        const singlehotel = await hotelsModel.findById(request.params.id).populate("reviews").select("-__v -secrethotel")
        response.status(200).json({
            status: "success",
            data: {
                payload: singlehotel

            }
        })

    } catch (error) {

        response.status(400).json({
            status: "get single hotels fail",

        })
    }
}

exports.createSingleHotel = async (request, response, next) => {
    try {
        const hotelsDoc = await hotelsModel.create(request.body)

        return response.status(200).json({
            status: "success",
            data: {
                payload: hotelsDoc

            }
        })
    } catch (error) {
        console.log(error);

        return response.status(400).json({
            message: "create single hotel fail",
            type: "fail"

        })
    }
}

exports.updateSingleHotel = async (request, response, next) => {
    try {
        console.log("updated file image ", request.file);
        const filteredBody = request.body

        if (request.file) filteredBody.imageCover = request.file.filename;

        // console.log("filtered: ", filteredBody);
        // const updatedhotel = await hotelsModel.updateOne({ _id: request.params.id }, request.body)
        // const updatedhotel = await hotelsModel.findByIdAndUpdate({ _id: request.params.id }, filteredBody, { new: true, runValidators: true })

        // response.status(200).json({
        //     status: "success",
        //     data: {
        //         payload: updatedhotel
        //     }
        // })
    } catch (error) {

        response.status(400).json({
            status: "update single hotel fail",

        })
    }
}

exports.deleteSingleHotel = async (request, response, next) => {
    try {
        console.log("delete hotel object", request.params.id);
        // const deletedhotel = await hotelsModel.deleteOne({ _id: request.params.id })

        // // const deletedhotel = await hotelsModel.findByIdAndDelete({ _id: request.params.id })

        // response.status(204).json({
        //     status: "success",
        //     data: {
        //         payload: deletedhotel
        //     }

        // })
    } catch (error) {

        response.status(400).json({
            status: "delete single hotel fail",

        })
    }

}

