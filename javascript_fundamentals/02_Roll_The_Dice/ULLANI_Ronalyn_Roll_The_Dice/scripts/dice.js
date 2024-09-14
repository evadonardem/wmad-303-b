const rollMe = () =>{
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);

    const xOffsetDie1 = -(116 * (die1 - 1));
    const yOffsetDie1 = (die1 > 3) ? -118 : 0;

    const xOffsetDie2 = -(116 * (die2 - 1));
    const yOffsetDie2 = (die2 > 3) ? -118 : 0;

    const dieStyle1 = document.getElementById("die1").style;
    const dieStyle2 = document.getElementById("die2").style;


        dieStyle1.backgroundPositionX = xOffsetDie1 + "px";
        dieStyle1.backgroundPositionY = yOffsetDie1 + "px";

        dieStyle2.backgroundPositionX = xOffsetDie2 + "px";
        dieStyle2.backgroundPositionY = yOffsetDie2 + "px";
};


const rollMeBtn = document.getElementById("rollMe");
 
rollMeBtn.onclick = () =>{
    rollMe();
};