import styles from './ProjectsButton.module.css'

export default function ProjectsButton({ label }) {
  return <span className={styles.tag}>{label}</span>
}
