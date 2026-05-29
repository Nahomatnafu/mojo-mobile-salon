import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'

export default function App() {
  const [page, setPage] = useState('home')

  const goHome = useCallback(() => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goPricing = useCallback(() => {
    setPage('pricing')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Navbar page={page} onGoHome={goHome} onGoPricing={goPricing} />
      <main>
        {page === 'home'    && <HomePage />}
        {page === 'pricing' && <PricingPage onBack={goHome} />}
      </main>
      <Footer />
    </>
  )
}
