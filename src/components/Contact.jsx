import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('ag2424@cornell.edu')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">Follow Amishi</h2>
      </div>

      <div className={styles.grid}>
        {/* Email card */}
        <div className={`sp-card ${styles.card} ${styles.emailCard}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #7c3aed55, #7c3aed18)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#c084fc">
              <path d="M1.5 8.824v8.426A3.25 3.25 0 0 0 4.75 20.5h14.5a3.25 3.25 0 0 0 3.25-3.25V8.824l-9.02 5.04a3 3 0 0 1-2.96 0L1.5 8.824zM20.5 6.947l-9.356 5.227a1 1 0 0 1-.988 0L.808 6.964A3.25 3.25 0 0 1 4.026 5h15.948a3.25 3.25 0 0 1 .526 1.947z"/>
            </svg>
          </div>
          <div className="sp-card-title">Email</div>
          <div className="sp-card-sub">ag2424@cornell.edu</div>
          <button
            className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ''}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* LinkedIn card */}
        <a href="https://linkedin.com/in/amishigupta/" target="_blank" rel="noreferrer" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #0a66c255, #0a66c218)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#0a66c2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="sp-card-title">LinkedIn</div>
          <div className="sp-card-sub">Connect with me!</div>
        </a>

        {/* GitHub card */}
        <a href="https://github.com/amishi00" target="_blank" rel="noreferrer" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #33333355, #33333318)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--sp-text)">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div className="sp-card-title">GitHub</div>
          <div className="sp-card-sub">Check out my projects!</div>
        </a>

        {/* Spotify card */}
        <a href="https://open.spotify.com/user/31bd6xopw6t3odxfnc5azd2uzmva?si=093d8b6321e946ea" target="_blank" rel="noreferrer" className={`sp-card ${styles.card}`}>
          <div className={styles.art} style={{ background: 'linear-gradient(135deg, #1DB95455, #1DB95418)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <div className="sp-card-title">Spotify</div>
          <div className="sp-card-sub">See what I'm listening to!</div>
        </a>
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Open to internships & full-time roles starting December 2026</p>
        <a href="mailto:ag2424@cornell.edu" className="sp-btn sp-btn-green">
          Say Hello
        </a>
      </div>
    </section>
  )
}
