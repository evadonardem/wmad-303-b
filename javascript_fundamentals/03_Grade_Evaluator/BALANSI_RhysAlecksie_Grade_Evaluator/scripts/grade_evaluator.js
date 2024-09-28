
const card = document.getElementById("gradeCard");



document.getElementById("yourGrade").onchange = (event) => {
    const grade = event.target.value;

    card.classList.remove("text-bg-success", "text-bg-danger");

    if(grade >= 75){
        card.getElementsByClassName("card-title")[0].innerText = "Congratulations!! YOU PASSED!!!";
        card.classList.add("text-bg-success");
    }else{
        card.getElementsByClassName("card-title")[0].innerText = "Oooopppss!! YOU FAILED!!!";
        card.classList.add("text-bg-danger");
    }

    document.getElementById("evaluation").innerText = evaluation;
    
};