const pangalan = prompt("What is your name");
const kulay = prompt("What is your favorite color");
const likodkulay = prompt("What is your preferred backround color");

document.getElementById("nameDhm").innerHTML = pangalan;
document.getElementById("nameDhm").style.color = kulay;
document.body.style.backgroundColor = likodkulay;