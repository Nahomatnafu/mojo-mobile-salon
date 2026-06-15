import { useState, useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import UpdatePricingPage from './pages/UpdatePricingPage'

export default function App() {
  const [page, setPage] = useState('home')

  // Handle URL-based navigation (for /updatepricing)
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/updatepricing') {
      setPage('updatepricing')
    }
  }, [])

  const goHome = useCallback(() => {
    setPage('home')
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goPricing = useCallback(() => {
    setPage('pricing')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      {page !== 'updatepricing' && <Navbar page={page} onGoHome={goHome} onGoPricing={goPricing} />}
      <main>
        {page === 'home'          && <HomePage />}
        {page === 'pricing'       && <PricingPage onBack={goHome} />}
        {page === 'updatepricing' && <UpdatePricingPage onBack={goHome} />}
      </main>
      {page !== 'updatepricing' && <Footer />}
    </>
  )
}
