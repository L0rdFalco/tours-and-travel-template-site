let bookbtn = document.getElementById("bookbtn")

if (bookbtn) {
    bookbtn.addEventListener("click", async function (e) {
        e.preventDefault();
        try {
            console.log("get order page");
            window.open("http://127.0.0.1:3000/get-orderpage")



        } catch (error) {
            console.log(error);

        }
    })
}