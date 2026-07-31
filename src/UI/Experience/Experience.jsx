import TitleCard from '../TitleCard'
import ExperienceCard from './ExperienceCard'
import styles from './Experience.module.css'

export default function Experience({ t, experience }) {
  return (
    <section id="experience" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <TitleCard label={t.expLabel} title={t.expTitle} />
        <div className={styles.timeline}>
          <div className={styles.line} />
          <div className={styles.list}>
            {experience.map((item, i) => (
              <ExperienceCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
