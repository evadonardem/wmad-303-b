const multTableGenerator = (rows, cols) => {
    const colsElement = document.getElementById("cols");
    const rowsElement = document.getElementById("rows");

    // Clear previous table data
    colsElement.innerHTML = '<th scope="col">#</th>';
    rowsElement.innerHTML = '';

    for (let j = 1; j <= cols; j++) {
        colsElement.innerHTML += `<th scope="col">${j}</th>`;
    }

    for (let i = 1; i <= rows; i++) {
        let row = '<tr>';
        row += `<th scope="row">${i}</th>`; 

        for (let j = 1; j <= cols; j++) {
            const product = i * j;
            const isEven = product % 2 === 0;
            const badgeColor = isEven ? 'success' : 'danger';
            const badge = `<span class="badge rounded-pill text-bg-${badgeColor}">${product}</span>`;
            row += `<td>${badge}</td>`;
        }
        row += '</tr>';
        rowsElement.innerHTML += row;
    }
};

document.getElementById("generate").addEventListener("click", () => {
    const input = document.getElementById("dimensions").value;
    const [rows, cols] = input.split('x').map(num => parseInt(num.trim()));
    if (!isNaN(rows) && !isNaN(cols)) {
        multTableGenerator(rows, cols);
    } else {
        alert("Please enter valid dimensions in the format '10 x 9'.");
    }
});
