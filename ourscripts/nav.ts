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
    const navbar = document.querySelector<HTMLElement>(".navbar-div");
    const navbarHeight = 30;
  
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
  
    if (distanceFromTop >= navbarHeight) navbar.classList.add("sticky-nav");
    else navbar.classList.remove("sticky-nav");
});

const navbarToggle = document.querySelector<HTMLElement>("#navbar-responsive-toggle");
const navbarDivResponsive = document.querySelector<HTMLElement>(".navbar-div-responsive");
navbarToggle.addEventListener("click", () => {
    if(navbarDivResponsive.style.display === "none" || navbarDivResponsive.style.display === "") {
        navbarDivResponsive.style.display = "block";
        document.querySelector("#navbar-responsive-toggle-bar-1").classList.add("navbar-responsive-toggle-bar-1");
        document.querySelector("#navbar-responsive-toggle-bar-2").classList.add("navbar-responsive-toggle-bar-2");
        document.querySelector("#navbar-responsive-toggle-bar-3").classList.add("navbar-responsive-toggle-bar-3");
    } else if(navbarDivResponsive.style.display === "block") {
        navbarDivResponsive.style.display = "none";
        document.querySelector("#navbar-responsive-toggle-bar-1").classList.remove("navbar-responsive-toggle-bar-1");
        document.querySelector("#navbar-responsive-toggle-bar-2").classList.remove("navbar-responsive-toggle-bar-2");
        document.querySelector("#navbar-responsive-toggle-bar-3").classList.remove("navbar-responsive-toggle-bar-3");
    }
})
