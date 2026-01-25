import React, { useState } from "react";
import styles from "./Projects.module.css";
import TitleCard from "./TitleCard";
import ButtonProjects from "./ButtonProjects";

function Projects() {
	const [indice, setIndice] = useState(0);

	const proyectos = [
		{ id: 1, imagen: "proyecto1.png", titulo: "Proyecto 1" },
		{ id: 2, imagen: "proyecto2.png", titulo: "Proyecto 2" },
	];

	const siguiente = () => setIndice((indice + 1) % proyectos.length);

	const anterior = () =>
		setIndice((indice - 1 + proyectos.length) % proyectos.length);

	return (
		<>
			<section id="projects" className={styles.projectsContainer}>
				<TitleCard
					title="Mis proyectos"
					width="532px"
					fontSize="44px"
					align="center"
				/>

				<div className={styles.sliderContainer}>
					<div className={styles.displayButton}>
						<ButtonProjects direction="left" onClick={anterior} />
					</div>
					<div className={styles.projectDisplay}>
						{/* imagenes del proyecto */}
						<h3>{ proyectos[indice].titulo}</h3>
						<img
							src={proyectos[indice].imagen}
							alt={proyectos[indice].titulo}
						/>
					</div>

					<div className={styles.displayButton}>
						<ButtonProjects direction="right" onClick={siguiente} />
					</div>
				</div>
			</section>
		</>
	);
}
export default Projects;
