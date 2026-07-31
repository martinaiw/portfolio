import styles from './ExperienceCard.module.css'

export default function ExperienceCard({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.dot} />
      <div className={styles.header}>
        <h3 className={styles.role}>{item.role}</h3>
        <span className={styles.period}>{item.period}</span>
      </div>
      <p className={styles.company}>{item.company}</p>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  )
}
