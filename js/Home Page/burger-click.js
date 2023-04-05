//get HTML element
let burgerNav = document.querySelector(".burger img");
let navbar = document.querySelector(".navbar");
let navColapse = document.querySelector(".container-fluid");
let navItem = document.querySelector(".navbar-nav");



//get CSS element
let collapseShow = document.querySelector(".collapse:not(.show)");

//onclick event
burgerNav.addEventListener("click", () =>{

    //onclick - navbar height shifts down
    collapseShow.classList.toggle("collapse");
    collapseShow.classList.toggle("navbar-collaps");
    navColapse.style.display = "block !important";
    collapseShow.classList.toggle("navbar-collaps");
    
    //onclick - courasil moves down with navbar height
    collapseShow.classList.toggle("carousel-inner");
})

