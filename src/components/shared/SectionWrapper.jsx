import { motion } from 'framer-motion'
import styles from './SectionWrapper.module.css'

export default function SectionWrapper({ id, children, className = '', light = false }) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${light ? styles.light : ''} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
