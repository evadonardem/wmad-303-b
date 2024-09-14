const card = document.getElementById("gradeCard");

document.getElementById("yourGrade").onchange = (event) => {
    const grade = event. target .value;

    card.classList.remove("text-bg-success", "text-bg-danger")

    let evaluation;
    if (grade >= 85) {
        card.getElementsByClassName("btn")[0].classList.add("btn-success");
        card.getElementsByClassName("card-title")[0].innerHTML = "Great Job You Passed!!!!";
        card.getElementsByClassName("card-text")[0].innerHTML = "Noice";
        card.classList.add("text-bg-success");
        
    } else if (grade >= 75 && grade < 85) {
        card.getElementsByClassName("btn")[0].classList.add("btn-warning");
        card.getElementsByClassName("card-title")[0].innerHTML = "Good Job You Passed!!!!";
        card.getElementsByClassName("card-text")[0].innerHTML = "Kurang, Do your best next term";
        card.classList.add("text-bg-warning");

    } else {
        card.getElementsByClassName("btn")[0].classList.add("btn-danger");
        card.getElementsByClassName("card-title")[0].innerHTML = "Congrats You Failed!!!!";
        card.getElementsByClassName("card-text")[0].innerHTML = "Come in the office";
        card.classList.add("text-bg-danger");
    }

    document.getElementById("evaluation").innerHTML = evaluation;
}