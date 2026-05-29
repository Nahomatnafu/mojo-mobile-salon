import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import InstagramIcon from './shared/InstagramIcon'
import styles from './Gallery.module.css'

import photo01 from '../assets/photo_01.jpg'
import photo04 from '../assets/photo_04.jpg'
import photo05 from '../assets/photo_05.jpg'
import photo06 from '../assets/photo_06.jpg'
import photo07 from '../assets/photo_07.jpg'
import photo08 from '../assets/photo_08.jpg'
import photo09 from '../assets/photo_09.jpg'
import photo10 from '../assets/photo_10.jpg'
import photo11 from '../assets/photo_11.jpg'

const photos = [
  { src: photo01, alt: 'Mojo Mobile Suites Salon — interior view 1' },
  { src: photo04, alt: 'Mojo Mobile Suites Salon — interior view 4' },
  { src: photo05, alt: 'Mojo Mobile Suites Salon — interior view 5' },
  { src: photo06, alt: 'Mojo Mobile Suites Salon — interior view 6' },
  { src: photo07, alt: 'Mojo Mobile Suites Salon — interior view 7' },
  { src: photo08, alt: 'Mojo Mobile Suites Salon — interior view 8' },
  { src: photo09, alt: 'Mojo Mobile Suites Salon — interior view 9' },
  { src: photo10, alt: 'Mojo Mobile Suites Salon — interior view 10' },
  { src: photo11, alt: 'Mojo Mobile Suites Salon — interior view 11' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const tile = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // index of open photo

  const openLightbox  = (i) => setLightbox(i)
  const closeLightbox = ()  => setLightbox(null)
  const prev = (e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }
  const next = (e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }

  return (
    <SectionWrapper id="gallery">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Inside the Suite</span>
          <h2 className="section-heading">
            Our Mobile <span>Space</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Take a look inside the Mojo Mobile Suites Salon — a fully equipped, luxurious
            mobile salon experience that comes directly to you.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {photos.map((photo, i) => (
            <motion.button
              key={i}
              className={styles.tile}
              variants={tile}
              onClick={() => openLightbox(i)}
              aria-label={`View photo ${i + 1} of ${photos.length}`}
            >
              <img src={photo.src} alt={photo.alt} className={styles.img} loading="lazy" />
              <div className={styles.overlay} />
            </motion.button>
          ))}
        </motion.div>

        <div className={styles.cta}>
          <a
            href="https://www.instagram.com/mojomobilesuites"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-outline ${styles.igBtn}`}
          >
            <InstagramIcon size={18} />
            See More on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxInner}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{    scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">✕</button>
              <button className={`${styles.lbArrow} ${styles.lbPrev}`} onClick={prev} aria-label="Previous">‹</button>
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className={styles.lbImage}
              />
              <button className={`${styles.lbArrow} ${styles.lbNext}`} onClick={next} aria-label="Next">›</button>
              <p className={styles.lbCaption}>{lightbox + 1} / {photos.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
