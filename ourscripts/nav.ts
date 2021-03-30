window.onscroll = () => {
    const navbar = document.querySelector<HTMLElement>("#navbar-sticky");
    const sticky = navbar.offsetTop;

    if(window.pageYOffset < sticky) {
        navbar.classList.remove("sticky-nav")
        return;
    }
    navbar.classList.add("sticky-nav");
}