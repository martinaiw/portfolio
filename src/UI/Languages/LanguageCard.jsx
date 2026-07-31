import styles from './LanguageCard.module.css'

export default function LanguageCard({ language, lang }) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <span className={styles.name}>{language.name[lang]}</span>
        <span className={styles.level}>{language.level[lang]}</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${language.pct}%` }} />
      </div>
    </div>
  )
}
