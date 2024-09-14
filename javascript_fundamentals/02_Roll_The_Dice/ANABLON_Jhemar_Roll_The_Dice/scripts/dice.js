const rollMe = () =>{
    const die1 = Math.floor(Math.random() * 6 + 1); 
    const die2 = Math.floor(Math.random() * 6 + 1); 
    
    const xOffset1 = -(116 * (die1 - 1));
    const yOffset1 = (die1 > 3) ? -118 : 0;
    
    const xOffset2 = -(116 * (die2 - 1));
    const yOffset2 = (die2 > 3) ? -118 : 0;
    
    document.getElementById("die1").style.backgroundPosition = `${xOffset1}px ${yOffset1}px`;
    document.getElementById("die2").style.backgroundPosition = `${xOffset2}px ${yOffset2}px`;
    
    document.getElementById("die1").style.backgroundPosition = `${xOffset1}px ${yOffset1}px`;
    document.getElementById("die2").style.backgroundPosition = `${xOffset2}px ${yOffset2}px`;
    
};

const rollMeBtn = document.getElementById("rollMe");

rollMeBtn.onclick = () => {
    rollMe();
}