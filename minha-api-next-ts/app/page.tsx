import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h1>Bem-vindo!</h1>
      <Link href="/tarefas">Ver minhas tarefas</Link>
    </main>
  );
}
