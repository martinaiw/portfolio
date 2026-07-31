import TitleCard from "../TitleCard";
import ButtonProjects from "./ButtonProjects";
import CirclePicture from "./CirclePicture";
import styles from "./AboutMe.module.css";
import colacion from "../../assets/images/colacion.jpg";

function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function AboutMe({ t }) {
	return (
		<>
			{/* ─── Hero ─── */}
			<section id="hero" className={`${styles.hero}`}>
				<div className={styles.heroContent}>
					<p className={styles.available}>{t.available}</p>
					<h1 className={styles.name}>
						Martina
						<br />
						<span className={styles.nameAccent}>Ibañez Wulbrandt</span>
					</h1>
					<p className={styles.heroSub}>{t.heroSub}</p>
					<div className={styles.actions}>
						<ButtonProjects
							label={t.viewProjects}
							variant="primary"
							onClick={() => scrollToId("projects")}
						/>
						<ButtonProjects
							label={t.contactMe}
							variant="secondary"
							onClick={() => scrollToId("contact")}
						/>
					</div>
				</div>
				<div className={styles.scrollHint}>
					<span className={styles.scrollLine} />
					<span className={styles.scrollText}>{t.scrollHint}</span>
				</div>
			</section>

			{/* ─── About ─── */}
			<section id="about" className={`${styles.about}`}>
				<div className={styles.aboutGrid}>
					<div className={styles.aboutText}>
						<TitleCard label={t.aboutLabel} title={t.aboutTitle} />
						<p className={styles.paragraph}>{t.aboutP1}</p>
						<p className={styles.paragraph}>{t.aboutP2}</p>
						<p className={styles.paragraph}>{t.aboutP3}</p>
					</div>
					<CirclePicture src={colacion} />
					{/* <div className={styles.statsGrid}>
						{t.stats.map((s) => (
							<div key={s.label} className={styles.statCard}>
								<p className={styles.statValue}>{s.value}</p>
								<p className={styles.statLabel}>{s.label}</p>
							</div>
						))}
					</div> */}
				</div>
			</section>
		</>
	);
}
