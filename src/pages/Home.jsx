import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import HeroMockWindow from '../components/HeroMockWindow'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'

const valueProps = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Free Onboarding & Training', text: 'Every new client gets guided setup and hands-on training so your team is confident from day one.' },
  { icon: 'fa-solid fa-headset', title: 'Dedicated Support', text: 'A real accountant and support team are on hand to answer questions — not just a ticket queue.' },
  { icon: 'fa-solid fa-lock', title: 'Secure & Reliable', text: 'Your financial data is encrypted, backed up, and hosted on secure cloud infrastructure.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FBR-Ready Invoicing', text: 'Stay compliant with real-time digital invoicing built for FBR reporting requirements.' },
]

const services = [
  { icon: 'fa-solid fa-cloud-arrow-up', title: 'Cloud Accounting Software', text: 'Manage sales, purchases, inventory, banking and reporting from one secure, always-on platform.', to: '/software', cta: 'Explore Software' },
  { icon: 'fa-solid fa-book', title: 'Bookkeeping & Accounting', text: 'Day-to-day bookkeeping, bank reconciliation, payroll and financial statements by qualified accountants.', to: '/bookkeeping', cta: 'Learn More' },
  { icon: 'fa-solid fa-circle-check', title: 'ClariveInvoice (FBR)', text: 'Compliant, real-time digital invoicing that integrates directly with FBR requirements.', to: '/clariveinvoice', cta: 'Learn More' },
  { icon: 'fa-solid fa-scale-balanced', title: 'Taxation Services', text: 'Income tax, sales tax/GST, withholding tax filing, tax planning and audit support.', to: '/taxation', cta: 'Learn More' },
]

const whyUs = [
  { num: '01', title: 'Fully Accessible', text: 'Anywhere, anytime. Our platform is cloud-based, so your books are accessible around the clock, from any device.' },
  { num: '02', title: 'Complete Functionality', text: 'From trading and sales to inventory and production, every module you need is built in — no bolt-ons required.' },
  { num: '03', title: 'FBR & Tax Authority Ready', text: 'Our digital invoicing integrates with FBR requirements, enabling real-time, compliant reporting of your sales data.' },
  { num: '04', title: "An Accountant's Delight", text: 'Designed with qualified accountants and tax consultants, so the workflows match how finance teams actually work.' },
]

const faqPreview = [
  { q: "Is ClariveGroup's accounting software cloud-based, or do I need to install anything?", a: "ClariveGroup is fully cloud-based — there's nothing to install. You can access your accounts from any browser, on any device, with no downtime for updates." },
  { q: 'Do you offer a free trial or consultation?', a: 'Yes. We offer a free trial of our software and a free initial consultation for our bookkeeping, taxation and FBR invoicing services — no credit card required.' },
  { q: 'What is FBR digital invoicing, and do I need it?', a: 'FBR digital invoicing enables real-time, compliant reporting of your sales data in line with FBR requirements. Visit our ClariveInvoice page for full details.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <GlowOrbs variant="hero" />
        <div className="container hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow-badge">
                <span className="dot" /> Cloud Accounting &middot; Bookkeeping &middot; FBR Invoicing &middot; Taxation
              </span>
              <h1>
                Smarter Accounting.
                <br />
                <span className="grad-text">Stronger Business.</span>
              </h1>
              <p className="hero-sub">
                ClariveGroup brings your books, invoicing, tax filing and FBR digital compliance into one place — backed by real accountants, not just software.
              </p>
              <ul className="hero-points">
                <li>
                  <i className="fa-solid fa-circle-check" /> Cloud accounting software for growing businesses
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Professional bookkeeping &amp; accounting services
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> FBR digital invoicing made simple, via ClariveInvoice
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Complete taxation &amp; compliance support
                </li>
              </ul>
              <div className="hero-cta">
                <NavLink to="/contact" className="btn btn-primary btn-lg">
                  Get Free Consultation <i className="fa-solid fa-arrow-right" />
                </NavLink>
                <a href="#services" className="btn btn-outline btn-lg">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
          <HeroMockWindow />
        </div>
      </section>

      <section className="quick-strip">
        <div className="container quick-strip-inner">
          <div className="quick-item">
            <i className="fa-solid fa-cloud" /> 100% Cloud-Based
          </div>
          <div className="quick-item">
            <i className="fa-solid fa-file-shield" /> FBR Compliant Invoicing
          </div>
          <div className="quick-item">
            <i className="fa-solid fa-users-gear" /> Real Accountants, Real Support
          </div>
          <div className="quick-item">
            <i className="fa-solid fa-scale-balanced" /> Full Tax &amp; Compliance Coverage
          </div>
        </div>
      </section>

      <section className="section">
        <GlowOrbs />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Paper-Free. Stress-Free. FBR-Compliant.</span>
            <h2 className="section-title center">Power up your business with an all-in-one accounting partner</h2>
            <p className="section-lead center">
              Access the tools and expertise your business needs — from day-to-day bookkeeping to real-time FBR digital invoicing and full tax compliance.
            </p>
          </Reveal>
          <RevealGroup className="value-grid">
            {valueProps.map((v) => (
              <RevealItem key={v.title} className="glass glass-hover value-card">
                <div className="value-icon">
                  <i className={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">What We Do</span>
            <h2 className="section-title center">Our Services</h2>
            <p className="section-lead center">Four core service lines, one accounting partner.</p>
          </Reveal>
          <RevealGroup className="services-grid">
            {services.map((s) => (
              <RevealItem key={s.title} className="glass glass-hover service-card featured">
                <div className="service-icon">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <NavLink to={s.to} className="card-link">
                  {s.cta} <i className="fa-solid fa-arrow-right" />
                </NavLink>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <GlowOrbs variant="single" />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">The Clarive Difference</span>
            <h2 className="section-title center">Accounting Done Right</h2>
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

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Got Questions?</span>
            <h2 className="section-title center">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqPreview} />
          </Reveal>
          <p className="center" style={{ marginTop: 32 }}>
            <NavLink to="/faq" className="btn btn-outline">
              View All FAQs
            </NavLink>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to simplify your accounting?"
        text="Clarity at every step — talk to our team and find the right combination of software and services for your business."
        primary={{ to: '/contact', label: 'Get Free Consultation' }}
      />
    </>
  )
}
