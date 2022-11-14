"use strict"

const auth_username_El = document.getElementById("auth_username")
const auth_password_El = document.getElementById("auth_password")
const auth_login_El = document.getElementById("auth_login")
const errorEl = document.getElementById("error")

if (auth_login_El) auth_login_El.addEventListener("click", function (e) {
    const auth_usernameVal = auth_username_El.value.trim();
    const auth_passwordVal = auth_password_El.value.trim();

    if (!auth_usernameVal || !auth_passwordVal) {
        errorEl.style.opacity = 1
        setTimeout(() => {
            errorEl.style.opacity = 0

        }, 5000)
        return
    }

    console.log(auth_usernameVal, auth_passwordVal);



})