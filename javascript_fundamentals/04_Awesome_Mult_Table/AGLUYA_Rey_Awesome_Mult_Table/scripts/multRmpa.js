const multTableGenerator = (rows, cols) => {
    const colsElement = document.getElementById("cols");
    const rowElement = document.getElementById("rows");

    colsElement.innerHTML = '<th scope="col"></th>'
    rowElement.innerHTML = " ";

    for(let i = 1; i <= rows; i++){
        let row = `<tr> 
            <th scope="row">${i}</th>`
        for(let j = 1; j <= cols; j++){
            if(i === 1){
                colsElement.innerHTML += `<th scope="col">${j}</th>`
            }

            const product = i * j;
            const isEven = product % 2 === 0;
            const badgeColor = isEven ? 'success' : 'danger';
            const badge = `<h5><span class="badge rounded-pill text-bg-${badgeColor}">
                ${product}
            </span> </h5>`;

            row += `<td class="text-center">${badge}</td>`;
        }
        row += "</tr>";
        rowElement.innerHTML += row;
    }
};

const generateForm = document.getElementById('generateform');
generateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = event.target.elements[0].value;
    const cols = event.target.elements[1].value;
    multTableGenerator(rows, cols);
});