"use strict"

//modal login
const auth_email_El = document.getElementById("auth_email")
const auth_password_El = document.getElementById("auth_password")
const auth_login_El = document.getElementById("auth_login")
const errorEl = document.getElementById("error")

//signup page
const inputNameEl = document.getElementById("inputName")
const inputEmailEl = document.getElementById("inputEmail")
const inputPWEl = document.getElementById("inputPW")
const inputPWConfirmEl = document.getElementById("inputPWConfirm")
const signup_btn = document.getElementById("signup_btn")

if (auth_login_El) auth_login_El.addEventListener("click", async function (e) {
    const auth_emailVal = auth_email_El.value.trim();
    const auth_passwordVal = auth_password_El.value.trim();

    if (!auth_emailVal || !auth_passwordVal) {
        errorEl.style.opacity = 1
        setTimeout(() => {
            errorEl.style.opacity = 0

        }, 5000)
        return
    }

    const res = await axios({
        method: "POST",
        url: "/api/v1/users/login",
        data: {
            email: auth_emailVal,
            password: auth_passwordVal
        }

    })

    if (res.data.status.includes("success")) {
        window.setTimeout(() => {
            location.assign("/dashboard")
        }, 1500)

    }

    // console.log("auth success", res.data);



})


if (signup_btn) signup_btn.addEventListener("click", async function (e) {
    e.preventDefault();
    const res = await axios({
        method: "POST",
        url: "/api/v1/users/signup",
        data: {
            name: inputNameEl.value.trim(),
            email: inputEmailEl.value.trim(),
            password: inputPWEl.value.trim(),
            passwordConfirm: inputPWConfirmEl.value.trim()

        }
    })

    console.log("signup status: ", res.data);

    if (res.data.status.includes("success")) {

        //do somthing here. Like have users click a verification link in their inbox, redirect to a dashboard etc

    }

})