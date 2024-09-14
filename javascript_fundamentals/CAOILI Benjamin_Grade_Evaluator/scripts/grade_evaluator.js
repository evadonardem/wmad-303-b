const card = document.getElementById("gradeCard");

document.getElementById("yourGrade").onchange = (event) => {
    const grade = event. target .value;

    card.classList.remove("text-bg-success", "text-bg-danger")

    let evaluation;
    if (grade >= 75){
        card.classList.add("text-bg-success");
        card.getElementsByClassName("card-title")[0].innerHTML = "You Passed";

    } else {
        card.classList.add("text-bg-danger");
        card.getElementsByClassName("card-title")[0].innerHTML = "Congrats You Failed";
    }

    document.getElementById("evaluation").innerHTML = evaluation;
}