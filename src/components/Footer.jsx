import logo from '../assets/hair_we_go_logo.png'
import InstagramIcon from './shared/InstagramIcon'
import FacebookIcon from './shared/FacebookIcon'
import TikTokIcon from './shared/TikTokIcon'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Pricing',   href: '#pricing' },
  { label: 'Booking',   href: '#booking' },
  { label: 'Reviews',   href: '#reviews' },
  { label: 'Contact',   href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <div className={styles.logoLink}>
            <div className={styles.logoCircle}>
              <img src={logo} alt="Hair We Go Express" className={styles.logoImg} />
            </div>
            <span className={styles.logoTagline}>Express Your Hair</span>
          </div>
          <p className={styles.tagline}>&ldquo;The Mobile Salon With a Real Personal Touch&rdquo;</p>
          <span className={styles.badge}>Licensed &amp; Insured</span>
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.info}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.infoItems}>
            <a href="tel:+19176401279" className={styles.infoItem}>
              917-640-1279
            </a>
            <a href="mailto:hairwegoexpress@gmail.com" className={styles.infoItem}>
              hairwegoexpress@gmail.com
            </a>
            <div className={styles.infoItem}>
              Mon–Sun &nbsp;9:00 AM – 9:00 PM
            </div>
            <div className={`${styles.infoItem} ${styles.socialItems}`}>
              <a href="https://www.instagram.com/hairwegoexpress?igsh=MXhhNXN3MXV2bnlv" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.facebook.com/hairwegoexpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="https://www.tiktok.com/@hairwegoexpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                <TikTokIcon size={16} />
              </a>
              <span className={styles.socialHandle}>@hairwegoexpress</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p className={styles.copy}>&copy; {year} Hair We Go Express. All rights reserved.</p>
          <a href="#booking" className={styles.bookBtn}>Book an Appointment →</a>
        </div>
      </div>
    </footer>
  )
}
