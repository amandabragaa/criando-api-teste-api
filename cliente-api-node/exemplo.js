const {
  obterTarefas,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa,
} = require("./cliente");

async function executarExemplos() {
  // Exemplo de obter tarefas
  console.log("Listando tarefas...");
  const tarefas = await obterTarefas();
  console.log(tarefas);

  // Exemplo de criar tarefa
  console.log("Criando uma nova tarefa...");
  const novaTarefa = await criarTarefa("Estudar Node,js");
  console.log(novaTarefa);

  // Exemplo de atualizar tarefa
  console.log("Atualizando tarefa...");
  const tarefaAtualizada = await atualizarTarefa(
    novaTarefa.id,
    "Estudar Node.js e Express.js",
  );
  console.log(tarefaAtualizada);

  // Exemplo de excluir tarefa
  console.log("Excluindo uma tarefa...");
  const deletarTarefa = await excluirTarefa(novaTarefa.id);
  console.log(deletarTarefa);
}

executarExemplos();
