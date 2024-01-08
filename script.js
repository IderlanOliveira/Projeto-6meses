const express = require("express");
const app = express();
const port = 3000;

const basicAuth = require("express-basic-auth");
app.use(basicAuth({
    users: {"Betania":"Beta123"},
    users: {"Iderlan": "TI"},
    challenge: true,
    unauthorizedResponse: "Acesso negado, procure o TI"
}));

app.get("/", (req, res) => {
    res.send("Bem-vindo à rota protegida!");
});

app.lintens(port, () => {
    console.log("Servidor rodando em http://localhost:${port}");
});