import styles from './TitleCard.module.css'

export default function TitleCard({ label, title }) {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
    </>
  )
}
