import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Badge from './shared/Badge'
import bgImageFallback from '../assets/hair_we_go_bg.png'
import heroPhotoFallback from '../assets/hero_picture_02.jpg'
import styles from './Hero.module.css'

const BIN_ID = '6a307f58da38895dfec68c14'
const API_KEY = import.meta.env.VITE_JSONBIN_KEY

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  const [heroPhoto, setHeroPhoto] = useState(heroPhotoFallback)
  const [bgImage, setBgImage]     = useState(bgImageFallback)

  useEffect(() => {
    if (!API_KEY) return
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { 'X-Master-Key': API_KEY }
    })
      .then(r => r.json())
      .then(data => {
        const imgs = data.record?.images || []
        const hero = imgs.find(i => i.id === 'hero_photo')
        const bg   = imgs.find(i => i.id === 'hero_bg')
        if (hero?.url) setHeroPhoto(hero.url)
        if (bg?.url)   setBgImage(bg.url)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} style={{ backgroundImage: `url(${bgImage})` }} />
      <div className={styles.overlay} />

      <div className={`${styles.content} container`}>
        {/* Left: text */}
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
            HAIR<br />
            WE GO<br />
            <span className={styles.headingAccent}>Express</span>
          </motion.h1>

          <motion.p variants={item} className={styles.tagline}>
            The Mobile Salon With a Real Personal Touch
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
            <span>Manhattan Ave, NY 10025</span>
            <span className={styles.dot}>·</span>
            <span>Mon–Sun &nbsp;9 AM – 9 PM</span>
            <span className={styles.dot}>·</span>
            <a href="tel:+19176401279" className={styles.phone}>917-640-1279</a>
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <img src={heroPhoto} alt="Inside the Hair We Go Express mobile salon" className={styles.heroPhoto} />
          <div className={styles.photoBadge}>
            <span>The Suite</span>
          </div>
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
