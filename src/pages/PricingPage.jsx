import bgImage from '../assets/hair_we_go_bg.png'
import Pricing from '../components/Pricing'
import styles from './PricingPage.module.css'

export default function PricingPage({ onBack }) {
  return (
    <div className={styles.page}>
      {/* Page hero header */}
      <div className={styles.pageHero}>
        <div className={styles.pageBg} style={{ backgroundImage: `url(${bgImage})` }} />
        <div className={styles.pageOverlay} />
        <div className={`${styles.pageHeroContent} container`}>
          <button onClick={onBack} className={styles.backBtn}>
            ← Back to Home
          </button>
          <h1 className={styles.pageTitle}>
            Service <span>Menu</span>
          </h1>
          <p className={styles.pageSub}>
            All services by appointment only &nbsp;·&nbsp; Prices may vary based on hair length &amp; complexity
          </p>
        </div>
      </div>

      {/* Full pricing content */}
      <div className={styles.pageBody}>
        <Pricing fullPage />
      </div>
    </div>
  )
}
