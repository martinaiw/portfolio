import styles from './HobbyCard.module.css'

export default function HobbyCard({ hobby, lang, hovered, onHover, gridColumn, gridRow, height }) {
  const isHovered = hovered === hobby.id

  return (
    <div
      className={styles.card}
      style={{
        gridColumn,
        gridRow,
        height,
        borderColor: isHovered ? 'var(--border-accent)' : 'var(--border)',
      }}
      onMouseEnter={() => onHover(hobby.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={hobby.img}
        alt={hobby.alt[lang]}
        className={styles.image}
        style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
      />

      <div className={styles.titleStrip}>
        <span className={styles.title}>{hobby.title[lang]}</span>
        <span className={styles.icon} style={{ backgroundColor: isHovered ? 'var(--accent-solid)' : 'transparent' }}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path
              d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5v4"
              stroke={isHovered ? '#1e1e1e' : 'var(--accent-solid)'}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className={styles.overlay} style={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? 'auto' : 'none' }}>
        <p className={styles.desc}>{hobby.desc[lang]}</p>
      </div>
    </div>
  )
}