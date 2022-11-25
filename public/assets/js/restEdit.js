
const updateMainBtn = document.getElementById("restaurant_update")
const deleteMainBtn = document.getElementById("restaurant_delete")

const delete_modal = document.querySelector(".delete-modal");
const delete_overlay = document.querySelector(".delete-overlay");
const delete_closeModalBtn = document.querySelector(".close-delete-modal")
const deleteListingBtn = document.getElementById("deleteListingBtn")

const confirm_modal = document.querySelector(".confirm-modal");
const confirm_overlay = document.querySelector(".confirm-overlay");
const confirm_closeModalBtn = document.querySelector(".close-confirm-modal")
const updateListingBtn = document.getElementById("UpdateSubmitBtn")

let restaurantListingObj = { amenities: [], images: [] }

function deleteModalIncluder() {
    // document.getElementById("currentElVal").textContent = elementId

    delete_modal.classList.remove("hidden");
    delete_overlay.classList.remove("hidden");

}

function deleteModalRemover() {
    delete_modal.classList.add("hidden");
    delete_overlay.classList.add("hidden");
}


function confirm_modalIncluder(resourceObj) {
    confirm_modal.classList.remove("hidden");
    confirm_overlay.classList.remove("hidden");

    let resourceString = `<table id="resources">`

    for (const [key, value] of Object.entries(resourceObj)) {
        resourceString += `
        <tr>
        <th>${key}</th>
        <td>${JSON.stringify(value)}</td>
        </tr>

    `

    }
    document.getElementById("conf_row").innerHTML = resourceString

    //make post request here

}

function confirm_modalRemover() {
    confirm_modal.classList.add("hidden");
    confirm_overlay.classList.add("hidden");
}

if (confirm_closeModalBtn) confirm_closeModalBtn.addEventListener("click", confirm_modalRemover);
if (confirm_overlay) confirm_overlay.addEventListener("click", confirm_modalRemover);

if (delete_closeModalBtn) delete_closeModalBtn.addEventListener("click", deleteModalRemover);
if (delete_overlay) delete_overlay.addEventListener("click", deleteModalRemover);


