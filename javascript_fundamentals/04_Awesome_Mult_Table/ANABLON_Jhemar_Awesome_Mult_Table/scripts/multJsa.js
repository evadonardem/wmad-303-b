function* multiTableGenerator(rows, cols) {
    let headerRow = '<th class="th">*</th>';
    for (let i = 1; i <= cols; i++) {
        headerRow += `<th class="th">${i}</th>`;
    }
    yield headerRow;

    for (let i = 1; i <= rows; i++) {
        let row = `<tr><th class="th">${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            const product = i * j;
            const className = product % 2 === 0 ? 'bg-success text-white' : 'bg-danger text-white rounded-pill';
            row += `<td><span class="badge ${className}">${product}</span></td>`;
        }
        row += '</tr>';
        yield row;
    }
}

function generateMultiplicationTable(rows, cols) {
    const headerRowElement = document.getElementById('headerRow');
    const tableBody = document.getElementById('tableBody');
    

    tableBody.innerHTML = '';
    
    
    headerRowElement.innerHTML = '';
    headerRowElement.innerHTML = multiTableGenerator(0, cols).next().value;

    const generator = multiTableGenerator(rows, cols);
    

    generator.next(); 

    for (const row of generator) {
        tableBody.innerHTML += row;
    }
}

document.getElementById('generateButton').addEventListener('click', () => {
    const rows = parseInt(document.getElementById('rows').value, 10);
    const cols = parseInt(document.getElementById('cols').value, 10);
    generateMultiplicationTable(rows, cols);
});