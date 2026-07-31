import styles from './BGCircles.module.css'

export default function BGCircles() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.circleLarge} />
      <div className={styles.circleSmall} />
      <div className={styles.glow} />
    </div>
  )
}
