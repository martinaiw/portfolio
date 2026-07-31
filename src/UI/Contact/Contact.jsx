import { useState } from 'react'
import TitleCard from '../TitleCard'
import ContactButton from './ContactButton'
import styles from './Contact.module.css'

const CONTACT_INFO = [
  { label: 'Email', value: 'martinaiwulbrandt@gmail.com' },
  { label: 'GitHub', value: 'github.com/martinaiw' },
  { label: 'LinkedIn', value: 'in/martina-ibanez-wulbrandt' },
]

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const updateField = (field) => (e) => setForm((s) => ({ ...s, [field]: e.target.value }))

  return (
    <section id="contact" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <div>
          <TitleCard label={t.contactLabel} title={t.contactTitle} />
          <p className={styles.sub}>{t.contactSub}</p>
          <div className={styles.infoList}>
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className={styles.infoRow}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div className={styles.sentBox}>
              <span className={styles.sentIcon}>✓</span>
              <h3 className={styles.sentTitle}>{t.sentTitle}</h3>
              <p className={styles.sentSub}>{t.sentSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>{t.fields.name}</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.namePh}
                  value={form.name}
                  onChange={updateField('name')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>{t.fields.email}</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.emailPh}
                  value={form.email}
                  onChange={updateField('email')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>{t.fields.message}</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t.messagePh}
                  value={form.message}
                  onChange={updateField('message')}
                  className={styles.textarea}
                />
              </div>
              <ContactButton label={t.send} type="submit" />
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
