const express = require("express");
const pool = require("../db");
const router = express.Router();

// Retorna o perfil de todos os usuários
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar usuários." });
  }
});

// Retorna o perfil do usuário
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT nome, apelido, pontos FROM users WHERE id = ?",
      [req.params.id]
    );
    if (rows == 0){
        res.status(404).json({ message: "Usuário não encontrado na base." }); 
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário." });
  }
});

// Atualiza pontos do usuário
router.put("/:id/pontos", async (req, res) => {
  const { pontos } = req.body;
  try {
    await pool.query("UPDATE users SET pontos = pontos + ? WHERE id = ?", [
      pontos,
      req.params.id,
    ]);
    res.json({ message: "Pontos atualizados com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar pontos." });
  }
});

module.exports = router;
