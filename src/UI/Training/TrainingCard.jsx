import CertificateButton from './CertificateButton'
import styles from './TrainingCard.module.css'

export default function TrainingCard({ item, certLabel }) {
  return (
    <div className={styles.card}>
      <div className={styles.yearCol}>
        <p className={styles.year}>{item.year}</p>
      </div>
      <div className={styles.contentCol}>
        <h3 className={styles.degree}>{item.degree}</h3>
        <p className={styles.institution}>{item.institution}</p>
        <p className={styles.note}>{item.note}</p>
        {item.cert && <CertificateButton href={item.cert} label={certLabel} />}
      </div>
    </div>
  )
}
