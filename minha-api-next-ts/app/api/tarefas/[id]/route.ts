import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Params {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const tarefa = db.tarefas.find((tarefa) => tarefa.id === parseInt(id));
  if (!tarefa) {
    return NextResponse.json(
      { message: "Tarefa não encontrada!" },
      { status: 404 },
    );
  }

  return NextResponse.json(tarefa);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const { descricao }: { descricao: string } = await request.json();

  if (!descricao || descricao.trim() === "") {
    return NextResponse.json(
      { message: "Descrição é obrigatória!" },
      { status: 400 },
    );
  }

  const index = db.tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json(
      { message: "Tarefa não encontrada!" },
      { status: 404 },
    );
  }

  db.tarefas[index].descricao = descricao;
  return NextResponse.json(db.tarefas[index]);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const index = db.tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json(
      { message: "Tarefa não encontrada!" },
      { status: 404 },
    );
  }
  db.tarefas.splice(index, 1);
  return NextResponse.json({ message: "Tarefa excluida com sucesso!" });
}
