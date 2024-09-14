
const rollMe = () => {
    
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);

    const xOffset1 = -(116 * (die1 - 1));
    const yOffset1 = (die1 > 3) ? -118 : 0;

    const xOffset2 = -(116 * (die2 - 1));
    const yOffset2 = (die2 > 3) ? -118 : 0;

    const total = die1 + die2;

    const die1Styles = document.getElementById('die1').style;
    const die2Styles = document.getElementById('die2').style;

    die1Styles.backgroundPositionX = `${xOffset1}px`;
    die1Styles.backgroundPositionY = `${yOffset1}px`;

    die2Styles.backgroundPositionX = `${xOffset2}px`;
    die2Styles.backgroundPositionY = `${yOffset2}px`;

    document.getElementById('totalValue').innerText = `Total: ${total}`;
};

const rollMeBtn = document.getElementById("roll");

rollMeBtn.onclick = () => {
    rollMe();
};