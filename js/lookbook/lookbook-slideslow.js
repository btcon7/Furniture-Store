let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    let i;
    let x = document.getElementsByClassName("row-container");
    let one = document.querySelector(".one");
    if(n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    
    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    x[slideIndex-1].style.animation = "slideright 1s 1";
}
