import styles from "./ContactButton.module.css";

function ContactButton({ title, link, image, isLink = true }) {
    return isLink ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButtonContainer}
        >
            <div className={styles.iconWrapper}>
                <img src={image} alt={title} />
            </div>
            <span>{title}</span>
        </a>
    ) : (
        <div className={`${styles.contactButtonContainer} ${styles.noPointer}`}>
            <div className={styles.iconWrapper}>
                <img src={image} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    );
}

export default ContactButton;