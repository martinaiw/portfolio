import ButtonProjects from "../AboutMe/ButtonProjects";
import styles from "./ProjectsDisplay.module.css";
import React, { useState, useEffect } from "react";
import ProjectsButton from "./ProjectsButton";
import videoFlashcards from "../../assets/videos/flashcards-app.mp4";
import videoSwitcher from "../../assets/videos/ElSwitcher.mp4";
import t1 from "../../assets/images/1.png";
import t2 from "../../assets/images/2.png";
import t3 from "../../assets/images/3.png";
import t4 from "../../assets/images/4.png";
import t5 from "../../assets/images/5.png";

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
	{
		id: 3,
		images: [t1, t2, t3, t4, t5],
		video: null,
		titulo: "Testing QA & Gestión de Calidad: Proyecto Lumbricina",
		linkJ1: "https://nahual.github.io/qc-lumbricina/?v=1",
		linkJ2: "https://nahual.github.io/qc-lumbricina/",
		linkDoc: "/portfolio/files/TpFinal_TestingQA.pdf",
		descripcion:
			"Planificación y ejecución de testing manual sobre el juego Lumbricina. \n Identifiqué discrepancias entre la especificación y el código fuente, documentando casos de prueba y gestionando el backlog de defectos en Azure.",
		hechoCon: "Herramientas: Azure DevOps, documentación en Google Docs",
	},
];

function ProjectsDisplay() {
	const [indice, setIndice] = useState(0);
	const [subIndice, setSubIndice] = useState(0);

	useEffect(() => {
		setSubIndice(0);
	}, [indice]);

	const siguiente = () => setIndice((indice + 1) % proyectos.length);
	const anterior = () =>
		setIndice((indice - 1 + proyectos.length) % proyectos.length);
	const proximaFoto = (e) => {
		e.stopPropagation();
		setSubIndice((prev) => (prev + 1) % proyectos[indice].images.length);
	};
	const anteriorFoto = (e) => {
		e.stopPropagation();
		setSubIndice(
			(prev) =>
				(prev - 1 + proyectos[indice].images.length) %
				proyectos[indice].images.length
		);
	};

	const proyectoActual = proyectos[indice];
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
					<h3>{proyectoActual.titulo}</h3>

					<div className={styles.projectsButton}>
						{proyectoActual.linkGH && (
							<ProjectsButton title="GitHub" link={proyectoActual.linkGH} />
						)}
						{proyectoActual.link && (
							<ProjectsButton title="Demo en vivo" link={proyectoActual.link} />
						)}
						{proyectoActual.linkJ1 && (
							<ProjectsButton
								title="Ver Juego V1"
								link={proyectoActual.linkJ1}
							/>
						)}
						{proyectoActual.linkJ2 && (
							<ProjectsButton
								title="Ver Juego Final"
								link={proyectoActual.linkJ2}
							/>
						)}
						{proyectoActual.linkDoc && (
							<ProjectsButton
								title="Ver Informe Técnico"
								link={proyectoActual.linkDoc}
							/>
						)}
					</div>

					<p className={styles.projectsButtonP}>
						{proyectoActual.descripcion}
						{"\n\n"}
						<strong>{proyectoActual.hechoCon}</strong>
					</p>
				</div>

				<div className={styles.mediaContainer}>
					{proyectoActual.video ? (
						<video
							src={proyectoActual.video}
							autoPlay
							loop
							muted
							playsInline
							disablePictureInPicture
							onContextMenu={(e) => e.preventDefault()}
						>
							Tu navegador no soporta videos.
						</video>
					) : (
						<div className={styles.carouselWrapper}>
							<img
								src={proyectoActual.images[subIndice]}
								alt={`Captura ${subIndice}`}
								className={styles.carouselImg}
							/>
							{/* Controles del carrusel interno */}
							<div className={styles.carouselControls}>
								<button onClick={anteriorFoto}>❮</button>
								<span>
									{subIndice + 1} / {proyectoActual.images.length}
								</span>
								<button onClick={proximaFoto}>❯</button>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className={styles.displayButton}>
				<ButtonProjects direction="right" onClick={siguiente} />
			</div>
		</div>
	);
}

export default ProjectsDisplay;
