const {
  obterUsuario,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
} = require("./usuarios");

async function executarExemplos() {
  // Exemplo de obter usuarios
  console.log("Listando usuarios...");
  const usuarios = await obterUsuario();
  console.log(usuarios);

  // Exemplo de criar usuario
  console.log("Criando um novo usuario...");
  const novoUsuario = await criarUsuario("Amanda");
  console.log(novoUsuario);

  // Exemplo de atualizar usuario
  console.log("Atualizando usuario...");
  const usuarioAtualizado = await atualizarUsuario(novoUsuario.id, "Lucas");
  console.log(usuarioAtualizado);

  // Exemplo de excluir usuario
  console.log("Excluindo um usuario...");
  const deletarUsuario = await excluirUsuario(novoUsuario.id);
  console.log(deletarUsuario);
}

executarExemplos();
