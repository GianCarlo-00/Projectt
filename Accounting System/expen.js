function addRow(tableId) {
    const table = document.getElementById(tableId);
    const row = table.insertRow(table.rows.length - 1); 
    for (let i = 0; i < 4; i++) {
        const cell = row.insertCell(i);
        if (i === 3) {
            cell.innerHTML = '<input type="number" step="0.01" value="0" oninput="updateTotal(\'' + tableId + '\')">';
        } else {
            cell.innerHTML = '<input type="text">';
        }
    }
}

function updateTotal(tableId) {
    const table = document.getElementById(tableId);
    let total = 0;

    for (let i = 1; i < table.rows.length - 1; i++) {
        const amountCell = table.rows[i].cells[3];
        const input = amountCell.querySelector('input'); 
        if (input && !isNaN(input.value)) {
            total += parseFloat(input.value) || 0;
        }
    }

    table.rows[table.rows.length - 1].cells[3].textContent = '₱' + total.toFixed(2);
}
