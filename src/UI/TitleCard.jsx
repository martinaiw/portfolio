import styles from "./TitleCard.module.css";

function TitleCard({ title }) {
	return (
		<div className={styles.titleCardContainer}>
			<h2>{title}</h2>
		</div>
	);
}

export default TitleCard;
