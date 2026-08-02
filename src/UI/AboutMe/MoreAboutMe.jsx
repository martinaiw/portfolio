import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import HobbyCard from './HobbyCard'
import HobbyCardMobile from './HobbyCardMobile'
import styles from './MoreAboutMe.module.css'

// Desktop bento placement (4-column grid):
// [Hiking 2×2] [Music 1×1] [Climbing 1×1]
//              [Photo 1×1] [Reading 1×1]
// [Coffee            2×1 span full width          ]
const PLACEMENTS = [
  { idx: 0, col: '1 / 3', row: '1 / 3', height: 320 }, // Hiking — tall square
  { idx: 1, col: '3 / 4', row: '1 / 2', height: 154 }, // Music
  { idx: 2, col: '4 / 5', row: '1 / 2', height: 154 }, // Climbing
  { idx: 3, col: '3 / 4', row: '2 / 3', height: 154 }, // Photography
  { idx: 4, col: '4 / 5', row: '2 / 3', height: 154 }, // Reading
  { idx: 5, col: '1 / 5', row: '3 / 4', height: 160 }, // Coffee — full width
]

export default function MoreAboutMe({ t, lang, hobbies }) {
  const [hovered, setHovered] = useState(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section id="more" className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.label}>{t.moreLabel}</span>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.moreTitle}</h2>
          <p className={styles.sub}>{t.moreSub}</p>
        </div>

        {isDesktop ? (
          <div className={styles.grid}>
            {PLACEMENTS.map(({ idx, col, row, height }) => (
              <HobbyCard
                key={hobbies[idx].id}
                hobby={hobbies[idx]}
                lang={lang}
                hovered={hovered}
                onHover={setHovered}
                gridColumn={col}
                gridRow={row}
                height={height}
              />
            ))}
          </div>
        ) : (
          <div className={styles.mobileGrid}>
            {hobbies.map((hobby) => (
              <HobbyCardMobile key={hobby.id} hobby={hobby} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}