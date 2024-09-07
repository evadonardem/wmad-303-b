const rollMe = () => {
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);

    const xOffsetDie1 = -(116 * (die1 - 1));
    const yOffsetDie1 = (die1 > 3) ? -118 : 0;

    const xOffsetDie2 = -(116 * (die2 - 1));
    const yOffsetDie2 = (die2 > 3) ? -118 : 0;

    const die1Styles = document.getElementById("die1").style;
    die1Styles.backgroundPositionX = xOffsetDie1 + "px";
    die1Styles.backgroundPositionY = yOffsetDie1 + "px";

    const die2Styles = document.getElementById("die2").style;
    die2Styles.backgroundPositionX = xOffsetDie2 + "px";
    die2Styles.backgroundPositionY = yOffsetDie2 + "px";
};




const rollMeBttn = document.getElementById("rollMe");


rollMeBttn.onclick = () => {
    rollMe();
};