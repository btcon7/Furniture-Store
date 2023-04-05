let submit = document.querySelector(".submit");
let fullname = document.querySelector("#fname");
let email = document.querySelector("#email");



submit.addEventListener("click", function submitAlert(){
    if(fullname && email){
        alert("Please note this Website is not real")
    }
})