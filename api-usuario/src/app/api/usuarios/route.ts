import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  return NextResponse.json(db.nome);
}

export async function POST(request: NextRequest) {
  const { nome }: { nome: string } = await request.json();

  if (!nome || nome.trim() === "") {
    return NextResponse.json(
      { message: "Nome é obrigatório" },
      { status: 400 },
    );
  }

  const novoUsuario = { id: db.nextId++, nome };
  db.nome.push(novoUsuario);
  return NextResponse.json(novoUsuario);
}
