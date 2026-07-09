const axios = require("axios");
const URL_BASE = "http://localhost:3000/api";

async function obterUsuario() {
  try {
    const response = await axios.get(`${URL_BASE}/usuarios`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter usuarios:", error);
  }
}

async function criarUsuario(nome) {
  try {
    const response = await axios.post(`${URL_BASE}/usuarios`, { nome });
    return response.data;
  } catch (error) {
    console.error("erro ao criar tarefa:", error);
  }
}

async function atualizarUsuario(id, nome) {
  try {
    const response = await axios.put(`${URL_BASE}/usuarios/${id}`, {
      nome,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar nome:", error);
  }
}

async function excluirUsuario(id) {
  try {
    const response = await axios.delete(`${URL_BASE}/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir usuario:", error);
  }
}
module.exports = {
  obterUsuario,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
