const pangalan = prompt("what is your name");
const kulay = prompt("what is your favorite color");
const likodkulay = prompt("what is your preferred background color");

document.getElementById("nameDhm").innerHTML = pangalan;
document.getElementById("nameDhm").style.color = kulay;
document.body.style.backgroundColor = likodkulay;