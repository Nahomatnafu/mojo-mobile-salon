import { useState, useEffect } from 'react'
import SectionWrapper from './shared/SectionWrapper'
import styles from './Pricing.module.css'

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRrimx_d5gOuCBh0ZLsnU7bWvy44YPVTdNizTFGhK055hqYy7lWcyjuMu0nXFMyVFquqsVeAA-TKBgQ/pub?output=csv'

const FALLBACK_CATS = [
  { id:'hair', label:'Hair Services', services:[
    {name:'Hair Cut', price:'$35–$100'},
    {name:'Razor Cut', price:'$75–$100'},
    {name:'Bang Trim', price:'$20'},
    {name:'Hair Wash', price:'$45+'},
    {name:'Blowout', price:'$45–$75'},
    {name:'Updo', price:'$85–$150'},
  ]},
  { id:'color', label:'Hair Color', services:[
    {name:'Single Process (touch up to full color)', price:'$85–$150'},
    {name:'Highlights Special Effects (partial)', price:'$12 / foil'},
    {name:'Highlights or Lowlights – Half Head', price:'$165–$185'},
    {name:'Highlights or Lowlights – Full Head', price:'$195–$250'},
    {name:'Fashion Vivid Hair Colors', price:'$220–$300'},
    {name:'Balayage or Ombré – Half', price:'$165–$185'},
    {name:'Balayage or Ombré – Full', price:'$200–$250'},
    {name:'Air Touch Highlights – Half', price:'$200–$250'},
    {name:'Air Touch Highlights – Full', price:'$350–$400'},
    {name:'Air Touch Balayage – Half', price:'$220–$275'},
    {name:'Air Touch Balayage – Full', price:'$350–$450'},
    {name:'Color Gloss', price:'$75–$120'},
    {name:'Toner', price:'$45–$75'},
    {name:'Double Process', price:'$160–$250'},
    {name:'Corrective Color', price:null, consult:true},
  ]},
  { id:'treatment', label:'Hair Treatment', services:[
    {name:'Moroccan Oil Deep Treatment', price:'$45–$65'},
    {name:'Olaplex Treatment', price:'$45–$75'},
  ]},
  { id:'retexture', label:'Retexture', services:[
    {name:'Body Waves', price:'$120–$200'},
    {name:'Keratin Treatment or Brazilian Blowout', price:'$275–$400'},
  ]},
  { id:'bridal', label:'Bridal', services:[
    {name:'Bridal Hair / Make Up', price:null, consult:true},
    {name:'Make Up', price:'$100–$175'},
  ]},
  { id:'shaving', label:'Shaving', services:[
    {name:'Royal Shave', price:'$40–$50'},
    {name:'Shape Up', price:'$25–$35'},
    {name:'Beard Trim', price:'$10–$25'},
  ]},
  { id:'waxing', label:'Threading', services:[
    {name:'Eyebrows Master Shape', price:'$20–$25'},
    {name:'Almond Treatment (Nurture Eyebrows)', price:'$10'},
    {name:'Chin', price:'$15'},
    {name:'Lip', price:'$10–$15'},
    {name:'Eyebrows + Lip', price:'$35–$40'},
    {name:'Eyebrows + Lip + Chin', price:'$45–$65'},
    {name:'Full Face', price:'$55–$70'},
  ]},
  { id:'lashes', label:'Eyelash Extensions', note:'Available in Short, Medium, Long & Mix', services:[
    {name:'Short Lashes – Full Set', price:'$65–$130'},
    {name:'Medium Lashes – Full Set', price:'$75–$140'},
    {name:'Long Lashes – Full Set', price:'$85–$165'},
    {name:'Mix of Lashes (3 Options)', price:'$120–$200'},
    {name:'Refill of Lashes', price:'$45–$75'},
    {name:'Eyelash Tint', price:'$35–$45'},
  ]},
  { id:'massage', label:'Massage', services:[
    {name:'Scalp Massage', price:'$25–$35'},
  ]},
]

/** Parse a CSV string into an array of row objects keyed by header names. */
function parseCSV(text) {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const values = []
    let cur = '', inQuotes = false
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes }
      else if (ch === ',' && !inQuotes) { values.push(cur.trim()); cur = '' }
      else { cur += ch }
    }
    values.push(cur.trim())
    return Object.fromEntries(headers.map((h, i) => [h, (values[i] ?? '').replace(/^"|"$/g, '').trim()]))
  })
}

/** Group flat CSV rows into the nested category structure the UI expects. */
function buildCats(rows) {
  const map = {}, order = []
  rows.forEach(row => {
    if (!row.category_id || !row.service_name) return
    if (!map[row.category_id]) {
      map[row.category_id] = { id: row.category_id, label: row.category_label, services: [] }
      order.push(row.category_id)
    }
    map[row.category_id].services.push({
      name: row.service_name,
      price: row.price || null,
      consult: row.consult?.toLowerCase() === 'true',
    })
  })
  return order.map(id => map[id])
}

export default function Pricing({ fullPage = false }) {
  const [cats, setCats] = useState(FALLBACK_CATS)
  const [active, setActive] = useState('hair')

  useEffect(() => {
    fetch(SHEET_URL)
      .then(r => r.text())
      .then(text => {
        const rows = parseCSV(text)
        const parsed = buildCats(rows)
        if (parsed.length > 0) {
          setCats(parsed)
          setActive(parsed[0].id)
        }
      })
      .catch(() => { /* network error — keep fallback */ })
  }, [])

  const cat = cats.find(c => c.id === active) ?? cats[0]

  const inner = (
    <div className="container">
      {!fullPage && (
        <div className={styles.header}>
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-heading">Service <span>Menu</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            All services are by appointment only. Prices may vary based on hair length and complexity.
          </p>
        </div>
      )}

      <div className={styles.notices}>
        <div className={styles.notice}><strong>Non-Refundable Deposit</strong> required at booking</div>
        <div className={styles.notice}><strong>25% off</strong> for senior clients</div>
        <div className={styles.notice}><strong>5% off</strong> your next visit for leaving a review</div>
      </div>

      <div className={styles.tabBar} role="tablist">
        {cats.map(c => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            className={`${styles.tab} ${active === c.id ? styles.tabActive : ''}`}
            onClick={() => setActive(c.id)}
          >
            <span className={styles.tabLabel}>{c.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        {cat.note && <p className={styles.panelNote}>{cat.note}</p>}
        <div className={styles.rows}>
          {cat.services.map(s => (
            <div key={s.name} className={styles.row}>
              <span className={styles.rowName}>{s.name}</span>
              {s.consult
                ? <span className={styles.consult}>Upon consultation</span>
                : <span className={styles.rowPrice}>{s.price}</span>
              }
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rentalCard}>
        <h3 className={styles.rentalTitle}>Mobile Unit Rental</h3>
        <div className={styles.rentalGrid}>
          <div className={styles.rentalItem}><span className={styles.rentalKey}>Daily Rate</span><strong className={styles.rentalVal}>$525 / 7 hrs</strong></div>
          <div className={styles.rentalItem}><span className={styles.rentalKey}>Mileage</span><strong className={styles.rentalVal}>+$12 / mile (with driver)</strong></div>
          <div className={styles.rentalItem}><span className={styles.rentalKey}>Deposit</span><strong className={styles.rentalVal}>Non-Refundable Deposit</strong></div>
        </div>
        <a href="#booking" className={styles.rentalBtn}>Book the Mobile Unit →</a>
      </div>
    </div>
  )

  if (fullPage) return inner

  return <SectionWrapper id="pricing">{inner}</SectionWrapper>
}
