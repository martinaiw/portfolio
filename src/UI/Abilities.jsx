import TitleCard from "./TitleCard";
import styles from "./Abilities.module.css";
function Abilities() {
	return (
		<>
			<TitleCard
				title="Mis habilidades"
				width="556px"
				fontSize="46px"
				align="left"
				paddingLeft="20px"
			></TitleCard>
			<div className={styles.abilitiesContainer}>
				<ul className={styles.abilitiesText}>
					<li>
						<strong>Lenguajes de programación:</strong> C, C++, Python,
						JavaScript, Haskell.
					</li>
					<li>
						<strong>Desarrollo Web:</strong> React, HTML, CSS.
					</li>
					<li>
						<strong>Bases de Datos:</strong> SQL, NoSQL (MongoDB).
					</li>

					<li>
						<strong>Control de versiones:</strong> Git, GitHub, Bitbucket.
					</li>
					<li>
						<strong>Gestión de proyectos y QA: </strong> Jira, Azure DevOps
						(Reporte de bugs).
					</li>
				</ul>
			</div>
		</>
	);
}
export default Abilities;
