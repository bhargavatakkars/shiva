import styles from "./testimonials.module.css";

const testimonials = [
  {
    name: "A. Kumar",
    role: "Director, Miss Perfect",
    quote: "Shiva's eye for detail and story-driven cinematography elevated our project beyond expectations."
  },
  {
    name: "Priya S.",
    role: "Producer, XYZ Records",
    quote: "His color grading and editing skills are world-class. Highly recommended!"
  },
  {
    name: "Ravi T.",
    role: "Music Video Client",
    quote: "Professional, creative, and always delivers on time."
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <h1 className={styles.headline}>Testimonials</h1>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, idx) => (
          <div className={styles.testimonialCard} key={idx}>
            <blockquote>“{t.quote}”</blockquote>
            <p className={styles.author}>— {t.name}, <span>{t.role}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}
