import SectionWrapper from './shared/SectionWrapper'
import InstagramIcon from './shared/InstagramIcon'
import styles from './Contact.module.css'

const IG_URL = 'https://www.instagram.com/mojomobilesuites'

export default function Contact() {
  return (
    <SectionWrapper id="contact" light>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Contact <span>Us</span></h2>
        </div>

        <div className={styles.card}>
          <a href="tel:+12127319918" className={styles.phoneBlock}>
            <div className={styles.phoneLabel}>Call or Text</div>
            <div className={styles.phoneNumber}>(212) 731-9918</div>
          </a>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Location</div>
              <div className={styles.infoValue}>Manhattan Avenue<br />Manhattan, NY 10025</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Hours</div>
              <div className={styles.infoValue}>Monday – Sunday<br />6:00 AM – 9:00 PM</div>
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
                @mojomobilesuites
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
