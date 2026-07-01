import { useState, useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import UpdatePricingPage from './pages/UpdatePricingPage'
import UpdatePhotosPage from './pages/UpdatePhotosPage'

const getPageFromPath = () => {
  switch (window.location.pathname) {
    case '/pricing':
      return 'pricing'
    case '/updatepricing':
      return 'updatepricing'
    case '/updatephotos':
      return 'updatephotos'
    default:
      return 'home'
  }
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath)

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((nextPage, path) => {
    setPage(nextPage)
    if (window.location.pathname !== path) window.history.pushState({}, '', path)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goHome = useCallback(() => {
    navigate('home', '/')
  }, [navigate])

  const goPricing = useCallback(() => {
    navigate('pricing', '/pricing')
  }, [navigate])

  return (
    <>
      {page !== 'updatepricing' && page !== 'updatephotos' && <Navbar page={page} onGoHome={goHome} onGoPricing={goPricing} />}
      <main>
        {page === 'home'          && <HomePage />}
        {page === 'pricing'       && <PricingPage onBack={goHome} />}
        {page === 'updatepricing' && <UpdatePricingPage onBack={goHome} />}
        {page === 'updatephotos'  && <UpdatePhotosPage onBack={goHome} />}
      </main>
      {page !== 'updatepricing' && page !== 'updatephotos' && <Footer />}
    </>
  )
}
