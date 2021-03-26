const itemSwitcher = (evt, menuSection) => {
    //gallery-content = each page
    var galleryContent = document.querySelectorAll(".item-content");
    //display none to each of the pages so we can display the correct one
    for (var i = 0; i < galleryContent.length; i++) {
      galleryContent[i].style.display = "none";
    }
  
    //gallery-links = all the links (page 1, page 2, page 3)
    var galleryLinks = document.querySelectorAll(".item-links");
    //replace the active class with nothing (if button is on page 1, it will be grey, but then it will replace the class of active to remove it)
    for (var i = 0; i < galleryLinks.length; i++) {
      galleryLinks[i].className = galleryLinks[i].className.replace(" tab-links-active", "");
    }
  
    //get the display id which will be each different page, but we are only displaying the one we pass in
    document.querySelector(`#${menuSection}`).style.display = "block";
    //give the targeted button an active class
    evt.currentTarget.className += " tab-links-active";
}
  
//when the page loads, automatically open the defualt one
document.querySelector("#defaultOpenItem").click();