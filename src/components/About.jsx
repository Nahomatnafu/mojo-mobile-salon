import { motion } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import Badge from './shared/Badge'
import styles from './About.module.css'

const pills = [
  'Licensed & Insured',
  'Unisex Services',
  'By Appointment Only',
  'Manhattan, NY',
]

export default function About() {
  return (
    <SectionWrapper id="about" light>
      <div className={`${styles.grid} container`}>
        <div className={styles.copy}>
          <span className="section-label">Who We Are</span>
          <h2 className="section-heading">
            A <span>Personal</span> Experience<br />Like No Other
          </h2>
          <p className={styles.body}>
            At <strong>Mojo Mobile Suites Salon</strong>, we believe beauty is deeply{' '}
            <em className={styles.em}>personal</em>. That&rsquo;s why we bring the salon directly
            to you — a fully licensed &amp; insured, unisex mobile salon providing a
            multitude of services on your terms, on your schedule.
          </p>
          <p className={styles.body}>
            Every visit is a <em className={styles.em}>personal</em> encounter: great looks
            delivered with professionalism as our top priority on all levels and fronts.
            From everyday styling to full event production, your comfort and satisfaction
            are the standard — always{' '}
            <em className={styles.em}>personal</em>, always professional.
          </p>
        </div>

        <motion.div
          className={styles.pillsWrap}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.decorCircle} />
          <div className={styles.pills}>
            {pills.map((p) => (
              <Badge key={p}>{p}</Badge>
            ))}
          </div>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark}>&ldquo;</span>
            Great looks with professionalism as our top priority.
            <span className={styles.quoteMark}>&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
