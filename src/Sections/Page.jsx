import { useCallback, useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AboutMe from "../UI/AboutMe/AboutMe";
import Projects from "../UI/Projects/Projects";
import Experience from "../UI/Experience/Experience";
import Training from "../UI/Training/Training";
import Languages from "../UI/Languages/Languages";
import Abilities from "../UI/Abilities/Abilities";
import Contact from "../UI/Contact/Contact";
import styles from "./Page.module.css";
import testingManual from "../assets/images/testingManual.jpg";

/* ─── i18n ──────────────────────────────────────────────────── */

const T = {
	en: {
		nav: [
			"Home",
			"About",
			"Projects",
			"Experience",
			"Formation",
			"Languages",
			"Abilities",
			"Contact",
		],
		available: "computer systems analyst",
		heroSub:
			"Hi! I'm Martina, currently in my 4th year of a B.Sc. in Computer Science. My main interests are web development and QA testing.",
		viewProjects: "View projects",
		contactMe: "Contact me",
		scrollHint: "scroll to explore",
		aboutLabel: "About me",
		aboutTitle: "I'm passionate about creating efficient and elegant solutions.",
		aboutP1: "Thanks to my education at FaMAF-UNC, I have a strong foundation in logical thinking and mathematics, ",
		aboutP2: "Possessing a meticulous and detail-oriented nature, I apply it rigorously in all my activities.",
		aboutP3: "My goal is to deliver solutions that not only work, but are polished to the highest degree :)",
		stats: [],
		projectsLabel: "Projects",
		projectsTitle: "My work",
		expLabel: "Experience",
		expTitle: "Work history",
		formLabel: "Formation",
		formTitle: "Education & training",
		viewCert: "View certificate",
		langLabel: "Languages",
		langTitle: "Communication",
		langSub: "",
		abilitiesLabel: "Abilities",
		abilitiesTitle: "Skills & strengths",
		contactLabel: "Contact",
		contactTitle: "Let's work together",
		contactSub: "",
		fields: { name: "Name", email: "Email", message: "Message" },
		namePh: "Your name",
		emailPh: "you@example.com",
		messagePh: "Tell me about your project...",
		send: "Send message",
		sentTitle: "Message sent",
		sentSub: "I'll get back to you shortly.",
		abilityGroups: ["Engineering", "Tooling", "Soft skills"],
	},
	es: {
		nav: [
			"Inicio",
			"Sobre mí",
			"Proyectos",
			"Experiencia",
			"Formación",
			"Idiomas",
			"Habilidades",
			"Contacto",
		],
		available: "Analista en computación",
		heroSub:
			"¡Hola! Soy Martina, estoy cursando el 4to año de la Licenciatura en Ciencias de la Computación. Mis intereses principales son el desarrollo web y el testing QA.",
		viewProjects: "Ver proyectos",
		contactMe: "Contáctame",
		scrollHint: "desliza para explorar",
		aboutLabel: "Sobre mí",
		aboutTitle: "Me apasiona la creación de soluciones eficientes y elegantes.",
		aboutP1:
			"Cuento con una base sólida en pensamiento lógico y matemáticas, gracias a mi formación en FaMAF-UNC.",
		aboutP2:
			"Poseo una naturaleza meticulosa y atenta al detalle, la cual aplico con rigor en todas mis actividades.",
		aboutP3:
			"Mi objetivo es entregar soluciones que no solo funcionen, sino que estén pulidas al máximo :)",
		stats: [],
		projectsLabel: "Proyectos",
		projectsTitle: "Mis trabajos",
		expLabel: "Experiencia",
		expTitle: "Historial laboral",
		formLabel: "Formación",
		formTitle: "Educación y cursos",
		viewCert: "Ver certificado",
		langLabel: "Idiomas",
		langTitle: "Comunicación",
		langSub: "",
		abilitiesLabel: "Habilidades",
		abilitiesTitle: "Competencias",
		contactLabel: "Contacto",
		contactTitle: "Trabajemos juntos",
		contactSub:
			"",
		fields: { name: "Nombre", email: "Correo", message: "Mensaje" },
		namePh: "Tu nombre",
		emailPh: "tú@ejemplo.com",
		messagePh: "Contame sobre tu proyecto...",
		send: "Enviar mensaje",
		sentTitle: "Mensaje enviado",
		sentSub: "Te responderé pronto.",
		abilityGroups: ["Ingeniería", "Herramientas", "Habilidades blandas"],
	},
};

/* ─── Data ──────────────────────────────────────────────────── */

const SECTION_IDS = [
	"hero",
	"about",
	"projects",
	"experience",
	"formation",
	"languages",
	"abilities",
	"contact",
];

const PROJECTS = {
	en: [
		{
			id: "",
			title: "Oops! This project is still under construction.",
			year: "",
			desc: "",
			tags: [],
		},
	],
	es: [
		{
			id: "",
			title: "Ups! Este proyecto todavía está en construcción.",
			year: "",
			desc: "",
			tags: [],
		},
	],
};

const EXPERIENCE = {
	en: [
		{
			role: "Web Uploading Intern",
			company: "GAOTek Inc.",
			period: "Jan 2026 — May 2026",
			desc: "During this internship, I gained new knowledge and improved my web development skills, including WordPress, JavaScript, HTML, CSS and React, as well as my teamwork abilities.",
		},
	],
	es: [
		{
			role: "Pasante en el puesto de Web Uploading",
			company: "GAOTek Inc.",
			period: "Enero 2026 — Mayo 2026",
			desc: "Durante esta pasantía, adquirí nuevos conocimientos y mejoré mis habilidades en desarrollo web, incluyendo el uso de WordPress, JavaScript, HTML, CSS y React, además de mejorar mis capacidades de trabajo en equipo.",
		},
	],
};

const FORMATION = {
	en: [
		{
			degree: "B.Sc. in Computer Science",
			institution: "FaMAF - UNC",
			year: "2022 — Ongoing",
			note: "",
			cert: null,
			showCert: false,
		},
		{
			degree: "Computer Systems Analyst",
			institution: "FaMAF - UNC",
			year: "2022 — 2026",
			note: "",
			cert: null,
			showCert: true,
		},
		{
			degree: "Manual QA Testing Certification",
			institution: "ProgramON - chicos.net",
			year: "Aug 2025 — Sep 2025",
			note: "",
			cert: testingManual,
			showCert: true,
		},
		{
			degree: "Advanced Full Stack Developer Certification",
			institution: "ITBA (Buenos Aires Institute of Technology)",
			year: "Aug 2023 — Nov 2023",
			note: "306 hour program",
			cert: "https://certtun.vottun.com/badgedetail?id=71c51ace-cff3-4313-8bdf-639ed1fa52c9",
			showCert: true,
		},
		{
			degree: "Argentina Programa 'Sé Programar' — Stage 1 Certification",
			institution: "Argentina Programa - Ministry of Education",
			year: "Feb 2022 — Apr 2022",
			note: "",
			cert: "https://mumuki.io/argentina-programa/certificates/verify/G3hgTEiuj_IrwYEn",
			showCert: true,
		},
	],
	es: [
		{
			degree: "Licenciatura en Ciencias de la Computación",
			institution: "FaMAF - UNC",
			year: "2022 — En curso",
			note: "",
			cert: null,
			showCert: false,
		},
		{
			degree: "Analista en Computación",
			institution: "FaMAF - UNC",
			year: "2022 — 2026",
			note: "",
			cert: null,
			showCert: true,
		},
		{
			degree: "Certificación en Testing Manual QA",
			institution: "ProgramON - chicos.net",
			year: "Agosto 2025 — Septiembre 2025",
			note: "",
			cert: testingManual,
			showCert: true,
		},
		{
			degree: "Certificación Avanzada en Full Stack Developer",
			institution: "ITBA (Instituto Tecnológico de Buenos Aires)",
			year: "Agosto 2023 — Noviembre 2023",
			note: "Duración: 306 hs",
			cert: "https://certtun.vottun.com/badgedetail?id=71c51ace-cff3-4313-8bdf-639ed1fa52c9",
			showCert: true,
		},
		{
			degree:
				"Certificación Primera Etapa de Argentina Programa 'Sé Programar'",
			institution: "Argentina Programa - Ministerio de Educación",
			year: "Febrero 2022 — Abril 2022",
			note: "",
			cert: "https://mumuki.io/argentina-programa/certificates/verify/G3hgTEiuj_IrwYEn",
			showCert: true,
		},
	],
};
const LANGS_DATA = [
	{
		name: { en: "Spanish", es: "Español" },
		level: { en: "Native", es: "Nativo" },
		pct: 100,
	},
	{
		name: { en: "English", es: "Inglés" },
		level: { en: "Fluent (C2)", es: "Fluido (C2)" },
		pct: 95,
	},
	{
		name: { en: "Italian", es: "Italiano" },
		level: { en: "Begginer (A1)", es: "Principiante (A1)" },
		pct: 20,
	},
];

const ABILITIES_DATA = {
	en: [
		{
			label: "Programming Languages",
			items: ["C", "C++", "Python", "JavaScript", "Haskell"],
		},
		{ label: "Web Development", items: ["React", "HTML", "CSS"] },
		{ label: "Databases", items: ["SQL", "NoSQL (MongoDB)"] },
		{ label: "Version Control", items: ["Git", "GitHub", "Bitbucket"] },
		{
			label: "Project Management & QA",
			items: ["Jira", "Azure DevOps (bug tracking)"],
		},
	],
	es: [
		{
			label: "Lenguajes de programación",
			items: ["C", "C++", "Python", "JavaScript", "Haskell"],
		},
		{ label: "Desarrollo Web", items: ["React", "HTML", "CSS"] },
		{ label: "Bases de Datos", items: ["SQL", "NoSQL (MongoDB)"] },
		{ label: "Control de versiones", items: ["Git", "GitHub", "Bitbucket"] },
		{
			label: "Gestión de proyectos y QA",
			items: ["Jira", "Azure DevOps (reporte de bugs)"],
		},
	],
};
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── Lang toggle ───────────────────────────────────────────── */

function LangToggle({ lang, onToggle }) {
	return (
		<button
			onClick={onToggle}
			className={styles.langToggle}
			aria-label="Switch language"
		>
			<span style={{ opacity: lang === "es" ? 1 : 0.45 }}>ES</span>
			<span className={styles.langSep}>/</span>
			<span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
		</button>
	);
}

/* ─── Side nav dots (desktop only) ─────────────────────────── */

function SideNav({ active, labels }) {
	return (
		<nav className={styles.sideNav}>
			{SECTION_IDS.map((id, i) => (
				<button
					key={id}
					onClick={() => scrollToId(id)}
					title={labels[i]}
					aria-label={labels[i]}
					className={styles.sideNavItem}
				>
					<span className={styles.sideNavLabel}>{labels[i]}</span>
					<span
						className={styles.sideNavDot}
						style={{
							width: active === id ? "20px" : "6px",
							backgroundColor:
								active === id ? "var(--accent-solid)" : "var(--fg-muted)",
							opacity: active === id ? 1 : 0.4,
						}}
					/>
				</button>
			))}
		</nav>
	);
}

/* ─── Top nav ───────────────────────────────────────────────── */

function TopNav({ active, lang, onLangToggle, labels, isDesktop }) {
	const [open, setOpen] = useState(false);

	const handleNavigate = (id) => {
		setOpen(false);
		scrollToId(id);
	};

	return (
		<header className={styles.header}>
			<button onClick={() => handleNavigate("hero")} className={styles.logo}>
				MIW
			</button>

			{isDesktop && (
				<ul className={styles.navList}>
					{SECTION_IDS.slice(1).map((id, i) => (
						<li key={id}>
							<button
								onClick={() => handleNavigate(id)}
								className={styles.navLink}
								style={{
									color:
										active === id ? "var(--accent-solid)" : "var(--fg-muted)",
								}}
							>
								{labels[i + 1]}
							</button>
						</li>
					))}
				</ul>
			)}

			<div className={styles.headerActions}>
				<LangToggle lang={lang} onToggle={onLangToggle} />
				{!isDesktop && (
					<button
						className={styles.menuButton}
						onClick={() => setOpen(!open)}
						aria-label="Menu"
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
							{open ? (
								<path
									d="M4 4L16 16M16 4L4 16"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							) : (
								<path
									d="M3 5h14M3 10h14M3 15h14"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							)}
						</svg>
					</button>
				)}
			</div>

			{!isDesktop && open && (
				<div className={styles.mobileMenu}>
					{SECTION_IDS.slice(1).map((id, i) => (
						<button
							key={id}
							onClick={() => handleNavigate(id)}
							className={styles.mobileMenuItem}
							style={{
								color:
									active === id ? "var(--accent-solid)" : "var(--fg-muted)",
							}}
						>
							{labels[i + 1]}
						</button>
					))}
				</div>
			)}
		</header>
	);
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function Page() {
	const [lang, setLang] = useState("es");
	const [activeSection, setActiveSection] = useState("hero");
	const scrollRootRef = useRef(null);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const t = T[lang];

	const onScroll = useCallback(() => {
		const root = scrollRootRef.current;
		if (!root) return;
		const scrollY = root.scrollTop;
		const vh = root.clientHeight;
		for (const id of [...SECTION_IDS].reverse()) {
			const el = document.getElementById(id);
			if (el && el.offsetTop <= scrollY + vh * 0.5) {
				setActiveSection(id);
				break;
			}
		}
	}, []);

	useEffect(() => {
		const root = scrollRootRef.current;
		if (!root) return;
		root.addEventListener("scroll", onScroll, { passive: true });
		return () => root.removeEventListener("scroll", onScroll);
	}, [onScroll]);

	return (
		<>
			<TopNav
				active={activeSection}
				lang={lang}
				onLangToggle={() => setLang((l) => (l === "en" ? "es" : "en"))}
				labels={t.nav}
				isDesktop={isDesktop}
			/>
			{isDesktop && <SideNav active={activeSection} labels={t.nav} />}
			<div id="scroll-root" ref={scrollRootRef} className={styles.scrollRoot}>
				<AboutMe t={t} />
				<Projects t={t} projects={PROJECTS[lang]} />
				<Experience t={t} experience={EXPERIENCE[lang]} />
				<Training t={t} formation={FORMATION[lang]} />
				<Languages t={t} lang={lang} languages={LANGS_DATA} />
				<Abilities t={t} groups={ABILITIES_DATA[lang]} />
				<Contact t={t} />
			</div>
		</>
	);
}
