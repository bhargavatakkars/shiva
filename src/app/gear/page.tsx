import styles from "./gear.module.css";

const gearList = [
  "Sony FX3",
  "RED Raptor",
  "ARRI M-Series",
  "DaVinci Resolve"
];

export default function Gear() {
  return (
    <section className={styles.gearSection}>
      <h1 className={styles.headline}>Gear List</h1>
      <ul className={styles.gearList}>
        {gearList.map((item, idx) => (
          <li key={idx} className={styles.gearItem}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
