import styles from "./portfolio.module.css";

const projects = [
  {
    title: "XYZ Music Video",
    category: "Cinematography",
    year: "2023",
    thumbnail: "/xyz_mv.jpg",
    video_embed: "https://player.vimeo.com/video/357274789",
    roles: ["Cinematographer", "Colorist"],
    client: "XYZ Records",
    director: "Jane Smith",
    tools: ["Sony FX3", "DaVinci Resolve"],
    description: "Set a new visual standard in South Indian Christian music. Custom HDR workflow."
  }
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section className={styles.portfolioSection}>
      <h1 className={styles.headline}>Portfolio</h1>
      <div className={styles.categories}>
        <span>Cinematography</span>
        <span>Editing</span>
        <span>Color Grading</span>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <div className={styles.projectCard} key={idx}>
            <img src={project.thumbnail} alt={project.title} className={styles.thumbnail} />
            <h2>{project.title}</h2>
            <p className={styles.projectMeta}>{project.category} | {project.year}</p>
            <iframe src={project.video_embed} width="100%" height="220" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title={project.title}></iframe>
            <p>{project.description}</p>
            <div className={styles.projectDetails}>
              <span><strong>Roles:</strong> {project.roles.join(", ")}</span><br/>
              <span><strong>Client:</strong> {project.client}</span><br/>
              <span><strong>Director:</strong> {project.director}</span><br/>
              <span><strong>Tools:</strong> {project.tools.join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
