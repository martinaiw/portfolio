import styles from "./Experience.module.css";
import TitleCard from "../TitleCard";
import ExperienceCard from "./ExperienceCard.jsx";

function Experience() {
	return (
		<>
			<TitleCard
				title="Experiencia"
				width="450px"
				fontSize="46px"
				align="left"
			/>
			<div className={styles.experienceContainer}>
				<ExperienceCard
					title="GAOTek Inc."
					location="Pasante en el puesto de Web Uploading"
					startDate="Enero 2026"
					endDate="Actualidad"
					description={
						<p>
							Durante esta pasantía, estoy adquiriendo nuevos conocimientos y
							mejorando mis habilidades en desarrollo web, incluyendo el uso de
							WordPress, JavaScript, HTML, CSS y React, además de mejorar mis
							capacidades de trabajo en equipo.
						</p>
					}
				/>
			</div>
		</>
	);
}

export default Experience;
