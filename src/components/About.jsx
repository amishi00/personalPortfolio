import styles from './About.module.css'

// const extras = [
//   { icon: '🔬', title: 'Student Researcher', org: 'Cornell ORIE — Prof. Ziv Scully' },
//   { icon: '🔑', title: 'VP of New Member Education', org: 'Kappa Theta Pi' },
//   { icon: '💃', title: 'Treasurer', org: 'Cornell Nazaqat Dance Club' },
//   { icon: '🤖', title: 'Object Detection (YOLOv8 + ROS)', org: 'Cornell Nexus' },
// ]

export default function About() {
  return (
    <section id="about" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">About</h2>
      </div>

      <div className={styles.card}>
        {/* Big about banner — placeholder for a background photo */}
        <div className={styles.banner}>
          <span className={styles.bannerPlaceholder}>Add a banner photo</span>
        </div>

        <div className={styles.body}>
          <div className={styles.listeners}>
            {/* <span className={styles.num}>10+</span>
            <span className={styles.numLabel}>projects shipped</span>
            <span className={styles.sep}>·</span>
            <span className={styles.num}>2</span>
            <span className={styles.numLabel}>internships</span>
            <span className={styles.sep}>·</span>
            <span className={styles.num}>2</span>
            <span className={styles.numLabel}>research papers</span> */}
          </div>

          <p className={styles.bio}>
            I'm a Computer Science student at Cornell University (BS '27) with a minor in AI & Business,
            driven by a passion to build software that solves real problems. From detecting dyslexia with
            ML to building full-stack AWS consoles at Amazon, I thrive at the intersection of
            technology and human impact.
          </p>

          <p className={styles.bio}>
            My work spans healthcare, sustainability, fintech, and AR/VR — I love exploring unexpected
            places where code can make a difference. When I'm not shipping, I'm teaching math,
            leading KTP, or publishing research in math journals.
          </p>

          {/* <div className={styles.extrasTitle}>On Stage & Off</div>
          <div className={styles.extras}>
            {extras.map((e) => (
              <div key={e.title} className={styles.extraItem}>
                <span className={styles.extraIcon}>{e.icon}</span>
                <div>
                  <div className={styles.extraTitle}>{e.title}</div>
                  <div className={styles.extraOrg}>{e.org}</div>
                </div>
              </div>
            ))} */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
