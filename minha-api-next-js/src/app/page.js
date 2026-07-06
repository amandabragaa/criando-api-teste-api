import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bem-vindo a minha API Next.js</h1>
    </div>
  );
}
