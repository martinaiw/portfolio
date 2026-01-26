import TitleCard from "./TitleCard.jsx";
import LanguageCard from "./LanguageCard.jsx";
import es from "../assets/es.png";
import en from "../assets/en.png";
import styles from "./Languages.module.css";

function Languages() {
	return (
		<>
			<TitleCard title="Idiomas"
				width="341px"
				fontSize="46px"
				align="left"
				paddingLeft="20px"
			></TitleCard>
			<div className={styles.languagesContainer}>
				<LanguageCard
					language="Español"
					proficiency="Nativo"
					image={es}
				></LanguageCard>
				<LanguageCard
					language="Inglés"
					proficiency="Nivel Avanzado / Competencia Profesional"
					image={en}
				></LanguageCard>
			</div>
		</>
	);
}
export default Languages;
