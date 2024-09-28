const rollMe = () => {
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);

    const xOffsetDie1 = -(116 * (die1 - 1));
    const yOffsetDie1 = (die1 > 3) ? -118 : 0;

    const xOffsetDie2 = -(116 * (die2 - 1));
    const yOffsetDie2 = (die2 > 3) ? -118 : 0;

    const die1Style = document.getElementById("die1").style;
    const die2Style = document.getElementById("die2").style;

    die1Style.backgroundPositionX = xOffsetDie1 + "px";
    die1Style.backgroundPositionY = yOffsetDie1 + "px";

    die2Style.backgroundPositionX = xOffsetDie2 + "px";
    die2Style.backgroundPositionY = yOffsetDie2 + "px";
};

const rollMeBtn = document.getElementById("rollMe");

rollMeBtn.onclick = () => {
    rollMe();
}