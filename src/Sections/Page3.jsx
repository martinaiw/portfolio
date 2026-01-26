import Abilities from "../UI/Abilities";
import Contact from "../UI/Contact";
import Languages from "../UI/Languages";
import styles from "./Page3.module.css";

function Page3() {
	return (
		<section id="page3" className={styles.page3Section}>
			<Abilities></Abilities>
			<Languages></Languages>
			<Contact></Contact>
		</section>
	);
}
export default Page3;
