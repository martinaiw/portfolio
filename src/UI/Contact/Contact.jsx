import ContactButton from "./ContactButton";
import gmail from "../../assets/images/gmail.png";
import GH from "../../assets/images/GH.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import CV from "../../assets/images/CV.png";
import TitleCard from "../TitleCard";
import styles from "./Contact.module.css";

function Contact() {
	return (
		<>
			<TitleCard
				title="Información de contacto"
				width="829px"
				fontSize="46px"
				align="left"
				paddingLeft="20px"
			></TitleCard>
			<div className={styles.contactContainer}>
				<ContactButton
					title="martinaiwulbrandt@gmail.com"
					link=""
					image={gmail}
					isLink={false}
				></ContactButton>
				<ContactButton
					title="LinkedIn"
					link="https://www.linkedin.com/in/martina-ibanez-wulbrandt/"
					image={LinkedIn}
				></ContactButton>
				<ContactButton
					title="GitHub"
					link="https://github.com/martinaiw"
					image={GH}
				></ContactButton>
				<ContactButton
					title="CV"
					link="/portfolio/files/CV-MIW.pdf"
					image={CV}
				></ContactButton>
			</div>
		</>
	);
}
export default Contact;
