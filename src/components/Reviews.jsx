import { motion } from 'framer-motion'
import SectionWrapper from './shared/SectionWrapper'
import StarRating from './shared/StarRating'
import InstagramIcon from './shared/InstagramIcon'
import styles from './Reviews.module.css'

const testimonials = [
  {
    name: 'Tamika R.',
    stars: 5,
    text: 'The most personal salon experience I\'ve ever had. Hair We Go Express came right to my block for my daughter\'s graduation party. Five stars isn\'t enough!',
    detail: 'Party Event Pull-Up',
  },
  {
    name: 'Marcus D.',
    stars: 5,
    text: 'Incredible service from start to finish. The mobile suite was immaculate — Wi-Fi, drinks, good music. Felt like a luxury spa on wheels. Highly recommend!',
    detail: 'Full Salon Services',
  },
  {
    name: 'Sandra L.',
    stars: 5,
    text: 'As a senior, the 25% discount is a blessing. The stylists are professional, punctual, and the work is absolutely beautiful. My new go-to salon!',
    detail: 'Senior Client',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Reviews() {
  return (
    <SectionWrapper id="reviews">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Client Love</span>
          <h2 className="section-heading">What Our <span>Clients</span> Say</h2>
          <div className={styles.discountBanner}>
            Leave a review after your visit and receive{' '}
            <strong>5% off</strong> your next appointment!
          </div>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} className={styles.card} variants={cardAnim}>
              <StarRating stars={t.stars} />
              <blockquote className={styles.quote}>&ldquo;{t.text}&rdquo;</blockquote>
              <div className={styles.meta}>
                <span className={styles.avatar}>{t.name[0]}</span>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.detail}>{t.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.igCta}>
          <p>Share your experience and tag us!</p>
          <a
            href="https://www.instagram.com/hairwegoexpress?igsh=MXhhNXN3MXV2bnlv"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-outline ${styles.igBtn}`}
          >
            <InstagramIcon size={18} />
            @hairwegoexpress
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
