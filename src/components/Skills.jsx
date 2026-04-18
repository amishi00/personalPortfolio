import { useState } from 'react'
import styles from './Skills.module.css'

const tracks = [
  { num: 1, title: 'Python', sub: 'Data Science · ML · Scripting', bars: [90, 80, 85, 70, 88, 75, 82], duration: '5:00' },
  { num: 2, title: 'Java', sub: 'OOP · Data Structures · Algorithms', bars: [88, 92, 70, 85, 78, 90, 83], duration: '5:00' },
  { num: 3, title: 'JavaScript / TypeScript', sub: 'React · Node · Web Dev', bars: [70, 75, 65, 80, 72, 68, 76], duration: '3:54' },
  { num: 4, title: 'Swift / SwiftUI', sub: 'iOS · AR/VR · Mobile', bars: [68, 72, 60, 75, 65, 70, 64], duration: '3:48' },
  { num: 5, title: 'C', sub: 'Systems Programming · Low-Level', bars: [70, 65, 75, 68, 72, 60, 73], duration: '3:54' },
  { num: 6, title: 'AWS & Cloud', sub: 'S3 · Lambda · RESTful APIs', bars: [60, 65, 58, 70, 62, 55, 68], duration: '3:20' },
  { num: 7, title: 'Machine Learning', sub: 'CNN · NLP · Scikit-learn · TensorFlow', bars: [75, 68, 80, 72, 78, 65, 77], duration: '4:10' },
  { num: 8, title: 'OCaml', sub: 'Functional Programming · Compilers', bars: [60, 55, 65, 58, 62, 50, 63], duration: '3:20' },
]

function MiniVisualizer({ bars, playing }) {
  return (
    <div className={styles.viz}>
      {bars.map((h, i) => (
        <div
          key={i}
          className={`${styles.bar} ${playing ? styles.barAnim : ''}`}
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.1}s`,
            background: playing ? 'var(--sp-green)' : 'var(--sp-subtext)',
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <section id="skills" className="sp-section">
      <div className={styles.header}>
        <h2 className="sp-section-title">Popular</h2>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.thNum}>#</th>
            <th className={styles.thTitle}>Title</th>
            <th className={styles.thAlbum}>Stack</th>
            <th className={styles.thDuration}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((t, i) => {
            const isActive = activeIdx === i
            const isHovered = hoveredIdx === i
            return (
              <tr
                key={t.num}
                className={`${styles.row} ${isActive ? styles.activeRow : ''}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveIdx(isActive ? null : i)}
              >
                <td className={styles.tdNum}>
                  {isHovered || isActive ? (
                    <button className={styles.rowPlay} aria-label="Play">
                      {isActive ? (
                        <MiniVisualizer bars={t.bars} playing={true} />
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21"/>
                        </svg>
                      )}
                    </button>
                  ) : (
                    <span className={`${styles.num} ${isActive ? styles.numGreen : ''}`}>
                      {isActive ? <MiniVisualizer bars={t.bars} playing={true} /> : t.num}
                    </span>
                  )}
                </td>
                <td className={styles.tdTitle}>
                  <div className={styles.titleCell}>
                    <div className={styles.trackArt}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div>
                      <div className={`${styles.trackName} ${isActive ? styles.trackGreen : ''}`}>{t.title}</div>
                      <div className={styles.trackSub}>{t.sub}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.tdAlbum}>
                  <div className={styles.miniViz}>
                    {t.bars.slice(0, 5).map((h, bi) => (
                      <div
                        key={bi}
                        className={styles.miniBar}
                        style={{ height: `${h}%`, background: isActive ? 'var(--sp-green)' : 'rgba(255,255,255,0.25)' }}
                      />
                    ))}
                  </div>
                </td>
                <td className={styles.tdDuration}>{t.duration}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
