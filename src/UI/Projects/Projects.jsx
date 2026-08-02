import TitleCard from '../TitleCard'
import ProjectsDisplaySlides from './ProjectsDisplaySlides'
import styles from './Projects.module.css'

export default function Projects({ t, projects }) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrapper}>
        <TitleCard label={t.projectsLabel} title={t.projectsTitle} />
      </div>
      <ProjectsDisplaySlides projects={projects} linkLabels={t.projectLinks} />
    </section>
  )
}