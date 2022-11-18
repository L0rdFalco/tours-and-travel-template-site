'use strict';

const destUpdateBtn = document.getElementById("destination_update")
const destDeleteBtn = document.getElementById("destination_delete")

const delete_modal = document.querySelector(".delete-modal");
const delete_overlay = document.querySelector(".delete-overlay");
const delete_closeModalBtn = document.querySelector(".close-delete-modal")
const deleteListingBtn = document.getElementById("deleteListingBtn")

const confirm_modal = document.querySelector(".confirm-modal");
const confirm_overlay = document.querySelector(".confirm-overlay");
const confirm_closeModalBtn = document.querySelector(".close-confirm-modal")
const updateListingBtn = document.getElementById("UpdateSubmitBtn")

const locInfoSubmitBtn = document.getElementById("infosubmit")

const resourceInfo = { amenities: [], images: [], location: [] }


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

function deleteModalIncluder() {
    // document.getElementById("currentElVal").textContent = elementId

    delete_modal.classList.remove("hidden");
    delete_overlay.classList.remove("hidden");

}

function deleteModalRemover() {
    delete_modal.classList.add("hidden");
    delete_overlay.classList.add("hidden");
}

if (confirm_closeModalBtn) confirm_closeModalBtn.addEventListener("click", confirm_modalRemover);
if (confirm_overlay) confirm_overlay.addEventListener("click", confirm_modalRemover);

if (delete_closeModalBtn) delete_closeModalBtn.addEventListener("click", deleteModalRemover);
if (delete_overlay) delete_overlay.addEventListener("click", deleteModalRemover);


//main page buttons
if (destUpdateBtn) destUpdateBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const resourceIdValue = document.getElementById("resourceId").innerText
    const iteneraryValue = document.getElementById("itenerary").value.trim()
    const nameValue = document.getElementById("resource_name").value.trim()
    const startDateValue = document.getElementById("start_date").value.trim()
    const endDateValue = document.getElementById("end_date").value.trim()
    const guideValue = document.getElementById("destination_guide").value.trim()
    const difficultyValue = document.getElementById("destination_difficulty").value.trim()
    const priceValue = document.getElementById("destination_price").value.trim()
    const durationValue = document.getElementById("destination_duration").value.trim()
    const groupsizeValue = document.getElementById("destination_groupsize").value.trim()
    const summaryValue = document.getElementById("dn_summary").value.trim()
    const descValue = document.getElementById("dn_description").value.trim()
    const destinationFeaturedImageVal = document.getElementById("destination_featured-image").value.trim()
    const destination_gallery1Value = document.getElementById("destination_gallery1").value.trim()
    const destination_gallery2Value = document.getElementById("destination_gallery2").value.trim()
    const destination_gallery3Value = document.getElementById("destination_gallery3").value.trim()
    const destination_gallery4Value = document.getElementById("destination_gallery4").value.trim()

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


    resourceIdValue.length > 0 ? resourceInfo["id"] = resourceIdValue : resourceInfo["id"] = null
    iteneraryValue.length > 0 ? resourceInfo["itenerary"] = iteneraryValue : resourceInfo["itenerary"] = "dest_itenerary.pdf"
    nameValue.length > 0 ? resourceInfo["name"] = nameValue : resourceInfo["name"] = null
    startDateValue.length > 0 ? resourceInfo["startDate"] = startDateValue : resourceInfo["startDate"] = null
    endDateValue.length > 0 ? resourceInfo["endDate"] = endDateValue : resourceInfo["endDate"] = null
    guideValue.length > 0 ? resourceInfo["guide"] = guideValue : resourceInfo["guide"] = null
    difficultyValue.length > 0 ? resourceInfo["difficulty"] = difficultyValue : resourceInfo["difficulty"] = null
    priceValue.length > 0 ? resourceInfo["price"] = priceValue : resourceInfo["price"] = null
    durationValue.length > 0 ? resourceInfo["duration"] = durationValue : resourceInfo["duration"] = null
    groupsizeValue.length > 0 ? resourceInfo["maxGroupSize"] = groupsizeValue : resourceInfo["maxGroupSize"] = null
    summaryValue.length > 0 ? resourceInfo["summary"] = summaryValue : resourceInfo["summary"] = null
    descValue.length > 0 ? resourceInfo["description"] = descValue : resourceInfo["description"] = null


    destinationFeaturedImageVal.length > 0 ? resourceInfo["imageCover"] = destinationFeaturedImageVal : resourceInfo["imageCover"] = "dest-1.jpg"
    destination_gallery1Value.length > 0 ? resourceInfo["images"].push(destination_gallery1Value) : resourceInfo["images"].push("dest-1.jpg")
    destination_gallery2Value.length > 0 ? resourceInfo["images"].push(destination_gallery2Value) : resourceInfo["images"].push("dest-2.jpg")
    destination_gallery3Value.length > 0 ? resourceInfo["images"].push(destination_gallery3Value) : resourceInfo["images"].push("dest-3.jpg")
    destination_gallery4Value.length > 0 ? resourceInfo["images"].push(destination_gallery4Value) : resourceInfo["images"].push("dest-4.jpg")

    if (input1El) resourceInfo["amenities"].push("Satellite TV")
    if (input2El) resourceInfo["amenities"].push("Coffeemaker")
    if (input3El) resourceInfo["amenities"].push("Hair Dryer")
    if (input4El) resourceInfo["amenities"].push("Swimming Pool")
    if (input5El) resourceInfo["amenities"].push("Room Service")
    if (input6El) resourceInfo["amenities"].push("Luxury Bedding")
    if (input7El) resourceInfo["amenities"].push("Good Showers")
    if (input8El) resourceInfo["amenities"].push("Free Parking")
    if (input9El) resourceInfo["amenities"].push("Free Wifi")
    if (input10El) resourceInfo["amenities"].push("Bath towel")
    if (input11El) resourceInfo["amenities"].push("Free Coffee")
    if (input12El) resourceInfo["amenities"].push("Pets Allow")
    if (input13El) resourceInfo["amenities"].push("Hot Water")
    if (input14El) resourceInfo["amenities"].push("Attached garage")
    if (input15El) resourceInfo["amenities"].push("Elevator")
    if (input16El) resourceInfo["amenities"].push("Spa/Sauna")
    if (input17El) resourceInfo["amenities"].push("Indoor pool")
    if (input18El) resourceInfo["amenities"].push("Security cameras")

    console.log(resourceInfo);


    confirm_modalIncluder(resourceInfo)
})

if (destDeleteBtn) destDeleteBtn.addEventListener("click", function (e) {
    e.preventDefault()
    deleteModalIncluder()
})

//modal buttons
if (updateListingBtn) updateListingBtn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("submit update");
})

if (deleteListingBtn) deleteListingBtn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("delete listing");

    // deleteModalRemover()
})

if (locInfoSubmitBtn) locInfoSubmitBtn.addEventListener("click", function (e) {
    const locdesc = document.getElementById("locdesc").value.trim()
    const latval = document.getElementById("latval").value.trim()
    const longval = document.getElementById("longval").value.trim()
    const dayval = document.getElementById("dayval").value.trim()
    const addrval = document.getElementById("addressval").value.trim()
    const errorEl = document.getElementById("errormodal")

    if (!locdesc || !latval || !longval || !dayval) {
        errorEl.style.opacity = 1
        setTimeout(() => {
            errorEl.style.opacity = 0

        }, 5000)
        return
    }

    if (window.location.href.includes("dest-edit")) {

        resourceInfo["location"].push({
            "description": locdesc,
            "coordinates": [latval, longval],
            "address": addrval
        })
    }



})