import { motion } from 'framer-motion'
import Badge from './shared/Badge'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`${styles.content} container`}>
        <motion.div
          className={styles.inner}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item}>
            <Badge variant="white">Licensed &amp; Insured &nbsp;·&nbsp; Manhattan, NY</Badge>
          </motion.div>

          <motion.h1 variants={item} className={styles.heading}>
            MOJO<br />
            <span className={styles.headingAccent}>Mobile Suites</span><br />
            Salon
          </motion.h1>

          <motion.p variants={item} className={styles.tagline}>
            &ldquo;The Real Personal Touch&rdquo;
          </motion.p>

          <motion.p variants={item} className={styles.sub}>
            A licensed &amp; insured, unisex mobile salon delivering great looks with
            professionalism as our top priority — on all levels and fronts.
          </motion.p>

          <motion.div variants={item} className={styles.ctas}>
            <a href="#booking" className={styles.btnHero}>
              Book an Appointment
            </a>
            <a href="#services" className={styles.btnGhost}>
              Our Services
            </a>
          </motion.div>

          <motion.div variants={item} className={styles.hours}>
            <span>📍 Manhattan Ave, NY 10025</span>
            <span className={styles.dot}>·</span>
            <span>🕕 Mon–Sun &nbsp;6 AM – 9 PM</span>
            <span className={styles.dot}>·</span>
            <a href="tel:+12127319918" className={styles.phone}>📞 (212) 731-9918</a>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scroll}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className={styles.scrollDot}
        />
      </div>
    </section>
  )
}
