import { motion } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import styles from './Amenities.module.css'

import wifiImg     from '../assets/wifi_logo.png'
import cabletvImg  from '../assets/cabletv_logo.png'
import musicImg    from '../assets/music_logo.png'
import chargingImg from '../assets/charging_logo.png'
import drinksImg   from '../assets/drinks_logo.png'

const amenities = [
  { img: wifiImg,     alt: 'Wi-Fi',     label: 'Free Wi-Fi',           desc: 'Stay connected throughout your visit', small: true },
  { img: cabletvImg,  alt: 'Cable TV',  label: 'Cable TV',             desc: 'Enjoy live TV while you relax',        small: true },
  { img: musicImg,    alt: 'Music',     label: 'Music',                desc: 'Great vibes, your soundtrack' },
  { img: chargingImg, alt: 'Charging',  label: 'Phone Charging',       desc: 'Keep your devices powered up',         small: true },
  { img: drinksImg,   alt: 'Drinks',    label: 'Complimentary Drinks', desc: 'Refresh with a complimentary beverage', small: true },
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
                <img src={a.img} alt={a.alt} className={a.small ? styles.iconImgSmall : styles.iconImg} />
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
