import { useState } from 'react'
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

  return (
    <div className="app">
      <Sidebar />

      <main className="mainPanel" id="mainPanel">
        <Hero playing={playing} setPlaying={setPlaying} />
        <div className="mainContent">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>

      <Player playing={playing} setPlaying={setPlaying} />
    </div>
  )
}
