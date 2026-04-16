import styles from "./ProjectsButton.module.css";

function ProjectsButton({ title, link }) {
	if (!link) return null;
	return (
		<div className={styles.projectsButtonContainer}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</div>
	);
}
export default ProjectsButton;
