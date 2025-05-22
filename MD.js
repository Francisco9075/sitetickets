const mysql = require('mysql2');

// Criar a conexão
const connection = mysql.createConnection({
    host: '188.245.212.195',
  user: 'makeitreal_tickets',
  password: '+4NH{5r910FQ',
  database: 'makeitreal_tickets',
  port: 3306               
});

// Conectar
connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão:', err);
    return;
  }
  console.log('Conexão com o MySQL estabelecida com sucesso!');
});

module.exports = connection;
