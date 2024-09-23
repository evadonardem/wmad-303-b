const multableGenerator = (rows, cols) => {
    const colsElement = document.getElementById("cols");
    const rowsElement = document.getElementById("rows");

    rowsElement.innerHTML = "";
    colsElement.innerHTML = `<th scope="col"></th>`;

    for (let i = 1; i <= rows; i++) {
        let row = `<tr><th scope="row">${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            if (i === 1) {
                colsElement.innerHTML += `<th scope="col">${j}</th>`;
            }
            const product = i * j;
            const isEven = product % 2 === 0;
            const badgeColor = isEven ? `success` : `danger`;
            const badge = `<span class="badge rounded-pill text-bg-${badgeColor}">${product}</span>`;
            row += `<td>${badge}</td>`;
        }
        row += "</tr>";
        rowsElement.innerHTML += row;
    }

    document.getElementById("resultTable").style.display = "table"; // Show the table after generation
};

const generateForm = document.getElementById("generateForm");
const spinner = document.getElementById("spinner");

generateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    spinner.style.display = "block"; // Show spinner
    const rows = parseInt(event.target.elements[0].value, 10);
    const cols = parseInt(event.target.elements[1].value, 10);

    setTimeout(() => {
        multableGenerator(rows, cols);
        spinner.style.display = "none"; // Hide spinner
    }, 2000); // Adjust time as needed
});