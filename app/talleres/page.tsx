import Link from "next/link";
import styles from "./page.module.css";

export default function TalleresPage() {
  return (
    <main className={styles.sectionPage}>
      <h1 className={styles.sectionTitle}>🛠️ Talleres</h1>
      <Link href="/" className={styles.backButton}>← Volver al inicio</Link>

      <p className={styles.sectionDescription}>
        Actividades prácticas orientadas al aprendizaje colaborativo y desarrollo de habilidades técnicas.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2>Taller de Git y GitHub</h2>
          <p>Aprendizaje del flujo de trabajo con ramas, pull requests, y despliegue en GitHub Pages.</p>
        </div>
        <div className={styles.card}>
          <h2>Taller de Diseño de Interfaces</h2>
          <p>Creación de wireframes y prototipos en Figma orientados a usuarios de campo.</p>
        </div>
        <div className={styles.card}>
          <h2>Taller de Machine Learning</h2>
          <p>Implementación de modelos supervisados con scikit-learn para clasificación y regresión.</p>
        </div>
      </div>
    </main>
  );
}
