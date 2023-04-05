
let blue = document.querySelector(".blue-color");
let elephant = document.querySelector(".el-color");
let creamWhite = document.querySelector(".cream-color");

let bedOne = document.querySelector(".bed-one");
let bedTwo = document.querySelector(".bed-two");
let bedThree = document.querySelector(".bed-three");

blue.addEventListener('click', function blue(){
    if(blue){
        bedOne.style.display = "block";
        bedTwo.style.display = "none";
        bedThree.style.display = "none";
    }
});

elephant.addEventListener('click', function elephant(){
    if(elephant){
        bedOne.style.display = "none";
        bedTwo.style.display = "block";
        bedTwo.style.marginTop = "2rem";
        bedTwo.style.position = "relative";
        bedThree.style.display = "none";
    }
});

creamWhite.addEventListener('click', function creamWhite(){
    if(creamWhite){
        bedOne.style.display = "none";
        bedTwo.style.display = "none";
        bedThree.style.position = "relative";
        bedThree.style.display = "block";
        bedThree.style.marginTop = "2rem";
    }
});

let anthracite = document.querySelector(".anthracite-color");
let lime = document.querySelector(".lime-color");

let mirandaOne = document.querySelector(".miranda-one");
let mirandaTwo = document.querySelector(".miranda-two");

anthracite.addEventListener('click', function anthracite(){
    if(anthracite){
        mirandaOne.style.display = "block";
        mirandaTwo.style.display = "none";
    }
});

lime.addEventListener('click', function lime(){
    if(lime){
        mirandaOne.style.display = "none";
        mirandaTwo.style.display = "block";
        mirandaTwo.style.position = "relative";
    }
});

let vienna = document.querySelector(".vienna-cream-color");
let deep = document.querySelector(".deep-blue-color");

let miuzzaOne = document.querySelector(".miuzza-one");
let miuzzaTwo = document.querySelector(".miuzza-two");
let miuzzabed = document.querySelector(".miuzza-bed");

vienna.addEventListener('click', function vienna(){
    if(vienna){
        miuzzaOne.style.display = "block";
        miuzzaTwo.style.display = "none";
    }
});

deep.addEventListener('click', function deep(){
    if(deep){
        miuzzaOne.style.display = "none";
        miuzzaTwo.style.display = "block";
        miuzzaTwo.style.position = "relative";
        miuzzaTwo.style.paddingTop = "2.45rem";
        miuzzaTwo.style.paddingBottom = "1.2rem";
        
    }
});

let beige = document.querySelector(".vienna-Beige-color");
let deepBlue = document.querySelector(".vienna-deep-blue-color");
let Vienaelephant = document.querySelector(".vienna-elephant-color");

let NormaOne = document.querySelector(".Norma-one");
let NormaTwo = document.querySelector(".Norma-two");
let NormaThree = document.querySelector(".Norma-three");

beige.addEventListener('click', function beige(){
    if(beige){
        NormaOne.style.display = "block";
        NormaTwo.style.display = "none";
        NormaThree.style.display = "none";
    }
});

deepBlue.addEventListener('click', function deepBlue(){
    if(deep){
        NormaOne.style.display = "none";
        NormaTwo.style.display = "block";
        NormaTwo.style.paddingTop = "1rem";
        NormaTwo.style.paddingBottom = "2.7rem";
        NormaThree.style.display = "none";
        NormaTwo.style.position = "relative";
    }
});

Vienaelephant.addEventListener('click', function Vienaelephant(){
    if(Vienaelephant){
        NormaOne.style.display = "none";
        NormaTwo.style.display = "none";
        NormaThree.style.display = "block";
        NormaThree.style.paddingTop = "1rem";
        NormaThree.style.paddingBottom = "2.7rem";
        NormaThree.style.position = "relative";
        
    }
});

let whiteOak = document.querySelector(".white-oak-color");
let lightOak = document.querySelector(".light-oak-color");
let wedgeOak = document.querySelector(".wedge-color");

let alphaOne = document.querySelector(".alpha-one");
let alphaTwo = document.querySelector(".alpha-two");
let alphaThree = document.querySelector(".alpha-three");

whiteOak.addEventListener('click', function whiteOak(){
    if(whiteOak){
        alphaOne.style.display = "block";
        alphaTwo.style.display = "none";
        alphaThree.style.display = "none";
    }
});

