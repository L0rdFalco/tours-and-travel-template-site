exports.signup = (request, response, next) => {

    try {

    } catch (error) {
        console.log(error);
        response.status(400).json({
            status: "fail",
            message: "singnup fail"
        })

    }

}