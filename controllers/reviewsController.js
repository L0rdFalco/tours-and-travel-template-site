const ReviewsModel = require("../models/reviewsModel.js")
exports.getAllReviews = async (request, response, next) => {
    try {
        const reviews = await ReviewsModel.find().select("-__v")

        response.status(200).json({
            status: "get all Reviews success",
            number: reviews.length,
            data: {
                revs: reviews
            }

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "get all Reviews fail",

        })
    }

}


exports.getSingleReview = async (request, response, next) => {
    try {
        const singleReview = await ReviewsModel.findById(request.params.review_id).select("-__v")

        response.status(200).json({
            status: "get single Reviews success",
            data: {
                rev: singleReview
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "get single Reviews fail",

        })
    }
}

exports.createSingleReview = async (request, response, next) => {
    try {

        const reviewData = {
            review: request.body.review,
            rating: request.body.rating,
            user: request.body.user,
            tour: request.body.tour

        }

        const newReview = await ReviewsModel.create(reviewData)

        response.status(200).json({
            status: "create single Review success",
            data: {
                review: newReview
            }

        })

    } catch (error) {

        response.status(400).json({
            status: "create single Review fail",

        })
    }

}

exports.updateSingleReview = async (request, response, next) => {
    try {
        const reviewData = {
            review: request.body.review,
            rating: request.body.rating
        }
        const updatedReview = await ReviewsModel.findByIdAndUpdate(request.params.id, reviewData, { runValidators: true, new: true })

        response.status(200).json({
            status: "update single Review success",
            data: {
                rev: updatedReview
            }

        })

    } catch (error) {
        console.log(error);

        response.status(400).json({
            status: "update single Review fail",

        })
    }
}

exports.deleteSingleReview = async (request, response, next) => {
    try {
        const deletedReview = await ReviewsModel.findByIdAndDelete(request.params.id)

        response.status(200).json({
            status: "delete single Review success",

        })

    } catch (error) {

        response.status(400).json({
            status: "delete single Review fail",

        })
    }

}