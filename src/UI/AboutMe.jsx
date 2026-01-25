import TitleCard from "./TitleCard";
import CirclePicture from "./CirclePicture";
import styles from "./AboutMe.module.css";

function AboutMe() {
	return (
		<>
			<section id="sobre-mi" className={styles.aboutMeContainer}>
				<div className={styles.titleWrapper}>
					<TitleCard
						title="Sobre mí"
						width="390px"
						fontSize="46px"
						align="left"
						paddingLeft="20px"
					/>
				</div>

				<div className={styles.flexContainer}>
					<p className={styles.description}>
						¡Hola! Soy Martina, estoy cursando el 4to año de la Licenciatura en
						Ciencias de la Computación
					</p>
					<div className={styles.pictureWrapper}>
						<CirclePicture
							image="src/assets/ProfilePic.PNG"
							alt="Profile picture"
						/>
					</div>
				</div>

				<div className={styles.textContainer}>
					<p>
						Mis intereses principales son el desarrollo web y el testing QA.
					</p>
					<p>
						Me considero una persona perfeccionista y detallista por naturaleza,
						y aplico esa rigurosidad en todo lo que hago. <br />
						Mi objetivo es siempre entregar soluciones que no solo funcionen,
						sino que estén pulidas al máximo :)
					</p>
				</div>
			</section>
		</>
	);
}
export default AboutMe;
