import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectModal from './ProjectModal'

import seniorsurf from '../assets/portfolio/seniorsurf.png'
import culearn from '../assets/portfolio/CULearn.png'
import shemoney from '../assets/portfolio/sheMoney.png'
import mindfulminute from '../assets/portfolio/mindfulminute.png'
import mammogram from '../assets/portfolio/mammogram.png'
import ar3d from '../assets/portfolio/ar3d.jpg'
import connect4 from '../assets/portfolio/connect4.png'
import simplisavings from '../assets/portfolio/simplisavings.png'
import dyslexia from '../assets/portfolio/dyslexia.png'
import hemophilia from '../assets/portfolio/hemophilia.png'
import triples from '../assets/portfolio/exploringtriples.png'

const projects = [
  {
    title: 'StartupMatch',
    category: 'Information Retrieval · Full-Stack',
    desc: 'An information retrieval system that helps students find early-stage startups whose hiring needs match their technical skills and interests. Users submit free-form skill queries or upload resume skills, and the system returns a ranked list of YC-backed, Series A, or Series B startups. Aggregates startup data from multiple sources into one searchable platform, reducing the need to manually browse job boards. Uses SVD and TF-IDF for retrieval and RAG (LLMs) to suggest startups based on user queries.',
    tags: ['Python', 'SVD', 'TF-IDF', 'RAG', 'LLMs', 'Information Retrieval', 'React', 'Flask'],
    img: null,
    emoji: '🚀',
    color: '#6366f1',
    link: 'https://github.com/wsonja/Startup-Match',
  },
  {
    title: 'SeniorSurf',
    category: 'AI · Web Extension',
    desc: 'A Chrome extension that helps elderly users navigate websites using Gemini AI. Uses DOM manipulation to simplify and explain web content in real time. Presented at HackMIT 2024.',
    tags: ['HTML/CSS/JS', 'Python', 'Flask', 'Gemini AI', 'DOM API'],
    img: seniorsurf,
    link: 'https://github.com/amishi00/seniorSurf',
    badge: '🏆 HackMIT 2024',
  },
  {
    title: 'CULearn',
    category: 'iOS App',
    desc: 'An iOS tutoring marketplace connecting Cornell students as tutors and tutees, with scheduling, profiles, and in-app messaging. Won Most Creative at Cornell AppDev\'s Hack Challenge.',
    tags: ['Swift', 'SwiftUI', 'iOS', 'UI/UX'],
    img: culearn,
    link: 'https://github.com/amishi00/CULearn',
    badge: '🏆 Most Creative, Cornell',
  },
  {
    title: 'SheMoney',
    category: 'iOS · FinTech',
    desc: 'An iOS financial literacy app with point-based savings incentives and a pay gap analysis feature. Designed to promote gender financial equality through education and gamification.',
    tags: ['Swift', 'SwiftUI', 'iOS', 'ML', 'Finance'],
    img: shemoney,
    link: 'https://github.com/amishi00/sheMoney',
  },
  {
    title: 'Mindful Minute',
    category: 'Web · Mental Health',
    desc: 'A mental health assessment tool that diagnoses conditions via survey responses using NLP. Built to make mental health screening more accessible. First place at UniHacks 2023 Mental Health Track.',
    tags: ['Web', 'NLP', 'JavaScript', 'Mental Health'],
    img: mindfulminute,
    link: 'https://mindfulminuteaia.wixsite.com/mindful-minute',
    badge: '🥇 1st Place, UniHacks 2023',
  },
  {
    title: 'Breast Cancer CNN',
    category: 'ML · Healthcare',
    desc: 'Binary detection of breast cancer in mammograms using a Convolutional Neural Network. Trained on labeled mammogram datasets to assist with early diagnosis.',
    tags: ['Python', 'CNN', 'TensorFlow', 'Healthcare', 'Computer Vision'],
    img: mammogram,
    link: 'https://github.com/amishi00/BreastCancerMammogram',
  },
  {
    title: 'AR 3D Try-On',
    category: 'AR/VR · iOS',
    desc: 'A real-time virtual dress fitting application built during my Echo3D internship. Uses augmented reality to overlay 3D clothing models onto the user via their iPhone camera.',
    tags: ['SwiftUI', 'ARKit', 'Echo3D API', 'iOS', '3D Rendering'],
    img: ar3d,
    link: 'https://github.com/amishi00',
  },
  {
    title: 'Connect4 in OCaml',
    category: 'Game · AI',
    desc: 'A fully functional Connect 4 game implemented in OCaml, featuring both local multiplayer and an AI opponent powered by the minimax algorithm with alpha-beta pruning.',
    tags: ['OCaml', 'Minimax', 'Alpha-Beta Pruning', 'Functional Programming'],
    img: connect4,
    link: 'https://github.com/amishi00/OCamlConnect4',
  },
  {
    title: 'Simpli Savings',
    category: 'Web · Sustainability',
    desc: 'A web platform that rewards users for reducing their electricity consumption. Tracks energy usage and provides incentives to build sustainable habits.',
    tags: ['JavaScript', 'Web', 'Sustainability', 'Data Viz'],
    img: simplisavings,
    link: 'https://github.com/amishi00/SimpliSavings',
  },
  {
    title: 'Dyslexia Detection',
    category: 'ML · Healthcare',
    desc: 'A machine learning model that analyzes handwriting images to detect markers of dyslexia. Achieved 89.4% validation accuracy at MIT Beaver Works Medlytics program.',
    tags: ['Python', 'ML', 'Computer Vision', 'Healthcare', 'Image Classification'],
    img: dyslexia,
    link: 'https://github.com/amishi00',
    badge: '89.4% Accuracy',
  },
]

