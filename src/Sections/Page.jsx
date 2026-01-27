import AboutMe from "../UI/AboutMe.jsx";
import Projects from "../UI/Projects.jsx";
import styles from "./Page.module.css";
import Formation from "../UI/Formation.jsx";
import Abilities from "../UI/Abilities.jsx";
import Languages from "../UI/Languages.jsx";
import Contact from "../UI/Contact.jsx";

function Page() {
	return (
		<div className={styles.sectionsContainer}>
			<section className={styles.pageSection1}>
				<AboutMe />
				<Projects />
			</section>
			<section id="formation" className={styles.pageSection2}>
				<Formation />
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
