import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Params {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const usurario = db.nome.find((usuario) => usuario.id === parseInt(id));
  if (!usurario) {
    return NextResponse.json(
      { message: "Usuário não encontrado" },
      { status: 404 },
    );
  }

  return NextResponse.json(usurario);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const { nome } = await request.json();

  if (!nome || nome.trim() === "") {
    return NextResponse.json(
      { message: "Necessário inserir um nome" },
      { status: 400 },
    );
  }

  const index = db.nome.findIndex((i) => i.id === parseInt(id));
  if (index === -1) {
    return NextResponse.json(
      { message: "Erro ao atualizar usuário" },
      { status: 404 },
    );
  }

  db.nome[index].nome = nome;
  return NextResponse.json(db.nome[index]);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const index = db.nome.findIndex((i) => i.id === parseInt(id));
  if (index === -1) {
    return NextResponse.json({ message: "Usuário não encontrado" });
  }
  db.nome.splice(index, 1);
  return NextResponse.json({ message: "Usuário excluido com sucesso" });
}
