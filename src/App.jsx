import { useState, useEffect, useRef } from 'react'
import { Analytics } from "@vercel/analytics/next"
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [playing, setPlaying] = useState(false)
  const [page, setPage] = useState('home')
  const mainRef = useRef(null)
  const pendingSection = useRef(null)

  const navigateTo = (newPage, sectionId = null) => {
    pendingSection.current = sectionId
    setPage(newPage)
  }

  useEffect(() => {
    if (pendingSection.current) {
      const sectionId = pendingSection.current
      pendingSection.current = null
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        })
      })
    } else {
      if (mainRef.current) mainRef.current.scrollTo({ top: 0 })
    }
  }, [page])

  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} navigate={navigateTo} />

      <main className="mainPanel" id="mainPanel" ref={mainRef}>
        {page === 'home' && (
          <>
            <Hero playing={playing} setPlaying={setPlaying} />
            <div className="mainContent">
              <About />
              <Skills />
              <Contact />
            </div>
          </>
        )}

        {page === 'experience' && (
          <div className="mainContent" style={{ paddingTop: 40 }}>
            <Experience />
            <Education />
          </div>
        )}

        {page === 'projects' && (
          <div className="mainContent" style={{ paddingTop: 40 }}>
            <Projects />
          </div>
        )}

      </main>

      <Player playing={playing} setPlaying={setPlaying} />
    </div>
  )
}
