import SectionWrapper from './shared/SectionWrapper'
import InstagramIcon from './shared/InstagramIcon'
import styles from './Contact.module.css'

const IG_URL = 'https://www.instagram.com/hairwegoexpress?igsh=MXhhNXN3MXV2bnlv'

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
              <div className={styles.infoLabel}>Instagram</div>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igLink}
              >
                <InstagramIcon size={16} />
                @hairwegoexpress
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#booking" className="btn-primary">
              Book an Appointment
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-outline ${styles.igBtn}`}
            >
              <InstagramIcon size={18} />
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
