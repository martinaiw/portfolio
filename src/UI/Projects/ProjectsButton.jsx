import styles from './ProjectsButton.module.css'

export default function ProjectsButton({ label, title, link }) {
  if (title && link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
        {title}
      </a>
    )
  }

  return <span className={styles.tag}>{label}</span>
}