function adicionarItem() {
    const newItem = document.getElementById('itemInput').value;
    document.getElementById('itemInput').value = '';

    const tableBody = document.getElementById('tabelaBody');
    const newRow = tableBody.insertRow(tableBody.rows.length);
    const cell = newRow.insertCell(0);
    cell.innerHTML = newItem;
}

document.getElementById("notificarButton").addEventListener("click", function(){

if("Notification" in window){

    Notification.requestPermission().then(function(Permission){
        if(Permission === "granted"){

            const notification = new Notification("SEU PEDIDO FOI SOLICITADO COM SUCESSO!", {
                body: "Parabéns, sua solicitação foi efetuada com sucesso, agora é só esperar que o almoxarifado aceite ou rejeite sua solicitação."
            })
        }
    })
} else{
    alert("Desculpe, houve algum erro com sua solicitação, consulte o setor de almoxarifado.")
}

})