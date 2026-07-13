import { NavLink } from 'react-router-dom'
import Reveal from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { faqCategories } from '../data/faq'

export default function FAQ() {
  return (
    <>
      <PageHero
        crumbLabel="FAQs"
        crumbParent={null}
        title="Frequently Asked Questions"
        lead={
          <>
            Answers to the questions we hear most about our software, bookkeeping, FBR invoicing and taxation services. Can&apos;t find what you need?{' '}
            <NavLink to="/contact" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Get in touch
            </NavLink>
            .
          </>
        }
      />

      <section className="section">
        <GlowOrbs />
        <div className="container">
          {faqCategories.map((cat, i) => (
            <div key={cat.category}>
              <Reveal delay={i * 0.05}>
                <h3 className="faq-category-title">{cat.category}</h3>
              </Reveal>
              <Reveal delay={i * 0.05 + 0.05}>
                <FAQAccordion items={cat.items} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        text="Our team is happy to walk you through anything that's not covered here."
        primary={{ to: '/contact', label: 'Contact Us' }}
      />
    </>
  )
}
