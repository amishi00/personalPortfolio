import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const skills = [
  { name: 'Python', level: 90, color: '#7c3aed' },
  { name: 'Java', level: 90, color: '#7c3aed' },
  { name: 'JavaScript / TypeScript', level: 70, color: '#06b6d4' },
  { name: 'React / SwiftUI', level: 70, color: '#06b6d4' },
  { name: 'C', level: 70, color: '#06b6d4' },
  { name: 'AWS & Cloud', level: 60, color: '#10b981' },
]

const categories = [
  {
    title: 'Languages',
    icon: '⌨️',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'OCaml', 'Swift'],
  },
  {
    title: 'Frameworks & Tools',
    icon: '🛠️',
    items: ['React', 'SwiftUI', 'Flask', 'Node.js', 'ROS', 'YOLOv8'],
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    items: ['CNN', 'NLP', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Numpy'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS', 'RESTful APIs', 'Git', 'Linux', 'CI/CD'],
  },
]

function SkillBar({ name, level, color }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [level])

  return (
    <div className={styles.skillRow} ref={ref}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{
            width: `${width}%`,
            background: color === '#7c3aed'
              ? 'linear-gradient(90deg, #7c3aed, #9f67fa)'
              : color === '#06b6d4'
              ? 'linear-gradient(90deg, #06b6d4, #22d3ee)'
              : 'linear-gradient(90deg, #10b981, #34d399)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-subtitle">
            A snapshot of my technical proficiency across languages, frameworks, and tools.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.bars}>
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <div key={cat.title} className={styles.catCard}>
                <div className={styles.catHeader}>
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <span className={styles.catTitle}>{cat.title}</span>
                </div>
                <div className={styles.tagList}>
                  {cat.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
