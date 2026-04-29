import { useState, useEffect } from 'react'
import styles from './About.module.css'

import dance   from '../assets/gallery/dance.jpeg'
import sailing from '../assets/gallery/sailing.jpg'
import books   from '../assets/gallery/books.jpg'
import food    from '../assets/gallery/food.jpg'
import sunset  from '../assets/gallery/sunset.jpg'
import ktp from '../assets/gallery/nme.png'

const photos = [dance, ktp, sailing, books, food, sunset]
const INTERVAL = 3500

export default function About() {
  const [current, setCurrent] = useState(0)
  const [fading,  setFading]  = useState(false)

  const advance = (getNext) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(getNext)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setFading(false))
      })
    }, 400)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      advance(c => (c + 1) % photos.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    if (idx === current) return
    advance(() => idx)
  }

  return (
    <section id="about" className="sp-section">
      <div className="sp-section-header">
        <h2 className="sp-section-title">About</h2>
      </div>

      <div className={styles.card}>
        {/* Rotating gallery banner */}
        <div className={styles.banner}>
          <img
            src={photos[current]}
            alt="gallery"
            className={`${styles.bannerImg} ${fading ? styles.bannerImgFade : ''}`}
          />
          <div className={styles.dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.bio}>
            I'm a Computer Science student at Cornell University with a strong interest in AI, full-stack engineering, and the intersection of
            technology and biology for real-world impact. I am graduating in December 2026 and am looking for full-time jobs, especially pertaining to SWE/ML roles at
            health-tech companies. If you or someone you know think I could be a good fit, feel free to contact me at ag2424@cornell.edu - I promise to get back to you.
            Feel free to explore my experience section for internships I've worked on and my projects section for some of the things I've been building recently.
          </p>

          <p className={styles.bio}>
            Outside of coding, I spend a lot of time learning new things, dancing with Cornell Nazaqat and
            exploring other styles. Lately, I've been obsessed with strawberry oatmilk iced matchas (see my Beli
            rankings @amishig), teaching as a Technology Educator for new members at KTP, and reading (currently on some
            soul-opening books by Khaled Hosseini). As someone about to graduate college, I've developed a knack for going on side-quests with friends
            such as sailing, learning how to write Luwein Hieroglyphics, or travelling across the country for spontaneous trips.
          </p>
        </div>
      </div>
    </section>
  )
}
