import { useEffect, useState } from 'react'
import ButtonProjects from '../AboutMe/ButtonProjects'
import ProjectsButton from './ProjectsButton'
import styles from './ProjectsDisplaySlides.module.css'

export default function ProjectsDisplaySlides({ projects, linkLabels }) {
  const [indice, setIndice] = useState(0)
  const [subIndice, setSubIndice] = useState(0)

  useEffect(() => {
    setSubIndice(0)
  }, [indice])

  const siguiente = () => setIndice((i) => (i + 1) % projects.length)
  const anterior = () => setIndice((i) => (i - 1 + projects.length) % projects.length)

  const proximaFoto = (e) => {
    e.stopPropagation()
    setSubIndice((prev) => (prev + 1) % proyectoActual.images.length)
  }
  const anteriorFoto = (e) => {
    e.stopPropagation()
    setSubIndice((prev) => (prev - 1 + proyectoActual.images.length) % proyectoActual.images.length)
  }

  const proyectoActual = projects[indice]

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.displayButton}>
        <ButtonProjects direction="left" onClick={anterior} />
      </div>

      <div className={`${styles.projectDisplay} ${styles.fadeAnim}`} key={indice}>
        <div className={styles.projectInfo}>
          <h3>{proyectoActual.titulo}</h3>

          <div className={styles.projectsButton}>
            {proyectoActual.linkGH && <ProjectsButton title={linkLabels.gh} link={proyectoActual.linkGH} />}
            {proyectoActual.link && <ProjectsButton title={linkLabels.demo} link={proyectoActual.link} />}
            {proyectoActual.linkJ1 && <ProjectsButton title={linkLabels.j1} link={proyectoActual.linkJ1} />}
            {proyectoActual.linkJ2 && <ProjectsButton title={linkLabels.j2} link={proyectoActual.linkJ2} />}
            {proyectoActual.linkDoc && <ProjectsButton title={linkLabels.doc} link={proyectoActual.linkDoc} />}
          </div>

          <p className={styles.projectsButtonP}>
            {proyectoActual.descripcion}
            {'\n\n'}
            <strong>{proyectoActual.hechoCon}</strong>
          </p>
        </div>

        <div className={styles.mediaContainer}>
          {proyectoActual.video ? (
            <video
              src={proyectoActual.video}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              Tu navegador no soporta videos.
            </video>
          ) : (
            <div className={styles.carouselWrapper}>
              <img src={proyectoActual.images[subIndice]} alt={`Captura ${subIndice}`} className={styles.carouselImg} />
              <div className={styles.carouselControls}>
                <button onClick={anteriorFoto}>❮</button>
                <span>
                  {subIndice + 1} / {proyectoActual.images.length}
                </span>
                <button onClick={proximaFoto}>❯</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.displayButton}>
        <ButtonProjects direction="right" onClick={siguiente} />
      </div>
    </div>
  )
}