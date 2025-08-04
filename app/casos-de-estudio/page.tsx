import Link from "next/link";
import styles from "./page.module.css";

export default function CasosDeEstudioPage() {
  return (
    <main className={styles.sectionPage}>
      <h1 className={styles.sectionTitle}>📊 Casos de Estudio</h1>
      <Link href="/" className={styles.backButton}>← Volver al inicio</Link>
      <p className={styles.sectionDescription}>
        Análisis detallado de situaciones reales o simuladas donde se aplicaron soluciones tecnológicas.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2>Fallo en sistema de reservas (AeroAndes)</h2>
          <p>Estudio sobre la implementación fallida de un sistema con enfoque ITIL y lecciones aprendidas.</p>
        </div>
        <div className={styles.card}>
          <h2>Transformación digital en un ingenio</h2>
          <p>Cómo una aplicación móvil ayudó a mejorar la recolección de datos en campo agrícola.</p>
        </div>
        <div className={styles.card}>
          <h2>Automatización de pesaje avícola</h2>
          <p>Desarrollo e integración de un sistema con frontend en React Native y backend en Flask para manejo de granjas.</p>
        </div>
      </div>
    </main>
  );
}
