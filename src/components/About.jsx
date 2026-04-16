import styles from './About.module.css'

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '2', label: 'Internships' },
  { value: '1st', label: 'Place, UniHacks 2023' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building with purpose,<br />
              <span className="gradient-text">learning with passion</span>
            </h2>
            <p className={styles.text}>
              I'm Amishi Gupta, a Computer Science student at Cornell University with a minor in
              AI & Business. I'm driven by a desire to create software that solves real-world
              problems — from improving healthcare outcomes to promoting sustainability.
            </p>
            <p className={styles.text}>
              My work spans full-stack development, machine learning, and AR/VR — I love
              exploring the intersection of technology and human impact. Whether it's building
              an Amazon console or winning a hackathon, I bring curiosity and focus to everything I do.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.icon}>🎓</span>
                <div>
                  <strong>Cornell University</strong>
                  <p>BS Computer Science, Minor in AI & Business</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>📍</span>
                <div>
                  <strong>Based in Ithaca, NY</strong>
                  <p>Open to remote & in-person roles</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>📧</span>
                <div>
                  <strong>amishigupta2809@gmail.com</strong>
                  <p>Always open to chat</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.dot} ${styles.red}`} />
                <div className={`${styles.dot} ${styles.yellow}`} />
                <div className={`${styles.dot} ${styles.green}`} />
                <span className={styles.cardTitle}>amishi.config.js</span>
              </div>
              <pre className={styles.code}>{`const amishi = {
  roles: [
    "Software Engineer",
    "Data Analyst",
    "ML Enthusiast",
  ],
  education: "Cornell CS '27",
  interests: [
    "Healthcare Tech",
    "Sustainability",
    "AR/VR",
  ],
  awards: [
    "Best Team Initiative @ MIT",
    "1st Place UniHacks 2023",
    "Most Creative @ Cornell",
  ],
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
