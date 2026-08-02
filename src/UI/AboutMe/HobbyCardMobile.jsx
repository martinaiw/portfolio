import { useState } from 'react'
import styles from './HobbyCardMobile.module.css'

export default function HobbyCardMobile({ hobby, lang }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.card} onClick={() => setOpen((o) => !o)}>
      <img src={hobby.img} alt={hobby.alt[lang]} className={styles.image} />
      <div className={styles.overlay}>
        <span className={styles.title}>{hobby.title[lang]}</span>
        {open && <p className={styles.desc}>{hobby.desc[lang]}</p>}
      </div>
    </div>
  )
}