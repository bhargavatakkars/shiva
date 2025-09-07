import styles from "./contact.module.css";

const socials = [
  { platform: "Instagram", url: "https://instagram.com/shiv_thedop" },
  { platform: "Vimeo", url: "https://vimeo.com/shiv_thedop" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/shiv_thedop" }
];

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.headline}>Contact</h1>
      <form className={styles.contactForm}>
        <input type="email" placeholder="Your Email" required className={styles.input} />
        <textarea placeholder="Your Message" required className={styles.textarea}></textarea>
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
      <div className={styles.socials}>
        <h2>Connect on Socials</h2>
        <ul>
          {socials.map((social, idx) => (
            <li key={idx}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">{social.platform}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.email}>Email: <a href="mailto:shivaprakash829@gmail.com">shivaprakash829@gmail.com</a></p>
    </section>
  );
}
