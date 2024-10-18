const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const router = express.Router();

// Registro de novo usuário
router.post("/signup", async (req, res) => {
  const { nome, apelido, idade, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);

  try {
    const [result] = await pool.query(
      "INSERT INTO users (nome, apelido, idade, senha) VALUES (?, ?, ?, ?)",
      [nome, apelido, idade, hash]
    );

    // Captura o ID inserido
    const userId = result.insertId;

    res.status(201).json({
      message: "Usuário registrado com sucesso!",
      userId: userId,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { apelido, senha } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE apelido = ?", [
      apelido,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Usuário não encontrado." });

    const user = rows[0];
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida)
      return res.status(401).json({ message: "Senha incorreta." });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    res.json({ id: user.id, token: token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login." });
  }
});

module.exports = router;
