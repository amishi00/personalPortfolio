import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">Follow Amishi</h2>
      </div>

      <div className={styles.grid}>
        <a href="mailto:amishigupta2809@gmail.com" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #7c3aed55, #7c3aed18)' }}>
            <span className={styles.icon}>📧</span>
          </div>
          <div className="sp-card-title">Email</div>
          <div className="sp-card-sub">amishigupta2809@gmail.com</div>
        </a>

        <a href="https://linkedin.com/in/amishigupta/" target="_blank" rel="noreferrer" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #0a66c255, #0a66c218)' }}>
            <span className={styles.icon}>💼</span>
          </div>
          <div className="sp-card-title">LinkedIn</div>
          <div className="sp-card-sub">linkedin.com/in/amishigupta</div>
        </a>

        <a href="https://github.com/amishi00" target="_blank" rel="noreferrer" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #33333355, #33333318)' }}>
            <span className={styles.icon}>⌨️</span>
          </div>
          <div className="sp-card-title">GitHub</div>
          <div className="sp-card-sub">github.com/amishi00</div>
        </a>
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Open to internships & full-time roles starting 2027</p>
        <a href="mailto:amishigupta2809@gmail.com" className="sp-btn sp-btn-green">
          Say Hello
        </a>
      </div>
    </section>
  )
}
