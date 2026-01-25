import AboutMe from "../UI/AboutMe.jsx";
import Projects from "../UI/Projects.jsx";
import styles from "./Page1.module.css";

function Page1() {
	return (
		<section id="page1" className={styles.page1Section}>
			<AboutMe />
			<Projects />
		</section>
	);
}
export default Page1;
