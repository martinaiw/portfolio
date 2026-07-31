import styles from './ButtonProjects.module.css'

export default function ButtonProjects({ label, onClick, variant = 'primary' }) {
  const className = variant === 'primary' ? styles.primary : styles.secondary
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  )
}
