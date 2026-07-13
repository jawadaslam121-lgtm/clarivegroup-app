import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Software from './pages/Software'
import Bookkeeping from './pages/Bookkeeping'
import ClariveInvoice from './pages/ClariveInvoice'
import Taxation from './pages/Taxation'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="page">
      <div className="bg-mesh" />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<Software />} />
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/clariveinvoice" element={<ClariveInvoice />} />
            <Route path="/taxation" element={<Taxation />} />
            <Route path="/pricing" element={<Navigate to="/contact" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  )
}
