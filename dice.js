
function reset(){
let Randomnumber1 = Math.floor(Math.random() * 6) + 1;
let imagesrandom = "dice" + Randomnumber1 + ".png";
let imaa = "images/" + imagesrandom;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imaa);
let Randomnumber2 = Math.floor(Math.random() * 6) + 1;
let imagesrandoms = "dice" + Randomnumber2 + ".png";
let imaaa = "images/" + imagesrandoms;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imaaa);
if (Randomnumber1>Randomnumber2){
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if (Randomnumber1===Randomnumber2){
    document.querySelector("h1").innerHTML="Game Draw";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins";
}
}
