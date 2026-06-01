import styles from "./Experience.module.css";
import TitleCard from "../TitleCard";
import ExperienceCard from "./ExperienceCard.jsx";
import CertificateButton from "../Training/CertificateButton.jsx";
import digitalmarketing from "../../assets/images/DIGITALMARKETING.jpg";
import internship from "../../assets/images/INTERNSHIP.jpg";
import webuploading from "../../assets/images/WEBUPLOADING.jpg";

function Experience() {
	return (
		<div className={styles.experienceContainer}>
			<TitleCard title="Experiencia" />
			<section id="experience" className={styles.experienceSection}>
				<div className={styles.experienceAndCertificateContainer}>
					<ExperienceCard
						title="GAOTek Inc."
						location="Pasante en el puesto de Web Uploading"
						startDate="Enero 2026"
						endDate="Mayo 2026"
						description={
							<p>
								Durante esta pasantía, adquirí nuevos conocimientos y mejoré mis
								habilidades en desarrollo web, incluyendo el uso de WordPress,
								JavaScript, HTML, CSS y React, además de mejorar mis capacidades
								de trabajo en equipo.
							</p>
						}
					/>

					<div className={styles.certificatesContainer}>
						<CertificateButton
							certificateUrl={internship}
							isLink={false}
							isCertificateAvailable={true}
							show={true}
						></CertificateButton>
						<CertificateButton
							certificateUrl={webuploading}
							isLink={false}
							isCertificateAvailable={true}
							show={true}
						></CertificateButton>
						<CertificateButton
							certificateUrl={digitalmarketing}
							isLink={false}
							isCertificateAvailable={true}
							show={true}
						></CertificateButton>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Experience;
