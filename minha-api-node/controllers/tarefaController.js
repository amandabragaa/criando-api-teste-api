// Controlador para lidar com operações relacionadas às tarefas

// Array simulando uma lista de tarefas
let tarefas = [];

// Função para listar tarefas
const listarTarefas = (req, res) => {
  res.json(tarefas);
};

//Função para criar uma nova tarefa
const criarTarefa = (req, res) => {
  const { descricao } = req.body;
  const novaTarefa = { id: tarefas.length + 1, descricao };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

// Função para atualizar uma tarefa existente
const atualizarTarefa = (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;
  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
  if (index !== -1) {
    tarefas[index].descricao = descricao;
    res.json(tarefas[index]);
  } else {
    res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }
};

// Função para excluir uma tarefa
const excluirTarefa = (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
  if (index !== -1) {
    tarefas.splice(index, 1);
    res.json({ mensagem: "Tarefa excluida com sucesso" });
  } else {
    res.json({ mensagem: "Tarefa não encontrada" });
  }
};

module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa,
};
