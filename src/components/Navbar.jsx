import { useState, useEffect } from 'react'
import logo from '../assets/mojo_logo.png'
import styles from './Navbar.module.css'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'Book',     href: '#booking' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <a href="#hero" className={styles.logo} onClick={handleLinkClick}>
          <img src={logo} alt="Mojo Mobile Suites Salon" className={styles.logoImg} />
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link} onClick={handleLinkClick}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#booking" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }} onClick={handleLinkClick}>
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
