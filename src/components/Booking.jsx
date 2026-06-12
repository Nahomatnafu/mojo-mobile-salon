import { useEffect } from 'react'
import SectionWrapper from './shared/SectionWrapper'
import styles from './Booking.module.css'

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <SectionWrapper id="booking" light>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Schedule Your Visit</span>
          <h2 className="section-heading">
            Book Your <span>Appointment</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            All services are by appointment only. Choose your date, time, and service —
            we&rsquo;ll bring the full salon experience directly to you.
          </p>
        </div>

        <aside className={styles.depositNotice}>
          <strong>Non-Refundable Deposit Required</strong>
          <p>A deposit is required at booking to secure your appointment and goes toward your total service cost.</p>
        </aside>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hairwegoexpress/30min?primary_color=bd00ff"
          style={{ minWidth: '320px', height: '700px' }}
        />

        <div className={styles.footnotes}>
          <span>By appointment only</span>
          <span className={styles.dot}>·</span>
          <a href="tel:+19176401279" className={styles.phone}>917-640-1279</a>
          <span className={styles.dot}>·</span>
          <span>Mon–Sun &nbsp;9:00 AM – 9:00 PM</span>
        </div>
      </div>
    </SectionWrapper>
  )
}
