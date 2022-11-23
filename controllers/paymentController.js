const axios = require("axios")

exports.createOrder = async (request, response, next) => {
    try {
        const res1 = await generateAccessToken();
        const url = `${process.env.base}/v2/checkout/orders`;

        const res2 = await axios({
            url: url,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${res1.access_token}`,
            },
            data: JSON.stringify({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: "USD",
                            value: "100.00",
                        },
                    },
                ],
            }),

        })

        response.status(200).json(
            {
                data: res2.data
            })
    } catch (error) {
        console.log("createOrder fail", error);

    }
}

exports.capturePayment = async (request, response, next) => {
    try {
        try {
            const orderId = request.params.orderID
            const res = await generateAccessToken();
            const url = `${process.env.base}/v2/checkout/orders/${orderId}/capture`;

            const res1 = await axios({
                url: url,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${res.access_token}`,
                }

            })

            response.status(200).json(
                {
                    data: res1.data
                })
        } catch (error) {
            console.log("capturePayment fail");
            console.log(error);

        }



    } catch (error) {
        console.log(error);

    }
}


// generate an access token using client id and app secret
async function generateAccessToken() {

    try {

        const response = await axios({
            url: `${process.env.base}/v1/oauth2/token`,
            method: "post",
            data: "grant_type=client_credentials",
            auth: {
                username: process.env.PP_CLIENT_ID,
                password: process.env.PP_APP_SECRET
            }

        }
        );
        return response.data;
    } catch (error) {
        console.log("....", error.message);
    }
}

