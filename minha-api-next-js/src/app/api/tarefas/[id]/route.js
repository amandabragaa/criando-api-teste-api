import { db } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const tarefa = db.tarefas.find((tarefa) => tarefa.id === parseInt(id));
  if (!tarefa) {
    return Response.json({ message: "Tarefa não encontrada" }, { status: 404 });
  }

  return Response.json(tarefa);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const { descricao } = await request.json();

  if (!descricao || descricao.trim() === "") {
    return Response.json(
      { message: "Tarefa não encontrada:" },
      { status: 400 },
    );
  }
  const index = db.tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
  if (index === -1) {
    return Response.json(
      { message: "Tarefa não encontrada:" },
      { status: 404 },
    );
  }

  db.tarefas[index].descricao = descricao;
  return Response.json(db.tarefas[index]);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = db.tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));

  if (index === -1) {
    return Response.json({ message: "Tarefa não encontrada" }, { status: 404 });
  }

  db.tarefas.splice(index, 1);
  return Response.json({ message: "Tarefa excluida com sucesso!" });
}
