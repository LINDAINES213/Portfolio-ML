// "use client" solo si planeas añadir interactividad
"use client";
import styles from "./page.module.css";
import Link from "next/link";

// For images use the basePath from next.config.ts for GitHub Pages deployment
// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function Home() {
  return (
    <section className={styles.landing}>
      <h1>🎓 Nuestro portafolio</h1>
      <p>Selecciona una sección para explorar:</p>
      <div className={styles.sections}>
        <Link href="/proyectos" className={styles.sectionCard}>📁 Proyectos</Link>
        <Link href="/laboratorios" className={styles.sectionCard}>🧪 Laboratorios</Link>
        <Link href="/casos-de-estudio" className={styles.sectionCard}>📚 Casos de Estudio</Link>
        <Link href="/talleres" className={styles.sectionCard}>🛠️ Talleres</Link>
      </div>
    </section>
  );
}
