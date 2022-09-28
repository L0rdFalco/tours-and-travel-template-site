paypal.Buttons({
    // Order is created on the server and the order id is returned
    createOrder: async (data, actions) => {
        return fetch("http://127.0.0.1:3000/api/v1/orders", {
            method: "post",
            // use the "body" param to optionally pass additional order information
            // like product ids or amount
        })
            .then((response) => {
                return response.json()
            })
            .then((order) => {
                return order.data.id
            })
            .catch(err => console.log(err))
    },
    // Finalize the transaction on the server after payer approval
    onApprove: async (data, actions) => {
        console.log(data.orderID);
        return fetch(`http://127.0.0.1:3000/api/v1/orders/${data.orderID}/capture`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((orderData) => {
                // Successful capture! For dev/demo purposes:
                console.log('Capture result', JSON.stringify(orderData, null, 2));
                // const transaction = orderData.data.purchase_units[0].payments.captures[0];
                // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
                // When ready to go live, remove the alert and show a success message within this page. For example:
                const element = document.getElementById('right-col');
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
            });
    }
}).render('#paypal-button-container');