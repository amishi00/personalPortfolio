import { useState } from 'react'
import styles from './Skills.module.css'

const tracks = [
  { num: 1, title: 'Python',                   sub: 'Data Science · ML · Scripting',          proficiency: 90 },
  { num: 2, title: 'Java',                      sub: 'OOP · Data Structures · Algorithms',      proficiency: 88 },
  { num: 3, title: 'JavaScript / TypeScript',   sub: 'React · Node · Web Dev',                 proficiency: 75 },
  { num: 4, title: 'Swift / SwiftUI',           sub: 'iOS · AR/VR · Mobile',                   proficiency: 70 },
  { num: 5, title: 'C',                         sub: 'Systems Programming · Low-Level',         proficiency: 68 },
  { num: 6, title: 'AWS & Cloud',               sub: 'S3 · Lambda · RESTful APIs',             proficiency: 62 },
  { num: 7, title: 'Machine Learning',          sub: 'CNN · NLP · TensorFlow',                 proficiency: 78 },
  { num: 8, title: 'OCaml',                     sub: 'Functional Programming · Compilers',      proficiency: 58 },
]

const BAR_COUNT = 18

// Deterministic per-bar values so heights never shift between renders
function barConfig(proficiency) {
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    // Resting waveform: sine pattern scaled to proficiency
    const wave = Math.abs(Math.sin(i * 0.65 + 1.1)) * 0.55 + 0.18
    const restH = Math.round(wave * proficiency * 0.36)   // px, container is 36px

    // Animation: max height ∝ proficiency; vary speed + delay per bar
    const maxH = Math.round(((proficiency / 100) * 0.75 + 0.15) * 36)
    const dur   = 280 + ((i * 97 + 13)  % 320)   // ms  280–600
    const delay = ((i * 137 + 7) % 700) / 1000    // s   0–0.7
    return { restH, maxH, dur, delay }
  })
}

function SoundBar({ proficiency, lit }) {
  const bars = barConfig(proficiency)
  return (
    <div className={styles.soundBar}>
      {bars.map((b, i) => (
        <div
          key={i}
          className={`${styles.soundSegment} ${lit ? styles.soundSegmentLit : ''}`}
          style={{
            height: `${b.restH}px`,
            '--max-h': `${b.maxH}px`,
            '--dur':   `${b.dur}ms`,
            '--delay': `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [activeIdx,  setActiveIdx]  = useState(null)

  return (
    <section id="skills" className="sp-section">
      <div className={styles.header}>
        <h2 className="sp-section-title">Skills</h2>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.thNum}>#</th>
            <th className={styles.thTitle}>Skill</th>
            <th className={styles.thProf}>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((t, i) => {
            const isActive  = activeIdx  === i
            const isHovered = hoveredIdx === i
            const lit = isActive || isHovered

            return (
              <tr
                key={t.num}
                className={`${styles.row} ${isActive ? styles.activeRow : ''}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveIdx(isActive ? null : i)}
              >
                <td className={styles.tdNum}>
                  {lit ? (
                    <button className={styles.rowPlay} aria-label="Play">
                      {isActive
                        ? <SoundBar proficiency={t.proficiency} lit={true} />
                        : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                      }
                    </button>
                  ) : (
                    <span className={styles.num}>{t.num}</span>
                  )}
                </td>

                <td className={styles.tdTitle}>
                  <div className={`${styles.trackName} ${isActive ? styles.trackGreen : ''}`}>{t.title}</div>
                  <div className={styles.trackSub}>{t.sub}</div>
                </td>

                <td className={styles.tdProf}>
                  <SoundBar proficiency={t.proficiency} lit={lit} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
