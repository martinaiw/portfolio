import styles from './CirclePicture.module.css'

export default function CirclePicture({ src, alt = 'Profile picture', initials = 'AJ' }) {
  return (
    <div className={styles.circle}>
      {src ? <img src={src} alt={alt} className={styles.image} /> : <span className={styles.initials}>{initials}</span>}
    </div>
  )
}
