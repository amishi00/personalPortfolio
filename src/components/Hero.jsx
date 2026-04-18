import styles from './Hero.module.css'
import profilePhoto from '../assets/amishigupta.png'

export default function Hero({ playing, setPlaying }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Gradient header */}
      <div className={styles.header}>
        <div className={styles.gradient} />

        <div className={styles.artistInfo}>
          <div className={styles.photo}>
            <img src={profilePhoto} alt="Amishi Gupta" className={styles.photoImg} />
          </div>

          <div className={styles.meta}>
            <div className={styles.verified}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#3d9bff">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-2 16L6 12l1.4-1.4 2.6 2.6 6.6-6.6L18 8l-8 8z"/>
              </svg>
              <span>Verified Artist</span>
            </div>

            <h1 className={styles.name}>Amishi Gupta</h1>

            <div className={styles.stats}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>projects shipped</span>
              <span className={styles.dot}>·</span>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>internships</span>
              <span className={styles.dot}>·</span>
              <span className={styles.statNum}>Cornell CS '27</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className={styles.actions}>
        <button
          className={styles.bigPlay}
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          )}
        </button>

        <a href="https://linkedin.com/in/amishigupta/" target="_blank" rel="noreferrer" className={styles.followBtn}>
          Follow
        </a>

        <a href="mailto:amishigupta2809@gmail.com" className={styles.moreBtn} aria-label="More">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
          </svg>
        </a>

        <div className={styles.badges}>
          <span className="sp-tag green">Incoming Google Intern · GCloud Apps</span>
          <span className="sp-tag">Open to Opportunities</span>
        </div>
      </div>
    </section>
  )
}
