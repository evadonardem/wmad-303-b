const multiTableGenerator = (rows, cols) => {

    const tableHead = document.querySelector('#multiplicationTable thead tr');
    const tableBody = document.querySelector('#multiplicationTable tbody');
    
    tableHead.innerHTML = '<th scope="col" class="text-center">Douglas</th>';
    tableBody.innerHTML = '';

    for (let j = 1; j <= cols; j++) {
        const headerCell = document.createElement('th');
        headerCell.scope = 'col';
        headerCell.classList.add('text-center');
        headerCell.textContent = j;
        tableHead.appendChild(headerCell);
    }

    for (let i = 1; i <= rows; i++) {
        let row = `<tr><th scope="row">${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            const product = i * j;
            row += `<td class="text-center"><span class="badge rounded-pill ${product % 2 === 0 ? 'text-bg-success' : 'text-bg-danger'}">${product}</span></td>`;
        }
        row += `</tr>`;
        tableBody.innerHTML += row;
    }
};
const generateForm = document.getElementById("generateForm");

generateForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const size = parseInt(document.getElementById('size').value);

    if (size > 0) {
        document.getElementById('preloader').style.display = 'block';
        document.getElementById('multiplicationTable').style.display = 'none';

        setTimeout(() => {
            multiTableGenerator(size, size);
            document.getElementById('multiplicationTable').style.display = 'table';
            document.getElementById('preloader').style.display = 'none';
        }, 300);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});