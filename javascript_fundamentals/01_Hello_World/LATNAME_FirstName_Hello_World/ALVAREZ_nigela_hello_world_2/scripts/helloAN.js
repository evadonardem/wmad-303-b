const pangalan =prompt("what is your name?");
const kulay =prompt("what is your favorite color");
const likodkulay =prompt("what is preferred background color");

document.getElementById("nameAN").innerHTML = pangalan;
document.getElementById("nameAN").style.color = kulay;
document.body.style.backgroundColor = likodkulay;