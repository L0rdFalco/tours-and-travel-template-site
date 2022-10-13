const next1Btn = document.getElementById("next1")
const next2Btn = document.getElementById("next2")

if (next1Btn) {
    next1Btn.addEventListener("click", function (e) {
        console.log("next1 clicked");
    })
}

if (next2Btn) {
    next2Btn.addEventListener("click", function (e) {
        console.log("next2 clicked");
    })
}