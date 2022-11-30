
const profileCreateBtn = document.getElementById("profile_create")
const profileUpdateBtn = document.getElementById("profile_update")
const imageUPloadBtn = document.getElementById("aaiu-uploader")

const errorMsgEl = document.getElementById("prof_error")
const userIdEl = document.getElementById("user_id")

const firstnameEl = document.getElementById("firstname")
const lastnameEl = document.getElementById("lastname")
const emailEl = document.getElementById("useremail")
const about_meEl = document.getElementById("about_me")
const live_inEl = document.getElementById("live_in")
const i_speakEl = document.getElementById("i_speak")
const phoneEl = document.getElementById("userphone")
const cityEl = document.getElementById("usercity")
const userfacebookEl = document.getElementById("userfacebook")
const usertwitterEl = document.getElementById("usertwitter")
const userlinkedinEl = document.getElementById("userlinkedin")
const userpinterestEl = document.getElementById("userpinterest")


function errorRenderer() {
    errorMsgEl.style.opacity = 1
    setTimeout(() => {
        errorMsgEl.style.opacity = 0

    }, 5000)
}

function metaDataInfo() {
    const firstnameVal = firstnameEl.value.trim()
    const lastnameVal = lastnameEl.value.trim()
    const emailVal = emailEl.value.trim()
    const about_meVal = about_meEl.value.trim()
    const live_inVal = live_inEl.value.trim()
    const i_speakVal = i_speakEl.value.trim()
    const phoneVal = phoneEl.value.trim()
    const cityVal = cityEl.value.trim()
    const userfacebookVal = userfacebookEl.value.trim()
    const usertwitterVal = usertwitterEl.value.trim()
    const userlinkedinVal = userlinkedinEl.value.trim()
    const userpinterestVal = userpinterestEl.value.trim()

    if (!firstnameVal || !lastnameVal || !emailVal) {

        errorRenderer()
        return
    }


    return {
        "firstname": firstnameVal ? firstnameVal : null,
        "lastname": lastnameVal ? lastnameVal : null,
        "email": emailVal ? emailVal : null,
        "aboutme": about_meVal ? about_meVal : null,
        "livein": live_inVal ? live_inVal : null,
        "ispeak": i_speakVal ? i_speakVal : null,
        "phone": phoneVal ? phoneVal : null,
        "city": cityVal ? cityVal : null,
        "facebookurl": userfacebookVal ? userfacebookVal : null,
        "twitterurl": usertwitterVal ? usertwitterVal : null,
        "linkedinurl": userlinkedinVal ? userlinkedinVal : null,
        "pinteresturl": userpinterestVal ? userpinterestVal : null,
    }
}

if (profileCreateBtn) profileCreateBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const res = await axios({
        method: "POST",
        url: "/api/v1/profile/",
        data: metaDataInfo()

    })

    console.log("profile created: ", res.data);

})

if (profileUpdateBtn) profileUpdateBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const res = await axios({
        method: "PATCH",
        url: `/api/v1/profile/${userIdEl.innerText}`,
        data: metaDataInfo()

    })

    console.log("profile updated: ", res.data);
})