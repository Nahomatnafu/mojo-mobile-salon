import styles from './StarRating.module.css'

export default function StarRating({ stars = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < stars ? styles.filled : styles.empty}>★</span>
      ))}
    </div>
  )
}
