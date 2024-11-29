// click event
function checkValidations() {
    let user = document.getElementById("uname");
    if (user.value == "") {
        document.getElementById("msg1").innerHTML = "Enter Name"
        user.classList.add("err")
    }
    return false
}
// keyboard event
function checknamepttern() {
    let user = document.getElementById("uname"), ptn = /^[a-zA-Z\s]*$/;
    if (!ptn.test(user.value)) {
        document.getElementById("msg1").innerHTML = "Invalid Value!!!"
        user.classList.add("err")
    } else if (user.value.length < 6) {
        document.getElementById("msg1").innerHTML = "Enter atleast 6 character"
        user.classList.add("err")
    } else {
        document.getElementById("msg1").innerHTML = null
        user.classList.remove("err")
    }
    return false
}
function EmailValidate() {
    let mail = document.getElementById("email");
    // let ptn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let ptn = /^[a-zA-Z0-9\._%#]*@[a-zA-Z]*(\.[a-z]{2,3})+$/
    if (ptn.test(mail.value)) {
        document.getElementById("msg2").innerHTML = null
    } else {
        document.getElementById("msg2").innerHTML = "Enter Proper Email"
    }
    return false
}


// convert uppercase
var allinp = document.querySelectorAll("input[type='text']");
allinp.forEach(all => {
    all.addEventListener("input", () => {
        all.value = all.value.toUpperCase()
    })
})

// input event
function notAllowed() {
    let user = document.getElementById("uname");
    user.value = user.value.replace(/[\d\W]/, '')
}