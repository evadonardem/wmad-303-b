const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("What is your preferred background color?");

document.getElementById("nameCmb").innerHTML = pangalan;
document.getElementById("nameCmb").style.color = kulay;
document.body.style.background = likodKulay;