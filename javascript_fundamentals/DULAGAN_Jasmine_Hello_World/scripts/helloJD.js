const name = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const backgroundColor = prompt("What is your preferred background color?");

document.getElementById("nameJD").innerHTML = name;
document.getElementById("nameJD").style.color = kulay;
document.body.style.backgroundColor = backgroundColor;