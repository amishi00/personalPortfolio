import styles from './Sidebar.module.css'

const mainNav = [
  {
    label: 'Home',
    href: '#hero',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33A2 2 0 0 1 22 7.577V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"/>
      </svg>
    ),
  },
  {
    label: 'Experience',
    href: '#experience',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.1L8.07 4.498A1 1 0 0 0 7.5 5.43V21a1 1 0 0 0 1.371.928L15.5 19.1l7.129 2.83A1 1 0 0 0 24 21V5.43a1 1 0 0 0-.629-.928L16 1.928a1 1 0 0 0-.5.172z"/>
      </svg>
    ),
  },
  {
    label: 'Education',
    href: '#education',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3 1 9l4 2.18V15s0 3 7 3 7-3 7-3v-3.82L22 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 14.77c-.32.56-2.05 1.23-5 1.23s-4.68-.67-5-1.23v-2.04l5 2.72 5-2.72v2.04z"/>
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 3h15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-1 15a1 1 0 0 0 1 1h14V5H6a1 1 0 0 0-1 1v12zm2-9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z"/>
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 8.824v8.426A3.25 3.25 0 0 0 4.75 20.5h14.5a3.25 3.25 0 0 0 3.25-3.25V8.824l-9.02 5.04a3 3 0 0 1-2.96 0L1.5 8.824zM20.5 6.947l-9.356 5.227a1 1 0 0 1-.988 0L.808 6.964A3.25 3.25 0 0 1 4.026 5h15.948a3.25 3.25 0 0 1 .526 1.947z"/>
      </svg>
    ),
  },
]

const library = [
  { label: 'Resume', sub: 'PDF', href: '#', color: '#c084fc', icon: '📄' },
  { label: 'GitHub', sub: 'Profile', href: 'https://github.com/amishi00', color: '#f0f6ff', icon: '⌨️' },
  { label: 'LinkedIn', sub: 'Profile', href: 'https://linkedin.com/in/amishigupta/', color: '#0a66c2', icon: '💼' },
  // { label: 'SeniorSurf', sub: 'HackMIT 2024', href: 'https://github.com/amishi00/seniorSurf', color: '#1DB954', icon: '🌐' },
  // { label: 'CULearn', sub: 'iOS App', href: 'https://github.com/amishi00/CULearn', color: '#f59e0b', icon: '📱' },
  // { label: 'SheMoney', sub: 'FinTech App', href: 'https://github.com/amishi00/sheMoney', color: '#ec4899', icon: '💸' },
]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <a href="#hero" className={styles.logo}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span>amishi</span>
      </a>

      {/* Main nav */}
      <nav className={styles.nav}>
        {mainNav.map((item) => (
          <a key={item.label} href={item.href} className={styles.navItem}>
            <span className={styles.navIcon}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Library */}
      <div className={styles.library}>
        <div className={styles.libraryHeader}>
          <div className={styles.libraryTitle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.1L8.07 4.498A1 1 0 0 0 7.5 5.43V21a1 1 0 0 0 1.371.928L15.5 19.1l7.129 2.83A1 1 0 0 0 24 21V5.43a1 1 0 0 0-.629-.928L16 1.928a1 1 0 0 0-.5.172z"/>
            </svg>
            Your Library
          </div>
        </div>

        <div className={styles.libraryList}>
          {library.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={styles.libItem}
            >
              <div className={styles.libArt} style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                <span className={styles.libIcon}>{item.icon}</span>
              </div>
              <div className={styles.libInfo}>
                <span className={styles.libName}>{item.label}</span>
                <span className={styles.libSub}>{item.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
