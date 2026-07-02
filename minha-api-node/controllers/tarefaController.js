let tarefas = [];
let nextId = 1;

const listarTarefas = (req, res) => {
  res.json(tarefas);
};

const buscarTarefas = (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((tarefa) => tarefa.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  res.json(tarefa);
};

const criarTarefa = (req, res) => {
  const { descricao } = req.body;

  if (!descricao || descricao.trim() === "") {
    return res.status(400).json({ message: "Descrição é obrigatória" });
  }

  const novaTarefa = { id: nextId++, descricao };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

const atualizarTarefa = (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;

  if (!descricao || descricao.trim() === "") {
    return res.status(400).json({ message: "Descrição é obrigatória" });
  }

  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  tarefas[index].descricao = descricao;
  res.json(tarefas[index]);
};

const deletarTarefa = (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));

  if (index !== -1) {
    tarefas.splice(index, 1);
    res.json({ message: "Tarefa deletada com sucesso" });
  } else {
    res.status(404).json({ message: "Tarefa não encontrada" });
  }
};

module.exports = {
  listarTarefas,
  buscarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
