import { useState } from 'react'
import styles from './Projects.module.css'

const all = [
  {
    title: 'SeniorSurf',
    category: 'AI · Web Extension',
    description: 'Chrome extension helping elderly users navigate websites using Gemini AI. Presented at HackMIT 2024.',
    tags: ['HTML/CSS/JS', 'Python', 'Flask', 'Gemini AI'],
    link: 'https://github.com/amishi00/seniorSurf',
    highlight: '🏆 HackMIT 2024',
    color: '#7c3aed',
  },
  {
    title: 'CULearn',
    category: 'iOS App',
    description: 'iOS tutoring platform connecting Cornell students as tutors and tutees. Winner of Most Creative at Cornell AppDev\'s Hack Challenge.',
    tags: ['Swift', 'iOS', 'UI/UX'],
    link: 'https://github.com/amishi00/CULearn',
    highlight: '🏆 Most Creative, Cornell',
    color: '#06b6d4',
  },
  {
    title: 'SheMoney',
    category: 'iOS · FinTech',
    description: 'iOS Financial Literacy App with point-based savings incentives and pay gap analysis to promote gender financial equality.',
    tags: ['iOS', 'Swift', 'ML', 'Finance'],
    link: 'https://github.com/amishi00/sheMoney',
    color: '#ec4899',
  },
  {
    title: 'Mindful Minute',
    category: 'Web · Mental Health',
    description: 'Mental health assessment tool diagnosing conditions via survey responses using NLP. First place at UniHacks 2023 Mental Health Track.',
    tags: ['Web', 'NLP', 'Mental Health'],
    link: 'https://mindfulminuteaia.wixsite.com/mindful-minute',
    highlight: '🥇 1st Place, UniHacks 2023',
    color: '#10b981',
  },
  {
    title: 'Breast Cancer Prediction',
    category: 'ML · Healthcare',
    description: 'Binary detection of breast cancer in mammograms using a Convolutional Neural Network (CNN) for early diagnosis.',
    tags: ['Python', 'CNN', 'TensorFlow', 'Healthcare'],
    link: 'https://github.com/amishi00/BreastCancerMammogram',
    color: '#f59e0b',
  },
  {
    title: 'AR 3D Try-On Dresses',
    category: 'AR/VR · iOS',
    description: 'Real-time virtual dress fitting application built as an intern at Echo3D using SwiftUI and AR technologies.',
    tags: ['SwiftUI', 'AR', 'Echo3D API', 'iOS'],
    link: 'https://github.com/amishi00',
    color: '#7c3aed',
  },
  {
    title: 'Connect4 in OCaml',
    category: 'Game · AI',
    description: 'Connect 4 game with multiplayer mode and AI opponent using the minimax algorithm, implemented in OCaml.',
    tags: ['OCaml', 'Minimax', 'Game AI'],
    link: 'https://github.com/amishi00/OCamlConnect4',
    color: '#06b6d4',
  },
  {
    title: 'Simpli Savings',
    category: 'Web · Sustainability',
    description: 'Platform that rewards users for reducing electricity consumption, promoting sustainable energy habits.',
    tags: ['Web', 'Sustainability', 'JavaScript'],
    link: 'https://github.com/amishi00/SimpliSavings',
    color: '#10b981',
  },
  {
    title: 'Dyslexia Detection',
    category: 'ML · Healthcare',
    description: 'Machine learning model analyzing handwriting images to detect dyslexia, achieving 89.4% validation accuracy at MIT Medlytics.',
    tags: ['Python', 'ML', 'Computer Vision'],
    link: 'https://github.com/amishi00',
    highlight: '89.4% Accuracy',
    color: '#f59e0b',
  },
]

const research = [
  {
    title: 'Factor-VIII Gene Expression Research',
    org: 'UNC Chapel Hill Gene Therapy Center',
    description: 'Testing gene variants to maximize Factor-VIII protein expression for hemophilia treatment using gel electrophoresis and cellular cloning.',
    link: 'https://drive.google.com/file/d/1BVJeD6bVC59eqAOo8DWGjl9AHn_EPRD_/view',
    tags: ['Gene Therapy', 'Hemophilia', 'Lab Research'],
  },
  {
    title: 'Exploring Pythagorean Triples',
    org: 'Published in The American Math Monthly',
    description: 'Mathematical research proving that infinitely many "very good" Pythagorean triples exist. Earned 3rd place at NCSEF Region 3B.',
    link: 'https://drive.google.com/file/d/1rhnJsmX_MwrULcICBR26ZmtoWVvSAJ6B/view',
    tags: ['Mathematics', 'Number Theory', 'Research'],
    highlight: '3rd Place, NCSEF',
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? all : all.slice(0, 6)

  return (
    <section id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Projects & Research</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of projects spanning ML, mobile, web, and AR — many built at hackathons or internships.
          </p>
        </div>

        <div className={styles.grid}>
          {visible.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
              style={{ '--card-accent': p.color }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>

              {p.highlight && (
                <span className={`tag green ${styles.badge}`}>{p.highlight}</span>
              )}

              <p className={styles.category}>{p.category}</p>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {!showAll && all.length > 6 && (
          <div className={styles.showMore}>
            <button className="btn btn-ghost" onClick={() => setShowAll(true)}>
              Show {all.length - 6} more projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
              </svg>
            </button>
          </div>
        )}

        {/* Research section */}
        <div className={styles.researchSection}>
          <h3 className={styles.researchHeading}>Research & Papers</h3>
          <div className={styles.researchGrid}>
            {research.map((r) => (
              <a
                key={r.title}
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className={styles.researchCard}
              >
                <div className={styles.researchTop}>
                  <span className={styles.researchIcon}>📄</span>
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
                {r.highlight && (
                  <span className={`tag green ${styles.badge}`}>{r.highlight}</span>
                )}
                <p className={styles.researchOrg}>{r.org}</p>
                <h4 className={styles.researchTitle}>{r.title}</h4>
                <p className={styles.desc}>{r.description}</p>
                <div className={styles.tags}>
                  {r.tags.map((t) => (
                    <span key={t} className="tag teal">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
