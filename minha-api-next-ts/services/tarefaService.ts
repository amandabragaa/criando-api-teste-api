import { Tarefa } from "@/lib/db";

const URL_BASE = "http://localhost:3000/api";

export async function obterTarefas(): Promise<Tarefa[]> {
  const response = await fetch(`${URL_BASE}/tarefas`);
  if (!response.ok) throw new Error("Erro ao obter tarefas");
  return response.json();
}

export async function criarTarefa(descricao: string): Promise<Tarefa> {
  const response = await fetch(`${URL_BASE}/tarefas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao }),
  });
  if (!response.ok) throw new Error("Erro ao criar tarefa");
  return response.json();
}

export async function atualizarTarefa(
  id: number,
  descricao: string,
): Promise<Tarefa> {
  const response = await fetch(`${URL_BASE}/tarefas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao }),
  });

  if (!response.ok) throw new Error("Erro ao atualizar tarefa");
  return response.json();
}

export async function deletarTarefa(id: number): Promise<{ messege: string }> {
  const response = await fetch(`${URL_BASE}/tarefas/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Erro ao deletar tarefa");
  return response.json();
}
