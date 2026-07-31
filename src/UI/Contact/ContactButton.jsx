import styles from './ContactButton.module.css'

export default function ContactButton({ label, type = 'submit', onClick }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  )
}
