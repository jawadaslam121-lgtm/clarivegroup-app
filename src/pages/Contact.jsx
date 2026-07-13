import { useState } from 'react'
import Reveal from '../components/Reveal'
import GlowOrbs from '../components/GlowOrbs'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [note, setNote] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New enquiry from ${form.name} via ClariveGroup website`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})\nPhone: ${form.phone}\nInterested in: ${form.interest}`)
    window.location.href = `mailto:jawadaslam121@gmail.com?subject=${subject}&body=${body}`
    setNote('Opening your email client to send this message...')
  }

  return (
    <>
      <PageHero crumbLabel="Contact" crumbParent={null} title="Let's Talk About Your Business" lead="Book a free consultation or ask us anything — we usually reply within one business day." />

      <section className="section">
        <GlowOrbs />
        <div className="container contact-grid">
          <Reveal>
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Reach Us Directly</h2>
            <p className="section-lead">Prefer to skip the form? Reach out to us directly using any of the details below.</p>

            <div className="contact-detail">
              <i className="fa-solid fa-envelope" />
              <a href="mailto:jawadaslam121@gmail.com">jawadaslam121@gmail.com</a>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-phone" />
              <a href="tel:+923074902927">+92 307 4902927</a>
            </div>
            <div className="contact-detail">
              <i className="fa-brands fa-linkedin" />
              <a href="https://www.linkedin.com/in/m-jawad-aslam-03b521185" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>

            <div className="notice-box glass" style={{ marginTop: 36 }}>
              <i className="fa-solid fa-circle-info" />
              <div>
                <h4>Which service are you interested in?</h4>
                <p>Let us know in the form whether you need cloud accounting software, bookkeeping, FBR digital invoicing, or taxation support — we&apos;ll route your enquiry to the right person.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                <select name="interest" value={form.interest} onChange={handleChange}>
                  <option value="">I&apos;m interested in&hellip;</option>
                  <option value="software">Cloud Accounting Software</option>
                  <option value="bookkeeping">Bookkeeping &amp; Accounting</option>
                  <option value="fbr">FBR Digital Invoicing (ClariveInvoice)</option>
                  <option value="tax">Taxation Services</option>
                </select>
              </div>
              <textarea name="message" rows="4" placeholder="Tell us about your business..." value={form.message} onChange={handleChange} required />
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
              <p className="form-note">{note}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