const research = [
  {
    title: 'Factor-VIII Gene Expression',
    category: 'Bioengineering · Gene Therapy',
    desc: 'Testing gene variants to maximize Factor-VIII protein expression for hemophilia treatment. Conducted at UNC Chapel Hill Gene Therapy Center using gel electrophoresis and cellular cloning.',
    tags: ['Gene Therapy', 'Hemophilia', 'Gel Electrophoresis', 'Molecular Biology'],
    img: hemophilia,
    link: 'https://drive.google.com/file/d/1BVJeD6bVC59eqAOo8DWGjl9AHn_EPRD_/view',
    linkLabel: 'View Paper',
    sub: 'UNC Chapel Hill Gene Therapy Center',
  },
  {
    title: 'Pythagorean Triples',
    category: 'Mathematics · Number Theory',
    desc: 'Mathematical research proving that infinitely many "very good" Pythagorean triples exist. Earned 3rd place at NCSEF Region 3B and was published in The American Math Monthly.',
    tags: ['Number Theory', 'Proof Writing', 'Combinatorics'],
    img: triples,
    link: 'https://drive.google.com/file/d/1rhnJsmX_MwrULcICBR26ZmtoWVvSAJ6B/view',
    linkLabel: 'View Paper',
    sub: 'Published · The American Math Monthly',
    badge: '3rd Place NCSEF',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">Projects</h2>
        <a href="https://github.com/amishi00" target="_blank" rel="noreferrer" className="sp-see-all">See all on GitHub</a>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <button key={p.title} className={`sp-card ${styles.card}`} onClick={() => setSelected(p)}>
            <div className="sp-art" style={!p.img ? { background: `linear-gradient(135deg, ${p.color}55, ${p.color}18)` } : undefined}>
              {p.img
                ? <img src={p.img} alt={p.title} className={styles.artImg} />
                : <span style={{ fontSize: '2.4rem' }}>{p.emoji}</span>
              }
              {p.badge && <div className={styles.artBadge}>{p.badge}</div>}
              <span className="sp-play-btn" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </span>
            </div>
            <div className="sp-card-title">{p.title}</div>
            <div className="sp-card-sub">{p.category}</div>
          </button>
        ))}
      </div>

      {/* Research */}
      <div className="sp-section-header" style={{ marginTop: 48 }}>
        <h2 className="sp-section-title">Research & Papers</h2>
      </div>

      <div className={styles.researchGrid}>
        {research.map((r) => (
          <button key={r.title} className={`sp-card ${styles.researchCard}`} onClick={() => setSelected(r)}>
            <div className={styles.researchArt}>
              <img src={r.img} alt={r.title} className={styles.artImg} />
              {r.badge && <div className={styles.artBadge}>{r.badge}</div>}
            </div>
            <div className={styles.researchText}>
              <div className="sp-card-title">{r.title}</div>
              <div className="sp-card-sub">{r.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
