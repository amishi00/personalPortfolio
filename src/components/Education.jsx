import styles from './Education.module.css'
import cornellLogo from '../assets/cornell.png'
import ncssmLogo from '../assets/ncssm.png'

const schools = [
  {
    name: 'Cornell University',
    degree: 'BS in Computer Science',
    minor: 'Minor in AI & Business',
    period: 'Aug 2023 – May 2027',
    location: 'Ithaca, NY',
    color: '#b31b1b',
    logo: cornellLogo,
    courses: ['Analysis of Algorithms (CS 4820)', 'Data Structures & Object-Oriented Programming (CS 2110)', 'Intro to Machine Learning (CS 3780)','Law, Policy, and Politics of AI (INFO 4940)'],
    activities: [
      { label: 'Kappa Theta Pi - VP of New Member Education', href: 'https://ktpcornell.com' },
      { label: 'Cornell Nazaqat Dance Club - Treasurer' },
      { label: 'Cornell ORIE Department - Student Researcher', href: 'https://www.duffield.cornell.edu/orie/' },
      { label: 'Cornell Nexus Project Team - Software Subteam', href: 'https://www.cornellnexus.com/' },
    ],
  },
  {
    name: 'NC School of Science and Math',
    degree: 'High School Diploma',
    minor: '',
    period: 'Aug 2021 – May 2023',
    location: 'Durham, NC',
    color: '#3b82f6',
    logo: ncssmLogo,
    courses: ['NCSSM Summer Research in Math', 'NCSSM Engineering Department - Robotics TA', 'Technology Student Association (TSA)', 'NCSSM Natyam Dance Club - Captain'],
    activities: [
      { label: '1st Place Unihacks - Mental Health Track' },
      { label: '2nd Place TSA - Data Science' },
      { label: '3rd Place NCSEF - Mathematics & Data Science' },
      { label: '3rd Place NCSAS - Mathematics' },
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">Education</h2>
      </div>

      <div className={styles.grid}>
        {schools.map((s) => (
          <div key={s.name} className={`sp-card ${styles.card}`}>
            <div className={styles.top}>
              <div className={styles.art} style={{ background: `linear-gradient(135deg, ${s.color}22, ${s.color}08)` }}>
                <img src={s.logo} alt={s.name} className={styles.logo} />
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{s.period}</span>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.degree}>{s.degree}</p>
                {s.minor && <p className={styles.minor}>{s.minor}</p>}
                <p className={styles.location}>📍 {s.location}</p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.bottom}>
              <div className={styles.col}>
                <p className={styles.colTitle}>Relevant Coursework</p>
                <ul className={styles.list}>
                  {s.courses.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div className={styles.col}>
                <p className={styles.colTitle}>Activities & Awards</p>
                <ul className={styles.list}>
                  {s.activities.map((a) =>
                    a.href ? (
                      <li key={a.label}>
                        <a href={a.href} target="_blank" rel="noreferrer" className={styles.actLink}>{a.label}</a>
                      </li>
                    ) : (
                      <li key={a.label}>{a.label}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
