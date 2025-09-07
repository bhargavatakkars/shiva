
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroVideo}>
        <iframe
          src="https://player.vimeo.com/video/76979871?autoplay=1&muted=1&loop=1&background=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Cinematography Reel"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.5 }}
        ></iframe>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Y.S.S. Shiva Prakash – Cinematographer, Editor, Colorist
        </h1>
        <div className={styles.ctaGroup}>
          <a href="/reel" className={styles.ctaPrimary}>Watch Reel</a>
          <a href="/portfolio" className={styles.ctaSecondary}>View Portfolio</a>
          <a href="/contact" className={styles.ctaSecondary}>Contact</a>
        </div>
      </div>
    </div>
  );
}
