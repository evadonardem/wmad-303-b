const pangalan = prompt("What is your name?"); 
const kulay = prompt("What is your favorite color?");
const likodkulay = prompt("What is your prefered background color?");

document.getElementById("nameRmpa").innerHTML = pangalan;
document.getElementById("nameRmpa").style.color = kulay;
document.body.style.backgroundColor = likodkulay;