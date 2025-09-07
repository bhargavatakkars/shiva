import styles from "./credits.module.css";

const credits = [
  {
    role: "DOP",
    project: "XYZ Music Video",
    director_client: "Jane Smith",
    year: "2023",
    awards: ["Best Cinematography, Screen Masters"],
    festival: ["Goa International Film Festival"]
  }
  // Add more credits as needed
];

export default function Credits() {
  return (
    <section className={styles.creditsSection}>
      <h1 className={styles.headline}>Credits</h1>
      <div className={styles.creditsList}>
        {credits.map((credit, idx) => (
          <div className={styles.creditCard} key={idx}>
            <h2>{credit.project}</h2>
            <p><strong>Role:</strong> {credit.role}</p>
            <p><strong>Director/Client:</strong> {credit.director_client}</p>
            <p><strong>Year:</strong> {credit.year}</p>
            <p><strong>Awards:</strong> {credit.awards.join(", ")}</p>
            <p><strong>Festival:</strong> {credit.festival.join(", ")}</p>
          </div>
        ))}
      </div>
      <a href="/Protfolio-Try_compressed.pdf" className={styles.resumeBtn} download>Download Resume PDF</a>
    </section>
  );
}
