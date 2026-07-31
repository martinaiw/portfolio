import styles from './CertificateButton.module.css'

export default function CertificateButton({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 10L10 2M10 2H5M10 2v5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  )
}
