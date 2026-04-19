import { useState, useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import profilePhoto from '../assets/amishigupta.png'
import resumeUrl from '../assets/Gupta_Amishi_Resume.pdf'

export default function Hero({ playing, setPlaying }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

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

            <p className={styles.statLabel}>
              Cornell Engineering · Computer Science & AI 
            </p>
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

        <a href="https://github.com/amishi00" target="_blank" rel="noreferrer" className={styles.followBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6, flexShrink: 0 }}>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>

        <div className={styles.moreWrap} ref={menuRef}>
          <button
            className={styles.moreBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="More options"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
            </svg>
          </button>

          {menuOpen && (
            <div className={styles.dropdown}>
              <a
                href="mailto:amishigupta2809@gmail.com"
                className={styles.dropItem}
                onClick={() => setMenuOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.824v8.426A3.25 3.25 0 0 0 4.75 20.5h14.5a3.25 3.25 0 0 0 3.25-3.25V8.824l-9.02 5.04a3 3 0 0 1-2.96 0L1.5 8.824zM20.5 6.947l-9.356 5.227a1 1 0 0 1-.988 0L.808 6.964A3.25 3.25 0 0 1 4.026 5h15.948a3.25 3.25 0 0 1 .526 1.947z"/>
                </svg>
                Email
              </a>
              <a
                href="https://linkedin.com/in/amishigupta/"
                target="_blank"
                rel="noreferrer"
                className={styles.dropItem}
                onClick={() => setMenuOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.dropItem}
                onClick={() => setMenuOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                Resume
              </a>
            </div>
          )}
        </div>

        <div className={styles.badges}>
          <span className="sp-tag green">Developer</span>
          <span className="sp-tag">Student</span>
          <span className="sp-tag green">Explorer</span>
        </div>
      </div>
    </section>
  )
}
