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
            <span className={styles.numLabel}>Developer</span>
            <span className={styles.sep}>·</span>
            <span className={styles.num}>2</span>
            <span className={styles.numLabel}>Explorer</span>
            <span className={styles.sep}>·</span>
            <span className={styles.num}>2</span>
            <span className={styles.numLabel}>Analyst</span> */}
          </div>

          <p className={styles.bio}>
            I’m a Computer Science student at Cornell University with a strong interest in AI, full-stack engineering, and the intersection of 
            technology and biology for real-world impact. I am graduating in December 2026 and am looking for full-time jobs, especially pertaining to SWE/ML roles at 
            health-tech companies. If you or someone you know think I could be a good fit, feel free to contact me at ag2424@cornell.edu - I promise to get back to you.
            Feel free to explore my experience section for internships I’ve worked on and my projects section for some of the things I’ve been building recently.
          </p>

          <p className={styles.bio}>
            Outside of coding, I spend a lot of time learning new things, dancing with Cornell Nazaqat and 
            exploring other styles. Lately, I’ve been obsessed with strawberry oatmilk iced matchas (see my Beli 
            rankings @amishig), teaching as a Technology Educator for new members at KTP, and reading (currently on some
            soul-opening books by Khaled Hosseini). As someone about to graduate college, I've developed a knack for going on side-quests with friends
            such as sailing, learning how to write Luwein Hieroglyphics, or travelling across the country for spontaneous trips.
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
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
