export interface Usuario {
  id: number;
  nome: string;
}

interface DB {
  nextId: number;
  nome: Usuario[];
}

export const db: DB = {
  nextId: 1,
  nome: [],
};
