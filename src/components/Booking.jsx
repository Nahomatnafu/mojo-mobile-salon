import SectionWrapper from './shared/SectionWrapper'
import InstagramIcon from './shared/InstagramIcon'
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
            <div>
              <strong>Non-Refundable Deposit Required</strong>
              <p>A non-refundable deposit is required at the time of booking to secure your appointment. This deposit goes toward your total service cost.</p>
            </div>
          </aside>

          <div className={styles.fields}>
            <div className={styles.field}>Name</div>
            <div className={styles.field}>Date &amp; Time</div>
            <div className={styles.field}>Style / Service</div>
            <div className={styles.field}>Price Estimate</div>
          </div>
        </div>

        <div className={styles.ctaCol}>
          <div className={styles.ctaCard}>
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

            <p className={styles.ctaOr}>or call / text us directly</p>

            <a href="tel:+19176401279" className={styles.ctaPhone}>
              917-640-1279
            </a>

            <div className={styles.ctaFootnotes}>
              <p>By appointment only</p>
              <p>Mon–Sun &nbsp;9:00 AM – 9:00 PM</p>
              <p>Manhattan Avenue, Manhattan, NY 10025</p>
              <a href="mailto:hairwegoexpress@gmail.com" className={styles.ctaContactLink}>
                hairwegoexpress@gmail.com
              </a>
              <a
                href="https://www.instagram.com/hairwegoexpress?igsh=MXhhNXN3MXV2bnlv"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaContactLink}
              >
                <InstagramIcon size={13} />
                @hairwegoexpress
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
