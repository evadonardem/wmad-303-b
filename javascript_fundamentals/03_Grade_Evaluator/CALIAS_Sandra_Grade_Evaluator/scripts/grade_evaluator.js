const card = document.getElementById("gradeCard");

document.getElementById("yourGrade").onchange = (event) => {
    const grade = event.target.value;

    card.classList.remove("text-bg-success", "text-bg-danger");

    if (grade >= 85){
        card.getElementsByClassName("btn")[0].classList.add("btn-success");
        card.getElementsByClassName("card-title")[0].innerText = "Great Job! You Passed";
        card.classList.add("text-bg-success");
    }else if (grade >= 75 && grade < 85) {
        card.getElementsByClassName("btn")[0].classList.add("btn-warning");
        card.getElementsByClassName("card-title")[0].innerText = "Great Job! You Passed";
        card.classList.add("text-bg-warning");
    }else {
        card.getElementsByClassName("btn")[0].classList.add("btn-danger");
        card.getElementsByClassName("card-title")[0].innerText = "Sorry You Failed";
        card.classList.add("text-bg-danger");
    }
    
    document.getElementById("evaluation").innerText = evaluation;
};


