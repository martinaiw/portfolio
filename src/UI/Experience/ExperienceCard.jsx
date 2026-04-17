import styles from "./ExperienceCard.module.css";

function ExperienceCard({ title, location, startDate, endDate, description }) {
	return (
		<>
			<div className={styles.experienceCard}>
				<h2>{title}</h2>
				<h3>{location}</h3>
				<p>
					{startDate} - {endDate}{" "}
				</p>
				<div className={styles.experienceDescription}>
					<span></span>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
}

export default ExperienceCard;
