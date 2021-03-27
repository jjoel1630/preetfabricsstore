var itemSwitcher = function (evt, itemSection) {
    //gallery-content = each page
    var itemContent = document.querySelectorAll(".item-content");
    //display none to each of the pages so we can display the correct one
    for (var i = 0; i < itemContent.length; i++) {
        itemContent[i].style.display = "none";
    }
    //gallery-links = all the links (page 1, page 2, page 3)
    var itemLinks = document.querySelectorAll(".item-links");
    //replace the active class with nothing (if button is on page 1, it will be grey, but then it will replace the class of active to remove it)
    for (var i = 0; i < itemLinks.length; i++) {
        itemLinks[i].className = itemLinks[i].className.replace(" item-links-active", "");
    }
    //get the display id which will be each different page, but we are only displaying the one we pass in
    document.querySelector("#" + itemSection).style.display = "block";
    //give the targeted button an active class
    evt.currentTarget.className += " item-links-active";
};
//when the page loads, automatically open the defualt one
document.querySelector("#defaultOpenItem").click();
