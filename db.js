const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verifica se a conexão está ativa
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conectado ao banco de dados com sucesso!');
    connection.release(); // Libera a conexão
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo se houver falha
  }
}

testConnection();

module.exports = pool;
