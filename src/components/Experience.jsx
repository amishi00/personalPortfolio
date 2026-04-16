import styles from './Experience.module.css'

const experiences = [
  {
    type: 'work',
    role: 'Software Development Intern',
    org: 'Amazon',
    period: 'Jun 2025 – Aug 2025',
    location: 'Seattle, WA',
    description: 'Developed a full-stack Console providing users an end-to-end solution for querying and editing report data. Built infrastructure using RESTful APIs, AWS services, and cloud technologies.',
    tags: ['AWS', 'RESTful APIs', 'Full-Stack', 'Cloud'],
    color: '#f90',
  },
  {
    type: 'work',
    role: 'Software Development Intern',
    org: 'Echo3D',
    period: 'Jun 2024 – Aug 2024',
    location: 'Remote',
    description: 'Created an iOS AR/VR application using SwiftUI for virtual try-on functionality. Enhanced website features resulting in 23% more engagement.',
    tags: ['SwiftUI', 'AR/VR', 'iOS', 'Echo3D API'],
    color: '#7c3aed',
  },
  {
    type: 'work',
    role: 'ML Researcher',
    org: 'MIT Beaver Works — Medlytics',
    period: 'Jul 2023 – Aug 2023',
    location: 'Cambridge, MA',
    description: 'Developed a machine learning model to detect dyslexia from handwriting images, achieving 89.4% validation accuracy. Awarded Best Team Initiative.',
    tags: ['Machine Learning', 'Computer Vision', 'Python'],
    color: '#06b6d4',
  },
  {
    type: 'work',
    role: 'Undergraduate Researcher',
    org: 'Gene Therapy Center, UNC Chapel Hill',
    period: 'Aug 2022 – Mar 2023',
    location: 'Chapel Hill, NC',
    description: 'Researched hemophilia treatment through Factor-VIII gene expression analysis. Gained expertise in gel electrophoresis and cellular cloning.',
    tags: ['Bioengineering', 'Gene Therapy', 'Research'],
    color: '#10b981',
  },
]

const education = [
  {
    org: 'Cornell University',
    degree: 'BS in Computer Science, Minor in AI & Business',
    period: 'Aug 2023 – May 2027',
    details: 'Relevant Coursework: Analysis of Algorithms (CS 4820), Data Structures & Functional Programming (CS 3110), Introduction to Machine Learning (CS 3780)',
    tags: ['CS', 'AI', 'Business'],
  },
  {
    org: 'NC School of Science and Math',
    degree: 'High School Diploma',
    period: 'Aug 2021 – May 2023',
    details: 'Technical focus in programming, mathematics, and data science. Published research in The American Math Monthly.',
    tags: ['Math', 'Research', 'Data Science'],
  },
]

const extracurriculars = [
  { title: 'VP of New Member Education', org: 'Kappa Theta Pi', icon: '🔑' },
  { title: 'Object Detection Researcher', org: 'Cornell Nexus (YOLOv8 & ROS)', icon: '🤖' },
  { title: 'Sentiment Analysis', org: 'Cornell Data Journal', icon: '📊' },
  { title: 'Teaching Assistant', org: 'Cornell Math Department', icon: '📐' },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Experience & Education</p>
          <h2 className="section-title">My journey so far</h2>
        </div>

        <div className={styles.layout}>
          <div>
            <h3 className={styles.subheading}>Work Experience</h3>
            <div className={styles.timeline}>
              {experiences.map((exp, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.dot} style={{ background: exp.color }} />
                  <div className={styles.card}>
                    <div className={styles.meta}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                    <h4 className={styles.role}>{exp.role}</h4>
                    <p className={styles.org}>{exp.org}</p>
                    <p className={styles.desc}>{exp.description}</p>
                    <div className={styles.tags}>
                      {exp.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.subheading}>Education</h3>
            <div className={styles.timeline}>
              {education.map((edu, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.dot} style={{ background: '#7c3aed' }} />
                  <div className={styles.card}>
                    <span className={styles.period}>{edu.period}</span>
                    <h4 className={styles.role}>{edu.org}</h4>
                    <p className={styles.org}>{edu.degree}</p>
                    <p className={styles.desc}>{edu.details}</p>
                    <div className={styles.tags}>
                      {edu.tags.map((t) => (
                        <span key={t} className="tag teal">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className={`${styles.subheading} ${styles.subheadingMargin}`}>Extracurriculars</h3>
            <div className={styles.extraGrid}>
              {extracurriculars.map((e) => (
                <div key={e.title} className={styles.extraCard}>
                  <span className={styles.extraIcon}>{e.icon}</span>
                  <div>
                    <p className={styles.extraTitle}>{e.title}</p>
                    <p className={styles.extraOrg}>{e.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
