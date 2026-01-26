import styles from "./FormationCard.module.css";

function FormationCard({ title, location, duration, startDate, endDate }) {
	return (
		<div className={styles.formationCard}>
			<h2>{title}</h2>
			<p>{location}</p>
			{duration && (
				<p className="durationTag">Duración: {duration} hs</p>
			)}
			<p>
				{startDate} - {endDate}{" "}
			</p>
		</div>
	);
}
export default FormationCard;
