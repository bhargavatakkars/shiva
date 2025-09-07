import styles from "./reel.module.css";

export default function Reel() {
  return (
    <div className={styles.reelContainer}>
      <h1 className={styles.reelHeadline}>Showreel</h1>
      <div className={styles.reelGrid}>
        <div className={styles.reelItem}>
          <h2>Narrative Reel</h2>
          <iframe src="https://player.vimeo.com/video/76979871" width="100%" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Narrative Reel"></iframe>
        </div>
        <div className={styles.reelItem}>
          <h2>Commercial Reel</h2>
          <iframe src="https://www.youtube.com/embed/2OEL4P1Rz04" width="100%" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Commercial Reel"></iframe>
        </div>
        <div className={styles.reelItem}>
          <h2>Music Reel</h2>
          <iframe src="https://player.vimeo.com/video/357274789" width="100%" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Music Reel"></iframe>
        </div>
      </div>
    </div>
  );
}
