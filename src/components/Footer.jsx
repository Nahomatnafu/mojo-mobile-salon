import logo from '../assets/mojo_logo.png'
import InstagramIcon from './shared/InstagramIcon'
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
              <img src={logo} alt="Mojo Mobile Suites Salon" className={styles.logoImg} />
            </div>
          </div>
          <p className={styles.tagline}>&ldquo;The Real Personal Touch&rdquo;</p>
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
            <a href="tel:+12127319918" className={styles.infoItem}>
              (212) 731-9918
            </a>
            <div className={styles.infoItem}>
              Manhattan Ave, Manhattan, NY 10025
            </div>
            <div className={styles.infoItem}>
              Mon–Sun &nbsp;6:00 AM – 9:00 PM
            </div>
            <a
              href="https://www.instagram.com/mojomobilesuites"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.infoItem} ${styles.igItem}`}
            >
              <InstagramIcon size={15} />
              @mojomobilesuites
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p className={styles.copy}>&copy; {year} Mojo Mobile Suites Salon. All rights reserved.</p>
          <a href="#booking" className={styles.bookBtn}>Book an Appointment →</a>
        </div>
      </div>
    </footer>
  )
}
