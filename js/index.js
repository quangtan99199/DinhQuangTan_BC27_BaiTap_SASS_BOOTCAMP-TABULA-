const linkItems = document.querySelectorAll(".nav-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("mouseover", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 95 + 48}px`;
    })
})


const dropdownMenu = document.querySelectorAll(".nav-item.dropdown");

dropdownMenu.forEach((dropdownMenu, index) => {
    dropdownMenu.addEventListener("mouseover", () => {
        
        
        const lmao= document.querySelector(".dropdown-menu");
        lmao.style.display="flex";

    })
    dropdownMenu.addEventListener("mouseout", () => {
        
        
        const lmao= document.querySelector(".dropdown-menu");
        lmao.style.display="none";

    })
})
