
const replyBtn = document.getElementById("reply_submit")
const deleteBtn = document.getElementById("message_delete")

const updateModalBtn = document.getElementById("UpdateSubmitBtn")
const deleteModalBtn = document.getElementById("deleteListingBtn")

const delete_modal = document.querySelector(".delete-modal");
const delete_overlay = document.querySelector(".delete-overlay");
const delete_closeModalBtn = document.querySelector(".close-delete-modal")
const deleteMessageBtn = document.getElementById("deleteListingBtn")

const confirm_modal = document.querySelector(".confirm-modal");
const confirm_overlay = document.querySelector(".confirm-overlay");
const confirm_closeModalBtn = document.querySelector(".close-confirm-modal")
const messageReplyBtn = document.getElementById("UpdateSubmitBtn")

const messageReplyObj = {}
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


if (replyBtn) replyBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const user_nameVal = document.getElementById("asker_name").value.trim();
    const asker_idVal = document.getElementById("asker_id").value.trim();
    const question_idVal = document.getElementById("message_id").value.trim();
    const replyVal = document.getElementById("reply").value.trim();
    const reply = `Hello ${user_nameVal}, \n ${replyVal}. Reply to this message if you need to`

    messageReplyObj["askerId"] = asker_idVal;
    messageReplyObj["questionId"] = question_idVal;
    messageReplyObj["message"] = reply;

    confirm_modalIncluder(messageReplyObj)

})

if (deleteBtn) deleteBtn.addEventListener("click", function (e) {
    deleteModalIncluder()

})

if (messageReplyBtn) messageReplyBtn.addEventListener("click", async function (e) {
    console.log("make message reply post request here");

    const res = await axios({
        method: "POST",
        url: "/api/v1/replies/",
        data: messageReplyObj
    })

    console.log("replyObj: ", res.data);

    confirm_modalRemover()

})
if (deleteMessageBtn) deleteMessageBtn.addEventListener("click", async function (e) {

    const res = await axios({
        method: "DELETE",
        url: `/api/v1/messages/${window.location.href.split("replies/")[1]}`,

    })

    console.log("deleteObj: ", res.data);

    deleteModalRemover()

    console.log("make message delete request here");

})