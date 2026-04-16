import styles from "./Training.module.css";
import TrainingCard from "./TrainingCard.jsx";
import TitleCard from "../TitleCard.jsx";
import CertificateButton from "./CertificateButton.jsx";
import testingManual from "../../assets/images/testingManual.jpg";

function Training() {
	return (
		<>
			<div>

			<TitleCard
				title="Mi formación"
				width="562px"
				fontSize="46px"
				align="left"
				/>
				</div>
			<section id="training" className={styles.trainingSection}>
				<TrainingCard
					title="Licenciatura en Ciencias de la Computación"
					location="FaMAF - UNC"
					startDate="2022"
					endDate="Actualidad"
				/>
				<TrainingCard
					title="Analista en Computación"
					location="FaMAF - UNC"
					startDate="2022"
					endDate="Actualidad"
				/>
				<div className={styles.trainingAndCertificateContainer}>
					<TrainingCard
						title="Certificación en Testing Manual QA"
						location="ProgramON - chicos.net"
						startDate="Agosto 2025"
						endDate="Septiembre 2025"
					/>
					<CertificateButton certificateUrl={testingManual} isLink={false} />
				</div>
				<div className={styles.trainingAndCertificateContainer}>
					<TrainingCard
						title="Certificación Avanzada en Full Stack Developer"
						location="ITBA (Instituto Tecnológico de Buenos Aires)"
						duration="306"
						startDate="Agosto 2023"
						endDate="Noviembre 2023"
					/>
					<CertificateButton
						certificateUrl="https://certtun.vottun.com/badgedetail?id=71c51ace-cff3-4313-8bdf-639ed1fa52c9"
						isLink={true}
					/>
				</div>
				<div className={styles.trainingAndCertificateContainer}>
					<TrainingCard
						title="Certificación Primera Etapa de Argentina Programa 'Sé Programar'"
						location="Argentina Programa - Ministerio de Educación"
						startDate="Febrero 2022"
						endDate="Abril 2022"
					/>
					<CertificateButton
						certificateUrl="https://mumuki.io/argentina-programa/certificates/verify/G3hgTEiuj_IrwYEn"
						isLink={true}
					/>
				</div>
			</section>
		</>
	);
}
export default Training;
