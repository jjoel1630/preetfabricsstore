// window.onscroll = () => {
//     const navbar = document.querySelector<HTMLElement>("#navbar-sticky");
//     const sticky = navbar.offsetTop;
//     if(window.pageYOffset < sticky) {
//         navbar.classList.remove("sticky-nav")
//         return;
//     }
//     navbar.classList.add("sticky-nav");
// }
document.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar-div");
    var navbarHeight = 30;
    var distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
    if (distanceFromTop >= navbarHeight)
        navbar.classList.add("sticky-nav");
    else
        navbar.classList.remove("sticky-nav");
    var burger = document.querySelector("#navbar-responsive-toggle");
    var burgerHeight = 30;
    if (distanceFromTop >= burgerHeight)
        burger.classList.add("sticky-nav");
    else
        burger.classList.remove("sticky-nav");
});
var navbarToggle = document.querySelector("#navbar-responsive-toggle");
var navbarDivResponsive = document.querySelector(".navbar-div-responsive");
navbarToggle.addEventListener("click", function () {
    if (navbarDivResponsive.style.display === "none" || navbarDivResponsive.style.display === "") {
        navbarDivResponsive.style.display = "block";
        document.querySelector("#navbar-responsive-toggle-bar-1").classList.add("navbar-responsive-toggle-bar-1");
        document.querySelector("#navbar-responsive-toggle-bar-2").classList.add("navbar-responsive-toggle-bar-2");
        document.querySelector("#navbar-responsive-toggle-bar-3").classList.add("navbar-responsive-toggle-bar-3");
    }
    else if (navbarDivResponsive.style.display === "block") {
        navbarDivResponsive.style.display = "none";
        document.querySelector("#navbar-responsive-toggle-bar-1").classList.remove("navbar-responsive-toggle-bar-1");
        document.querySelector("#navbar-responsive-toggle-bar-2").classList.remove("navbar-responsive-toggle-bar-2");
        document.querySelector("#navbar-responsive-toggle-bar-3").classList.remove("navbar-responsive-toggle-bar-3");
    }
});
// const burger = document.querySelector<HTMLElement>(".burger");
// const nav = document.querySelector<HTMLElement>(".nav-links");
// const navLinks = document.querySelectorAll<HTMLElement>(".nav-links li");
// burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     navLinks.forEach((link, index) => {
//         if(link.style.animation) {
//             link.style.animation = "";
//         } else {
//             link.style.animation = `nav-links-appear 0.4s ease forwards ${index / 7 + 0.4}s`;
//         }
//     });
//     burger.classList.toggle("toggle");
// });
