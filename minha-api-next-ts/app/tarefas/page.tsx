"use client";

import { useState, useEffect, SubmitEvent } from "react";
import { Tarefa } from "@/lib/db";
import {
  obterTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
} from "@/services/tarefaService";

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaDescricao, setNovaDescricao] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string>("");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [descricaoEdicao, setDescricaoEdicao] = useState<string>("");

  async function carregarTarefas() {
    try {
      setCarregando(true);
      const dados = await obterTarefas();
      setTarefas(dados);
    } catch (e) {
      setErro("Erro ao carregar tarefas");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function handleCriar(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!novaDescricao.trim()) return;

    try {
      await criarTarefa(novaDescricao);
      setNovaDescricao("");
      carregarTarefas();
    } catch (e) {
      setErro("Erro ao criar tarefa");
    }
  }

  async function handleExcluir(id: number) {
    try {
      await deletarTarefa(id);
      carregarTarefas();
    } catch (e) {
      setErro("Erro ao excluir");
    }
  }

  function iniciarEdicao(tarefa: Tarefa) {
    setEditandoId(tarefa.id);
    setDescricaoEdicao(tarefa.descricao);
  }

  async function handleSalvaEdicao(id: number) {
    try {
      await atualizarTarefa(id, descricaoEdicao);
      setEditandoId(null);
      carregarTarefas();
    } catch (e) {
      setErro("Erro ao atualizaar tarefa");
    }
  }

  return (
    <main
      style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h1>Minhas Tarefas</h1>

      <form onSubmit={handleCriar}>
        <input
          type="text"
          placeholder="Nova Tarefa..."
          value={novaDescricao}
          onChange={(e) => setNovaDescricao(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Adicionar</button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {carregando && <p>Carregando...</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderBottom: "1px solid ddd",
            }}
          >
            {editandoId === tarefa.id ? (
              <>
                <input
                  value={descricaoEdicao}
                  onChange={(e) => setDescricaoEdicao(e.target.value)}
                  style={{
                    flex: 1,
                    marginRight: 8,
                  }}
                />
                <button onClick={() => handleSalvaEdicao(tarefa.id)}>
                  Salvar
                </button>
              </>
            ) : (
              <>
                <span>{tarefa.descricao}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => iniciarEdicao(tarefa)}>Editar</button>
                  <button onClick={() => handleExcluir(tarefa.id)}>
                    Excluir
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
