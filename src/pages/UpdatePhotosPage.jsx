import { useState, useRef } from 'react'
import styles from './UpdatePhotosPage.module.css'

const BIN_ID = '6a307f58da38895dfec68c14'
const API_KEY = import.meta.env.VITE_JSONBIN_KEY
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

const IMAGE_SLOTS = [
  { id: 'hero_photo', label: 'Hero Photo', section: 'Hero Section' },
  { id: 'hero_bg',    label: 'Hero Background', section: 'Hero Section' },
  { id: 'gallery_01', label: 'Gallery Photo 1', section: 'Gallery' },
  { id: 'gallery_02', label: 'Gallery Photo 2', section: 'Gallery' },
  { id: 'gallery_03', label: 'Gallery Photo 3', section: 'Gallery' },
  { id: 'gallery_04', label: 'Gallery Photo 4', section: 'Gallery' },
  { id: 'gallery_05', label: 'Gallery Photo 5', section: 'Gallery' },
  { id: 'gallery_06', label: 'Gallery Photo 6', section: 'Gallery' },
  { id: 'gallery_07', label: 'Gallery Photo 7', section: 'Gallery' },
  { id: 'gallery_08', label: 'Gallery Photo 8', section: 'Gallery' },
  { id: 'gallery_09', label: 'Gallery Photo 9', section: 'Gallery' },
]

const SECTIONS = [...new Set(IMAGE_SLOTS.map(s => s.section))]

export default function UpdatePhotosPage({ onBack }) {
  const [pin, setPin] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const fileRefs = useRef({})

  const handlePinSubmit = async (e) => {
    e.preventDefault()
    if (pin !== ADMIN_PIN) { setMessage('Incorrect PIN. Please try again.'); return }
    setAuthenticated(true)
    setMessage('')
    fetchImages()
  }

  const fetchImages = async () => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY }
      })
      const data = await res.json()
      const stored = data.record?.images || []
      setImages(IMAGE_SLOTS.map(slot => ({
        ...slot,
        url: stored.find(s => s.id === slot.id)?.url || ''
      })))
    } catch {
      setImages(IMAGE_SLOTS.map(s => ({ ...s, url: '' })))
    }
  }

  const handleFileChange = async (e, slotId) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(slotId)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', UPLOAD_PRESET)
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      )
      const data = await res.json()
      if (data.secure_url) {
        setImages(prev => prev.map(img =>
          img.id === slotId ? { ...img, url: data.secure_url } : img
        ))
      } else {
        setMessage('Upload failed. Please try again.')
      }
    } catch {
      setMessage('Upload failed. Check your connection.')
    }
    setUploading(null)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY }
      })
      const existing = await getRes.json()
      const putRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: { 'X-Master-Key': API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...existing.record, images })
      })
      setMessage(putRes.ok ? 'Photos saved! Updates are live in seconds.' : 'Save failed. Please try again.')
    } catch {
      setMessage('Network error. Check your connection.')
    }
    setSaving(false)
  }

  if (!authenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.pinForm}>
          <h1>Update Photos</h1>
          <form onSubmit={handlePinSubmit}>
            <input type="password" placeholder="Enter PIN" value={pin}
              onChange={e => setPin(e.target.value)} className={styles.pinInput} />
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
      <h1>Update Photos</h1>
      {SECTIONS.map(section => (
        <div key={section} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section}</h2>
          <div className={styles.grid}>
            {images.filter(img => img.section === section).map(img => (
              <div key={img.id} className={styles.card}>
                <div className={styles.preview}>
                  {img.url
                    ? <img src={img.url} alt={img.label} className={styles.previewImg} />
                    : <div className={styles.placeholder}><span>No custom image</span><span className={styles.placeholderSub}>Site shows default</span></div>
                  }
                  {uploading === img.id && <div className={styles.uploadingOverlay}>Uploading...</div>}
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>{img.label}</span>
                  <input type="file" accept="image/jpeg,image/png,image/webp"
                    ref={el => fileRefs.current[img.id] = el}
                    onChange={e => handleFileChange(e, img.id)}
                    style={{ display: 'none' }} />
                  <button className={styles.uploadBtn}
                    onClick={() => fileRefs.current[img.id]?.click()}
                    disabled={uploading === img.id}>
                    {uploading === img.id ? 'Uploading...' : img.url ? 'Replace' : 'Upload'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={styles.actions}>
        <button onClick={handleSave} disabled={saving} className={styles.saveBtn}>
          {saving ? 'Saving...' : 'Save & Publish'}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  )
}
