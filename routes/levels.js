const express = require('express');
const pool = require('../db');
const router = express.Router();

// Retorna os níveis disponíveis
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM levels');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar níveis.' });
  }
});

// Salva o progresso do usuário em um nível
router.post('/:levelId/progress', async (req, res) => {
  const { userId, perguntas_acertadas, total_perguntas } = req.body;

  try {
    await pool.query(
      'INSERT INTO progress (user_id, level_id, perguntas_acertadas, total_perguntas) VALUES (?, ?, ?, ?)',
      [userId, req.params.levelId, perguntas_acertadas, total_perguntas]
    );
    res.json({ message: 'Progresso salvo com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar progresso.' });
  }
});

module.exports = router;
