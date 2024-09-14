const panagalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("What is your preferred background color?");

document.getElementById("nameCES").innerHTML = panagalan;
document.getElementById("nameCES").style.color = kulay;
document.body.style.backgroundColor = likodKulay;