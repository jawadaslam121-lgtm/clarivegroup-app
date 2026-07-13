import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const values = [
  { icon: 'fa-solid fa-cloud', title: 'Fully Accessible', text: 'Anywhere, anytime — your books are online and available to you 24/7 from any device.' },
  { icon: 'fa-solid fa-layer-group', title: 'Complete Functionality', text: 'Comprehensive modules for trading, sales, assembly and production operations, built in from day one.' },
  { icon: 'fa-solid fa-plug', title: 'Easy Integration', text: 'Connects with e-commerce platforms and FBR digital invoicing for real-time, compliant reporting.' },
  { icon: 'fa-solid fa-user-tie', title: "An Accountant's Delight", text: 'Designed with experienced accountants, so workflows match how finance teams actually operate.' },
]

const modules = [
  { icon: 'fa-solid fa-file-invoice', title: 'Sales & Invoicing', text: 'Create custom sales invoices, manage receipts, orders and customer balances with ease.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchases', text: 'Create and manage purchase orders, supplier bills and payments, and track liabilities.' },
  { icon: 'fa-solid fa-boxes-stacked', title: 'Inventory', text: 'Manage stock and non-stock products, bundles, multi-units and varying tax rates.' },
  { icon: 'fa-solid fa-building-columns', title: 'Bank & Reconciliation', text: 'Central management of all your bank and cash ledgers, with fast reconciliation tools.' },
  { icon: 'fa-solid fa-coins', title: 'Multi-Currency', text: 'Track finances in multiple currencies with automatic exchange rate calculations.' },
  { icon: 'fa-solid fa-map-location-dot', title: 'Multi-Location', text: 'Manage warehouses and branches across multiple locations from a single account.' },
  { icon: 'fa-solid fa-users', title: 'Multi-User Roles & Rights', text: 'Highly flexible user rights and roles with dynamic, granular permission management.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Projects & Budgets', text: 'Create and track project-based budgets, from small jobs to large-scale operations.' },
  { icon: 'fa-solid fa-industry', title: 'Assembly & Production', text: 'Track manufacturing and assembly processes, from raw materials to finished goods.' },
  { icon: 'fa-solid fa-chart-column', title: 'Reports & Analytics', text: 'Get the full picture with a wide range of ready-made financial and analytical reports.' },
  { icon: 'fa-solid fa-paperclip', title: 'Attachments', text: 'Attach supporting documents directly to transactions for a complete audit trail.' },
  { icon: 'fa-solid fa-plug-circle-bolt', title: 'API & Integrations', text: 'Connect with third-party tools and FBR digital invoicing via a documented API.' },
]

export default function Software() {
  return (
    <>
      <PageHero
        crumbParent="Services"
        crumbLabel="Cloud Accounting Software"
        title="Cloud Accounting Software"
        lead="Everything your business needs to manage sales, purchases, inventory and reporting — built for sole traders, growing SMEs and accounting teams alike."
        preTitle={
          <motion.div className="subbrand-plain" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <strong>
              Clarive<span className="logo-accent">ERP</span>
            </strong>
            <small>Accounting Suite</small>
          </motion.div>
        }
      >
        <div className="hero-cta" style={{ marginTop: 24 }}>
          <NavLink to="/contact" className="btn btn-primary btn-lg">
            Start Free Trial
          </NavLink>
          <a href="#modules" className="btn btn-outline btn-lg">
            Explore Features
          </a>
        </div>
      </PageHero>

      <section className="section">
        <GlowOrbs />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Paper-Free, Hassle-Free Accounting</span>
            <h2 className="section-title center">Power up your business with leading cloud accounting</h2>
            <p className="section-lead center">
              Access hundreds of tools, each designed with ease of use in mind — the user-friendly gateway to a stress-free accounting workflow.
            </p>
          </Reveal>
          <RevealGroup className="value-grid">
            {values.map((v) => (
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

      <section className="section" id="modules">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">Our Features</span>
            <h2 className="section-title center">Modules Built for Every Part of Your Business</h2>
            <p className="section-lead center">Mix and match the modules your business needs, and scale up as you grow.</p>
          </Reveal>
          <RevealGroup className="services-grid">
            {modules.map((m) => (
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

      <CTASection
        title="See ClariveGroup software in action"
        text="Start a free trial — no credit card required — or book a walkthrough with our team."
        primary={{ to: '/contact', label: 'Start Free Trial' }}
      />
    </>
  )
}
