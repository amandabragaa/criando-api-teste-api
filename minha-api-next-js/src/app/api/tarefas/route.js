import { db } from "@/lib/db.js";

export async function GET() {
  return Response.json(db.tarefas);
}

export async function POST(request) {
  const { descricao } = await request.json();
  if (!descricao || descricao.trim() === "") {
    return Response.json(
      { message: "Descrição é obrigatória:" },
      { status: 404 },
    );
  }

  const novaTarefa = { id: db.nextId++, descricao };
  db.tarefas.push(novaTarefa);
  return Response.json(novaTarefa, { status: 201 });
}
