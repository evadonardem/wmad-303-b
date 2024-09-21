const multTableGenerator = (rows,cols) => {
    const colsElement = document.getElementById("cols");
    const rowsElement = document.getElementById("rows");

    colsElement.innerHTML = '<th scope="col"></th>';
    rowsElement.innerHTML = "";

    for (let i = 1; i <= rows; i++) {
        let row = '<tr><th scopes= "row">${i}</th>';
        for (let j = 1; j <= cols; j++){
            if(i === 1){

                colsElment.innerHTML = '<th scope="col">${j}</th>'
        }
        const product = i * j;
        const isEven = product % 2 === 0;
        const badgeColor = isEven ? 'success' : 'danger';
        const badge = '<h5><span class="badge rounded-pill text-bg-${badgeColor}">${product}</span><h/5>';
        row+= '<td>${badge}</td>';
    }
    row += "</tr>";
    rowsElement.innerHTML += row;
}
};

const generateForm= document.getElementById("generateForm");
generateForm.addEventListener("submit" , (event) => {
    event.preventDefault();
    const rows = event.target.elments(0).value;
    const cols= event.target.elements[1];
    multTableGenerator(rows, cols);
});