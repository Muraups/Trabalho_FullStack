const express = require('express');
const cors = require('cors');
const rotas = require('./routes');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000' // Altere para a URL do seu frontend
}));

app.use(express.json());
app.use('/', rotas);

app.get('/', (req, res) => {
    res.send('Bem-vindo à API');
});

app.get('/home', (req, res) => {
    res.send('Desenvolvido por Pablo Aurelio Melo Almeida');
});

app.listen(3000, () => console.log(`Servidor rodando em http://localhost:3000`));
