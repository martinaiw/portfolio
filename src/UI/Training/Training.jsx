import TitleCard from '../TitleCard'
import TrainingCard from './TrainingCard'
import styles from './Training.module.css'

export default function Training({ t, formation }) {
  return (
    <section id="formation" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <TitleCard label={t.formLabel} title={t.formTitle} />
        <div className={styles.list}>
          {formation.map((item, i) => (
            <TrainingCard key={i} item={item} certLabel={t.viewCert} />
          ))}
        </div>
      </div>
    </section>
  )
}
