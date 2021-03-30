window.onscroll = function () {
    var navbar = document.querySelector("#navbar-sticky");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset < sticky) {
        navbar.classList.remove("sticky-nav");
        return;
    }
    navbar.classList.add("sticky-nav");
};
