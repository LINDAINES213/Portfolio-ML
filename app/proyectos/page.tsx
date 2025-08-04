import Link from "next/link";
import styles from "./page.module.css"; // Usa el mismo archivo o uno nuevo

export default function ProyectosPage() {
  return (
    <main className={styles.sectionPage}>
      <h1 className={styles.sectionTitle}>📁 Proyectos</h1>
      <Link href="/" className={styles.backButton}>← Volver al inicio</Link>
      <p className={styles.sectionDescription}>Aquí encontrarás los proyectos más relevantes que hemos desarrollado.</p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2>Sistema de Reservas</h2>
          <p>Una plataforma web para reservar vuelos con autenticación, roles y panel de administración.</p>
        </div>
        <div className={styles.card}>
          <h2>Portafolio con Next.js</h2>
          <p>Un sitio personal con CI/CD y despliegue en GitHub Pages. Responsive y moderno.</p>
        </div>
        <div className={styles.card}>
          <h2>Clasificador de Imágenes</h2>
          <p>Modelo de machine learning entrenado con TensorFlow para reconocer objetos en tiempo real.</p>
        </div>
      </div>
    </main>
  );
}
