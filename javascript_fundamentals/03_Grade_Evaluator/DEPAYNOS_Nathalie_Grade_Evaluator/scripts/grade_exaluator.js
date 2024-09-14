const card = document.getElementById("gradeCard");

document.getElementById("yourGrade").onchange = (event) => {
    const grade = event.target.value;
    
    card.classList.remove("text-bg-success", "text-bg-danger")

    if (grade >= 75){
        card.classList.add("text-bg-success");
        card.getElementsByClassName("card-title")[0].innerText = "Congratulations! You Passed!";
    } else {
        card.classList.add("text-bg-danger");
        card.getElementsByClassName("card-title")[0].innerText = "Sorry! You Failed!";
    }

}

//text-bg-success
//text-bg-danger