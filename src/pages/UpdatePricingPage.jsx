import { useState } from 'react'
import styles from './UpdatePricingPage.module.css'

const BIN_ID = '6a307f58da38895dfec68c14'
const API_KEY = import.meta.env.VITE_JSONBIN_KEY
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN

export default function UpdatePricingPage({ onBack }) {
  const [pin, setPin] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [hasChanges, setHasChanges] = useState(false)

  const handlePinSubmit = async (e) => {
    e.preventDefault()
    if (pin !== ADMIN_PIN) {
      setMessage('Incorrect PIN. Please try again.')
      return
    }
    setAuthenticated(true)
    setMessage('')
    fetchPricing()
  }

  const fetchPricing = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY }
      })
      const data = await res.json()
      setCats(data.record.categories || [])
      setHasChanges(false)
    } catch (err) {
      setMessage('Failed to load pricing. Check your connection.')
    }
    setLoading(false)
  }

  const updateService = (catIdx, srvIdx, field, value) => {
    setCats(prev => prev.map((cat, currentCatIdx) => {
      if (currentCatIdx !== catIdx) return cat
      return {
        ...cat,
        services: cat.services.map((srv, currentSrvIdx) => (
          currentSrvIdx === srvIdx ? { ...srv, [field]: value } : srv
        ))
      }
    }))
    setHasChanges(true)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY }
      })
      const existing = await getRes.json()
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: { 'X-Master-Key': API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...existing.record, categories: cats })
      })
      if (res.ok) {
        setMessage('Pricing saved! Updates are live in seconds.')
        setHasChanges(false)
      } else {
        setMessage('Save failed. Please try again.')
      }
    } catch (err) {
      setMessage('Network error. Check your connection.')
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
      <p className={styles.helper}>Edit service names or prices, then use Save &amp; Publish when you are done.</p>
      {loading ? <p className={styles.message}>Loading current pricing...</p> : (
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
      )}
      <div className={styles.actions}>
        <button onClick={handleSave} disabled={saving || loading || !hasChanges} className={styles.saveBtn}>
          {saving ? 'Saving...' : hasChanges ? 'Save & Publish' : 'Saved'}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  )
}
