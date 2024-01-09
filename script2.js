function adicionarItem() {
    var newItem = document.getElementById('itemInput').value;
    document.getElementById('itemInput').value = '';

    var tableBody = document.getElementById('tabelaBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell = newRow.insertCell(0);
    cell.innerHTML = newItem;
}
