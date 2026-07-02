const express = require("express");

const app = express();
const tarefaRoutes = require("./routes/tarefaRoutes");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo a API tarefas!");
});

app.use(express.json());
app.use("/api", tarefaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
