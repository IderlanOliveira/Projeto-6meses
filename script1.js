const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/pagina1.html")
});

app.get("/Tabela", function(req, res){
    res.sendFile(__dirname + "/html/pagina2.html")
});

app.get("/Solicitação", function(req, res){
    res.sendFile(__dirname + "/html/pagina3.html")
});

app.get("/Itens", function(req, res){
    res.sendFile(__dirname + "/html/pagina4.html")
});

// app.get("/blog", function(req, res){
//     res.sendFile(__dirname + "/html/pagina3.html")
// });








app.listen(9191, function(){
    console.log("Servidor Rodando na url http://localhost:9191");

});
//localhost9091