lightOak.addEventListener('click', function lightOak(){
    if(lightOak){
        alphaOne.style.display = "none";
        alphaTwo.style.display = "block";
        alphaThree.style.display = "none";
        alphaTwo.style.position = "relative";
        
        
    }
});

wedgeOak.addEventListener('click', function wedgeOak(){
    if(wedgeOak){
        alphaOne.style.display = "none";
        alphaTwo.style.display = "none";
        alphaThree.style.display = "block";
        alphaThree.style.position = "relative";
        
    }
});

let cyruswhiteOak = document.querySelector(".cyrus-wedge-color");
let cyruslightOak = document.querySelector(".cyrus-white-oak-color");
let cyruswedgeOak = document.querySelector(".cyrus-light-oak-color");

let cyrusOne = document.querySelector(".cyrus-one");
let cyrusTwo = document.querySelector(".cyrus-two");
let cyrusThree = document.querySelector(".cyrus-three");

cyruswhiteOak.addEventListener('click', function cyruswhiteOak(){
    if(cyruswhiteOak){
        cyrusOne.style.display = "block";
        cyrusTwo.style.display = "none";
        cyrusThree.style.display = "none";
    }
});

cyruslightOak.addEventListener('click', function cyruslightOak(){
    if(cyruslightOak){
        cyrusOne.style.display = "none";
        cyrusTwo.style.display = "block";
        cyrusThree.style.display = "none";
        cyrusTwo.style.position = "relative";
        
        
    }
});

cyruswedgeOak.addEventListener('click', function cyruswedgeOak(){
    if(cyruswedgeOak){
        cyrusOne.style.display = "none";
        cyrusTwo.style.display = "none";
        cyrusThree.style.display = "block";
        cyrusThree.style.position = "relative";
    }
});


let gammawhiteOak = document.querySelector(".gamma-white-oak-color");
let gammawedgeOak = document.querySelector(".gamma-wedge-color");
let gammalightOak = document.querySelector(".gamma-light-oak-color");


let gammaOne = document.querySelector(".gamma-one");
let gammaTwo = document.querySelector(".gamma-two");
let gammaThree = document.querySelector(".gamma-three");

gammalightOak.addEventListener('click', function gammalightOak(){
    if(gammalightOak){
        gammaOne.style.display = "block";
        gammaTwo.style.display = "none";
        gammaThree.style.display = "none";
    }
});

gammawedgeOak.addEventListener('click', function gammawedgeOak(){
    if(gammawedgeOak){
        gammaOne.style.display = "none";
        gammaTwo.style.display = "block";
        gammaThree.style.display = "none";
        gammaTwo.style.position = "relative";
    }
});

gammawhiteOak.addEventListener('click', function gammawhiteOak(){
    if(gammawhiteOak){
        gammaOne.style.display = "none";
        gammaTwo.style.display = "none";
        gammaThree.style.display = "block";
        gammaThree.style.position = "relative";
    }
});

let gamma3walnut = document.querySelector(".gamma3-walnut-color");
let gamma3wedge = document.querySelector(".gamma3-wedge-color");
let gamma3white = document.querySelector(".gamma3-white-color");


let gamma3One = document.querySelector(".gamma3-one");
let gamma3Two = document.querySelector(".gamma3-two");
let gamma3Three = document.querySelector(".gamma3-three");

gamma3walnut.addEventListener('click', function gamma3walnut(){
    if(gamma3walnut){
        gamma3One.style.display = "block";
        gamma3Two.style.display = "none";
        gamma3Three.style.display = "none";
    }
});

gamma3wedge.addEventListener('click', function gamma3wedge(){
    if(gamma3wedge){
        gamma3One.style.display = "none";
        gamma3Two.style.display = "block";
        gamma3Three.style.display = "none";
        gamma3Two.style.position = "relative";
    }
});

gamma3white.addEventListener('click', function gamma3white(){
    if(gamma3white){
        gamma3One.style.display = "none";
        gamma3Two.style.display = "none";
        gamma3Three.style.display = "block";
        gamma3Three.style.position = "relative";
    }
});


let takkamahogany = document.querySelector(".takka-mahogany-color");
let takkawalnut = document.querySelector(".takka-walnut-color");

let takkaOne = document.querySelector(".takka-one");
let takkaTwo = document.querySelector(".takka-two");


