import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'
import DashboardMock from '../components/DashboardMock'
import { fbrFaqItems } from '../data/faq'

const heroFeatures = [
  { icon: 'fa-solid fa-file-excel', title: 'Bulk Excel Import', text: 'Hundreds of invoices, one upload' },
  { icon: 'fa-solid fa-list-check', title: 'All 28 FBR Sale Types', text: 'Compound & fixed-per-unit rates' },
  { icon: 'fa-solid fa-qrcode', title: 'IRN + QR on Every Invoice', text: 'Instantly compliant PDF' },
  { icon: 'fa-solid fa-vial', title: 'Sandbox + Secure', text: 'Test before you go live' },
]

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

const tracks = [
  { icon: 'fa-solid fa-chart-line', title: 'Total Sales & Tax Collected', text: 'Live period totals across your workspace.' },
  { icon: 'fa-solid fa-circle-check', title: 'Submitted to FBR vs Errors', text: 'Accepted invoices and any that need fixing.' },
  { icon: 'fa-solid fa-chart-column', title: 'Revenue & Tax Trend', text: 'A rolling six-month view of both.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'Filing Deadline Countdown', text: 'Days remaining until your next filing is due.' },
]

const workflowSteps = [
  { num: '1', title: 'Download the Template', text: 'A standardized, FBR-ready Excel file with every required column.' },
  { num: '2', title: 'Upload in One Go', text: 'Hundreds of rows parsed into invoices in seconds.' },
  { num: '3', title: 'Batch Validation', text: 'Bad rows are flagged before anything ever touches FBR.' },
  { num: '4', title: 'One-Click Submit All', text: 'The batch is filed; FBR numbers are written back per invoice, rejections isolated.' },
]

const steps = [
  { num: '1', title: 'Consultation & Assessment', text: 'We review your business and confirm your FBR digital invoicing obligations.' },
  { num: '2', title: 'Integration & Testing', text: 'We connect your invoicing system to FBR and run test invoices to confirm everything works.' },
  { num: '3', title: 'Go Live', text: 'Your business starts issuing compliant, real-time digital invoices to FBR.' },
  { num: '4', title: 'Ongoing Compliance', text: 'We monitor regulatory changes and keep your integration compliant over time.' },
]

const builtFor = [
  { icon: 'fa-solid fa-briefcase', title: 'Corporates & SMEs', text: 'Single-branch or multi-branch, across every turnover band.' },
  { icon: 'fa-solid fa-shop', title: 'Retailers & 3rd-Schedule', text: 'POS-style volume with retail-price and 3rd-Schedule handling.' },
  { icon: 'fa-solid fa-truck-ramp-box', title: 'Manufacturers & Importers', text: 'Steel, cement, petroleum and CNG scenarios, done right.' },
  { icon: 'fa-solid fa-users-gear', title: 'Accounting Firms', text: 'Run many clients under one roof, each on its own NTN.' },
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

        <div className="hero-feature-grid">
          {heroFeatures.map((f) => (
            <div key={f.title} className="feature-pill">
              <i className={f.icon} />
              <span>
                <strong style={{ display: 'block', fontSize: '.88rem' }}>{f.title}</strong>
                <span style={{ display: 'block', fontSize: '.78rem', color: 'var(--text-faint)', fontWeight: 500 }}>{f.text}</span>
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <GlowOrbs />
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
            <span className="section-eyebrow center">Command Center</span>
            <h2 className="section-title center">Your Whole Compliance Picture, at a Glance</h2>
            <p className="section-lead center">Sample sandbox workspace — figures shown are illustrative.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dash-showcase">
              <DashboardMock />
            </div>
          </Reveal>
          <RevealGroup className="value-grid" style={{ marginTop: 40 }}>
            {tracks.map((t) => (
              <RevealItem key={t.title} className="glass glass-hover value-card">
                <div className="value-icon">
                  <i className={t.icon} />
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Flagship Workflow</span>
            <h2 className="section-title center">Bulk In. Validate Everything. Submit With One Click.</h2>
            <p className="section-lead center">One button submits the whole batch — another imports it.</p>
          </Reveal>
          <RevealGroup className="steps-grid">
            {workflowSteps.map((s) => (
              <RevealItem key={s.num} className="glass glass-hover step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
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

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Built For</span>
            <h2 className="section-title center">One Engine, Every Kind of Filer</h2>
          </Reveal>
          <RevealGroup className="value-grid">
            {builtFor.map((b) => (
              <RevealItem key={b.title} className="glass glass-hover value-card">
                <div className="value-icon">
                  <i className={b.icon} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15}>
            <div className="notice-box info glass" style={{ marginTop: 26 }}>
              <i className="fa-solid fa-database" />
              <div>
                <h4>Multi-Tenant by Design</h4>
                <p>
                  Every client files under their own NTN, with fully isolated data and role-based team access — the same architecture ClariveGroup uses to
                  serve its own practice.
                </p>
              </div>
            </div>
          </Reveal>
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
