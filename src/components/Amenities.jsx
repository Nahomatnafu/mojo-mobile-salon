import { motion } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import styles from './Amenities.module.css'

const amenities = [
  { letter: 'Wi', label: 'Free Wi-Fi',          desc: 'Stay connected throughout your visit' },
  { letter: 'TV', label: 'Cable TV',            desc: 'Enjoy live TV while you relax' },
  { letter: 'M',  label: 'Music',               desc: 'Great vibes, your soundtrack' },
  { letter: 'C',  label: 'Phone Charging',      desc: 'Keep your devices powered up' },
  { letter: 'D',  label: 'Complimentary Drinks', desc: 'Refresh with a complimentary beverage' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemAnim = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Amenities() {
  return (
    <SectionWrapper id="amenities" light>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Onboard Experience</span>
          <h2 className="section-heading">What&rsquo;s <span>Onboard</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Step into our mobile suite and experience comfort-first service from the moment you arrive.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {amenities.map((a) => (
            <motion.div key={a.label} className={styles.item} variants={itemAnim}>
              <div className={styles.iconWrap}>
                <span className={styles.letter}>{a.letter}</span>
              </div>
              <h3 className={styles.label}>{a.label}</h3>
              <p className={styles.desc}>{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
