import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'
import DashboardMock from '../components/DashboardMock'
import { fbrFaqItems } from '../data/faq'

const benefits = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Submit Invoices Instantly to FBR',
    text: 'Send your sales invoices directly to the Federal Board of Revenue in real-time with a single click — fast, reliable, and fully automated.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Stay Fully Compliant',
    text: 'Our solution is 100% aligned with the latest FBR regulations, ensuring you never miss a compliance requirement or deadline.',
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Secure API Communication',
    text: 'All invoice data is transmitted over encrypted API channels with authentication and validation layers, ensuring complete security and integrity of your submissions.',
  },
  {
    icon: 'fa-solid fa-plug',
    title: 'Easy Integration',
    text: 'Connect effortlessly with your existing accounting or ERP software — no disruption, just seamless functionality.',
  },
]

const steps = [
  { num: '1', title: 'Consultation & Assessment', text: 'We review your business and confirm your FBR digital invoicing obligations.' },
  { num: '2', title: 'Integration & Testing', text: 'We connect your invoicing system to FBR and run test invoices to confirm everything works.' },
  { num: '3', title: 'Go Live', text: 'Your business starts issuing compliant, real-time digital invoices to FBR.' },
  { num: '4', title: 'Ongoing Compliance', text: 'We monitor regulatory changes and keep your integration compliant over time.' },
]

export default function ClariveInvoice() {
  return (
    <>
      <PageHero
        crumbParent="Services"
        crumbLabel="ClariveInvoice"
        title="FBR Digital Invoicing"
        lead="Effortless, Secure, and Fully Compliant Integration with FBR."
        sloganTag="GO DIGITAL STAY-AHEAD"
        preTitle={
          <motion.div className="subbrand-badge" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <span className="subbrand-icon">
              <i className="fa-solid fa-circle-check" />
            </span>
            <span className="subbrand-text">
              <strong>
                Clarive<span className="logo-accent">Invoice</span>
              </strong>
              <small>Invoicing Suite</small>
            </span>
          </motion.div>
        }
        visual={
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}>
            <DashboardMock compact />
            <p className="pricing-note" style={{ marginTop: 16 }}>
              Illustrative preview — figures shown are sample data.
            </p>
          </motion.div>
        }
      >
        <div className="trust-row">
          <span className="trust-pill">
            <i className="fa-solid fa-landmark" /> FBR Integration
          </span>
          <span className="trust-pill">
            <i className="fa-solid fa-server" /> PRAL-Aligned
          </span>
          <span className="trust-pill">
            <i className="fa-solid fa-receipt" /> Real-Time Digital Invoicing
          </span>
        </div>

        <div className="hero-cta" style={{ marginTop: 10 }}>
          <NavLink to="/contact" className="btn btn-primary btn-lg">
            Get Started <i className="fa-solid fa-arrow-right" />
          </NavLink>
          <a href="#fbr-faq" className="btn btn-outline btn-lg">
            FBR Invoicing FAQs
          </a>
        </div>
      </PageHero>

      <section className="section">
        <GlowOrbs />
        <div className="container">
          <Reveal>
            <div className="notice-box glass">
              <i className="fa-solid fa-triangle-exclamation" />
              <div>
                <h4>FBR Mandate on Digital Invoicing</h4>
                <p>
                  Whereas all corporate taxpayers have been mandated, vide S.R.O. 709(I)/2025 dated 22.04.2025, to integrate their invoicing software with the
                  Federal Board of Revenue (FBR) for the issuance of real-time Digital Invoices, with effect from 01.06.2025, in terms of Chapter XIV of the
                  Sales Tax Rules, 2006.
                </p>
                <p style={{ marginTop: 10 }}>
                  <strong>Not sure if this applies to your business?</strong> Talk to our team and we&apos;ll confirm your exact obligations and deadlines.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Why ClariveInvoice</span>
            <h2 className="section-title center">Compliant Invoicing, Without the Complexity</h2>
            <p className="section-lead center">We handle the technical integration so you can focus on running your business.</p>
          </Reveal>
          <RevealGroup className="services-grid">
            {benefits.map((b) => (
              <RevealItem key={b.title} className="glass glass-hover service-card featured">
                <div className="service-icon">
                  <i className={b.icon} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <GlowOrbs variant="single" />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">How It Works</span>
            <h2 className="section-title center">From Assessment to Go-Live</h2>
          </Reveal>
          <RevealGroup className="steps-grid">
            {steps.map((s) => (
              <RevealItem key={s.num} className="glass glass-hover step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section" id="fbr-faq">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">FBR Invoicing FAQs</span>
            <h2 className="section-title center">Common Questions About FBR Digital Invoicing</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={fbrFaqItems} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Get your business FBR-ready"
        text="Book a free consultation and we'll walk you through exactly what's needed for compliant digital invoicing."
        primary={{ to: '/contact', label: 'Get Started' }}
        secondary={{ to: '/taxation', label: 'Explore Taxation Services' }}
      />
    </>
  )
}
