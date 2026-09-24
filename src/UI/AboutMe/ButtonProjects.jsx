import styles from './ButtonProjects.module.css'

export default function ButtonProjects({ label, onClick, variant = 'primary', direction }) {
  // if `direction` is provided, render a circular arrow button
  if (direction) {
    const arrow = direction === 'left' ? '❮' : '❯'
    return (
      <button type="button" aria-label={`scroll-${direction}`} className={styles.circle} onClick={onClick}>
        {arrow}
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
