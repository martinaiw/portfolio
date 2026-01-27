import ButtonProjects from "./ButtonProjects";
import styles from "./ProjectsDisplay.module.css";
import React, { useState } from "react";
import ProjectsButton from "./ProjectsButton";
import videoFlashcards from "../assets/videos/flashcards-app.mp4";
import videoSwitcher from "../assets/videos/ElSwitcher.mp4";

const proyectos = [
	{
		id: 1,
		video: videoFlashcards,
		titulo: "Flashcards App",
		linkGH: "https://github.com/martinaiw/flashcards-app",
		link: "https://flashcards-app-opal.vercel.app/",
		descripcion:
			" Mini app para estudiar el teórico de una materia simulando flashcards.",
		hechoCon: "Hecha con Vite + React",
	},
	{
		id: 2,
		video: videoSwitcher,
		titulo: "El Switcher",
		linkGH: "https://github.com/LavajabonSinRopa",
		link: "",
		descripcion:
			"Proyecto grupal de la materia Ingeniería del Software. \n Juego de mesa físico repensado en formato digital.",
		hechoCon: "Hecho con React + Python",
	},
];

function ProjectsDisplay() {
	const [indice, setIndice] = useState(0);

	const siguiente = () => setIndice((indice + 1) % proyectos.length);
	const anterior = () =>
		setIndice((indice - 1 + proyectos.length) % proyectos.length);

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.displayButton}>
				<ButtonProjects direction="left" onClick={anterior} />
			</div>

			<div
				className={`${styles.projectDisplay} ${styles.fadeAnim}`}
				key={indice}
			>
				<div className={styles.projectInfo}>
					<h3>{proyectos[indice].titulo}</h3>
					<div className={styles.projectsButton}>
						<ProjectsButton title="GitHub" link={proyectos[indice].linkGH} />
						{proyectos[indice].link && (
							<ProjectsButton
								title="Demo en vivo"
								link={proyectos[indice].link}
							/>
						)}
					</div>
					<p className={styles.projectsButtonP}>
						{proyectos[indice].descripcion}
						{"\n\n"}
						<strong>{proyectos[indice].hechoCon}</strong>
					</p>
				</div>

				<video
					src={proyectos[indice].video}
					autoPlay
					loop
					muted
					playsInline
					disablePictureInPicture
					onContextMenu={(e) => e.preventDefault()}
				>
					Tu navegador no soporta videos.
				</video>
			</div>

			<div className={styles.displayButton}>
				<ButtonProjects direction="right" onClick={siguiente} />
			</div>
		</div>
	);
}

export default ProjectsDisplay;
