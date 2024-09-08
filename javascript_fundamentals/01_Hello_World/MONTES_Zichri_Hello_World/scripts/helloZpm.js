const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodkulay = prompt ("What is your preferred color?");

document.getElementById("nameJaj").innerHTML = pangalan;
document.getElementById("nameJaj").style.color = kulay;
document.body.style.backgroundColor = likodkulay;