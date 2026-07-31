import TitleCard from '../TitleCard'
import ProjectsDisplay from './ProjectsDisplay'
import styles from './Projects.module.css'

export default function Projects({ t, projects }) {
  return (
    <section id="projects" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <TitleCard label={t.projectsLabel} title={t.projectsTitle} />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectsDisplay key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
