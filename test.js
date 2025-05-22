const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '188.245.212.195',
  user: 'makeitreal_tickets',
  password: '+4NH{5r910FQ',
  database: 'makeitreal_tickets'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    return;
  }

  console.log('✅ Conexão bem-sucedida com o banco de dados!');

  // Testar uma query simples
  connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      console.error('❌ Erro ao executar a query:', err.message);
    } else {
      console.log('🧪 Resultado da query:', results[0].resultado);
    }

    // Fechar conexão
    connection.end();
  });
});
