var gallerySwitcher = function (evt, menuSection) {
    var galleryContent = document.querySelectorAll(".gallery-content");
    for (var i = 0; i < galleryContent.length; i++) {
        galleryContent[i].style.display = "none";
    }
    var galleryLinks = document.querySelectorAll(".gallery-links");
    for (var i = 0; i < galleryLinks.length; i++) {
        galleryLinks[i].className = galleryLinks[i].className.replace(" tab-links-active", "");
    }
    document.querySelector("#" + menuSection).style.display = "block";
    evt.currentTarget.className += " tab-links-active";
};
document.querySelector("#defaultOpenGallery").click();
