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

app.post('/login', (req, res) => {
    const {email, senha} = req.body;
    connection.query(`SELECT id, nome, avatar, curtidas_totais AS curtidas, descurtidas_totais AS descurtidas
        FROM usuarios WHERE email = ? AND senha = ?`, [email, senha], (err, results) => {
            if (err) {
                console.error('Erro ao consultar o banco de dados:', err);
                return res.status(500).json({sucesso: false, mensagem: 'Erro no servidor'})
            }
            if (results.length > 0) {
                const usuario = results[0]
                res.json({sucesso: true, usuario})
            } else {
                res.json({sucesso: false, mensagem: 'Credenciais inválidas'})
            }
        }
    )
})

app.get('/produtos', (req, res) => {
    connection.query(`SELECT p.id, p.nome, p.imagem, p.curtidas, p.descurtidas,
        (SELECT COUNT(*) FROM comentarios WHERE id_produto = p.id) AS total_comentarios,
        (SELECT cidade FROM comentarios WHERE id_produto = p.id ORDER BY id DESC LIMIT 1) AS cidade,
        (SELECT estado FROM comentarios WHERE id_produto = p.id ORDER BY id DESC LIMIT 1) AS estado
        FROM produtos p`, (err, results) => {
            if (err) {
                console.error('Erro ao buscar os produtos:', err)
                return res.status(500).json({sucesso: false, mensagem: 'Erro ao buscar os produtos'})
            }
            res.json(results)
        }
    )
})