import Link from "next/link";
import styles from "./page.module.css";

export default function LaboratoriosPage() {
  return (
    <main className={styles.sectionPage}>
      <h1 className={styles.sectionTitle}>🔬 Laboratorios</h1>
      <Link href="/" className={styles.backButton}>← Volver al inicio</Link>
      <p className={styles.sectionDescription}>
        Experimentos prácticos que demuestran conocimientos técnicos aplicados en distintas áreas.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2>Laboratorio de Visión por Computadora</h2>
          <p>Aplicación de filtros anisotrópicos y entrenamiento de una red neuronal U-Net para segmentación de imágenes.</p>
        </div>
        <div className={styles.card}>
          <h2>Laboratorio de PLN</h2>
          <p>Construcción de modelos n-grama con distintas técnicas de suavizado como Laplace, interpolación y Kneser-Ney.</p>
        </div>
        <div className={styles.card}>
          <h2>Laboratorio de RL</h2>
          <p>Simulación de un entorno 3x3 y resolución usando k-armed bandits y política epsilon-greedy.</p>
        </div>
      </div>
    </main>
  );
}
