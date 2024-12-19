const pangalan = prompt("What is your name?");
const color = prompt("What is your favorite color?");
const pColor = prompt("What is your preferred background color?");

document.getElementById("nameDhm").innerHTML = pangalan;
document.getElementById("black").style.color = color;
document.body.style.backgroundColor = pColor;