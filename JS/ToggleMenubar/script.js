function show(target) {
    let tar = document.getElementById(target)
    tar.classList.add("show-sidebar")
}
function hide(target) {
    let tar = document.getElementById(target)
    tar.classList.remove("show-sidebar")
}

window.addEventListener("scroll", () => {
    let nav = document.querySelector(".mainpage .navbar");
    let current = window.scrollY
    if (current > 0) {
        nav.style.backgroundColor = "#e13434"
    } else {
        nav.style.backgroundColor = "darkred"
    }
})