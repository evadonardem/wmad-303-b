const generateBtn = document.getElementById('generateBtn');
        const loadingSpinner = document.getElementById('loadingSpinner');

        const multTableGenerator = (rows, cols) => {
            const colsElement = document.getElementById("cols");
            const rowsElement = document.getElementById("rows");

            colsElement.innerHTML = '';
            rowsElement.innerHTML = '';

            let headerRow = `<th scope="col">${rows} x ${cols}</th>`;

            for (let j = 1; j <= cols; j++) {
                headerRow += `<th scope="col">${j}</th>`;
            }
            colsElement.innerHTML = headerRow;

            for (let i = 1; i <= rows; i++) {
                let row = `<tr><th scope="row">${i}</th>`;

                for (let j = 1; j <= cols; j++) {
                    const product = i * j;
                    const isEven = product % 2 === 0;
                    const badgeColor = isEven ? 'success' : 'danger';
                    const badge = `<span class="badge rounded-pill text-bg-${badgeColor}">${product}</span>`;

                    row += `<td>${badge}</td>`;
                }
                row += "</tr>";
                rowsElement.innerHTML += row;
            }
        };

        generateBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const rows = parseInt(document.getElementById('rowsInput').value);
            const cols = parseInt(document.getElementById('colsInput').value);

            if (rows > 0 && cols > 0) {
                loadingSpinner.style.display = 'inline-block';

                setTimeout(() => {
                    multTableGenerator(rows, cols);
                    loadingSpinner.style.display = 'none';
                }, 500);
            } else {
                alert('Please enter valid numbers for rows and columns.');
            }
        });