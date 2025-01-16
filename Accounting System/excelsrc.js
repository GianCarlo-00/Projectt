function updateTotal() {
    let inputs = document.querySelectorAll('.amount-input');
    let total = 0;
    inputs.forEach(input => {
        total += Number(input.value) || 0;
    });
    document.getElementById('total-amount').innerText = total.toFixed(2);
}

function addRow() {
    const table = document.getElementById('dynamic-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Add columns with inputs
    for (let i = 0; i < 6; i++) {
        const newCell = newRow.insertCell(i);
        if (i % 2 === 0) {
            newCell.innerHTML = '<input type="text" placeholder="Itemized Des." class="desc">';
        } else {
            const category = ['supplementary', 'clinic', 'development', 'instructional', 'operation', 'revolving'][i / 2 | 0];
            newCell.innerHTML = `<input type="number" placeholder="Cost" class="cost ${category}">`;
        }
    }
}

function computeTotal(category) {
    const inputs = document.querySelectorAll(`.cost.${category}`);
    let total = 0;
    inputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        total += value;
    });
    document.getElementById(`${category}-total`).innerText = total.toFixed(2);
}

function updateTotal(category) {
    computeTotal(category);
}