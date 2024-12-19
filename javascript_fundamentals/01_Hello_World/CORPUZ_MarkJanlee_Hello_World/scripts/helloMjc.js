const name = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const backgroundColor = prompt("What is your preferred background color?");

document.getElementById("nameMjc").innerHTML = name;
document.getElementById("nameMjc").style.color = kulay;
document.body.style.backgroundColor = backgroundColor;