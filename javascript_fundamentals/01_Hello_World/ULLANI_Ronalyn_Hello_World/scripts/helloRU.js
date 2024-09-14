const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("What is your preffered background color");

document.getElementById("nameRUL").innerHTML = pangalan;
document.getElementById("nameRUL").style.color = kulay;
document.body.style.backgroundColor = likodKulay;