takkamahogany.addEventListener('click', function takkamahogany(){
    if(takkamahogany){
        takkaOne.style.display = "block";
        takkaTwo.style.display = "none";
    }
});

takkawalnut.addEventListener('click', function takkawalnut(){
    if(takkawalnut){
        takkaOne.style.display = "none";
        takkaTwo.style.display = "block";
        takkaTwo.style.position = "relative";
    }
});

let alexiaBlack = document.querySelector(".alexia-black-color");
let alexiaBrown = document.querySelector(".alexia-brown-color");

let alexiaOne = document.querySelector(".alexia-one");
let alexiaTwo = document.querySelector(".alexia-two");


alexiaBlack.addEventListener('click', function alexiaBlack(){
    if(alexiaBlack){
        alexiaOne.style.display = "block";
        alexiaTwo.style.display = "none";
    }
});

alexiaBrown.addEventListener('click', function alexiaBrown(){
    if(alexiaBrown){
        alexiaOne.style.display = "none";
        alexiaTwo.style.display = "block";
        alexiaTwo.style.position = "relative";
    }
});

let jeanAntraciet = document.querySelector(".jean-antraciet-color");
let jeanTaupe = document.querySelector(".jean-taupe-color");

let jeanOne = document.querySelector(".jean-one");
let jeanTwo = document.querySelector(".jean-two");


jeanAntraciet.addEventListener('click', function jeanAntraciet(){
    if(jeanAntraciet){
        jeanOne.style.display = "block";
        jeanTwo.style.display = "none";
    }
});

jeanTaupe.addEventListener('click', function jeanTaupe(){
    if(jeanTaupe){
        jeanOne.style.display = "none";
        jeanTwo.style.display = "block";
        jeanTwo.style.position = "relative";
    }
});

let maximeEcru = document.querySelector(".maxime-ecru-color");
let maximeLichtgrijs = document.querySelector(".maxime-lichtgrijs-color");

let maximeOne = document.querySelector(".maxime-one");
let maximeTwo = document.querySelector(".maxime-two");


maximeEcru.addEventListener('click', function maximeEcru(){
    if(maximeEcru){
        maximeOne.style.display = "block";
        maximeTwo.style.display = "none";
    }
});

maximeLichtgrijs.addEventListener('click', function maximeLichtgrijs(){
    if(maximeLichtgrijs){
        maximeOne.style.display = "none";
        maximeTwo.style.display = "block";
        maximeTwo.style.position = "relative";
    }
});

let oscarEcru = document.querySelector(".oscar-ecru-color");
let oscarLichtgrijs = document.querySelector(".oscar-lichtgrijs-color");

let oscarOne = document.querySelector(".oscar-one");
let oscarTwo = document.querySelector(".oscar-two");


oscarEcru.addEventListener('click', function oscarEcru(){
    if(oscarEcru){
        oscarOne.style.display = "block";
        oscarTwo.style.display = "none";
    }
});

oscarLichtgrijs.addEventListener('click', function oscarLichtgrijs(){
    if(oscarLichtgrijs){
        oscarOne.style.display = "none";
        oscarTwo.style.display = "block";
        oscarTwo.style.position = "relative";
    }
});

let cadenLightoak = document.querySelector(".caden-lightoak-color");
let cadenWenge = document.querySelector(".caden-Wenge-color");

let cadenOne = document.querySelector(".caden-one");
let cadenTwo = document.querySelector(".caden-two");

cadenLightoak.addEventListener('click', function cadenLightoak(){
    if(cadenLightoak){
        cadenOne.style.display = "block";
        cadenTwo.style.display = "none";
    }
});

cadenWenge.addEventListener('click', function cadenWenge(){
    if(cadenWenge){
        cadenOne.style.display = "none";
        cadenTwo.style.display = "block";
        cadenTwo.style.position = "relative";
    }
});

let judyLightoak = document.querySelector(".judy-lightoak-color");
let judyWenge = document.querySelector(".judy-Wenge-color");

let judyOne = document.querySelector(".judy-one");
let judyTwo = document.querySelector(".judy-two");

judyLightoak.addEventListener('click', function judyLightoak(){
    if(judyLightoak){
        judyOne.style.display = "block";
        judyTwo.style.display = "none";
    }
});

judyWenge.addEventListener('click', function judyWenge(){
    if(judyWenge){
        judyOne.style.display = "none";
        judyTwo.style.display = "block";
        judyTwo.style.position = "relative";
    }
});

