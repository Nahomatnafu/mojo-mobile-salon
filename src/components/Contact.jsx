import SectionWrapper from './shared/SectionWrapper'
import InstagramIcon from './shared/InstagramIcon'
import FacebookIcon from './shared/FacebookIcon'
import TikTokIcon from './shared/TikTokIcon'
import styles from './Contact.module.css'

const IG_URL = 'https://www.instagram.com/hairwegoexpress?igsh=MXhhNXN3MXV2bnlv'
const FB_URL = 'https://www.facebook.com/hairwegoexpress'
const TT_URL = 'https://www.tiktok.com/@hairwegoexpress'

export default function Contact() {
  return (
    <SectionWrapper id="contact" light>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Contact <span>Us</span></h2>
        </div>

        <div className={styles.card}>
          <a href="tel:+19176401279" className={styles.phoneBlock}>
            <div className={styles.phoneLabel}>Call or Text</div>
            <div className={styles.phoneNumber}>917-640-1279</div>
          </a>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Location</div>
              <div className={styles.infoValue}>Manhattan Avenue<br />Manhattan, NY 10025</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Hours</div>
              <div className={styles.infoValue}>Monday – Sunday<br />9:00 AM – 9:00 PM</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email</div>
              <a href="mailto:hairwegoexpress@gmail.com" className={styles.igLink}>
                hairwegoexpress@gmail.com
              </a>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Follow Us</div>
              <div className={styles.socialRow}>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href={TT_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                  <TikTokIcon size={18} />
                </a>
              </div>
              <span className={styles.infoValue} style={{ fontSize: '0.82rem', color: 'var(--color-gray)' }}>@hairwegoexpress</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#booking" className="btn-primary">
              Book an Appointment
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`btn-outline ${styles.igBtn}`}>
              <InstagramIcon size={18} />
              Instagram
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className={`btn-outline ${styles.igBtn}`}>
              <FacebookIcon size={18} />
              Facebook
            </a>
            <a href={TT_URL} target="_blank" rel="noopener noreferrer" className={`btn-outline ${styles.igBtn}`}>
              <TikTokIcon size={18} />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
