

const card = document.getElementById("gradeCard");



document.getElementById("yourGrade").onchange = (event) => {
    const grade = event.target.value;

    card.classList.remove("text-bg-success", "text-bg-danger");

    if(grade >= 75){
        card.getElementsByClassName("card-title")[0].innerText = "Congratulations!Pinmasa kan!";
        card.classList.add("text-bg-success");
    }else{
        card.getElementsByClassName("card-title")[0].innerText = "Bagsak ka!agawed en!";
        card.classList.add("text-bg-danger");
    }

    document.getElementById("evaluation").innerText = evaluation;
    
};
