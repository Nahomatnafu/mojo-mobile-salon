import SectionWrapper from './shared/SectionWrapper'
import styles from './Booking.module.css'

export default function Booking() {
  return (
    <SectionWrapper id="booking" light>
      <div className={`${styles.inner} container`}>
        <div className={styles.textCol}>
          <span className="section-label">Schedule Your Visit</span>
          <h2 className="section-heading">
            Book Your <span>Appointment</span>
          </h2>
          <p className="section-sub">
            All services are by appointment only. Choose your date, time, and service —
            we&rsquo;ll bring the full salon experience directly to you.
          </p>

          <aside className={styles.depositNotice}>
            <span className={styles.depositIcon}>💳</span>
            <div>
              <strong>$25 Non-Refundable Deposit Required</strong>
              <p>A $25 deposit is required at the time of booking to secure your appointment. This deposit goes toward your total service cost.</p>
            </div>
          </aside>

          <div className={styles.fields}>
            <div className={styles.field}>
              <span className={styles.fieldIcon}>👤</span>
              <span>Name</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldIcon}>📅</span>
              <span>Date &amp; Time</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldIcon}>✂️</span>
              <span>Style / Service</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldIcon}>💰</span>
              <span>Price Estimate</span>
            </div>
          </div>
        </div>

        <div className={styles.ctaCol}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>📆</div>
            <h3 className={styles.ctaTitle}>Ready to Book?</h3>
            <p className={styles.ctaSub}>
              Click below to select your date, time, and service. Our booking tool will guide you through the process.
            </p>

            {/* TODO: Replace with real Calendly/Square booking URL before launch */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Book an Appointment
            </a>

            <p className={styles.ctaOr}>or call us directly</p>

            <a href="tel:+12127319918" className={styles.ctaPhone}>
              📞 (212) 731-9918
            </a>

            <div className={styles.ctaFootnotes}>
              <p>📅 By appointment only</p>
              <p>🕕 Mon–Sun &nbsp;6:00 AM – 9:00 PM</p>
              <p>📍 Manhattan Avenue, Manhattan, NY 10025</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
