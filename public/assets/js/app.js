let navBar = document.querySelector("#navBar");

navBar.addEventListener("mouseenter", function () {
    navBar.style.overflowX = "hidden"
    navBar.style.overflowY = "scroll";
})

navBar.addEventListener("mouseout", function () {
    navBar.style.overflowX = "hidden"
    navBar.style.overflowY = "hidden";
})