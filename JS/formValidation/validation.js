// click event
function checkValidations() {
    let user = document.getElementById("uname");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let city = document.getElementById("city");
    let file = document.getElementById("file");
    if (user.value == "") {
        document.getElementById("msg1").innerHTML = "Enter Name"
        user.classList.add("err")
    }
    if (male.checked == false && female.checked == false) {
        document.getElementById("msg6").innerHTML = "Select value!!!"
    } else {
        document.getElementById("msg6").innerHTML = null
    }
    if (city.value === "-1") {
        document.getElementById("msg7").innerHTML = "Select value!!!"
    } else {
        document.getElementById("msg7").innerHTML = null
    }
    if (file.value == "") {
        document.getElementById("msg8").innerHTML = "select file"
    } else {
        document.getElementById("msg8").innerHTML = null
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
    let ptn = /^[a-zA-Z0-9\._%#]*@[a-zA-Z]*(\.[a-z]{2,3})+$/
    if (ptn.test(mail.value)) {
        document.getElementById("msg2").innerHTML = null
    } else {
        document.getElementById("msg2").innerHTML = "Enter Proper Email"
    }
    return false
}
function checkNumber() {
    let num = document.getElementById("mobile");
    let startval = /^[6-9]/;
    if (!startval.test(num.value)) {
        document.getElementById("msg3").innerHTML = "Invalid Number!!!"
    } else if (num.value.length < 10) {
        document.getElementById("msg3").innerHTML = "Enter 10 digits"
    } else {
        document.getElementById("msg3").innerHTML = null
    }
    return false
}
function passwordptn() {
    let pass = document.getElementById("pass");
    let ptn = /^[A-Z][a-z0-9]*[@\.][a-z0-9]+$/
    if (!ptn.test(pass.value)) {
        document.getElementById("msg4").innerHTML = "Invalid, first letter must be a capital and password has lowercase, number, special character like @ and ."
    } else {
        document.getElementById("msg4").innerHTML = null
    }
    return false
}
function confirmpassword() {
    let p = document.getElementById("pass")
    let cp = document.getElementById("cpass");
    if (cp.value != p.value) {
        document.getElementById("msg5").innerHTML = "Password not match"
    } else {
        document.getElementById("msg5").innerHTML = null
    }
}


// show password
function showpass() {
    let p = document.getElementById("pass")
    let cp = document.getElementById("cpass");
    if (p.type == "password" && cp.type == "password") {
        p.type = "text"
        cp.type = "text"
    } else {
        p.type = "password"
        cp.type = "password"
    }
}
// convert uppercase
var allinp = document.querySelectorAll(".allow");
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
function NumnotAllowed() {
    let user = document.getElementById("mobile");
    user.value = user.value.replace(/[\D\W]/, '')
}