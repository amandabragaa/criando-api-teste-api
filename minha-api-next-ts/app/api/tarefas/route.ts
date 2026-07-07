import { NextRequest, NextResponse } from "next/server";
import { db, Tarefa } from "@/lib/db";

export async function GET() {
  return NextResponse.json(db.tarefas);
}

export async function POST(request: NextRequest) {
  const { descricao }: { descricao: string } = await request.json();

  if (!descricao || descricao.trim() === "") {
    return NextResponse.json(
      { message: "Descrição é obrigatória" },
      { status: 400 },
    );
  }

  const novaTarefa: Tarefa = { id: db.nextId++, descricao };
  db.tarefas.push(novaTarefa);
  return NextResponse.json(novaTarefa);
}
