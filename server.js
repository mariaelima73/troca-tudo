const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '142536',
    database: 'troca_tudo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conectado ao banco de dados MySQL ${connection.config.database}`);
    const localhost = `http://localhost:${PORT}`
    console.log(`Acesse: ${localhost}`)
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`)
});