
const profileCreateBtn = document.getElementById("profile_create")
const profileUpdateBtn = document.getElementById("profile_update")
const imageUPloadBtn = document.getElementById("aaiu-uploader")

const errorMsgEl = document.getElementById("prof_error")
const userIdEl = document.getElementById("user_id")

const firstnameVal = document.getElementById("firstname").value.trim()
const lastnameVal = document.getElementById("lastname").value.trim()
const emailVal = document.getElementById("useremail").value.trim()
const about_meVal = document.getElementById("about_me").value.trim()
const live_inVal = document.getElementById("live_in").value.trim()
const i_speakVal = document.getElementById("i_speak").value.trim()
const phoneVal = document.getElementById("userphone").value.trim()
const cityVal = document.getElementById("usercity").value.trim()
const userfacebookVal = document.getElementById("userfacebook").value.trim()
const usertwitterVal = document.getElementById("usertwitter").value.trim()
const userlinkedinVal = document.getElementById("userlinkedin").value.trim()
const userpinterestVal = document.getElementById("userpinterest").value.trim()


if (profileCreateBtn) profileCreateBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    if (!firstnameVal || !lastnameVal || !emailVal) {
        errorMsgEl.style.opacity = 1
        setTimeout(() => {
            errorMsgEl.style.opacity = 0

        }, 5000)
        return
    }


    const profileCreateInfo = {
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

    const res = await axios({
        method: "POST",
        url: "/api/v1/profile/",
        data: profileCreateInfo

    })

    console.log("profile created: ", res.data);

})

if (profileUpdateBtn) profileUpdateBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const profileUpdateInfo = {
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

    const res = await axios({
        method: "PATCH",
        url: `/api/v1/profile/${userIdEl.innerText}`,
        data: profileUpdateInfo

    })

    console.log("profile updated: ", res.data);
})