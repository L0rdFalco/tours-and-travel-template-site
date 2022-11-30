
const profileUpdateBtn = document.getElementById("profile_update")
const imageUPloadBtn = document.getElementById("aaiu-uploader")

const errorMsgEl = document.getElementById("prof_error")
const userIdEl = document.getElementById("user_id")

const nameEl = document.getElementById("name")
const emailEl = document.getElementById("useremail")
const about_meEl = document.getElementById("about_me")
const live_inEl = document.getElementById("live_in")
const i_speakEl = document.getElementById("i_speak")
const addressEl = document.getElementById("address")
const phoneEl = document.getElementById("userphone")
const cityEl = document.getElementById("usercity")
const userfacebookEl = document.getElementById("userfacebook")
const usertwitterEl = document.getElementById("usertwitter")
const userlinkedinEl = document.getElementById("userlinkedin")
const userpinterestEl = document.getElementById("userpinterest")

function redirect(res) {
    console.log(res);
    if (res.data.status.includes("success")) {
        window.setTimeout(() => {
            location.assign("/my-profile")
        }, 1500)

    }
}

function errorRenderer() {
    errorMsgEl.style.opacity = 1
    setTimeout(() => {
        errorMsgEl.style.opacity = 0

    }, 5000)
}

function metaDataInfo() {
    const nameVal = nameEl.value.trim()
    const emailVal = emailEl.value.trim()
    const about_meVal = about_meEl.value.trim()
    const live_inVal = live_inEl.value.trim()
    const i_speakVal = i_speakEl.value.trim()
    const addressVal = addressEl.value.trim()
    const phoneVal = phoneEl.value.trim()
    const cityVal = cityEl.value.trim()
    const userfacebookVal = userfacebookEl.value.trim()
    const usertwitterVal = usertwitterEl.value.trim()
    const userlinkedinVal = userlinkedinEl.value.trim()
    const userpinterestVal = userpinterestEl.value.trim()

    if (!nameVal || !emailVal) {

        errorRenderer()
        return
    }


    return {
        "name": nameVal ? nameVal : null,
        "email": emailVal ? emailVal : null,
        "aboutme": about_meVal ? about_meVal : null,
        "livein": live_inVal ? live_inVal : null,
        "ispeak": i_speakVal ? i_speakVal : null,
        "address": addressVal ? addressVal : null,
        "phone": phoneVal ? phoneVal : null,
        "city": cityVal ? cityVal : null,
        "facebookurl": userfacebookVal ? userfacebookVal : null,
        "twitterurl": usertwitterVal ? usertwitterVal : null,
        "linkedinurl": userlinkedinVal ? userlinkedinVal : null,
        "pinteresturl": userpinterestVal ? userpinterestVal : null,
    }
}

if (profileUpdateBtn) profileUpdateBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const res = await axios({
        method: "PATCH",
        url: `/api/v1/users/updatemydata`,
        data: metaDataInfo()

    })

    redirect(res)

    console.log("profile updated: ", res.data);
})