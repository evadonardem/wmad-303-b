const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color");
const likodkulay = prompt("What is your preferred background color?");

document.getElementById("nameLCH").innerHTML = pangalan;
document.getElementById("nameLCH").style.color = kulay;
document.body.style.backgroundColor = likodkulay;