const express = require("express");

const app = express();

const tarefaRoutes = require("./routes/tarefaRoutes");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo á API de tarefas");
});

app.use(express.json());

app.use("/api", tarefaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
