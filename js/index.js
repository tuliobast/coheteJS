/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/

let y=0;
let empezar=false;
window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);
window.addEventListener("keydown", arriba);


function teclado(e) {
    (e.key==="Enter") 
    && (e.type==="keydown")
    ? combustion() 
    : document.querySelector(".nave").src="img/nave1.png"; 
    (e.key==="ArrowUp" && empezar) && (document.querySelector(".nave").style.bottom=`${y+=10}px`)
}

function combustion(){
    document.querySelector(".nave").src="img/nave2.png"
    empezar = true;
}