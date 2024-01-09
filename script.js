const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();
const port = 3000;

const users = {
    'seuUsuario': 'suaSenha',
};

app.use(basicAuth({
    users: users,
    challenge: true,
    unauthorizedResponse: 'Acesso não autorizado!',
}));

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


const itens = textbox("Digite os itens aqui")

document.write("Esta é a lista de Itens disponiveis" + name)