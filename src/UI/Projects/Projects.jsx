import styles from "./Projects.module.css";
import TitleCard from "../TitleCard";
import ProjectsDisplay from "./ProjectsDisplay";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Projects() {
	const isMobile = useMediaQuery(1000);
	return (
		<>
			<section id="projects" className={styles.projectsContainer}>
				<div className={styles.titleCard}>
					<TitleCard
						title="Mis proyectos"
						width={isMobile ? "100%" : "532px"}
						fontSize={isMobile ? "46px" : "44px"}
						align={isMobile ? "left" : "center"}
					/>
				</div>
				<div className={styles.projectsDisplay}>
					<ProjectsDisplay />
				</div>
			</section>
		</>
	);
}
export default Projects;
