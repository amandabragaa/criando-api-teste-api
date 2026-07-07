export interface Tarefa {
  id: number;
  descricao: string;
}

interface DB {
  tarefas: Tarefa[];
  nextId: number;
}

export const db: DB = {
  tarefas: [],
  nextId: 1,
};
