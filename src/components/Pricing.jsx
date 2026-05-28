import SectionWrapper from './shared/SectionWrapper'
import Badge from './shared/Badge'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-heading">Pricing &amp; <span>Rentals</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Fair, straightforward pricing with special discounts for our most valued clients.
          </p>
        </div>

        <div className={styles.cards}>
          {/* Day Rate Card */}
          <div className={styles.cardPrimary}>
            <div className={styles.cardPrimaryBadge}>
              <Badge variant="white">Day Rate</Badge>
            </div>
            <div className={styles.price}>
              <span className={styles.dollar}>$</span>
              <span className={styles.amount}>525</span>
              <span className={styles.per}>/day</span>
            </div>
            <p className={styles.priceNote}>7 hours included</p>
            <ul className={styles.features}>
              <li>✓ Full mobile salon unit</li>
              <li>✓ Driver included</li>
              <li>✓ + $12/mile with driver</li>
              <li>✓ All onboard amenities</li>
              <li>✓ Licensed &amp; insured</li>
            </ul>
            <div className={styles.deposit}>
              <strong>$25 non-refundable deposit</strong> required at booking
            </div>
            <a href="#booking" className={styles.bookBtn}>Book Now</a>
          </div>

          {/* Discounts Card */}
          <div className={styles.cardDiscounts}>
            <span className="section-label">Special Discounts</span>
            <h3 className={styles.discountTitle}>Save on Your Visit</h3>
            <p className={styles.discountSub}>
              We believe in rewarding loyalty and community. Here&rsquo;s how you can save:
            </p>

            <div className={styles.discountItem}>
              <div className={styles.discountIcon}>👴</div>
              <div>
                <div className={styles.discountLabel}>Senior Discount</div>
                <div className={styles.discountPct}>25% off</div>
                <div className={styles.discountDesc}>Available for all senior clients. Just let us know when booking.</div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.discountItem}>
              <div className={styles.discountIcon}>📱</div>
              <div>
                <div className={styles.discountLabel}>Social Media Review</div>
                <div className={styles.discountPct}>5% off</div>
                <div className={styles.discountDesc}>Leave a rating or comment about your experience and save on your next visit.</div>
              </div>
            </div>

            <div className={styles.instagramCta}>
              <a
                href="https://www.instagram.com/mojomobilesuites"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igLink}
              >
                📸 Follow @mojomobilesuites
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
