import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const coverage = [
  { icon: 'fa-solid fa-file-invoice', title: 'Income Tax Filing', text: 'Preparation and filing of income tax returns for individuals, sole proprietors and companies.' },
  { icon: 'fa-solid fa-percent', title: 'Sales Tax / GST Filing', text: 'Monthly and periodic sales tax / GST return preparation and filing.' },
  { icon: 'fa-solid fa-hand-holding-dollar', title: 'Withholding Tax', text: 'Calculation, deduction and filing of withholding tax obligations.' },
  { icon: 'fa-solid fa-chart-line', title: 'Tax Planning & Advisory', text: 'Proactive planning to help you stay compliant while managing your tax position efficiently.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Notices / Audit Support', text: 'Preparation and representation support in the event of a tax audit or FBR notice.' },
  { icon: 'fa-solid fa-id-card', title: 'FBR Registration & Compliance', text: 'Registration with FBR and ongoing compliance management, including digital invoicing obligations.' },
]

const whyUs = [
  { num: '01', title: 'Experienced Consultants', text: 'Our tax team stays current on FBR regulations so your filings are accurate and on time.' },
  { num: '02', title: 'Deadline Management', text: "We track your filing deadlines and reminders, so nothing slips through the cracks." },
  { num: '03', title: 'Integrated With Your Books', text: 'Works seamlessly alongside our bookkeeping and cloud accounting services for a single source of truth.' },
  { num: '04', title: 'Clear Communication', text: 'No jargon — we explain your tax position in plain language, every step of the way.' },
]

export default function Taxation() {
  return (
    <>
      <PageHero
        crumbParent="Services"
        crumbLabel="Taxation Services"
        title="Taxation Services"
        lead="Income tax, sales tax, withholding tax and everything in between — handled by consultants who keep up with FBR regulations so you don't have to."
        preTitle={
          <motion.div className="subbrand-plain" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <strong>
              Clarive<span className="logo-accent">TAX</span>
            </strong>
            <small>Taxation Suite</small>
          </motion.div>
        }
      >
        <div className="hero-cta" style={{ marginTop: 24 }}>
          <NavLink to="/contact" className="btn btn-primary btn-lg">
            Request a Quote
          </NavLink>
          <NavLink to="/clariveinvoice" className="btn btn-outline btn-lg">
            FBR Digital Invoicing
          </NavLink>
        </div>
      </PageHero>

      <section className="section">
        <GlowOrbs />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">What We Cover</span>
            <h2 className="section-title center">Complete Tax &amp; Compliance Support</h2>
            <p className="section-lead center">From routine filings to audit support, our tax consultants handle the details and the deadlines.</p>
          </Reveal>
          <RevealGroup className="services-grid">
            {coverage.map((c) => (
              <RevealItem key={c.title} className="glass glass-hover service-card">
                <div className="service-icon small">
                  <i className={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <GlowOrbs variant="single" />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Why ClariveGroup</span>
            <h2 className="section-title center">Tax Support You Can Rely On</h2>
          </Reveal>
          <RevealGroup className="why-grid">
            {whyUs.map((w) => (
              <RevealItem key={w.num} className="glass glass-hover why-card">
                <div className="why-num grad-text">{w.num}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        title="Talk to a tax consultant"
        text="Book a free consultation and get clarity on your tax and FBR compliance obligations."
        primary={{ to: '/contact', label: 'Request a Quote' }}
        secondary={{ to: '/clariveinvoice', label: 'FBR Digital Invoicing' }}
      />
    </>
  )
}
