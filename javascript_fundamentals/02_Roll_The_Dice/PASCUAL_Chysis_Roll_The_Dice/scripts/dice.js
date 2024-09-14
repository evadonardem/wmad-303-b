const rollMe = () =>{
const die1 =Math.floor(Math.random() * 6+1)
const die2 =Math.floor(Math.random() * 6+1)

const xoffsetdie1 = -(116 * (die1 - 1));
const yoffsetdie1 = (die1 > 3)? -118: 0;

const xoffsetdie2 = -(116 * (die2 - 1));
const yoffsetdie2 = (die2 > 3)? -118: 0;

const die1Style = document.getElementById("die1").style;
const die2Style = document.getElementById("die2").style;

die1Style.backgroundPositionX =xoffsetdie1 + "px";
die1Style.backgroundPositionY =xoffsetdie1 + "px";

die2Style.backgroundPositionX =xoffsetdie2 + "px";
die2Style.backgroundPositionY =xoffsetdie2 + "px";
};

const rollMEbtn = document.getElementById("roollMe");

rollMEbtn.onclick = ()=> {
    rollMe();
};
