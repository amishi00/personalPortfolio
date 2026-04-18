import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <div className={styles.imgWrap}>
          {project.img
            ? <img src={project.img} alt={project.title} className={styles.img} />
            : <div className={styles.imgPlaceholder} style={{ background: `linear-gradient(135deg, ${project.color}55, ${project.color}18)` }}><span className={styles.placeholderEmoji}>{project.emoji}</span></div>
          }
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>
          <div className={styles.header}>
            <div>
              {project.badge && <span className={`sp-tag ${styles.badge}`}>{project.badge}</span>}
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.category}>{project.category}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`sp-btn sp-btn-green ${styles.ghBtn}`}
            >
              {project.linkLabel === 'View Paper' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              )}
              {project.linkLabel ?? 'View on GitHub'}
            </a>
          </div>

          <p className={styles.desc}>{project.desc}</p>

          <div className={styles.tagsSection}>
            <p className={styles.tagsLabel}>Skills & Technologies</p>
            <div className={styles.tags}>
              {project.tags.map((t) => <span key={t} className="sp-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
