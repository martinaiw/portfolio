import ProjectsButton from './ProjectsButton'
import styles from './ProjectsDisplay.module.css'

export default function ProjectsDisplay({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.meta}>{project.id}</span>
        <span className={styles.meta}>{project.year}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <ProjectsButton key={tag} label={tag} />
        ))}
      </div>
    </div>
  )
}
