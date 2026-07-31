import TitleCard from '../TitleCard'
import LanguageCard from './LanguageCard'
import styles from './Languages.module.css'

export default function Languages({ t, lang, languages }) {
  return (
    <section id="languages" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <div>
          <TitleCard label={t.langLabel} title={t.langTitle} />
          <p className={styles.sub}>{t.langSub}</p>
        </div>
        <div className={styles.list}>
          {languages.map((language) => (
            <LanguageCard key={language.name.en} language={language} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
