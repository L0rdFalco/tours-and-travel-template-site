
const updateMainBtn = document.getElementById("tour_update")
const deleteMainBtn = document.getElementById("tour_delete")

const delete_modal = document.querySelector(".delete-modal");
const delete_overlay = document.querySelector(".delete-overlay");
const delete_closeModalBtn = document.querySelector(".close-delete-modal")
const deleteListingBtn = document.getElementById("deleteListingBtn")

const confirm_modal = document.querySelector(".confirm-modal");
const confirm_overlay = document.querySelector(".confirm-overlay");
const confirm_closeModalBtn = document.querySelector(".close-confirm-modal")
const updateListingBtn = document.getElementById("UpdateSubmitBtn")

const location_modal = document.querySelector(".location-modal");
const location_overlay = document.querySelector(".location-overlay");
const location_closeModalBtn = document.querySelector(".close-location-modal")
const location_submitInfoBtn = document.getElementById("infosubmit")

const tl0 = document.getElementById("tourLocation0")
const tl1 = document.getElementById("tourLocation1")
const tl2 = document.getElementById("tourLocation2")
const tl3 = document.getElementById("tourLocation3")
const tl4 = document.getElementById("tourLocation4")

let tourListingObj = { amenities: [], images: [], startDates: [], locations: [] }

