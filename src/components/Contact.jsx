import { QRCodeSVG } from 'qrcode.react'
import SectionWrapper from './shared/SectionWrapper'
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

        <div className={styles.grid}>
          {/* Contact Details */}
          <div className={styles.details}>
            <a href="tel:+12127319918" className={styles.phoneBlock}>
              <div>
                <div className={styles.phoneLabel}>Call or Text</div>
                <div className={styles.phoneNumber}>(212) 731-9918</div>
              </div>
            </a>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Manhattan Avenue<br />Manhattan, NY 10025</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <div className={styles.infoLabel}>Hours</div>
                  <div className={styles.infoValue}>Monday – Sunday<br />6:00 AM – 9:00 PM</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <div className={styles.infoLabel}>Instagram</div>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.igLink}
                  >
                    @mojomobilesuites
                  </a>
                </div>
              </div>
            </div>

            <a href="#booking" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Book an Appointment
            </a>
          </div>

          {/* QR Code */}
          <div className={styles.qrCol}>
            <div className={styles.qrCard}>
              <div className={styles.qrWrap}>
                <QRCodeSVG
                  value={IG_URL}
                  size={180}
                  fgColor="#7B2FBE"
                  bgColor="#F5F0FF"
                  level="M"
                />
              </div>
              <p className={styles.qrCaption}>
                Scan to follow us on Instagram
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.qrLink}
              >
                @mojomobilesuites
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
