const pangalan = prompt("What is you name");
const kulay = prompt("What is your favorite color");
const likodKulay = prompt("What is your preferred background color");

document.getElementById("nameJmc").innerHTML = pangalan;
document.getElementById("nameJmc").style.color = kulay;
document.body.style.backgroundColor = likodKulay;