import TitleCard from '../TitleCard'
import styles from './Abilities.module.css'

export default function Abilities({ t, groups }) {
  return (
    <section id="abilities" className={styles.section}>
      <div className={styles.wrapper}>
        <TitleCard label={t.abilitiesLabel} title={t.abilitiesTitle} />
        <div className={styles.grid}>
          {groups.map((group) => (
            <div key={group.label}>
              <p className={styles.groupLabel}>{group.label}</p>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}