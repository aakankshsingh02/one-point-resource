const navItemDropDownList = document.querySelectorAll('.nav-item-dropdown');
navItemDropDownList.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        // console.log(navItem);
        navItem.nextElementSibling.classList.toggle('show-dropdown');
        if(navItem.firstElementChild.className == "fas fa-chevron-down"){
            navItem.firstElementChild.className = "fas fa-chevron-up";
        } else if(navItem.firstElementChild.className == "fas fa-chevron-up"){
            navItem.firstElementChild.className = "fas fa-chevron-down";
        }
    });
});