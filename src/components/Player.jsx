import { useState, useEffect, useRef } from 'react'
import styles from './Player.module.css'

const tracks = [
  { title: 'Building for Impact', artist: 'Amishi Gupta', album: 'Cornell CS \'27', duration: 214, color: '#1DB954' },
  { title: 'Shipping to Production', artist: 'Amishi Gupta', album: 'Amazon Internship', duration: 187, color: '#f90' },
  { title: 'Machine Learning the Hard Way', artist: 'Amishi Gupta', album: 'MIT Medlytics', duration: 243, color: '#06b6d4' },
  { title: 'AR Try-On (feat. Echo3D)', artist: 'Amishi Gupta', album: 'Summer \'24', duration: 198, color: '#7c3aed' },
  { title: 'Pythagorean Triples (Extended Mix)', artist: 'Amishi Gupta', album: 'The American Math Monthly', duration: 312, color: '#ec4899' },
]

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export default function Player({ playing, setPlaying }) {
  const [trackIdx, setTrackIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [liked, setLiked] = useState(false)
  const [volume, setVolume] = useState(70)
  const intervalRef = useRef(null)

  const track = tracks[trackIdx]

  useEffect(() => {
    clearInterval(intervalRef.current)
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= track.duration) {
            next()
            return 0
          }
          return p + 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [playing, trackIdx])

  const prev = () => {
    setTrackIdx((i) => (i - 1 + tracks.length) % tracks.length)
    setProgress(0)
  }
  const next = () => {
    setTrackIdx((i) => (i + 1) % tracks.length)
    setProgress(0)
  }

  const pct = (progress / track.duration) * 100

  return (
    <footer className={styles.player}>
      {/* Left — now playing */}
      <div className={styles.left}>
        <div className={styles.art} style={{ background: `linear-gradient(135deg, ${track.color}66, ${track.color}22)` }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={track.color}>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <div className={styles.trackInfo}>
          <span className={styles.trackTitle}>{track.title}</span>
          <span className={styles.trackArtist}>{track.artist}</span>
        </div>
        <button
          className={`${styles.iconBtn} ${liked ? styles.liked : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Like"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? 'var(--sp-green)' : 'none'} stroke={liked ? 'var(--sp-green)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Center — controls */}
      <div className={styles.center}>
        <div className={styles.controls}>
          <button className={styles.iconBtn} onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
            </svg>
          </button>

          <button
            className={styles.playBtn}
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>

          <button className={styles.iconBtn} onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
            </svg>
          </button>
        </div>

        <div className={styles.progressRow}>
          <span className={styles.time}>{fmt(progress)}</span>
          <div className={styles.track} onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const pct = (e.clientX - rect.left) / rect.width
            setProgress(Math.floor(pct * track.duration))
          }}>
            <div className={styles.fill} style={{ width: `${pct}%` }} />
            <div className={styles.thumb} style={{ left: `${pct}%` }} />
          </div>
          <span className={styles.time}>{fmt(track.duration)}</span>
        </div>
      </div>

      {/* Right — volume */}
      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Volume">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        </button>
        <div className={styles.volumeTrack} onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setVolume(Math.round(((e.clientX - rect.left) / rect.width) * 100))
        }}>
          <div className={styles.volumeFill} style={{ width: `${volume}%` }} />
        </div>
      </div>
    </footer>
  )
}
