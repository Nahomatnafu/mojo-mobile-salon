import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Amenities from './components/Amenities'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Amenities />
        <Pricing />
        <Booking />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
