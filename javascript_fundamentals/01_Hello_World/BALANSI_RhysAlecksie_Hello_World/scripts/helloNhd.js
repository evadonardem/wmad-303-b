const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const backgroundColor = prompt("What is your preferred background color?");


document.getElementById("nameNhd").innerHTML = pangalan;
document.getElementById("nameNhd").style.color = kulay;
document.body.style.backgroundColor = backgroundColor;
document.getElementById("nameNhd").style.fontSize = "30px";