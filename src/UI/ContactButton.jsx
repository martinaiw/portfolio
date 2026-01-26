import styles from "./ContactButton.module.css";
function ContactButton({ title, link, image, isLink = true }) {
	return (
		<div className={styles.contactButtonContainer}>
			<div className={styles.iconWrapper}>
				<img src={image} alt={title} />
			</div>
			<a href={isLink ? link : null} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</div>
	);
}
export default ContactButton;
