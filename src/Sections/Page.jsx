import styles from "./Page.module.css";
import AboutMe from "../UI/AboutMe/AboutMe.jsx";
import Projects from "../UI/Projects/Projects.jsx";
import Training from "../UI/Training/Training.jsx";
import Abilities from "../UI/Abilities/Abilities.jsx";
import Languages from "../UI/Languages/Languages.jsx";
import Contact from "../UI/Contact/Contact.jsx";
import Experience from "../UI/Experience/Experience.jsx";

function Page() {
	return (
		<div className={styles.sectionsContainer}>
			<section className={styles.pageSection1}>
				<AboutMe />
				<Projects />
			</section>

			<section id="experience">
				<Experience />
			</section>

			<section id="training" className={styles.pageSection2}>
				<Training />
			</section>

			<section id="abilities" className="pageSection2">
				<Abilities />
			</section>

			<section id="languages" className="pageSection3">
				<Languages />
			</section>

			<section id="contact" className="pageSection4">
				<Contact />
			</section>
		</div>
	);
}
export default Page;