function isAllowed() {
    return window.location.href.includes("tour-edit")
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

function location_modalIncluder(elementId) {
    document.getElementById("currentElVal").textContent = elementId

    location_modal.classList.remove("hidden");
    location_overlay.classList.remove("hidden");

}

function location_modalRemover() {
    location_modal.classList.add("hidden");
    location_overlay.classList.add("hidden");
}


if (location_closeModalBtn) location_closeModalBtn.addEventListener("click", location_modalRemover);
if (location_overlay) location_overlay.addEventListener("click", location_modalRemover);


if (confirm_closeModalBtn) confirm_closeModalBtn.addEventListener("click", confirm_modalRemover);
if (confirm_overlay) confirm_overlay.addEventListener("click", confirm_modalRemover);

if (delete_closeModalBtn) delete_closeModalBtn.addEventListener("click", deleteModalRemover);
if (delete_overlay) delete_overlay.addEventListener("click", deleteModalRemover);


if (updateMainBtn) updateMainBtn.addEventListener("click", function (e) {
    e.preventDefault()
    tourListingObj["amenities"] = [];
    tourListingObj["images"] = [];
    tourListingObj["startDates"] = []
    const nameValue = document.getElementById("tourname").value.trim()
    const tourDatepicker1Value = document.getElementById("tourDatepicker1").value.trim()
    const tourDatepicker2Value = document.getElementById("tourDatepicker2").value.trim()
    const tourDatepicker3Value = document.getElementById("tourDatepicker3").value.trim()
    const tourDatepicker4Value = document.getElementById("tourDatepicker4").value.trim()
    const guideValue = document.getElementById("guide").value.trim()
    const difficultyValue = document.getElementById("difficulty").value.trim()
    const priceValue = document.getElementById("price").value.trim()
    const durationValue = document.getElementById("duration").value.trim()
    const groupsizeValue = document.getElementById("groupsize").value.trim()
    const summaryValue = document.getElementById("tr_summary").value.trim()
    const descriptionValue = document.getElementById("tr_description").value.trim()
    const tourFeaturedImageVal = document.getElementById("tour_featured-image").value.trim()
    const tour_gallery1Value = document.getElementById("tour_gallery1").value.trim()
    const tour_gallery2Value = document.getElementById("tour_gallery2").value.trim()
    const tour_gallery3Value = document.getElementById("tour_gallery3").value.trim()
    const tour_gallery4Value = document.getElementById("tour_gallery4").value.trim()

    const input1El = document.getElementById("1")
    const input2El = document.getElementById("2")
    const input3El = document.getElementById("3")
    const input4El = document.getElementById("4")
    const input5El = document.getElementById("5")
    const input6El = document.getElementById("6")
    const input7El = document.getElementById("7")
    const input8El = document.getElementById("8")
    const input9El = document.getElementById("9")
    const input10El = document.getElementById("10")
    const input11El = document.getElementById("11")
    const input12El = document.getElementById("12")
    const input13El = document.getElementById("13")
    const input14El = document.getElementById("14")
    const input15El = document.getElementById("15")
    const input16El = document.getElementById("16")
    const input17El = document.getElementById("17")
    const input18El = document.getElementById("18")


    nameValue.length > 0 ? tourListingObj["name"] = nameValue : null
    guideValue.length > 0 ? tourListingObj["guides"] = guideValue : null
    difficultyValue.length > 0 ? tourListingObj["difficulty"] = difficultyValue : null
    priceValue.length > 0 ? tourListingObj["price"] = priceValue : null
    durationValue.length > 0 ? tourListingObj["duration"] = durationValue : null
    groupsizeValue.length > 0 ? tourListingObj["maxGroupSize"] = groupsizeValue : null
    summaryValue.length > 0 ? tourListingObj["summary"] = summaryValue : null
    descriptionValue.length > 0 ? tourListingObj["description"] = descriptionValue : null
    tourFeaturedImageVal.length > 0 ? tourListingObj["imageCover"] = tourFeaturedImageVal : null

    tourDatepicker1Value.length > 0 ? tourListingObj["startDates"].push(tourDatepicker1Value) : null
    tourDatepicker2Value.length > 0 ? tourListingObj["startDates"].push(tourDatepicker2Value) : null
    tourDatepicker3Value.length > 0 ? tourListingObj["startDates"].push(tourDatepicker3Value) : null
    tourDatepicker4Value.length > 0 ? tourListingObj["startDates"].push(tourDatepicker4Value) : null

    tour_gallery1Value.length > 0 ? tourListingObj["images"].push(tour_gallery1Value) : tourListingObj["images"].push("tour-1.jpg")
    tour_gallery2Value.length > 0 ? tourListingObj["images"].push(tour_gallery2Value) : tourListingObj["images"].push("tour-2.jpg")
    tour_gallery3Value.length > 0 ? tourListingObj["images"].push(tour_gallery3Value) : tourListingObj["images"].push("tour-3.jpg")
    tour_gallery4Value.length > 0 ? tourListingObj["images"].push(tour_gallery4Value) : tourListingObj["images"].push("tour-4.jpg")

    if (input1El.checked) tourListingObj['amenities'].push("satellite tv")
    if (input2El.checked) tourListingObj['amenities'].push("coffee maker")
    if (input3El.checked) tourListingObj['amenities'].push("hair dryer")
    if (input4El.checked) tourListingObj['amenities'].push("swimming pool")
    if (input5El.checked) tourListingObj['amenities'].push("room service")
    if (input6El.checked) tourListingObj['amenities'].push("luxury bedding")
    if (input7El.checked) tourListingObj['amenities'].push("good showers")
    if (input8El.checked) tourListingObj['amenities'].push("free parking")
    if (input9El.checked) tourListingObj['amenities'].push("free wifi")
    if (input10El.checked) tourListingObj['amenities'].push("bath towels")
    if (input11El.checked) tourListingObj['amenities'].push("free coffee")
    if (input12El.checked) tourListingObj['amenities'].push("pets friendly")
    if (input13El.checked) tourListingObj['amenities'].push("running hot water")
    if (input14El.checked) tourListingObj['amenities'].push("attached garage")
    if (input15El.checked) tourListingObj['amenities'].push("elevator")
    if (input16El.checked) tourListingObj['amenities'].push("spa/sauna")
    if (input17El.checked) tourListingObj['amenities'].push("indoor pool")
    if (input18El.checked) tourListingObj['amenities'].push("security cameras")



    confirm_modalIncluder(tourListingObj)


})
if (deleteMainBtn) deleteMainBtn.addEventListener("click", function (e) {
    e.preventDefault()
    deleteModalIncluder()

})

if (tl0 && isAllowed()) tl0.addEventListener("click", function (e) {
    location_modalIncluder(e.target.id)
})

if (tl1 && isAllowed()) tl1.addEventListener("click", function (e) {
    location_modalIncluder(e.target.id)
})

if (tl2 && isAllowed()) tl2.addEventListener("click", function (e) {
    location_modalIncluder(e.target.id)
})

if (tl3 && isAllowed()) tl3.addEventListener("click", function (e) {
    location_modalIncluder(e.target.id)
})

if (tl4 && isAllowed()) tl4.addEventListener("click", function (e) {
    location_modalIncluder(e.target.id)
})

if (location_submitInfoBtn && isAllowed()) location_submitInfoBtn.addEventListener("click", function (e) {
    const locdesc = document.getElementById("locdesc").value.trim()
    const latval = document.getElementById("latval").value.trim()
    const longval = document.getElementById("longval").value.trim()
    const dayval = document.getElementById("dayval").value.trim()
    const addrval = document.getElementById("addressval").value.trim()
    const errorEl = document.getElementById("errormodal")

    if (!locdesc || !latval || !longval || !dayval || !addrval) {
        errorEl.style.opacity = 1
        setTimeout(() => {
            errorEl.style.opacity = 0

        }, 5000)
        return
    }

    tourListingObj["locations"].push(
        {
            "description": locdesc,
            "coordinates": [latval, longval],
            "day": dayval,
            "address": addrval
        })

    const currentKey = document.getElementById("currentElVal").value.trim();

    document.getElementById("" + currentKey).value = "location obj added!"

    location_modalRemover()

})
if (updateListingBtn) updateListingBtn.addEventListener("click", async function (e) {
    try {
        e.preventDefault()

        const res = await axios({
            method: "PATCH",
            url: `/api/v1/tours/${window.location.href.split("tour-edit/")[1]}`,
            data: tourListingObj
        })

        console.log("tour listing updated? ", res.data);
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
            url: `/api/v1/tours/${window.location.href.split("tour-edit/")[1]}`,

        })

        console.log("tour listing deleted? ", res.data);
    } catch (error) {
        console.log(error);
    }
    console.log("make delete request here");

})