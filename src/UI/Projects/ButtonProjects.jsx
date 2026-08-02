import styles from './ButtonProjects.module.css'

export default function ButtonProjects({ label, onClick, variant = 'primary', direction }) {
  if (direction) {
    return (
      <button
        type="button"
        className={styles.arrow}
        onClick={onClick}
        aria-label={direction === 'left' ? 'Previous project' : 'Next project'}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {direction === 'left' ? (
            <path d="M14 4L6 11L14 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M8 4L16 11L8 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </button>
    )
  }

  const className = variant === 'primary' ? styles.primary : styles.secondary
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  )
}