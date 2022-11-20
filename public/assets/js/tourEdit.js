
const updateMainBtn = document.getElementById("tour_update")
const deleteMainBtn = document.getElementById("tour_delete")
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

const location_modal = document.querySelector(".location-modal");
const location_overlay = document.querySelector(".location-overlay");
const location_closeModalBtn = document.querySelector(".close-location-modal")
const location_submitInfoBtn = document.getElementById("infosubmit")

const tl0 = document.getElementById("tourLocation0")
const tl1 = document.getElementById("tourLocation1")
const tl2 = document.getElementById("tourLocation2")
const tl3 = document.getElementById("tourLocation3")
const tl4 = document.getElementById("tourLocation4")

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
    confirm_modalIncluder({})


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

if (updateListingBtn) updateListingBtn.addEventListener("click", function (e) {
    console.log("make post request here");

})
if (deleteListingBtn) deleteListingBtn.addEventListener("click", function (e) {
    console.log("make delete requet here");

})