if (updateMainBtn) updateMainBtn.addEventListener("click", function (e) {
    e.preventDefault()
    restaurantListingObj = { amenities: [], images: [] }
    const restaurantNameValue = document.getElementById("restaurant_name").value.trim()
    const restaurantPriceValue = document.getElementById("restaurant_price").value.trim()
    const restaurantLogoValue = document.getElementById("restaurant_logo").value.trim()
    const restaurantMenuValue = document.getElementById("restaurant_menu").value.trim()
    const restaurantPhoneValue = document.getElementById("restaurant_phone").value.trim()
    const restaurantLlValue = document.getElementById("restaurant_ll").value.trim()
    const restaurantEmailValue = document.getElementById("restaurant_email").value.trim()
    const restaurantFaxValue = document.getElementById("restaurant_fax").value.trim()
    const restaurantAddressValue = document.getElementById("restaurant_address").value.trim()
    const restaurantCityValue = document.getElementById("restaurant_city").value.trim()
    const restaurantStateValue = document.getElementById("restaurant_state").value.trim()
    const restaurantCountryValue = document.getElementById("restaurant_country").value.trim()
    const restaurantOwnerValue = document.getElementById("restaurant_owner").value.trim()
    const restaurantContactValue = document.getElementById("restaurant_contact").value.trim()
    const restaurantSummaryValue = document.getElementById("rt_summary").value.trim()
    const restaurantDescriptionValue = document.getElementById("rt_description").value.trim()
    const restaurantFeaturedImageVal = document.getElementById("restaurant_featured-image").value.trim()
    const restaurant_gallery1Value = document.getElementById("restaurant_gallery1").value.trim()
    const restaurant_gallery2Value = document.getElementById("restaurant_gallery2").value.trim()
    const restaurant_gallery3Value = document.getElementById("restaurant_gallery3").value.trim()
    const restaurant_gallery4Value = document.getElementById("restaurant_gallery4").value.trim()

    const input1El = document.getElementById("1").checked
    const input2El = document.getElementById("2").checked
    const input3El = document.getElementById("3").checked
    const input4El = document.getElementById("4").checked
    const input5El = document.getElementById("5").checked
    const input6El = document.getElementById("6").checked
    const input7El = document.getElementById("7").checked
    const input8El = document.getElementById("8").checked
    const input9El = document.getElementById("9").checked
    const input10El = document.getElementById("10").checked
    const input11El = document.getElementById("11").checked
    const input12El = document.getElementById("12").checked
    const input13El = document.getElementById("13").checked
    const input14El = document.getElementById("14").checked
    const input15El = document.getElementById("15").checked
    const input16El = document.getElementById("16").checked
    const input17El = document.getElementById("17").checked
    const input18El = document.getElementById("18").checked

    restaurantNameValue.length > 0 ? restaurantListingObj["name"] = restaurantNameValue : null
    restaurantPriceValue.length > 0 ? restaurantListingObj["price"] = restaurantPriceValue : null
    restaurantLogoValue.length > 0 ? restaurantListingObj["logo"] = restaurantLogoValue : null
    restaurantMenuValue.length > 0 ? restaurantListingObj["menu"] = restaurantMenuValue : null
    restaurantPhoneValue.length > 0 ? restaurantListingObj["phone"] = restaurantPhoneValue : null
    restaurantLlValue.length > 0 ? restaurantListingObj["landline"] = restaurantLlValue : null
    restaurantEmailValue.length > 0 ? restaurantListingObj["email"] = restaurantEmailValue : null
    restaurantFaxValue.length > 0 ? restaurantListingObj["fax"] = restaurantFaxValue : null
    restaurantAddressValue.length > 0 ? restaurantListingObj["address"] = restaurantAddressValue : null
    restaurantCityValue.length > 0 ? restaurantListingObj["city"] = restaurantCityValue : null
    restaurantStateValue.length > 0 ? restaurantListingObj["state"] = restaurantStateValue : null
    restaurantCountryValue.length > 0 ? restaurantListingObj["country"] = restaurantCountryValue : null
    restaurantOwnerValue.length > 0 ? restaurantListingObj["owner"] = restaurantOwnerValue : null
    restaurantContactValue.length > 0 ? restaurantListingObj["contact"] = restaurantContactValue : null
    restaurantSummaryValue.length > 0 ? restaurantListingObj["summary"] = restaurantSummaryValue : null
    restaurantDescriptionValue.length > 0 ? restaurantListingObj["description"] = restaurantDescriptionValue : null

    restaurantFeaturedImageVal.length > 0 ? restaurantListingObj["imageCover"] = restaurantFeaturedImageVal : restaurantListingObj["imageCover"] = "rest-1.jpg"
    restaurant_gallery1Value.length > 0 ? restaurantListingObj["images"].push(restaurant_gallery1Value) : restaurantListingObj["images"].push("rest-1.jpg")
    restaurant_gallery2Value.length > 0 ? restaurantListingObj["images"].push(restaurant_gallery2Value) : restaurantListingObj["images"].push("rest-2.jpg")
    restaurant_gallery3Value.length > 0 ? restaurantListingObj["images"].push(restaurant_gallery3Value) : restaurantListingObj["images"].push("rest-3.jpg")
    restaurant_gallery4Value.length > 0 ? restaurantListingObj["images"].push(restaurant_gallery4Value) : restaurantListingObj["images"].push("rest-4.jpg")

    if (input1El) restaurantListingObj["amenities"].push("Satellite TV")
    if (input2El) restaurantListingObj["amenities"].push("Coffeemaker")
    if (input3El) restaurantListingObj["amenities"].push("Hair Dryer")
    if (input4El) restaurantListingObj["amenities"].push("Swimming Pool")
    if (input5El) restaurantListingObj["amenities"].push("Room Service")
    if (input6El) restaurantListingObj["amenities"].push("Luxury Bedding")
    if (input7El) restaurantListingObj["amenities"].push("Good Showers")
    if (input8El) restaurantListingObj["amenities"].push("Free Parking")
    if (input9El) restaurantListingObj["amenities"].push("Free Wifi")
    if (input10El) restaurantListingObj["amenities"].push("Bath towel")
    if (input11El) restaurantListingObj["amenities"].push("Free Coffee")
    if (input12El) restaurantListingObj["amenities"].push("Pets Allow")
    if (input13El) restaurantListingObj["amenities"].push("Hot Water")
    if (input14El) restaurantListingObj["amenities"].push("Attached garage")
    if (input15El) restaurantListingObj["amenities"].push("Elevator")
    if (input16El) restaurantListingObj["amenities"].push("Spa/Sauna")
    if (input17El) restaurantListingObj["amenities"].push("Indoor pool")
    if (input18El) restaurantListingObj["amenities"].push("Security cameras")


    confirm_modalIncluder(restaurantListingObj)


})
if (deleteMainBtn) deleteMainBtn.addEventListener("click", function (e) {
    e.preventDefault()
    deleteModalIncluder()

})


if (updateListingBtn) updateListingBtn.addEventListener("click", async function (e) {
    try {
        e.preventDefault()

        const res = await axios({
            method: "PATCH",
            url: `/api/v1/restaurants/${window.location.href.split("rest-edit/")[1]}`,
            data: restaurantListingObj
        })

        console.log("restaurant listing updated? ", res.data);
    } catch (error) {
        console.log(error);
    }
    console.log("make post request here");

})
if (deleteListingBtn) deleteListingBtn.addEventListener("click", async function (e) {
    try {
        e.preventDefault()

        const res = await axios({
            method: "DELETE",
            url: `/api/v1/restaurants/${window.location.href.split("rest-edit/")[1]}`,

        })

        console.log("restaurant listing deleted? ", res.data);
    } catch (error) {
        console.log(error);
    }
    console.log("make delete request here");

})