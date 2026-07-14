import { NavLink } from 'react-router-dom'
import Reveal from './Reveal'

function CTAButton({ to, label, className }) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} className={className}>
        {label}
      </a>
    )
  }
  return (
    <NavLink to={to} className={className}>
      {label}
    </NavLink>
  )
}

export default function CTASection({ title, text, primary, secondary }) {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div className="cta-banner glass">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-group">
              <CTAButton to={primary.to} label={primary.label} className="btn btn-primary btn-lg" />
              {secondary && <CTAButton to={secondary.to} label={secondary.label} className="btn btn-outline btn-lg" />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
