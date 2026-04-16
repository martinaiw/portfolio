import styles from "./LanguageCard.module.css";

function LanguageCard({ language, proficiency, image }) {
	return (
		<div className={styles.languageCard}>
			<img src={image} alt={`${language} flag`} />
			<p>
				<strong>{language}:</strong> {proficiency}
			</p>
		</div>
	);
}
export default LanguageCard;
