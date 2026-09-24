import styles from './ProjectsButton.module.css'

export default function ProjectsButton({ label, title, link, className }) {
  const extraClass = className ? `${styles.linkButton} ${styles[className] || ''}` : styles.linkButton

  if (title && link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={extraClass}>
        {title}
      </a>
    )
  }

  return <span className={styles.tag}>{label}</span>
}