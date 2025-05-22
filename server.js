const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: '188.245.212.195',
  user: 'makeitreal_tickets',
  password: '+4NH{5r910FQ',
  database: 'makeitreal_tickets'
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

// Rota para buscar dados
app.get('/api/eventos', (req, res) => {
  db.query('SELECT * FROM EVENTOS', (err, results) => {
    if (err) {
      res.status(500).json({ erro: 'Erro na query' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend a correr em http://localhost:${port}`);
});
