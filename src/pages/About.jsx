import { NavLink } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const values = [
  { icon: 'fa-solid fa-eye', title: 'Clarity', text: "Clear numbers, clear communication and clear next steps — no jargon, no surprises. It's in our name for a reason." },
  { icon: 'fa-solid fa-shield-halved', title: 'Compliance', text: 'Every filing, invoice and report is built to meet FBR and tax authority requirements, on time, every time.' },
  { icon: 'fa-solid fa-layer-group', title: 'Capability', text: 'Accounting software, bookkeeping, invoicing and taxation — handled as one connected service, not four separate vendors.' },
  { icon: 'fa-solid fa-handshake', title: 'Care', text: 'A dedicated accountant who knows your business, not a rotating queue of support tickets.' },
]

const visualCards = [
  { icon: 'fa-solid fa-cloud', label: 'Cloud Software' },
  { icon: 'fa-solid fa-book', label: 'Bookkeeping' },
  { icon: 'fa-solid fa-receipt', label: 'FBR Invoicing' },
  { icon: 'fa-solid fa-scale-balanced', label: 'Taxation' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumbLabel="About"
        crumbParent={null}
        title="About ClariveGroup"
        lead="We built ClariveGroup around a simple idea: businesses shouldn't have to choose between good software and good advice."
      />

      <section className="section">
        <GlowOrbs />
        <div className="container about-grid">
          <Reveal className="about-text">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">Software and expertise, working together</h2>
            <p>
              ClariveGroup brings together cloud accounting technology with real, qualified accountants and tax consultants — so you get accurate books,
              compliant tax filings, and FBR-ready digital invoicing, without having to manage it all yourself.
            </p>
            <p>
              Whether you&apos;re a sole trader just getting started or an established company looking to modernize your finance function, our team works
              alongside you to keep your business compliant, organized and ready to grow.
            </p>
            <div className="about-points">
              <div className="about-point">
                <i className="fa-solid fa-check-circle" /> Cloud software + human expertise, combined
              </div>
              <div className="about-point">
                <i className="fa-solid fa-check-circle" /> Dedicated accountants for every client
              </div>
              <div className="about-point">
                <i className="fa-solid fa-check-circle" /> Built for Pakistani businesses and FBR compliance
              </div>
            </div>
          </Reveal>
          <RevealGroup className="about-visual">
            {visualCards.map((c) => (
              <RevealItem key={c.label} className="glass glass-hover about-card">
                <i className={c.icon} />
                <span>{c.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <GlowOrbs variant="single" />
        <div className="container">
          <Reveal>
            <span className="section-eyebrow center">What We Stand For</span>
            <h2 className="section-title center">Our Values</h2>
          </Reveal>
          <RevealGroup className="why-grid">
            {values.map((v) => (
              <RevealItem key={v.title} className="glass glass-hover why-card">
                <div className="why-num grad-text">
                  <i className={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        title="Let's work together"
        text="Book a free consultation and see how ClariveGroup can bring clarity to your business finances."
        primary={{ to: '/contact', label: 'Get Free Consultation' }}
      />
    </>
  )
}
