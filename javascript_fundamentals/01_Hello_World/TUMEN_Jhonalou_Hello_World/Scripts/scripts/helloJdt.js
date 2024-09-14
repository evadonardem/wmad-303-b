const name = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const backgroundColor = prompt ("What is your preferred background color");

document.getElementById("nameJdt").innerHTML = name;
document.getElementById("nameJdt").style.color = kulay;
document.body.style.backgroundColor = backgroundColor;