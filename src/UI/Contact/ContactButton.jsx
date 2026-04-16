import styles from "./ContactButton.module.css";

function ContactButton({ title, link, image, isLink = true }) {
    return (
        <div className={`${styles.contactButtonContainer} ${!isLink ? styles.noPointer : ""}`}>
            <div className={styles.iconWrapper}>
                <img src={image} alt={title} />
            </div>
            {isLink ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            ) : (
                <span>{title}</span>
            )}
        </div>
    );
}
export default ContactButton;