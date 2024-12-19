const nagan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const backgroundColor = prompt("What is your preferred background color?");

document.getElementById("nameBN").innerHTML = nagan;
document.getElementById("nameBN").style.color = kulay;
document.body.style.backgroundColor = backgroundColor;