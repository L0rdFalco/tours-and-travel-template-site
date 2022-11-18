const updateMainBtn = document.getElementById("restaurant_update")
const deleteMainBtn = document.getElementById("restaurant_delete")
const updateModalBtn = document.getElementById("UpdateSubmitBtn")
const deleteModalBtn = document.getElementById("deleteListingBtn")

const delete_modal = document.querySelector(".delete-modal");
const delete_overlay = document.querySelector(".delete-overlay");
const delete_closeModalBtn = document.querySelector(".close-delete-modal")
const deleteListingBtn = document.getElementById("deleteListingBtn")

const confirm_modal = document.querySelector(".confirm-modal");
const confirm_overlay = document.querySelector(".confirm-overlay");
const confirm_closeModalBtn = document.querySelector(".close-confirm-modal")
const updateListingBtn = document.getElementById("UpdateSubmitBtn")

const restaurantInfo = { amenities: [], images: [] }

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
    const errorEl = document.getElementById("error")
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

    restaurantNameValue.length > 0 ? restaurantInfo["name"] = restaurantNameValue : restaurantInfo["name"] = null
    restaurantPriceValue.length > 0 ? restaurantInfo["price"] = restaurantPriceValue : restaurantInfo["price"] = null
    restaurantLogoValue.length > 0 ? restaurantInfo["logo"] = restaurantLogoValue : restaurantInfo["logo"] = "restaurant_logo.png"
    restaurantMenuValue.length > 0 ? restaurantInfo["menu"] = restaurantMenuValue : restaurantInfo["menu"] = "restaurant_menu.pdf"
    restaurantPhoneValue.length > 0 ? restaurantInfo["phone"] = restaurantPhoneValue : restaurantInfo["phone"] = null
    restaurantLlValue.length > 0 ? restaurantInfo["landline"] = restaurantLlValue : restaurantInfo["landline"] = null
    restaurantEmailValue.length > 0 ? restaurantInfo["email"] = restaurantEmailValue : restaurantInfo["email"] = null
    restaurantFaxValue.length > 0 ? restaurantInfo["fax"] = restaurantFaxValue : restaurantInfo["fax"] = null
    restaurantAddressValue.length > 0 ? restaurantInfo["address"] = restaurantAddressValue : restaurantInfo["address"] = null
    restaurantCityValue.length > 0 ? restaurantInfo["city"] = restaurantCityValue : restaurantInfo["city"] = null
    restaurantStateValue.length > 0 ? restaurantInfo["state"] = restaurantStateValue : restaurantInfo["state"] = null
    restaurantCountryValue.length > 0 ? restaurantInfo["country"] = restaurantCountryValue : restaurantInfo["country"] = null
    restaurantOwnerValue.length > 0 ? restaurantInfo["owner"] = restaurantOwnerValue : restaurantInfo["owner"] = null
    restaurantContactValue.length > 0 ? restaurantInfo["contact"] = restaurantContactValue : restaurantInfo["contact"] = null
    restaurantSummaryValue.length > 0 ? restaurantInfo["summary"] = restaurantSummaryValue : restaurantInfo["summary"] = null
    restaurantDescriptionValue.length > 0 ? restaurantInfo["description"] = restaurantDescriptionValue : restaurantInfo["description"] = null

    restaurantFeaturedImageVal.length > 0 ? restaurantInfo["imageCover"] = restaurantFeaturedImageVal : restaurantInfo["imageCover"] = "rest-1.jpg"
    restaurant_gallery1Value.length > 0 ? restaurantInfo["images"].push(restaurant_gallery1Value) : restaurantInfo["images"].push("rest-1.jpg")
    restaurant_gallery2Value.length > 0 ? restaurantInfo["images"].push(restaurant_gallery2Value) : restaurantInfo["images"].push("rest-2.jpg")
    restaurant_gallery3Value.length > 0 ? restaurantInfo["images"].push(restaurant_gallery3Value) : restaurantInfo["images"].push("rest-3.jpg")
    restaurant_gallery4Value.length > 0 ? restaurantInfo["images"].push(restaurant_gallery4Value) : restaurantInfo["images"].push("rest-4.jpg")

    if (input1El) restaurantInfo["amenities"].push("Satellite TV")
    if (input2El) restaurantInfo["amenities"].push("Coffeemaker")
    if (input3El) restaurantInfo["amenities"].push("Hair Dryer")
    if (input4El) restaurantInfo["amenities"].push("Swimming Pool")
    if (input5El) restaurantInfo["amenities"].push("Room Service")
    if (input6El) restaurantInfo["amenities"].push("Luxury Bedding")
    if (input7El) restaurantInfo["amenities"].push("Good Showers")
    if (input8El) restaurantInfo["amenities"].push("Free Parking")
    if (input9El) restaurantInfo["amenities"].push("Free Wifi")
    if (input10El) restaurantInfo["amenities"].push("Bath towel")
    if (input11El) restaurantInfo["amenities"].push("Free Coffee")
    if (input12El) restaurantInfo["amenities"].push("Pets Allow")
    if (input13El) restaurantInfo["amenities"].push("Hot Water")
    if (input14El) restaurantInfo["amenities"].push("Attached garage")
    if (input15El) restaurantInfo["amenities"].push("Elevator")
    if (input16El) restaurantInfo["amenities"].push("Spa/Sauna")
    if (input17El) restaurantInfo["amenities"].push("Indoor pool")
    if (input18El) restaurantInfo["amenities"].push("Security cameras")


    confirm_modalIncluder(restaurantInfo)


})
if (deleteMainBtn) deleteMainBtn.addEventListener("click", function (e) {
    e.preventDefault()
    deleteModalIncluder()

})

if (updateModalBtn) updateModalBtn.addEventListener("click", function (e) {

})
if (deleteModalBtn) deleteModalBtn.addEventListener("click", function (e) {

})

if (updateListingBtn) updateListingBtn.addEventListener("click", function (e) {
    console.log("make post request here");

})
if (deleteListingBtn) deleteListingBtn.addEventListener("click", function (e) {
    console.log("make delete requet here");

})