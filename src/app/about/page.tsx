import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.headline}>About Y.S.S. Shiva Prakash</h1>
      <p className={styles.bio}>
        Cinematographer, Editor & Colorist based in Hyderabad with 7 years' experience. Winner of Best DI at Goa International Film Festival 2023.
      </p>
      <div className={styles.specializations}>
        <h2>Specializations</h2>
        <ul>
          <li>Story-focused Cinematography</li>
          <li>Advanced Lighting</li>
          <li>Color Grading</li>
        </ul>
      </div>
      <div className={styles.highlights}>
        <h2>Highlights</h2>
        <ul>
          <li>Assistant DOP, Miss Perfect (Disney+ Hotstar)</li>
          <li>Best Cinematographer, IFH Contest</li>
          <li>50+ Music Videos</li>
        </ul>
      </div>
      <a href="/Protfolio-Try_compressed.pdf" className={styles.resumeBtn} download>Download Resume</a>
    </section>
  );
}
