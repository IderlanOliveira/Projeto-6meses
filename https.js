const http = require("http");

http.createServer(function(req, res){
    res.end("Olá mundo");
}).listen(9191);

console.log("O servidor estah rodando!");

