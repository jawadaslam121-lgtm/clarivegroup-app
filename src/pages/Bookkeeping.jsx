import { NavLink } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const included = [
  { icon: 'fa-solid fa-pen-to-square', title: 'Daily Bookkeeping', text: 'Accurate recording of sales, purchases, expenses and receipts as they happen.' },
  { icon: 'fa-solid fa-building-columns', title: 'Bank Reconciliation', text: 'Regular reconciliation of bank and cash accounts to keep your records accurate.' },
  { icon: 'fa-solid fa-money-check-dollar', title: 'Payroll Processing', text: 'Salary calculations, deductions and payslips processed accurately and on time.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Accounts Payable & Receivable', text: "Tracking of what you owe and what's owed to you, so cash flow stays predictable." },
  { icon: 'fa-solid fa-chart-pie', title: 'Financial Statements', text: 'Profit & loss, balance sheet and cash flow statements prepared on a regular schedule.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month-End Close', text: 'A clean, reconciled close every month, so you always know where your business stands.' },
]

const steps = [
  { num: '1', title: 'Free Consultation', text: 'Tell us about your business and current bookkeeping setup.' },
  { num: '2', title: 'Setup & Migration', text: 'We set up your books and migrate historical data if needed.' },
  { num: '3', title: 'Ongoing Bookkeeping', text: 'Your dedicated accountant keeps your books up to date on a regular schedule.' },
  { num: '4', title: 'Monthly Reports', text: 'Receive clear financial statements and check in with your accountant whenever you like.' },
]

const whoFor = [
  { icon: 'fa-solid fa-user', title: 'Sole Traders', text: 'Simple, affordable bookkeeping so you can focus on your craft, not your spreadsheets.' },
  { icon: 'fa-solid fa-store', title: 'Small Businesses', text: 'Reliable monthly bookkeeping and reporting as your transaction volume grows.' },
  { icon: 'fa-solid fa-building', title: 'Growing Companies', text: 'Dedicated support for multi-location, multi-currency or multi-entity bookkeeping needs.' },
]

export default function Bookkeeping() {
  return (
    <>
      <PageHero
        crumbParent="Services"
        crumbLabel="Bookkeeping & Accounting"
        title="Bookkeeping & Accounting Services"
        lead="Hand your books to a dedicated accountant. We keep your records accurate, your bank reconciled, and your financial statements ready whenever you need them."
      >
        <div className="hero-cta" style={{ marginTop: 24 }}>
          <NavLink to="/contact" className="btn btn-primary btn-lg">
            Request a Quote
          </NavLink>
          <a href="#included" className="btn btn-outline btn-lg">
            See What's Included
          </a>
        </div>
      </PageHero>

      <section className="section" id="included">
        <GlowOrbs />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">What's Included</span>
            <h2 className="section-title center">Bookkeeping That Keeps Up With Your Business</h2>
            <p className="section-lead center">From day-to-day entries to month-end close, our team handles the details so you can focus on running your business.</p>
          </Reveal>
          <RevealGroup className="services-grid">
            {included.map((m) => (
              <RevealItem key={m.title} className="glass glass-hover service-card">
                <div className="service-icon small">
                  <i className={m.icon} />
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">How It Works</span>
            <h2 className="section-title center">Getting Started Is Simple</h2>
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
        <GlowOrbs variant="single" />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Who It's For</span>
            <h2 className="section-title center">Built for Businesses at Every Stage</h2>
          </Reveal>
          <RevealGroup className="value-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {whoFor.map((w) => (
              <RevealItem key={w.title} className="glass glass-hover value-card">
                <div className="value-icon">
                  <i className={w.icon} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        title="Let a real accountant handle your books"
        text="Book a free consultation and we'll recommend the right level of support for your business."
        primary={{ to: '/contact', label: 'Request a Quote' }}
      />
    </>
  )
}
