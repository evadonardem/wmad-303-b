function generateTable() {
    const input = document.getElementById('tableInput').value;
    const [rows, cols] = input.split('*').map(Number);

    // Call the multiplication table generator
    multTableGenerator(rows, cols);
}

const multTableGenerator = (rows, cols) => {
    const colsElement = document.getElementById("cols");
    const rowsElement = document.getElementById("rows");
    const sizeSpan = document.getElementById('tableSizeSpan');

    // Validate input
    if (isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0) {
        alert('Please enter valid numbers in the format "X * Y"');
        return;
    }

    // Clear previous results
    colsElement.innerHTML = "";  
    rowsElement.innerHTML = "";
    sizeSpan.innerText = `Multiplication Table Size: ${rows} x ${cols}`;

    // Create column headers
    for (let j = 1; j <= cols; j++) {
        colsElement.innerHTML += `<th scope="col" style="padding: 0 15px;">${j}</th>`; // Add padding for spacing
    }

    // Create multiplication rows
    for (let i = 1; i <= rows; i++) {
        let row = `<tr><th scope="row">${i}</th>`; // Row header

        for (let j = 1; j <= cols; j++) {
            const product = i * j;
            const isEven = product % 2 === 0;
            const badgeColor = isEven ? "success" : "danger";
            const badge = `<span class="badge rounded-pill text-bg-${badgeColor}">${product}</span>`;
            row += `<td>${badge}</td>`; // Add the badge to the row
        }

        row += "</tr>";
        rowsElement.innerHTML += row; // Append the completed row
    }
};
