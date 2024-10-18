const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const levelRoutes = require("./routes/levels");

require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/levels", levelRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
