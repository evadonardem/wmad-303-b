const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("What is your preferred background color?");

document.getElementById("nameMbd").innerHTML = pangalan;
document.getElementById("nameMbd").style.color = kulay;
document.body.style.backgroundColor = likodKulay;