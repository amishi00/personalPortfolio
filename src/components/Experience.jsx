import styles from './Experience.module.css'
import googleLogo from '../assets/google.png'
import amazonLogo from '../assets/amazon.png'
import echo3dLogo from '../assets/echo3d.png'
import mitLogo from '../assets/mit.png'
import uncLogo from '../assets/unc.png'
import cornellLogo from '../assets/cornell.png'

const timeline = [
  {
    year: '2026',
    role: 'Student Researcher',
    org: 'Cornell ORIE Department - Professor Ziv Scully',
    period: 'Jan 2026 – Present · Ithaca, NY',
    desc: 'Developing a scheduling framework that simulates and optimizes job progression under time constraints using priority-based policies and efficient search techniques. Researching trade-offs between fairness and efficiency in dynamic priority systems under constrained resources.',
    tags: ['Python', 'Scheduling Algorithms', 'Priority Systems', 'Research'],
    color: '#b31b1b',
    logo: cornellLogo,
    type: 'Research',
  },
  {
    year: '2026',
    role: 'Software Engineering Intern',
    org: 'Google — GCloud Apps Team',
    period: 'Summer 2026',
    desc: 'Incoming software engineering intern on the Google Cloud Apps team.',
    tags: ['Google Cloud', 'GCP', 'Software Engineering'],
    color: '#4285f4',
    logo: googleLogo,
    type: 'Internship',
  },
  {
    year: '2025',
    role: 'Software Development Intern',
    org: 'Amazon',
    period: 'Jun – Aug 2025 · Seattle, WA',
    desc: 'Built a full-stack Console providing an end-to-end solution for querying and editing report data using RESTful APIs and AWS cloud services.',
    tags: ['AWS', 'RESTful APIs', 'Full-Stack', 'Cloud'],
    color: '#f90',
    logo: amazonLogo,
    type: 'Internship',
  },
  {
    year: '2024',
    role: 'Software Development Intern',
    org: 'Echo3D',
    period: 'Jun – Aug 2024 · Remote',
    desc: 'Created an iOS AR/VR virtual try-on application using SwiftUI. Enhanced website features resulting in 23% more engagement.',
    tags: ['SwiftUI', 'AR/VR', 'iOS', 'Echo3D API'],
    color: '#7c3aed',
    logo: echo3dLogo,
    type: 'Internship',
  },
  {
    year: '2023',
    role: 'ML Researcher',
    org: 'MIT Beaver Works — Medlytics',
    period: 'Jul – Aug 2023 · Cambridge, MA',
    desc: 'Developed a machine learning model to detect dyslexia from handwriting images, achieving 89.4% validation accuracy. Awarded Best Team Initiative.',
    tags: ['Machine Learning', 'Computer Vision', 'Python'],
    color: '#06b6d4',
    logo: mitLogo,
    type: 'Research',
    badge: '🏆 Best Team Initiative',
  },
  {
    year: '2022',
    role: 'Undergraduate Researcher',
    org: 'UNC Gene Therapy Center',
    period: 'Aug 2022 – Mar 2023 · Chapel Hill, NC',
    desc: 'Researched hemophilia treatment through Factor-VIII gene expression analysis. Gained expertise in gel electrophoresis and cellular cloning.',
    tags: ['Gene Therapy', 'Bioengineering', 'Lab Research'],
    color: '#10b981',
    logo: uncLogo,
    type: 'Research',
  },
]

const typeColor = {
  Internship: { bg: 'rgba(29,185,84,0.12)',  text: '#1DB954' },
  Research:   { bg: 'rgba(6,182,212,0.12)',   text: '#22d3ee' },
}

export default function Experience() {
  return (
    <section id="experience" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">Experience</h2>
      </div>

      <div className={styles.timeline}>
        {timeline.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.left}>
              <div className={styles.year}>{item.year}</div>
              <div className={styles.line} style={{ background: i === timeline.length - 1 ? 'transparent' : undefined }} />
            </div>

            <div className={styles.dotWrap}>
              <div className={styles.dot} style={{ background: item.color, boxShadow: `0 0 0 3px ${item.color}30` }} />
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.artSmall} style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)` }}>
                  <img src={item.logo} alt={item.org} className={styles.logo} />
                </div>
                <div className={styles.cardMeta}>
                  <div className={styles.typeRow}>
                    <span className={styles.typeBadge} style={{ background: typeColor[item.type].bg, color: typeColor[item.type].text }}>
                      {item.type}
                    </span>
                    {item.badge && <span className="sp-tag" style={{ background: 'rgba(255,255,255,0.07)' }}>{item.badge}</span>}
                  </div>
                  <div className={styles.role}>{item.role}</div>
                  <div className={styles.org} style={{ color: item.color }}>{item.org}</div>
                  <div className={styles.period}>{item.period}</div>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map((t) => <span key={t} className="sp-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
