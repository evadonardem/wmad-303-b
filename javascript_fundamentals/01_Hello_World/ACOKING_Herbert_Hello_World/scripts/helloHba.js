const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("what is your preferred background color?");

document.getElementById("nameHba").innerHTML = pangalan;
document.getElementById("nameHba").style.color = kulay;
document.body.style.backgroundColor = likodKulay;
