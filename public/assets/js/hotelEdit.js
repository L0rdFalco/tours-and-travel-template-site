const updateMainBtn = document.getElementById("hotel_update")
const deleteMainBtn = document.getElementById("hotel_delete")
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

const hotelInfo = { amenities: [], images: [] }
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
    const hotelNameValue = document.getElementById("hotel_name").value.trim()
    const hotelPriceValue = document.getElementById("hotel_price").value.trim()

    const hotelPhoneValue = document.getElementById("hotel_phone").value.trim()
    const hotelLlValue = document.getElementById("hotel_ll").value.trim()
    const hotelEmailValue = document.getElementById("hotel_email").value.trim()
    const hotelFaxValue = document.getElementById("hotel_fax").value.trim()
    const hotelAddressValue = document.getElementById("hotel_address").value.trim()
    const hotelCityValue = document.getElementById("hotel_city").value.trim()
    const hotelStateValue = document.getElementById("hotel_state").value.trim()
    const hotelCountryValue = document.getElementById("hotel_country").value.trim()
    const hotelOwnerValue = document.getElementById("hotel_owner").value.trim()
    const hotelContactValue = document.getElementById("hotel_contact").value.trim()
    const hotelSummaryValue = document.getElementById("hl_summary").value.trim()
    const hotelDescriptionValue = document.getElementById("hl_description").value.trim()
    const hotelFeaturedImageVal = document.getElementById("hotel_featured-image").value.trim()
    const hotel_gallery1Value = document.getElementById("hotel_gallery1").value.trim()
    const hotel_gallery2Value = document.getElementById("hotel_gallery2").value.trim()
    const hotel_gallery3Value = document.getElementById("hotel_gallery3").value.trim()
    const hotel_gallery4Value = document.getElementById("hotel_gallery4").value.trim()

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

    hotelNameValue.length > 0 ? hotelInfo["name"] = hotelNameValue : hotelInfo["name"] = null
    hotelPriceValue.length > 0 ? hotelInfo["price"] = hotelPriceValue : hotelInfo["price"] = null
    hotelPhoneValue.length > 0 ? hotelInfo["phone"] = hotelPhoneValue : hotelInfo["phone"] = null
    hotelLlValue.length > 0 ? hotelInfo["landline"] = hotelLlValue : hotelInfo["landline"] = null
    hotelEmailValue.length > 0 ? hotelInfo["email"] = hotelEmailValue : hotelInfo["email"] = null
    hotelFaxValue.length > 0 ? hotelInfo["fax"] = hotelFaxValue : hotelInfo["fax"] = null
    hotelAddressValue.length > 0 ? hotelInfo["address"] = hotelAddressValue : hotelInfo["address"] = null
    hotelCityValue.length > 0 ? hotelInfo["city"] = hotelCityValue : hotelInfo["city"] = null
    hotelStateValue.length > 0 ? hotelInfo["state"] = hotelStateValue : hotelInfo["state"] = null
    hotelCountryValue.length > 0 ? hotelInfo["country"] = hotelCountryValue : hotelInfo["country"] = null
    hotelOwnerValue.length > 0 ? hotelInfo["owner"] = hotelOwnerValue : hotelInfo["owner"] = null
    hotelContactValue.length > 0 ? hotelInfo["contact"] = hotelContactValue : hotelInfo["contact"] = null
    hotelSummaryValue.length > 0 ? hotelInfo["summary"] = hotelSummaryValue : hotelInfo["summary"] = null
    hotelDescriptionValue.length > 0 ? hotelInfo["description"] = hotelDescriptionValue : hotelInfo["description"] = null

    hotelFeaturedImageVal.length > 0 ? hotelInfo["imageCover"] = hotelFeaturedImageVal : hotelInfo["imageCover"] = "rest-1.jpg"
    hotel_gallery1Value.length > 0 ? hotelInfo["images"].push(hotel_gallery1Value) : hotelInfo["images"].push("rest-1.jpg")
    hotel_gallery2Value.length > 0 ? hotelInfo["images"].push(hotel_gallery2Value) : hotelInfo["images"].push("rest-2.jpg")
    hotel_gallery3Value.length > 0 ? hotelInfo["images"].push(hotel_gallery3Value) : hotelInfo["images"].push("rest-3.jpg")
    hotel_gallery4Value.length > 0 ? hotelInfo["images"].push(hotel_gallery4Value) : hotelInfo["images"].push("rest-4.jpg")

    if (input1El) hotelInfo["amenities"].push("Satellite TV")
    if (input2El) hotelInfo["amenities"].push("Coffeemaker")
    if (input3El) hotelInfo["amenities"].push("Hair Dryer")
    if (input4El) hotelInfo["amenities"].push("Swimming Pool")
    if (input5El) hotelInfo["amenities"].push("Room Service")
    if (input6El) hotelInfo["amenities"].push("Luxury Bedding")
    if (input7El) hotelInfo["amenities"].push("Good Showers")
    if (input8El) hotelInfo["amenities"].push("Free Parking")
    if (input9El) hotelInfo["amenities"].push("Free Wifi")
    if (input10El) hotelInfo["amenities"].push("Bath towel")
    if (input11El) hotelInfo["amenities"].push("Free Coffee")
    if (input12El) hotelInfo["amenities"].push("Pets Allow")
    if (input13El) hotelInfo["amenities"].push("Hot Water")
    if (input14El) hotelInfo["amenities"].push("Attached garage")
    if (input15El) hotelInfo["amenities"].push("Elevator")
    if (input16El) hotelInfo["amenities"].push("Spa/Sauna")
    if (input17El) hotelInfo["amenities"].push("Indoor pool")
    if (input18El) hotelInfo["amenities"].push("Security cameras")


    confirm_modalIncluder(hotelInfo)


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