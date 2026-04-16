import styles from "./TrainingCard.module.css";

function TrainingCard({ title, location, duration, startDate, endDate }) {
	return (
		<div className={styles.trainingCard}>
			<h2>{title}</h2>
			<h3>{location}</h3>
			{duration && (
				<p className="durationTag">Duración: {duration} hs</p>
			)}
			<p>
				{startDate} - {endDate}{" "}
			</p>
		</div>
	);
}
export default TrainingCard;
