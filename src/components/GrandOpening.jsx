import { motion } from 'framer-motion'
import grandOpeningImg from '../assets/grand_opening.png'
import styles from './GrandOpening.module.css'

export default function GrandOpening() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className={styles.textCol}>
          <span className={styles.pill}>Now Open</span>
          <h2 className={styles.heading}>
            Grand<br /><span>Opening</span>
          </h2>
          <p className={styles.sub}>
            Hair We Go Express is officially open and serving Manhattan!
            Book your first appointment today and experience the mobile salon
            that comes directly to you.
          </p>
          <a href="#booking" className={styles.btn}>Book Your Appointment →</a>
        </div>

        <div className={styles.imgCol}>
          <img
            src={grandOpeningImg}
            alt="Hair We Go Express Grand Opening"
            className={styles.photo}
          />
        </div>
      </motion.div>
    </section>
  )
}
