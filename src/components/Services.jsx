import { motion } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Full Salon Services',
    desc: 'You can pull up to our locations. We have a weekend pull up to your location service — complete unisex hair styling, cuts, color, treatments, and more, all by appointment.',
    tag: 'Most Popular',
  },
  {
    num: '02',
    title: 'Party & Event Pull-Up',
    desc: 'Bring the full mobile salon experience to your event, party, or special occasion. We park, set up, and serve your guests.',
    tag: 'Group Bookings',
  },
  {
    num: '03',
    title: 'Custom Requests',
    desc: 'A multitude of specialty services available upon request. Just ask — if we can do it, we will. Your personal touch awaits.',
    tag: 'Ask Us',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">Our <span>Services</span></h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>All services are by appointment only. Contact us to schedule your personal session.</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s) => (
            <motion.div key={s.title} className={styles.card} variants={cardAnim}>
              {s.tag && <span className={styles.cardTag}>{s.tag}</span>}
              <div className={styles.num}>{s.num}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="#booking" className={styles.cardLink}>Book this service →</a>
            </motion.div>
          ))}
        </motion.div>

        <p className={styles.note}>By appointment only &nbsp;·&nbsp; 917-640-1279 &nbsp;·&nbsp; Mon–Sun 9 AM–9 PM</p>
      </div>
    </SectionWrapper>
  )
}
