import Header from './components/Header'
import OfferBanner from './components/OfferBanner'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import GoogleReviews from './components/GoogleReviews'
import TrustStrip from './components/TrustStrip'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import WhatsIncluded from './components/WhatsIncluded'
import WhyPiweb from './components/WhyPiweb'
import Process from './components/Process'
import Pricing from './components/Pricing'
import ProblemSolution from './components/ProblemSolution'
import Testimonials from './components/Testimonials'
import Industries from './components/Industries'
import FAQ from './components/FAQ'
import MobileStickyBar from './components/MobileStickyBar'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <OfferBanner />
      <Header />
      <main>
        <Hero />
        <LeadForm />
        <GoogleReviews />
        <TrustStrip />
        <Portfolio />
        <Services />
        <WhyPiweb />
        <ProblemSolution />
        <WhatsIncluded />
        <Process />
        <Pricing />
        <Testimonials />
        <Industries />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyBar />
      <LeadModal />
    </div>
  )
}
