import { useState } from 'react'
import styles from './UpdatePricingPage.module.css'

const BIN_ID = '6a307f58da38895dfec68c14'
const API_KEY = import.meta.env.VITE_JSONBIN_KEY
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN

export default function UpdatePricingPage({ onBack }) {
  const [pin, setPin] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [cats, setCats] = useState([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handlePinSubmit = async (e) => {
    e.preventDefault()
    if (pin !== ADMIN_PIN) {
      setMessage('❌ Incorrect PIN')
      return
    }
    setAuthenticated(true)
    setMessage('')
    fetchPricing()
  }

  const fetchPricing = async () => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY }
      })
      const data = await res.json()
      setCats(data.record.categories || [])
    } catch (err) {
      setMessage('❌ Failed to load pricing')
    }
  }

  const updateService = (catIdx, srvIdx, field, value) => {
    const updated = [...cats]
    updated[catIdx].services[srvIdx][field] = value
    setCats(updated)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const payload = { categories: cats }
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: { 'X-Master-Key': API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setMessage('✅ Pricing saved! Updates live in seconds.')
      } else {
        setMessage('❌ Save failed')
      }
    } catch (err) {
      setMessage('❌ Network error')
    }
    setSaving(false)
  }

  if (!authenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.pinForm}>
          <h1>Update Pricing</h1>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={styles.pinInput}
            />
            <button type="submit" className={styles.submitBtn}>Login</button>
          </form>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backBtn}>← Back to Home</button>
      <h1>Update Pricing</h1>
      <div className={styles.editor}>
        {cats.map((cat, catIdx) => (
          <div key={cat.id} className={styles.category}>
            <h2>{cat.label}</h2>
            {cat.services.map((srv, srvIdx) => (
              <div key={srv.name} className={styles.service}>
                <input
                  type="text"
                  value={srv.name}
                  onChange={(e) => updateService(catIdx, srvIdx, 'name', e.target.value)}
                  className={styles.nameInput}
                />
                {srv.consult ? (
                  <span className={styles.consulTag}>Upon consultation</span>
                ) : (
                  <input
                    type="text"
                    value={srv.price || ''}
                    onChange={(e) => updateService(catIdx, srvIdx, 'price', e.target.value)}
                    className={styles.priceInput}
                    placeholder="e.g. $45+ or $100–$200"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={handleSave} disabled={saving} className={styles.saveBtn}>
          {saving ? 'Saving...' : 'Save & Publish'}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  )
}
